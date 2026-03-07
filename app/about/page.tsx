import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withly | About Us",
  description:
    "Withly is intentional human connection. Learn about our mission and who our platform is built for.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Our Mission */}
      <section className="pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <Image
                alt="Two people having a sophisticated conversation over coffee"
                className="rounded-2xl shadow-2xl relative z-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOhZIG8kiE6oy0EXC095HG6QJb6t2b7cBqpBfadl9dyZ5YD4u95z4kfJFYPQZPEPXAqFF_lQj1WtRADgGxzB9ej-C1hueK0SGqaACfRohILeP9NFjd7AuQpHB5eqgkJDhboxA2m_ReztX0k1OZ0KH6YvDxbwjnFoyf6vFKgqUIJ8pRR1SVeK-BZPSJwQpi40hRIErgPcZTeRYwnBNHTHgdJ8wYggi9nJWAI47XD7m81WMu3x174exZ1H-nHMfLX_9O2Qtw8RAhS_s0"
                width={600}
                height={400}
                unoptimized
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-2xl -z-10"></div>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-6 block">
                Our Mission
              </span>
              <h2 className="text-5xl md:text-6xl font-display mb-8">
                Intentional Human Connection.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Withly isn&apos;t a dating app. It&apos;s a platform for busy
                people who value their time and seek the simple pleasure of good
                company. Whether it&apos;s attending an exhibition, sharing a
                dinner, or a simple walk in the park—we curate the people, you
                enjoy the moment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent">
                    check_circle
                  </span>
                  <span>Hand-vetted community of professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent">
                    check_circle
                  </span>
                  <span>Activity-based matching for organic flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-accent">
                    check_circle
                  </span>
                  <span>Strictly platonic, high-value companionship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-white dark:bg-black/10" id="who-it-is-for">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display mb-4">
                Made for Everyone.
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Whether you&apos;re new to the city, exploring alone, or just
                want good company - Withly is for you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "location_city",
                title: "New to the City",
                desc: "Just moved? Skip awkward networking events and explore the city with someone who already knows it well.",
              },
              {
                icon: "restaurant",
                title: "Going Somewhere Solo",
                desc: "A dinner, a show, a café you've been meaning to try - everything is better with good company alongside.",
              },
              {
                icon: "favorite",
                title: "Just Want Connection",
                desc: "No apps, no pressure, no awkwardness. Just real, easy company when you feel like it.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 rounded-3xl bg-background-light dark:bg-white/5 hover:bg-primary hover:text-white transition-all duration-500"
              >
                <div className="mb-6">
                  <span className="material-symbols-outlined text-4xl group-hover:text-white text-primary">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-display mb-4">{item.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-200">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Withly */}
      <section
        className="py-20 bg-background-light dark:bg-background-dark"
        id="why-withly"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-6 block">
            Why Withly
          </span>
          <p className="text-2xl md:text-3xl font-display leading-relaxed text-slate-700 dark:text-slate-300 italic mb-10">
            &ldquo;I kept noticing people at restaurants and events - alone, but
            not quite at ease being alone. Not sad, just missing someone to
            share the moment with. We have apps for everything except that.
            Withly is my answer.&rdquo;
          </p>
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100 text-base">
              Swastik M.
            </p>
            <p className="text-sm text-slate-400 font-light mt-0.5">
              Founder, Withly
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
