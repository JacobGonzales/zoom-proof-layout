// src/nav/SidebarNav.jsx
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { navSections } from "./navConfig";
import { getNavIcon } from "./NavIcons";

function getNavItemClass({ isActive }) {
  const base =
    "group flex items-center gap-4 rounded-xl px-4 py-3 min-w-0 transition-colors " +
    "text-sm font-extrabold uppercase tracking-wide";

  if (isActive) {
    return `${base} bg-[#5e73e5]/15 ring-1 ring-[#5e73e5]/25 text-slate-900 dark:text-white`;
  }

  return [
    base,
    "text-slate-700 hover:bg-slate-900/5 hover:text-slate-900",
    "dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white",
  ].join(" ");
}

function SidebarNav({ onNavigate }) {
  return (
    <div>
      {navSections.map((section) => (
        <div key={section.title}>
          <div className="px-6 pt-6 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-white/60">
            {section.title}
          </div>

          <nav className="mt-2 px-2 pb-1">
            {section.items.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                onClick={onNavigate || undefined}
                className={getNavItemClass}
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={[
                        "shrink-0",
                        isActive ? "text-[#5e73e5]" : "",
                      ].join(" ")}
                      style={!isActive ? { color: item.iconColor } : undefined}
                    >
                      {getNavIcon(item.iconKey)}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="mx-6 my-5 h-px bg-slate-200/80 dark:bg-white/10" />
        </div>
      ))}
    </div>
  );
}

SidebarNav.propTypes = {
  onNavigate: PropTypes.func,
};

SidebarNav.defaultProps = {
  onNavigate: null,
};

export default SidebarNav;
