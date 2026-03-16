"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: session, status } = useSession();

  const navLinks = [
    { name: "Plans", href: "/" },
    { name: "Create Plan", href: "/create-plan", highlight: true },
    { name: "Community", href: "/community" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-display text-xl group-hover:scale-105 transition-transform duration-300">
            W
          </div>
          <span className="text-2xl font-display font-bold tracking-tight italic">Withly</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.highlight
                  ? "bg-primary text-white px-4 py-2 rounded-full hover:opacity-90 shadow-lg shadow-primary/20"
                  : "text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-black/10 dark:bg-white/10 mx-2" />
          {status === "loading" ? (
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
          ) : session?.user ? (
            <div className="relative group/profile">
              <Link href={`/profile/${session.user.id}`}>
                {session.user.image ? (
                  <img src={session.user.image} alt={session.user.name || "User"} className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 object-cover" />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                    {session.user.name?.charAt(0) || "U"}
                  </div>
                )}
              </Link>
              <div className="absolute right-0 top-full pt-2 opacity-0 group-hover/profile:opacity-100 pointer-events-none group-hover/profile:pointer-events-auto transition-opacity z-50">
                 <button onClick={() => signOut()} className="bg-white dark:bg-slate-900 border border-black/10 dark:border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-red-600 shadow-xl whitespace-nowrap">
                   Sign Out
                 </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-5 py-2 rounded-full border border-black/10 dark:border-white/10 text-sm font-medium hover:border-black/30 dark:hover:border-white/30 transition-all font-sans"
            >
              Sign In
            </button>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-400"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-black/5 dark:border-white/10 p-6 animate-fade-in shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium p-2 rounded-lg transition-colors ${
                  link.highlight
                    ? "bg-primary text-white text-center shadow-lg shadow-primary/20"
                    : "text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-full bg-black/5 dark:bg-white/10 my-2" />
            {session?.user ? (
              <>
                <Link
                  href={`/profile/${session.user.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 p-2 text-base font-medium text-slate-600 dark:text-slate-400 hover:bg-black/5 dark:hover:bg-white/5 mx-2 rounded-lg"
                >
                  {session.user.image ? (
                    <img src={session.user.image} alt={session.user.name || "User"} className="w-6 h-6 rounded-full" />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                      {session.user.name?.charAt(0) || "U"}
                    </div>
                  )}
                  My Profile
                </Link>
                <button
                  onClick={() => { setMobileMenuOpen(false); signOut(); }}
                  className="text-left text-base font-medium p-2 mx-2 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => { setMobileMenuOpen(false); signIn("google"); }}
                className="text-center text-base font-medium p-2 mx-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10"
              >
                Sign In with Google
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
