"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import {
  MessageSquarePlus,
  Plus,
  Download,
  Upload,
  Trash2,
  ImagePlus,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useFeedbackNotes, type FeedbackNote } from "./useFeedbackNotes";

const MAX_IMAGE_DIMENSION = 1000;
const NOTE_WIDTH = 240;

function downscaleImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Failed to load image"));
      img.onload = () => {
        let { width, height } = img;
        if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
          if (width >= height) {
            height = Math.round((height / width) * MAX_IMAGE_DIMENSION);
            width = MAX_IMAGE_DIMENSION;
          } else {
            width = Math.round((width / height) * MAX_IMAGE_DIMENSION);
            height = MAX_IMAGE_DIMENSION;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas context unavailable"));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

function NoteCard({
  note,
  onUpdate,
  onRemove,
}: {
  note: FeedbackNote;
  onUpdate: (id: string, patch: Partial<FeedbackNote>) => void;
  onRemove: (id: string) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [pending, setPending] = useState(false);
  const dragControls = useDragControls();
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const handleFile = useCallback(
    async (file: File | null | undefined) => {
      if (!file || !file.type.startsWith("image/")) return;
      setPending(true);
      try {
        const dataUrl = await downscaleImage(file);
        onUpdate(note.id, { image: dataUrl });
      } finally {
        setPending(false);
      }
    },
    [note.id, onUpdate]
  );

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragListener={false}
      dragControls={dragControls}
      dragElastic={0}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onDragEnd={(_, info) => {
        dragX.set(0);
        dragY.set(0);
        onUpdate(note.id, {
          x: note.x + info.offset.x,
          y: note.y + info.offset.y,
        });
      }}
      style={{
        position: "absolute",
        left: note.x,
        top: note.y,
        width: NOTE_WIDTH,
        x: dragX,
        y: dragY,
      }}
      className="pointer-events-auto flex flex-col shadow-lg bg-[#FDF6D8] border border-black/10"
    >
      <NoteCardInner
        note={note}
        onUpdate={onUpdate}
        onRemove={onRemove}
        fileInputRef={fileInputRef}
        handleFile={handleFile}
        pending={pending}
        dragControls={dragControls}
      />
    </motion.div>
  );
}

// Split out so the drag handle can start the parent motion.div's drag via
// framer-motion's `dragControls`, keeping the textarea/buttons non-draggable.
function NoteCardInner({
  note,
  onUpdate,
  onRemove,
  fileInputRef,
  handleFile,
  pending,
  dragControls,
}: {
  note: FeedbackNote;
  onUpdate: (id: string, patch: Partial<FeedbackNote>) => void;
  onRemove: (id: string) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleFile: (file: File | null | undefined) => void;
  pending: boolean;
  dragControls: ReturnType<typeof useDragControls>;
}) {
  return (
    <>
      <div
        className="h-6 flex items-center justify-center cursor-grab active:cursor-grabbing bg-[#b8955a]/30"
        style={{ touchAction: "none" }}
        onPointerDown={(e) => dragControls.start(e)}
      >
        <div className="w-8 h-1 rounded-full bg-black/30" />
      </div>

      <textarea
        value={note.text}
        onChange={(e) => onUpdate(note.id, { text: e.target.value })}
        onPaste={(e) => {
          const file = Array.from(e.clipboardData.files).find((f) =>
            f.type.startsWith("image/")
          );
          if (file) {
            e.preventDefault();
            handleFile(file);
          }
        }}
        placeholder="Leave a note…"
        rows={3}
        className="w-full resize-none bg-transparent outline-none px-3 py-2 font-inter text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/40"
      />

      {note.image && (
        <div className="relative px-3 pb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={note.image}
            alt="Feedback attachment"
            className="w-full rounded-sm object-cover max-h-32"
          />
          <button
            type="button"
            aria-label="Remove image"
            onClick={() => onUpdate(note.id, { image: undefined })}
            className="absolute top-1 right-4 bg-black/60 text-white rounded-full p-0.5 hover:bg-black/80"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <div className="flex items-center justify-between px-2 py-1.5 border-t border-black/10">
        <button
          type="button"
          aria-label="Attach image"
          disabled={pending}
          onClick={() => fileInputRef.current?.click()}
          className="p-1.5 text-[#1a1a1a]/60 hover:text-[#b8955a] transition-colors disabled:opacity-40"
        >
          <ImagePlus size={16} />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
        <button
          type="button"
          aria-label="Delete note"
          onClick={() => onRemove(note.id)}
          className="p-1.5 text-[#1a1a1a]/60 hover:text-red-700 transition-colors"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </>
  );
}

export default function FeedbackNotes() {
  const [portalMounted, setPortalMounted] = useState(false);
  const [feedbackMode, setFeedbackMode] = useState(false);
  const [page, setPage] = useState("");
  const [docHeight, setDocHeight] = useState(0);
  const [importError, setImportError] = useState<string | null>(null);
  const importInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPortalMounted(true);
    setPage(window.location.pathname);
  }, []);

  const {
    mounted,
    notes,
    allNotes,
    addNote,
    updateNote,
    removeNote,
    clearAll,
    importNotes,
    quotaError,
  } = useFeedbackNotes(page);

  useEffect(() => {
    if (!portalMounted) return;
    const update = () => setDocHeight(document.documentElement.scrollHeight);
    update();
    window.addEventListener("resize", update);
    const interval = window.setInterval(update, 1000);
    return () => {
      window.removeEventListener("resize", update);
      window.clearInterval(interval);
    };
  }, [portalMounted, notes.length]);

  const handleAddNote = useCallback(() => {
    const x = Math.max(16, window.innerWidth / 2 - NOTE_WIDTH / 2);
    const y = window.scrollY + window.innerHeight / 2;
    addNote(x, y);
    setFeedbackMode(true);
  }, [addNote]);

  const handleExport = useCallback(() => {
    const payload = {
      exportedAt: new Date().toISOString(),
      siteUrl: window.location.origin,
      notes: allNotes,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `feedback-${date}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, [allNotes]);

  const handleClearAll = useCallback(() => {
    if (notes.length === 0) return;
    if (window.confirm("Delete all feedback notes on this page? This cannot be undone.")) {
      clearAll();
    }
  }, [notes.length, clearAll]);

  const handleImportFile = useCallback(
    async (file: File | null | undefined) => {
      if (!file) return;
      setImportError(null);
      try {
        const text = await file.text();
        const parsed = JSON.parse(text);
        const incoming = Array.isArray(parsed) ? parsed : parsed?.notes;
        if (!Array.isArray(incoming)) {
          throw new Error("Missing notes array");
        }
        const valid = incoming.every(
          (n) =>
            n &&
            typeof n.id === "string" &&
            typeof n.page === "string" &&
            typeof n.x === "number" &&
            typeof n.y === "number" &&
            typeof n.text === "string"
        );
        if (!valid) {
          throw new Error("Unrecognized note format");
        }
        importNotes(incoming);
        setFeedbackMode(true);
      } catch {
        setImportError("Couldn't read that file — export a valid feedback JSON first.");
      }
    },
    [importNotes]
  );

  if (!portalMounted || !mounted) return null;

  return createPortal(
    <div className="print:hidden">
      {feedbackMode && (
        <div
          className="absolute inset-x-0 top-0 pointer-events-none z-[200]"
          style={{ height: docHeight }}
        >
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} onUpdate={updateNote} onRemove={removeNote} />
          ))}
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-[210] flex flex-col items-end gap-3">
        {feedbackMode && (
          <div className="flex flex-col items-end gap-2 mb-1 font-inter text-xs">
            {quotaError && (
              <p className="bg-red-700 text-white px-3 py-1.5 rounded-sm shadow max-w-[220px] text-right">
                Storage full — export and clear notes to free space.
              </p>
            )}
            {importError && (
              <p className="bg-red-700 text-white px-3 py-1.5 rounded-sm shadow max-w-[220px] text-right">
                {importError}
              </p>
            )}
            <span className="bg-[#1a1a1a] text-white/70 px-2 py-1 rounded-sm">
              {notes.length} note{notes.length === 1 ? "" : "s"} on this page
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleAddNote}
                className="flex items-center gap-1.5 bg-[#1a1a1a] text-white px-3 py-2 rounded-sm hover:bg-[#b8955a] transition-colors"
              >
                <Plus size={14} /> Add note
              </button>
              <button
                type="button"
                onClick={handleExport}
                className="flex items-center gap-1.5 bg-[#1a1a1a] text-white px-3 py-2 rounded-sm hover:bg-[#b8955a] transition-colors"
              >
                <Download size={14} /> Export
              </button>
              <button
                type="button"
                onClick={() => importInputRef.current?.click()}
                className="flex items-center gap-1.5 bg-[#1a1a1a] text-white px-3 py-2 rounded-sm hover:bg-[#b8955a] transition-colors"
              >
                <Upload size={14} /> Import
              </button>
              <input
                ref={importInputRef}
                type="file"
                accept="application/json"
                className="hidden"
                onChange={(e) => {
                  handleImportFile(e.target.files?.[0]);
                  e.target.value = "";
                }}
              />
              <button
                type="button"
                onClick={handleClearAll}
                className="flex items-center gap-1.5 bg-[#1a1a1a] text-white px-3 py-2 rounded-sm hover:bg-red-700 transition-colors"
              >
                <Trash2 size={14} /> Clear
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          aria-label={feedbackMode ? "Close feedback mode" : "Leave feedback"}
          onClick={() => setFeedbackMode((v) => !v)}
          className={cn(
            "flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-colors",
            feedbackMode
              ? "bg-[#b8955a] text-white"
              : "bg-[#1a1a1a] text-white hover:bg-[#b8955a]"
          )}
        >
          {feedbackMode ? <X size={22} /> : <MessageSquarePlus size={22} />}
        </button>
      </div>
    </div>,
    document.body
  );
}
