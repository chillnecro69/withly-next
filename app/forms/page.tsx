"use client";

import { useState, FormEvent, useRef } from "react";
import Link from "next/link";

export default function FormsPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showOther, setShowOther] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function toggleInterest(value: string) {
    setSelectedInterests((prev) => {
      if (prev.includes(value)) {
        if (value === "Other") setShowOther(false);
        return prev.filter((v) => v !== value);
      } else {
        if (value === "Other") setShowOther(true);
        return [...prev, value];
      }
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (selectedInterests.length === 0) {
      alert("Please select at least one interest.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      formData.set("interests", selectedInterests.join(", "));

      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Submission failed");

      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  }

  const interests = [
    { value: "Coffee & walks", icon: "coffee" },
    { value: "Dining out", icon: "restaurant" },
    { value: "Movies", icon: "movie" },
    { value: "Events & shows", icon: "event" },
    { value: "Day trips", icon: "directions_car" },
    { value: "Just a walk", icon: "directions_walk" },
    { value: "Other", icon: "more_horiz" },
  ];

  return (
    <main className="pt-28 pb-24 px-6">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-2 mb-5">
            <span className="material-symbols-outlined text-primary text-sm">
              stars
            </span>
            <span className="text-primary text-sm font-semibold">
              Founding Member: Rs 299 off your first session
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display leading-tight mb-3">
            Let&apos;s <span className="serif-italic text-accent">connect.</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Fill this in and we&apos;ll reach out on WhatsApp to set everything
            up.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/10 p-8 shadow-sm">
          {!isSuccess ? (
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    className="input-field"
                    type="text"
                    name="name"
                    placeholder="e.g. Priya, Arjun..."
                    required
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    WhatsApp Number
                  </label>
                  <div className="flex gap-2 items-center bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 focus-within:ring-2 focus-within:ring-primary/30 focus-within:border-primary transition-all">
                    <span className="text-slate-400 text-sm flex-shrink-0 select-none pointer-events-none">
                      +91
                    </span>
                    <span className="text-slate-200 dark:text-white/10">|</span>
                    <input
                      className="flex-grow py-3.5 bg-transparent outline-none text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400"
                      type="tel"
                      name="whatsapp"
                      placeholder="98765 43210"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit number"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email
                  </label>
                  <input
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    What are you interested in?{" "}
                    <span className="text-slate-400 font-normal">
                      (pick all that apply)
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        className={`interest-btn ${
                          selectedInterests.includes(item.value)
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => toggleInterest(item.value)}
                      >
                        <span className="material-symbols-outlined text-base">
                          {item.icon}
                        </span>
                        {item.value}
                      </button>
                    ))}
                  </div>
                  {showOther && (
                    <div className="mt-3">
                      <input
                        className="input-field"
                        type="text"
                        name="other_interest"
                        placeholder="Tell us what you have in mind..."
                      />
                    </div>
                  )}
                </div>

                {/* Plan */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Which plan are you considering?
                  </label>
                  <select className="input-field" name="plan" defaultValue="">
                    <option value="" disabled>
                      Select a plan
                    </option>
                    <option value="Quick Meet - Rs 499 (1 Hour)">
                      Quick Meet - Rs 499 (1 Hour)
                    </option>
                    <option value="Standard - Rs 999 (2 Hours)">
                      Standard - Rs 999 (2 Hours)
                    </option>
                    <option value="Custom - On Request">
                      Custom - On Request
                    </option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 w-full bg-primary text-white py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    Sending...{" "}
                    <span className="material-symbols-outlined text-base animate-spin">
                      progress_activity
                    </span>
                  </>
                ) : (
                  <>
                    Send my details{" "}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success */
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <span className="material-symbols-outlined text-primary text-3xl">
                  check_circle
                </span>
              </div>
              <h2 className="text-2xl font-display mb-2">You&apos;re in!</h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto mb-6">
                Thanks! We&apos;ll WhatsApp you shortly to sort out the details.
              </p>
              <Link
                href="/"
                className="text-sm font-medium text-primary hover:opacity-80 transition-opacity flex items-center justify-center gap-1"
              >
                <span className="material-symbols-outlined text-base">
                  arrow_back
                </span>
                Back to Withly
              </Link>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mt-5 flex items-center justify-center gap-1.5">
          <span className="material-symbols-outlined text-sm">lock</span>
          We never share your details with anyone.
        </p>
      </div>
    </main>
  );
}
