import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withly | How It Works & Pricing",
  description:
    "Learn how Withly works in 4 simple steps, explore our pricing plans, and find answers to common questions.",
};

export default function HowItWorksPage() {
  return (
    <main>
      {/* How It Works */}
      <section className="pt-32 pb-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display">
              The Seamless Path to Connection
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-primary/10 -z-0"></div>
            {[
              {
                step: 1,
                title: "Apply",
                desc: "Join our waitlist and complete a brief personality and interest profile.",
              },
              {
                step: 2,
                title: "Set Preference",
                desc: "Choose the type of company and activities you enjoy most.",
              },
              {
                step: 3,
                title: "Curated Match",
                desc: "Our team suggests a compatible companion based on shared intellect and interests.",
              },
              {
                step: 4,
                title: "Meet",
                desc: "Experience genuine presence at a pre-arranged venue or activity.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative z-10 bg-white dark:bg-white/5 p-8 rounded-2xl border border-black/5"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Your Time. Your Experience.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              You choose what you want to do. We handle the rest.
            </p>
          </div>
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-accent/10 border border-accent/20 rounded-2xl py-4 px-6 text-center">
              <p className="text-primary font-semibold text-lg">
                <span className="material-symbols-outlined align-middle mr-2">
                  stars
                </span>
                Founding Member Offer:{" "}
                <span className="serif-italic">
                  Rs 299 off your first session
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Quick Meet */}
            <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col hover:border-accent/50 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">Quick Meet</h3>
                <p className="text-slate-500 text-sm">1 Hour</p>
              </div>
              <div className="mb-4">
                <div className="text-4xl font-display text-primary">
                  Rs 499
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                Coffee, walks, casual hangouts
              </p>
              <Link
                className="mt-auto w-full py-3 rounded-xl bg-primary text-white font-semibold text-center hover:opacity-90 transition-opacity block"
                href="/forms"
              >
                Book Now
              </Link>
            </div>

            {/* Standard */}
            <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border-2 border-accent flex flex-col relative shadow-xl transform md:scale-105 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] uppercase font-bold px-4 py-1.5 rounded-full tracking-widest whitespace-nowrap shadow-sm">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">Standard</h3>
                <p className="text-slate-500 text-sm">2 Hours</p>
              </div>
              <div className="mb-4">
                <div className="text-4xl font-display text-primary">
                  Rs 999
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                Dinners, events, movies
              </p>
              <Link
                className="mt-auto w-full py-3 rounded-xl bg-primary text-white font-semibold text-center hover:opacity-90 transition-opacity block"
                href="/forms"
              >
                Book Now
              </Link>
            </div>

            {/* Custom */}
            <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col hover:border-accent/50 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">Custom</h3>
                <p className="text-slate-500 text-sm">Open-ended</p>
              </div>
              <div className="mb-4">
                <div className="text-4xl font-display text-primary">
                  On Request
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8">
                Multi-day, special occasions
              </p>
              <Link
                className="mt-auto w-full py-3 rounded-xl border-2 border-primary text-primary font-semibold text-center hover:bg-primary hover:text-white transition-all block"
                href="/forms"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-sm italic text-slate-500">
              Pricing is time-based. You choose the activity at booking.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-black/20" id="faq">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-display text-center mb-12">
            Frequently Asked
          </h2>
          <div className="space-y-4">
            <details
              className="group bg-background-light dark:bg-white/5 rounded-2xl overflow-hidden"
              open
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold">
                  How is this different from a dating app?
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 border-t border-black/5">
                Dating apps are built on the premise of romance and potential
                long-term partnership. Withly is built on the premise of
                immediate, high-quality human presence. There is no expectation
                of romance—only mutual engagement in an activity.
              </div>
            </details>
            <details className="group bg-background-light dark:bg-white/5 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold">
                  Is this a platonic service?
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 border-t border-black/5">
                Yes. Withly is strictly for companionship. Our community
                guidelines are clear on this, and any violations result in
                immediate membership revocation.
              </div>
            </details>
            <details className="group bg-background-light dark:bg-white/5 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-semibold">
                  How long does the vetting process take?
                </span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 border-t border-black/5">
                Typically, the review process takes 5-7 business days. We
                prioritize quality over speed to ensure our community remains a
                safe and elite space for all members.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
