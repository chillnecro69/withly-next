"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("withly_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  if (!user) {
    return (
      <main className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-display font-bold mb-6">No Profile Found</h1>
            <p className="text-slate-500 mb-8">Please complete your profile to see your details.</p>
            <Link 
              href="/forms"
              className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all"
            >
              Complete Profile
            </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-24 px-6 min-h-screen flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <div className="bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-[2.5rem] p-10 shadow-2xl shadow-black/5">
            <div className="flex flex-col items-center text-center">
               <div className="w-32 h-32 rounded-full bg-primary/10 border-4 border-white dark:border-slate-900 flex items-center justify-center mb-8 overflow-hidden">
                  {user.photo ? (
                    <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-primary font-display font-bold text-5xl">{user.name.charAt(0)}</span>
                  )}
               </div>
               
               <h1 className="text-4xl font-display font-bold mb-2">{user.name}</h1>
               <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-xs font-bold uppercase tracking-wider text-slate-500 mb-8">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {user.city}
               </div>

               <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 italic">
                  &ldquo;{user.bio || "Exploring Pune's social scene."}&rdquo;
               </p>

               <div className="w-full space-y-6 text-left">
                  <div>
                     <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.2em] mb-3">Interests</h4>
                     <div className="flex flex-wrap gap-2">
                        {(user.interests || "Coffee, Walks, Meetups").split(',').map((interest: string) => (
                           <span key={interest} className="px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-medium">
                              {interest.trim()}
                           </span>
                        ))}
                     </div>
                  </div>
                  
                  <div>
                     <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3">Recent Activity</h4>
                     <p className="text-sm text-slate-400 italic">No plans joined yet.</p>
                  </div>
               </div>

               <div className="w-full h-px bg-black/5 dark:bg-white/5 my-10" />

               <div className="flex gap-4 w-full">
                  <Link 
                    href="/create-plan"
                    className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 shadow-xl shadow-primary/20"
                  >
                     <span className="material-symbols-outlined text-base">add</span>
                     Create a Plan
                  </Link>
                  <Link 
                    href="/forms"
                    className="flex-1 bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black/5 dark:hover:bg-white/5"
                  >
                     <span className="material-symbols-outlined text-base">edit</span>
                     Edit Profile
                  </Link>
               </div>
            </div>
        </div>
      </div>
    </main>
  );
}
