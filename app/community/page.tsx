import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tight leading-none italic serif-italic">
            The Withly <span className="text-primary not-italic tracking-normal">Community</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-16 leading-relaxed">
            Withly is a platform for people who want to share real moments in the real world. No swiping, no complicated scheduling, just plans.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-20">
            <div>
                <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">1</span>
                    Browse & Join
                </h3>
                <p className="text-slate-500 leading-relaxed">
                    Open Withly to see what's happening in your city today. Find a plan that interests you—whether it's a coffee at Baner or a morning walk—and hit join.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">2</span>
                    Meet & Socialize
                </h3>
                <p className="text-slate-500 leading-relaxed">
                    Show up at the location and time. You'll meet a small group of people (capped at 6) who also wanted to do the same thing. No pressure, just conversation.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">3</span>
                    Host Your Own
                </h3>
                <p className="text-slate-500 leading-relaxed">
                    Have something in mind? Create your own plan in seconds. Set the time, place, and what you're doing. Watch others join you.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">4</span>
                    Keep it Public
                </h3>
                <p className="text-slate-500 leading-relaxed">
                    All Withly plans happen in public places—cafés, parks, restaurants, or events. Shared experiences in the safety of your city's common spaces.
                </p>
            </div>
        </div>

        <div className="p-10 rounded-3xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/10">
            <h2 className="text-3xl font-display font-bold mb-6">Our Rules</h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                <li className="flex items-center gap-3 justify-center">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Be respectful to all participants
                </li>
                <li className="flex items-center gap-3 justify-center">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    Only host in public locations
                </li>
                <li className="flex items-center gap-3 justify-center">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    No commercial or promotional plans
                </li>
            </ul>
            <div className="mt-8">
                <Link 
                  href="/safety"
                  className="text-primary font-bold hover:underline"
                >
                  Read our full Safety Guidelines
                </Link>
            </div>
        </div>

        <div className="mt-20">
            <Link
                href="/create-plan"
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-xl hover:opacity-90 shadow-2xl shadow-primary/20 transition-all inline-block"
            >
                Launch your first plan
            </Link>
        </div>
      </div>
    </main>
  );
}
