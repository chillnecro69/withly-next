"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfileSignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    bio: "",
    interests: "",
    city: "Pune",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // In this demo, we'll just save to localStorage and redirect
    localStorage.setItem("withly_user", JSON.stringify(formData));
    
    setTimeout(() => {
      setLoading(false);
      router.push("/profile");
    }, 1000);
  };

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen flex items-center justify-center bg-slate-50 dark:bg-black/20">
      <div className="max-w-md w-full">
        <div className="mb-10 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Complete your <span className="text-primary">Profile</span></h1>
            <p className="text-slate-500">So others know who they're meeting.</p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl p-8 shadow-xl shadow-black/5 space-y-6"
        >
          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Your Name</label>
            <input 
              required
              type="text"
              placeholder="Full Name"
              className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
             <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Photo URL</label>
             <input 
               type="url"
               placeholder="https://..."
               className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
               value={formData.photo}
               onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
             />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Bio</label>
            <textarea 
              placeholder="A little bit about you..."
              className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-slate-400">Interests</label>
            <input 
              type="text"
              placeholder="e.g. Coffee, Tech, Hiking"
              className="w-full bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              value={formData.interests}
              onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 shadow-xl shadow-primary/20 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? "Saving..." : "Save Profile"}
            {!loading && <span className="material-symbols-outlined text-base">person</span>}
          </button>
        </form>
      </div>
    </main>
  );
}
