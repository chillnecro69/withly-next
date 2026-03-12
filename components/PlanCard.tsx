"use client";

import Link from "next/link";

interface Participant {
  id: string;
  name: string;
  photo: string | null;
}

interface PlanCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  dateTime: string | Date;
  maxParticipants: number;
  participantsCount: number;
  hostName: string;
  hostPhoto: string | null;
  participants: Participant[];
  isFull: boolean;
  isToday: boolean;
}

const PlanCard = ({
  id,
  title,
  category,
  location,
  dateTime,
  maxParticipants,
  participantsCount,
  hostName,
  hostPhoto,
  participants,
  isFull,
  isToday,
}: PlanCardProps) => {
  const dateObj = new Date(dateTime);
  const timeStr = dateObj.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const categoryColors: Record<string, string> = {
    Coffee: "badge-coffee",
    Walks: "badge-walks",
    Food: "badge-food",
    Events: "badge-events",
    Fitness: "badge-fitness",
    "Explore City": "badge-explore",
  };

  const spotsRemaining = maxParticipants - participantsCount;

  return (
    <Link
      href={`/plans/${id}`}
      className="group bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/10 p-5 plan-card animate-fade-in"
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <span className={`badge ${categoryColors[category] || "bg-slate-100"}`}>
            {category}
          </span>
          {isToday && (
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded">
              Today
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Info */}
        <div className="space-y-2 mb-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-base">location_on</span>
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold">
            <span className="material-symbols-outlined text-base">schedule</span>
            <span>{isToday ? "Today" : dateObj.toLocaleDateString("en-IN", { weekday: 'short', day: 'numeric', month: 'short' })} at {timeStr}</span>
          </div>
        </div>

        {/* Footer / Social Proof */}
        <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {participants.slice(0, 3).map((p, i) => (
                <div
                  key={p.id}
                  className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-600 overflow-hidden"
                >
                  {p.name.charAt(0)}
                </div>
              ))}
              {participantsCount > 3 && (
                <div className="w-7 h-7 rounded-full bg-primary text-white border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold">
                  +{participantsCount - 3}
                </div>
              )}
            </div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
              {participantsCount} going
            </span>
          </div>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-0.5">
              {isFull ? "Full" : "Spots Left"}
            </p>
            <p className={`text-sm font-bold ${isFull ? "text-red-400" : "text-emerald-500"}`}>
              {isFull ? "Waitlist" : spotsRemaining}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlanCard;
