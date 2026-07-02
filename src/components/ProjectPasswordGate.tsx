"use client";

import { useEffect, useState, type FormEvent } from "react";

const SESSION_KEY = "project-access-granted";

export default function ProjectPasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setUnlocked(true);
    }
    setChecked(true);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_PROJECT_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!checked) {
    return null;
  }

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FAF9F6] text-[#1a1a1a] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col items-center text-center"
      >
        <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#b8955a] mb-4">
          Private Portfolio
        </p>
        <h1 className="font-cormorant text-2xl md:text-3xl font-light mb-8">
          Enter Password
        </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          autoFocus
          className="w-full font-cormorant text-center text-lg bg-transparent border-b border-[#1a1a1a]/30 focus:border-[#b8955a] outline-none py-3 mb-6 transition-colors duration-300"
        />
        {error && (
          <p className="font-cormorant text-sm text-red-700 mb-6">
            Incorrect password.
          </p>
        )}
        <button
          type="submit"
          className="font-cormorant text-xs tracking-[0.35em] uppercase border border-[#1a1a1a] px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
        >
          Enter
        </button>
      </form>
    </main>
  );
}
