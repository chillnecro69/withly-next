"use client";

import { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import PlanCard from "./PlanCard";

interface Participant {
  id: string;
  name: string;
  photo: string | null;
}

interface Plan {
  id: string;
  title: string;
  category: string;
  location: string;
  dateTime: string;
  maxParticipants: number;
  participantsCount: number;
  hostName: string;
  hostPhoto: string | null;
  participants: Participant[];
  isFull: boolean;
  isToday: boolean;
}

const PlanFeed = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const url = category === "All" 
          ? "/api/plans" 
          : `/api/plans?category=${category}`;
        const res = await fetch(url);
        const data = await res.json();
        setPlans(data.plans || []);
      } catch (error) {
        console.error("Failed to fetch plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [category]);

  const todayPlans = plans.filter(p => p.isToday);
  const futurePlans = plans.filter(p => !p.isToday);

  return (
    <div className="space-y-12">
      <CategoryFilter activeCategory={category} onSelect={setCategory} />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 rounded-2xl bg-slate-100 dark:bg-white/5 animate-pulse" />
          ))}
        </div>
      ) : plans.length === 0 ? (
        <div className="text-center py-20 px-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-dashed border-black/10 dark:border-white/10">
          <span className="material-symbols-outlined text-5xl text-slate-300 mb-4 inline-block">
            event_busy
          </span>
          <h3 className="text-xl font-display font-bold mb-2">No plans here yet</h3>
          <p className="text-slate-500 max-w-xs mx-auto mb-8">
            Be the first to create a plan for {category === "All" ? "Pune" : category.toLowerCase() + " in Pune"}.
          </p>
          <a
            href="/create-plan"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 shadow-lg shadow-primary/20 transition-all"
          >
            <span className="material-symbols-outlined text-base">add</span>
            Create a Plan
          </a>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Today's Plans */}
          {todayPlans.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl font-display font-bold">Today in Pune</h2>
                <div className="h-px flex-1 bg-black/5 dark:bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {todayPlans.map((plan) => (
                  <PlanCard key={plan.id} {...plan} />
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Plans */}
          {futurePlans.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-2xl font-display font-bold">Upcoming</h2>
                <div className="h-px flex-1 bg-black/5 dark:bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {futurePlans.map((plan) => (
                  <PlanCard key={plan.id} {...plan} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlanFeed;
