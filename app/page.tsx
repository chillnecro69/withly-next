import Link from "next/link";
import PlanFeed from "@/components/PlanFeed";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-violet-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Starting in Pune
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[0.95] animate-fade-in delay-100">
              Never do things alone in your <span className="text-primary italic serif-italic">city.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed animate-fade-in delay-200">
              Find coffee meetups, walks, dinners and social plans happening near you. Browse, join, and meet.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
              <Link
                href="#plans"
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 shadow-xl shadow-primary/20 transition-all flex items-center gap-2"
              >
                Explore Plans
                <span className="material-symbols-outlined text-base">arrow_downward</span>
              </Link>
              <Link
                href="/create-plan"
                className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              >
                Create a Plan
              </Link>
            </div>
          </div>

          {/* Mini preview bar */}
          <div className="mt-20 p-6 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center gap-8 animate-fade-in delay-300">
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-slate-500">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold">142+ people</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">Active in Pune</p>
              </div>
            </div>
            
            <div className="h-12 w-px bg-black/5 dark:bg-white/10 hidden md:block" />

            <div className="flex-1 flex flex-wrap gap-4 justify-center md:justify-start overflow-hidden">
               <div className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-amber-100/50 text-amber-900 border border-amber-200">
                  <span className="material-symbols-outlined text-base">coffee</span>
                  Coffee Meetup · 6 PM
               </div>
               <div className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-emerald-100/50 text-emerald-900 border border-emerald-200">
                  <span className="material-symbols-outlined text-base">hiking</span>
                  Tekdi Walk · Today
               </div>
               <div className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-rose-100/50 text-rose-900 border border-rose-200">
                  <span className="material-symbols-outlined text-base">restaurant</span>
                  Dinner · Baner
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feed Section */}
      <section id="plans" className="py-24 px-6 bg-slate-50 dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <PlanFeed />
        </div>
      </section>

      {/* Community Blurb */}
      <section className="py-32 px-6 border-t border-black/5 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 italic serif-italic">Why Withly?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
               We believe social connections shouldn't be hard. In a world of digital noise, we focus on real-world interactions. Withly is for people who want to explore their city, try new things, and never have to do them alone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">near_me</span>
                  <h4 className="font-bold mb-2">Pune First</h4>
                  <p className="text-sm text-slate-500">Starting in Pune with plans happening in Baner, KP, FC Road and more.</p>
               </div>
               <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">group</span>
                  <h4 className="font-bold mb-2">Small Groups</h4>
                  <p className="text-sm text-slate-500">Plans are capped at 6 participants to keep conversations personal.</p>
               </div>
               <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">verified_user</span>
                  <h4 className="font-bold mb-2">Safe & Social</h4>
                  <p className="text-sm text-slate-500">Every plan is in a public place with community guidelines in place.</p>
               </div>
            </div>
        </div>
      </section>
    </main>
  );
}
