import React from "react";
import PropTypes from "prop-types";
import SidebarNav from "../nav/SidebarNav";
import SidebarPanel from "./SidebarPanel";

function StickySidebar({
  brandTitle,
  brandSubtitle,
  navSections,
  workspaceMode,
  collapsed,
  onToggleCollapse,
}) {
  return (
    <aside
      className={[
        "hidden shrink-0 self-start xl:sticky xl:top-3 xl:block xl:z-50",
        collapsed
          ? "xl:w-20"
          : workspaceMode
            ? "xl:w-[17rem] 2xl:w-[18rem]"
            : "xl:w-72 2xl:w-[18.5rem]",
      ].join(" ")}
    >
      <div className="h-[calc(100dvh-0.75rem)]">
        <SidebarPanel>
          <div className={["relative", collapsed ? "px-3 pt-5" : "px-6 pt-8"].join(" ")}>
            {onToggleCollapse ? (
              <button
                type="button"
                aria-label={collapsed ? "Expand sidebar navigation" : "Collapse sidebar navigation"}
                className={[
                  "absolute inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 text-slate-700 ring-1 ring-slate-900/10 transition-colors hover:bg-slate-900/10 dark:bg-white/10 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/15",
                  collapsed ? "left-1/2 top-2.5 -translate-x-1/2" : "right-4 top-4",
                ].join(" ")}
                onClick={onToggleCollapse}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                  {collapsed ? (
                    <path
                      d="m10 7 5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ) : (
                    <>
                      <path
                        d="M9 7 4 12l5 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 5v14"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </>
                  )}
                </svg>
              </button>
            ) : null}

            <div className={collapsed ? "grid w-full place-items-center pt-9" : "pr-12"}>
              {collapsed ? (
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#5e73e5]/15 text-sm font-extrabold tracking-[0.18em] text-[#5e73e5] ring-1 ring-[#5e73e5]/25">
                  S
                </div>
              ) : (
                <>
                  <div className="text-xs font-extrabold uppercase tracking-[0.24em] text-slate-500 dark:text-white/55">
                    SENTINEL
                  </div>
                  <div className="text-lg font-extrabold tracking-wide text-[#5e73e5]">
                    {brandTitle}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-white/60">
                    {brandSubtitle}
                  </div>
                </>
              )}
            </div>
          </div>

          {!collapsed ? <div className="mx-6 my-5 h-px bg-slate-200/80 dark:bg-white/10" /> : null}
          <div className={["min-h-0 flex-1 pb-6", collapsed ? "overflow-visible" : "overflow-y-auto"].join(" ")}>
            <SidebarNav sections={navSections} collapsed={collapsed} />
          </div>
        </SidebarPanel>
      </div>
    </aside>
  );
}

StickySidebar.propTypes = {
  brandTitle: PropTypes.string.isRequired,
  brandSubtitle: PropTypes.string.isRequired,
  collapsed: PropTypes.bool,
  onToggleCollapse: PropTypes.func,
  workspaceMode: PropTypes.bool,
  navSections: PropTypes.arrayOf(
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

StickySidebar.defaultProps = {
  collapsed: false,
  onToggleCollapse: null,
  workspaceMode: false,
};

export default StickySidebar;
