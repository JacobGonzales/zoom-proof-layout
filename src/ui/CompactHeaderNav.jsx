import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function CompactHeaderNav({ sections }) {
  const items = sections.flatMap((section) => section.items);

  if (!items.length) {
    return null;
  }

  return (
    <div className="rounded-[1.5rem] bg-white/74 p-2 shadow-lg ring-1 ring-black/5 backdrop-blur-xl dark:bg-[#0B1026]/74 dark:ring-white/10 xl:hidden">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {items.map((item) => (
          <NavLink
            key={item.key}
            to={item.to}
            className={({ isActive }) =>
              [
                "shrink-0 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] ring-1 transition-colors",
                isActive
                  ? "bg-[#5e73e5]/15 text-slate-900 ring-[#5e73e5]/25 dark:text-white"
                  : "bg-slate-900/5 text-slate-600 ring-slate-900/10 dark:bg-white/8 dark:text-white/70 dark:ring-white/10",
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

CompactHeaderNav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};

export default CompactHeaderNav;
