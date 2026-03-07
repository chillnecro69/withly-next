import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] tracking-tight mb-8">
            Presence, <span className="serif-italic text-accent">not</span>{" "}
            pressure.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Real company, for real moments. Whether you&apos;re new to the city,
            going somewhere alone, or just want good company - Withly makes it
            easy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
              href="/forms"
            >
              Apply for Early Access
            </Link>
            <Link
              className="px-8 py-4 rounded-full text-lg font-semibold border border-primary/20 hover:bg-primary/5 transition-colors"
              href="/how-it-works"
            >
              Learn how it works
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* The Loneliness Gap */}
      <section className="py-24 bg-white dark:bg-black/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-6 block">
            The Context
          </span>
          <h2 className="text-4xl md:text-5xl font-display mb-8">
            The Loneliness Gap
          </h2>
          <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400">
            In an increasingly digital world, our schedules are full but our
            social circles are shrinking. We have &ldquo;connections&rdquo;
            everywhere, yet finding genuine, quality human presence in the real
            world has never been more difficult.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-display text-accent mb-2">45%</div>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Report feeling isolated despite social media
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-display text-accent mb-2">
                3.2 hrs
              </div>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Average time spent on digital interactions daily
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-display text-accent mb-2">60%</div>
              <p className="text-sm text-slate-500 uppercase tracking-wider">
                Prefer in-person activity over digital chats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" id="cta">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-background-light dark:bg-white/5 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-display mb-8">
                Rediscover the joy of company.
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto">
                Join our early access program and be among the first to
                experience the Withly way of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Link
                  className="flex-grow bg-primary text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center justify-center"
                  href="/forms"
                >
                  Request Invite
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
