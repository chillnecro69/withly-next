"use client";

import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center justify-center"
      aria-label="Toggle dark mode"
    >
      <span className="material-symbols-outlined text-xl">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
