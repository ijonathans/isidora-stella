"use client";

import { useCallback, useEffect, useState } from "react";

export interface FeedbackNote {
  id: string;
  page: string;
  x: number;
  y: number;
  text: string;
  image?: string;
  createdAt: number;
}

const STORAGE_KEY = "feedback-notes-v1";

function readAll(): FeedbackNote[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useFeedbackNotes(page: string) {
  const [mounted, setMounted] = useState(false);
  const [allNotes, setAllNotes] = useState<FeedbackNote[]>([]);
  const [quotaError, setQuotaError] = useState(false);

  useEffect(() => {
    setAllNotes(readAll());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allNotes));
      setQuotaError(false);
    } catch {
      setQuotaError(true);
    }
  }, [allNotes, mounted]);

  const notes = allNotes.filter((n) => n.page === page);

  const addNote = useCallback(
    (x: number, y: number) => {
      const note: FeedbackNote = {
        id: crypto.randomUUID(),
        page,
        x,
        y,
        text: "",
        createdAt: Date.now(),
      };
      setAllNotes((prev) => [...prev, note]);
      return note.id;
    },
    [page]
  );

  const updateNote = useCallback((id: string, patch: Partial<FeedbackNote>) => {
    setAllNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...patch } : n)));
  }, []);

  const removeNote = useCallback((id: string) => {
    setAllNotes((prev) => prev.filter((n) => n.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setAllNotes((prev) => prev.filter((n) => n.page !== page));
  }, [page]);

  const importNotes = useCallback((incoming: FeedbackNote[]) => {
    setAllNotes((prev) => {
      const byId = new Map(prev.map((n) => [n.id, n]));
      for (const note of incoming) {
        byId.set(note.id, note);
      }
      return Array.from(byId.values());
    });
  }, []);

  return {
    mounted,
    notes,
    allNotes,
    addNote,
    updateNote,
    removeNote,
    clearAll,
    importNotes,
    quotaError,
  };
}
