import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getNavIcon } from "./getNavIcon";

function getIconStyle(isActive, iconColor) {
  if (isActive) {
    return undefined;
  }

  return { color: iconColor };
}

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

function getParentItemClass(isActive) {
  const base =
    "group flex items-center gap-4 rounded-xl px-4 py-3 min-w-0 text-sm font-extrabold uppercase tracking-wide transition-colors";

  if (isActive) {
    return `${base} bg-[#5e73e5]/10 text-slate-900 dark:text-white ring-1 ring-[#5e73e5]/20`;
  }

  return [
    base,
    "text-slate-700 hover:bg-slate-900/5 hover:text-slate-900",
    "dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white",
  ].join(" ");
}

function ExpandedSidebarSections({
  sections,
  pathname,
  expandedGroups,
  onNavigate,
  onToggleGroup,
}) {
  return (
    <div>
      {sections.map((section) => (
        <div key={section.title}>
          <div className="px-6 pt-6 text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-white/60">
            {section.title}
          </div>

          <nav className="mt-2 px-2 pb-1">
            {section.items.map((item) => {
              if (item.children?.length) {
                const hasActiveChild = item.children.some((child) => pathname === child.to);
                const isParentActive = item.to ? pathname === item.to : false;
                const isGroupActive = hasActiveChild || isParentActive;
                const isExpanded = Boolean(expandedGroups[item.key]);
                const parentContent = (
                  <>
                    <span className="shrink-0" style={{ color: item.iconColor }}>
                      {getNavIcon(item.iconKey)}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </>
                );

                return (
                  <div key={item.key} className="pb-1">
                    <div className="flex items-center gap-2">
                      {item.to ? (
                        <NavLink
                          to={item.to}
                          onClick={onNavigate || undefined}
                          className={`${getParentItemClass(isGroupActive)} flex-1`}
                        >
                          {parentContent}
                        </NavLink>
                      ) : (
                        <button
                          type="button"
                          className={`${getParentItemClass(isGroupActive)} flex-1 text-left`}
                          onClick={() => onToggleGroup(item.key)}
                        >
                          {parentContent}
                        </button>
                      )}

                      <button
                        type="button"
                        aria-label={isExpanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
                        aria-expanded={isExpanded}
                        className={[
                          "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition-colors",
                          isGroupActive
                            ? "bg-[#5e73e5]/10 ring-[#5e73e5]/20 text-slate-900 dark:text-white"
                            : "bg-transparent text-slate-500 ring-slate-900/10 hover:bg-slate-900/5 dark:text-white/65 dark:ring-white/10 dark:hover:bg-white/10",
                        ].join(" ")}
                        onClick={() => onToggleGroup(item.key)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className={["h-4 w-4 transition-transform", isExpanded ? "rotate-180" : ""].join(" ")}
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="m7 10 5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    {isExpanded ? (
                      <div className="mt-2 space-y-1 pl-6">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.key}
                            to={child.to}
                            onClick={onNavigate || undefined}
                            className={({ isActive }) => [
                              "flex items-center gap-3 rounded-xl px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors",
                              isActive
                                ? "bg-[#5e73e5]/15 text-slate-900 ring-1 ring-[#5e73e5]/25 dark:text-white"
                                : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-white/65 dark:hover:bg-white/10 dark:hover:text-white",
                            ].join(" ")}
                          >
                            {({ isActive }) => (
                              <>
                                <span
                                  className={["shrink-0", isActive ? "text-[#5e73e5]" : ""].join(" ")}
                                  style={getIconStyle(isActive, child.iconColor)}
                                >
                                  {getNavIcon(child.iconKey)}
                                </span>
                                <span className="truncate">{child.label}</span>
                              </>
                            )}
                          </NavLink>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.key}
                  to={item.to}
                  onClick={onNavigate || undefined}
                  className={getNavItemClass}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={["shrink-0", isActive ? "text-[#5e73e5]" : ""].join(" ")}
                        style={getIconStyle(isActive, item.iconColor)}
                      >
                        {getNavIcon(item.iconKey)}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          <div className="mx-6 my-5 h-px bg-slate-200/80 dark:bg-white/10" />
        </div>
      ))}
    </div>
  );
}

ExpandedSidebarSections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          to: PropTypes.string,
          iconKey: PropTypes.string,
          iconColor: PropTypes.string,
          children: PropTypes.arrayOf(
            PropTypes.shape({
              key: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
              to: PropTypes.string.isRequired,
              iconKey: PropTypes.string,
              iconColor: PropTypes.string,
            }),
          ),
        }),
      ).isRequired,
    }),
  ),
  pathname: PropTypes.string.isRequired,
  expandedGroups: PropTypes.objectOf(PropTypes.bool).isRequired,
  onNavigate: PropTypes.func,
  onToggleGroup: PropTypes.func.isRequired,
};

ExpandedSidebarSections.defaultProps = {
  sections: [],
  onNavigate: null,
};

export default ExpandedSidebarSections;
