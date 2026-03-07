import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withly | Safety & Trust",
  description:
    "Your safety is our priority. Learn about Withly's ID verification, privacy protocols, code of conduct, and 24/7 support.",
};

export default function SafetyPage() {
  return (
    <main>
      <section className="pt-32 pb-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display mb-8">
                Trust is our currency.
              </h1>
              <p className="text-white/70 text-lg mb-10">
                We operate with the highest standards of safety and discretion.
                Every member of our community undergoes a rigorous vetting
                process to ensure a secure and respectful environment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: "verified_user",
                    title: "ID Verification",
                    desc: "Strict 3-step identity verification for every applicant.",
                  },
                  {
                    icon: "lock",
                    title: "Total Privacy",
                    desc: "Encrypted communications and non-disclosure protocols.",
                  },
                  {
                    icon: "gavel",
                    title: "Code of Conduct",
                    desc: "Clear boundaries and reporting systems in place.",
                  },
                  {
                    icon: "support_agent",
                    title: "24/7 Support",
                    desc: "Real-time assistance during any scheduled companionship session.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <span className="material-symbols-outlined text-accent mb-4">
                      {item.icon}
                    </span>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                alt="Professional people in a meeting space"
                className="rounded-3xl shadow-3xl opacity-80 mix-blend-luminosity"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbjGa8cntHRwDuV7W1FozL-cm8_jmmHSWGrMSfQIAZ6YAoPkahqwyVZ9Koez7x9iZWLGTQmN_VnClgFBoflRsz9gOzM1V-GBIWR7mq8pNrxRx04zl3X1oNgRgEK0biODhMDDcZxm0xxM7b3sct1BRYPyEPd_cLqDBtYof9Ge54cg20KOCJLM5ID5zE5zCjnJNrXGTiBvmjdsly4Vi7xkZjtFLOXGWAKqxXPWAondegKfddks5JvxeA_V_CpCJA84S79kp5BwOORM7J"
                width={600}
                height={400}
                unoptimized
              />
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px]"></div>
      </section>
    </main>
  );
}
