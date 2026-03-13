export const dynamic = "force-dynamic";

import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import JoinButton from "./JoinButton";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const plan = await prisma.plan.findUnique({ where: { id } });
  return {
    title: plan ? `${plan.title} | Withly` : "Plan Not Found | Withly",
    description: plan?.description || "Discover social plans happening in your city.",
  };
}

export default async function PlanDetailPage({ params }: Props) {
  const { id } = await params;

  const plan = await prisma.plan.findUnique({
    where: { id },
    include: {
      host: { select: { id: true, name: true, photo: true, bio: true } },
      participants: {
        include: {
          user: { select: { id: true, name: true, photo: true } },
        },
        orderBy: { joinedAt: "asc" },
      },
    },
  });

  if (!plan) {
    notFound();
  }

  const isFull = plan.participants.length >= plan.maxParticipants;

  // Format date
  const dateObj = new Date(plan.dateTime);
  const now = new Date();
  const isToday =
    dateObj.getDate() === now.getDate() &&
    dateObj.getMonth() === now.getMonth() &&
    dateObj.getFullYear() === now.getFullYear();

  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const isTomorrow =
    dateObj.getDate() === tomorrow.getDate() &&
    dateObj.getMonth() === tomorrow.getMonth() &&
    dateObj.getFullYear() === tomorrow.getFullYear();

  const dayLabel = isToday
    ? "Today"
    : isTomorrow
    ? "Tomorrow"
    : dateObj.toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" });

  const timeLabel = dateObj.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const categoryColors: Record<string, string> = {
    Coffee: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    Walks: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    Food: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
    Events: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    Fitness: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "Explore City": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  };

  return (
    <main className="pt-28 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-primary transition-colors mb-8"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Back to Plans
        </Link>

        {/* Plan header */}
        <div className="mb-8">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
              categoryColors[plan.category] || "bg-slate-100 text-slate-800"
            }`}
          >
            {plan.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-display mb-4">{plan.title}</h1>
          {plan.description && (
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {plan.description}
            </p>
          )}
        </div>

        {/* Details card */}
        <div className="bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                location_on
              </span>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Location</p>
                <p className="font-semibold">{plan.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                schedule
              </span>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">When</p>
                <p className="font-semibold">
                  {dayLabel} at {timeLabel}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl mt-0.5">group</span>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Spots</p>
                <p className="font-semibold">
                  {plan.participants.length} / {plan.maxParticipants} filled
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl mt-0.5">person</span>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Hosted by</p>
                <p className="font-semibold">{plan.host.name}</p>
              </div>
            </div>
          </div>

          {/* Spots progress bar */}
          <div className="mt-6">
            <div className="w-full bg-slate-100 dark:bg-white/10 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  isFull ? "bg-red-400" : "bg-primary"
                }`}
                style={{
                  width: `${(plan.participants.length / plan.maxParticipants) * 100}%`,
                }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {isFull
                ? "This plan is full"
                : `${plan.maxParticipants - plan.participants.length} spot${
                    plan.maxParticipants - plan.participants.length !== 1 ? "s" : ""
                  } remaining`}
            </p>
          </div>
        </div>

        {/* Join button */}
        <JoinButton planId={plan.id} isFull={isFull} />

        {/* Participants */}
        <div className="mt-10">
          <h2 className="text-2xl font-display mb-6">
            {plan.participants.length} {plan.participants.length === 1 ? "person" : "people"} going
          </h2>
          {plan.participants.length > 0 ? (
            <div className="space-y-3">
              {plan.participants.map((p) => (
                <div
                  key={p.user.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                    {p.user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{p.user.name}</p>
                    <p className="text-xs text-slate-500">
                      Joined {new Date(p.joinedAt).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-sm">
              No one has joined yet. Be the first!
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
