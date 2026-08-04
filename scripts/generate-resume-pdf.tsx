import path from "node:path";
import fs from "node:fs";
import React from "react";
import { pdf } from "@react-pdf/renderer";

const publicDir = path.resolve(__dirname, "../public");

// react-pdf on Node resolves a leading "/" as filesystem-root, not as a public/ web path.
// Rewrite "/fonts/..." and "/images/..." to absolute paths under public/ before the document
// module (and its Font.register calls) are evaluated.
// react-pdf's image/font loaders call path.resolve("/fonts/x.ttf") or path.resolve("/images/x.png"),
// which on Windows resolves against the current drive root (e.g. "D:\fonts\x.ttf"), not cwd.
// Intercept path.resolve so those two root-relative prefixes resolve into public/ instead.
const originalResolve = path.resolve;
path.resolve = function patched(...segments: string[]) {
  if (segments.length === 1 && (segments[0].startsWith("/fonts/") || segments[0].startsWith("/images/"))) {
    return path.join(publicDir, segments[0]);
  }
  return originalResolve(...segments);
};

function resolveTarget(target: unknown): unknown {
  if (typeof target === "string" && (target.startsWith("/fonts/") || target.startsWith("/images/"))) {
    return path.join(publicDir, target);
  }
  return target;
}

const originalReadFile = fs.promises.readFile;
fs.promises.readFile = function patched(target: unknown, ...rest: unknown[]) {
  // @ts-expect-error
  return originalReadFile(resolveTarget(target), ...rest);
};

const originalReadFileCb = fs.readFile;
// @ts-expect-error - patching for local asset resolution during PDF generation only
fs.readFile = function patched(target: unknown, ...rest: unknown[]) {
  // @ts-expect-error
  return originalReadFileCb(resolveTarget(target), ...rest);
};

async function main() {
  const { default: ResumeDocument } = await import("../src/components/resume/ResumeDocument");
  const doc = React.createElement(ResumeDocument);
  const instance = pdf(doc);
  const buffer = await instance.toBuffer();
  const chunks: Buffer[] = [];
  for await (const chunk of buffer as unknown as AsyncIterable<Buffer>) {
    chunks.push(chunk as Buffer);
  }
  const out = path.join(publicDir, "resume.pdf");
  const data = Buffer.concat(chunks);
  fs.writeFileSync(out, data);
  console.log("Wrote", out, data.length, "bytes");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
