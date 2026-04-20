import React from "react";

function TopBarSearch() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-2 ring-1 ring-slate-900/10 backdrop-blur dark:bg-white/10 dark:ring-white/10">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-slate-600 dark:text-white/70"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm10 2-5.2-5.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <input
        className="w-28 sm:w-40 lg:w-44 xl:w-52 bg-transparent text-sm text-slate-900 placeholder:text-slate-500 outline-none dark:text-white dark:placeholder:text-white/60"
        placeholder="Type here..."
      />
    </div>
  );
}

export default TopBarSearch;
