"use client";

import { useState } from "react";

type Props = {
  planId: string;
  isFull: boolean;
};

export default function JoinButton({ planId, isFull }: Props) {
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleJoin() {
    setLoading(true);
    setError(null);

    try {
      // For demo, use the demo user
      const res = await fetch("/api/plans/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId,
          userId: "demo", // In production, this would come from auth
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to join");
      } else {
        setJoined(true);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLeave() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/plans/leave", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId,
          userId: "demo",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to leave");
      } else {
        setJoined(false);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (joined) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
          <span className="material-symbols-outlined">check_circle</span>
          <span className="font-semibold text-sm">You&apos;re in!</span>
        </div>
        <button
          onClick={handleLeave}
          disabled={loading}
          className="text-sm text-slate-500 hover:text-red-500 transition-colors disabled:opacity-50"
        >
          {loading ? "Leaving..." : "Leave this plan"}
        </button>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <button
        onClick={handleJoin}
        disabled={isFull || loading}
        className={`w-full py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
          isFull
            ? "bg-slate-200 dark:bg-white/10 text-slate-500 cursor-not-allowed"
            : "bg-primary text-white hover:opacity-90"
        }`}
      >
        {loading ? (
          <>
            Joining...
            <span className="material-symbols-outlined text-base animate-spin">
              progress_activity
            </span>
          </>
        ) : isFull ? (
          "This plan is full"
        ) : (
          <>
            Join this plan
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </>
        )}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
