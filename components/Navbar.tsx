"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            alt="Withly Logo"
            className="h-8 md:h-10 w-auto"
            src="/logo.png"
            width={160}
            height={40}
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            className="hover:text-primary transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/how-it-works"
          >
            How it Works
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/how-it-works#pricing"
          >
            Pricing
          </Link>
          <Link
            className="hover:text-primary transition-colors"
            href="/safety"
          >
            Safety
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
            onClick={toggleTheme}
          >
            <span className="material-symbols-outlined text-xl">
              dark_mode
            </span>
          </button>
          <Link
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            href="/forms"
          >
            Join Early Access
          </Link>
        </div>
      </div>
    </nav>
  );
}
