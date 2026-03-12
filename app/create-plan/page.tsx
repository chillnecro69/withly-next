"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const categories = ["Coffee", "Walks", "Food", "Events", "Fitness", "Explore City"];

export default function CreatePlanPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Coffee",
    location: "",
    city: "Pune",
    date: "",
    time: "",
    maxParticipants: 5,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Combine date and time
      const dateTime = new Date(`${formData.date}T${formData.time}`);
      
      const res = await fetch("/api/plans/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          dateTime: dateTime.toISOString(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create plan");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen bg-slate-50 dark:bg-black/20">
      <div className="max-w-xl mx-auto">
        <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Create a Plan</h1>
            <p className="text-slate-500">What do you want to do? Start a social plan and people will join you.</p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-black/5 space-y-6"
        >
          {error && (
            <div className="p-4 rounded-xl bg-red-50 text-red-600 text-sm font-medium border border-red-100 animate-fade-in">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Activity Title</label>
            <input 
              required
              type="text"
              placeholder="e.g. Coffee at Blue Tokai"
              className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Description (Optional)</label>
            <textarea 
              placeholder="What's the plan? Chat, work, or just chill..."
              className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Category</label>
              <select 
                className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Max Spots (2-6)</label>
              <input 
                type="number"
                min="2"
                max="6"
                className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={formData.maxParticipants}
                onChange={(e) => setFormData({ ...formData, maxParticipants: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div>
             <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Where at?</label>
             <input 
               required
               type="text"
               placeholder="e.g. Baner, Pune"
               className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
               value={formData.location}
               onChange={(e) => setFormData({ ...formData, location: e.target.value })}
             />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Date</label>
              <input 
                required
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Time</label>
              <input 
                required
                type="time"
                className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 shadow-xl shadow-primary/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? "Creating..." : "Launch Plan"}
            {!loading && <span className="material-symbols-outlined text-base">rocket_launch</span>}
          </button>
        </form>
      </div>
    </main>
  );
}
