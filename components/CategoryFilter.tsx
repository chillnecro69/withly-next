"use client";

const categories = [
  "All",
  "Coffee",
  "Walks",
  "Food",
  "Events",
  "Fitness",
  "Explore City",
];

type Props = {
  activeCategory: string;
  onSelect: (category: string) => void;
};

const CategoryFilter = ({ activeCategory, onSelect }: Props) => {
  return (
    <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar -mx-6 px-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border shrink-0 ${
            activeCategory === category
              ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
              : "bg-white dark:bg-white/5 border-black/5 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-primary/50"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
