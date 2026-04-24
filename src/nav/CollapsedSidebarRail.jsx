import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getNavIcon } from "./getNavIcon";

function getRailLinkClass(isActive) {
  return [
    "inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 transition-colors",
    isActive
      ? "bg-[#5e73e5]/15 text-[#5e73e5] ring-[#5e73e5]/25"
      : "text-slate-600 ring-transparent hover:bg-slate-900/5 hover:text-slate-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white",
  ].join(" ");
}

function getIconStyle(isActive, iconColor) {
  if (isActive) {
    return undefined;
  }

  return { color: iconColor };
}

function RailFlyout({ item, onNavigate, open, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={[
        "absolute left-full top-0 z-[90] ml-3 w-[min(20rem,calc(100vw-6rem))] transition duration-150",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-900/10 dark:bg-[#111831] dark:ring-white/12">
        <div className="px-2 pb-2 pt-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
          {item.label}
        </div>

        <div className="grid max-h-[min(68vh,28rem)] gap-1 overflow-y-auto pr-1">
          {item.children?.length ? (
            item.children.map((child) => (
              <NavLink
                key={child.key}
                to={child.to}
                aria-label={child.label}
                onClick={onNavigate || undefined}
                className={({ isActive }) => [
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors",
                  isActive
                    ? "bg-[#5e73e5]/15 text-slate-900 ring-1 ring-[#5e73e5]/25 dark:text-white"
                    : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white",
                ].join(" ")}
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={isActive ? "text-[#5e73e5]" : ""}
                      style={!isActive ? { color: child.iconColor } : undefined}
                    >
                      {getNavIcon(child.iconKey)}
                    </span>
                    <span className="truncate">{child.label}</span>
                  </>
                )}
              </NavLink>
            ))
          ) : (
            <NavLink
              to={item.to}
              aria-label={item.label}
              onClick={onNavigate || undefined}
              className={({ isActive }) => [
                "flex items-center gap-3 rounded-xl px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors",
                isActive
                  ? "bg-[#5e73e5]/15 text-slate-900 ring-1 ring-[#5e73e5]/25 dark:text-white"
                  : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white",
              ].join(" ")}
            >
              {({ isActive }) => (
                <>
                  <span
                    className={isActive ? "text-[#5e73e5]" : ""}
                    style={!isActive ? { color: item.iconColor } : undefined}
                  >
                    {getNavIcon(item.iconKey)}
                  </span>
                  <span className="truncate">{item.label}</span>
                </>
              )}
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

function CollapsedSidebarRail({ sections, onNavigate }) {
  const [openKey, setOpenKey] = useState(null);
  const closeTimerRef = useRef(null);

  useEffect(() => () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  }, []);

  function openFlyout(key) {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenKey(key);
  }

  function closeFlyoutSoon() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setOpenKey(null);
      closeTimerRef.current = null;
    }, 220);
  }

  function closeFlyoutNow() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setOpenKey(null);
  }

  return (
    <div className="px-2 pb-4 pt-3">
      {sections.map((section) => (
        <ul
          key={section.title}
          className="mb-3 flex flex-col items-center gap-2 border-b border-slate-300/90 pb-3 last:mb-0 last:border-b-0 last:pb-0 dark:border-white/18"
          aria-label={section.title}
        >
          {section.items.map((item) => {
            const hasChildren = Boolean(item.children?.length);

            return (
              <li
                key={item.key}
                className="relative"
                onMouseEnter={() => openFlyout(item.key)}
                onMouseLeave={closeFlyoutSoon}
              >
                <NavLink
                  to={item.to}
                  aria-label={item.label}
                  aria-haspopup={hasChildren ? "menu" : undefined}
                  aria-expanded={hasChildren ? openKey === item.key : undefined}
                  onClick={onNavigate || undefined}
                  onFocus={() => openFlyout(item.key)}
                  onBlur={closeFlyoutSoon}
                  onTouchStart={() => openFlyout(item.key)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      closeFlyoutNow();
                    }

                    if (hasChildren && (event.key === "ArrowRight" || event.key === "Enter" || event.key === " ")) {
                      event.preventDefault();
                      openFlyout(item.key);
                    }
                  }}
                  className={({ isActive }) => getRailLinkClass(isActive)}
                >
                  {({ isActive }) => (
                    <span style={getIconStyle(isActive, item.iconColor)}>
                      {getNavIcon(item.iconKey)}
                    </span>
                  )}
                </NavLink>

                <RailFlyout
                  item={item}
                  onNavigate={onNavigate}
                  open={openKey === item.key}
                  onMouseEnter={() => openFlyout(item.key)}
                  onMouseLeave={closeFlyoutSoon}
                />
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}

CollapsedSidebarRail.propTypes = {
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
  onNavigate: PropTypes.func,
};

RailFlyout.propTypes = {
  item: PropTypes.shape({
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
  }).isRequired,
  onNavigate: PropTypes.func,
  open: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

RailFlyout.defaultProps = {
  onNavigate: null,
  open: false,
  onMouseEnter: null,
  onMouseLeave: null,
};

CollapsedSidebarRail.defaultProps = {
  sections: [],
  onNavigate: null,
};

export default CollapsedSidebarRail;
