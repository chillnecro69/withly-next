"use client";

export default function SafetyPage() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 italic serif-italic">Community Guidelines</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Withly is built on trust and shared community experiences. To keep our platform safe and enjoyable for everyone, we've established these core guidelines.
          </p>

          <div className="space-y-12 mb-16">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">pin_drop</span>
                Meet in Public
              </h2>
              <p className="text-slate-500">
                All Withly plans must take place in public, high-traffic locations. This includes cafés, restaurants, public parks, malls, or ticketed events. Never host or join a plan in a private residence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">diversity_3</span>
                Respect the Group
              </h2>
              <p className="text-slate-500">
                Every attendee is here to socialize and try something new. Be respectful, inclusive, and mindful of others' comfort. Harassment, discrimination, or offensive behavior will lead to an immediate ban.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">block</span>
                No Commercial Plans
              </h2>
              <p className="text-slate-500">
                Withly is for social plans, not for selling services, promoting businesses, or recruitment. Plans found to be commercial in nature will be removed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">report</span>
                Report Issues
              </h2>
              <p className="text-slate-500">
                If a plan seems suspicious, or if a participant behaves inappropriately, please report them immediately.
              </p>
            </section>
          </div>

          <div className="bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6">Report an Issue</h3>
            <form className="space-y-4">
               <div>
                  <label className="block text-xs font-bold mb-2 uppercase tracking-wider text-slate-400">What are you reporting?</label>
                  <select className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                     <option>Suspicious Plan</option>
                     <option>Inappropriate User Behavior</option>
                     <option>Other</option>
                  </select>
               </div>
               <div>
                  <label className="block text-xs font-bold mb-2 uppercase tracking-wider text-slate-400">Description</label>
                  <textarea 
                    placeholder="Tell us more about what happened..."
                    className="w-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  ></textarea>
               </div>
               <button 
                  type="button"
                  className="w-full bg-slate-900 dark:bg-primary text-white py-4 rounded-xl font-bold hover:opacity-90 transition-all"
                  onClick={() => alert("Report submitted. Thank you for keeping Withly safe.")}
               >
                  Submit Report
               </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
