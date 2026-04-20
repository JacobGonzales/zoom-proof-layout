import React from "react";
import PropTypes from "prop-types";
import SidebarNav from "../nav/SidebarNav";
import SidebarPanel from "./SidebarPanel";

function MobileSidebarDrawer({
  brandTitle,
  brandSubtitle,
  navSections,
  open,
  onClose,
}) {
  return (
    <div
      className={[
        "xl:hidden fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close sidebar overlay"
        className={[
          "absolute inset-0 bg-black/30 transition-opacity duration-300 ease-out",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
      <aside
        className={[
          "absolute left-0 top-0 h-dvh w-80 p-4 transform transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <SidebarPanel>
          <div className="flex items-start justify-between">
            <div className="flex-1 px-6 pt-8">
              <div className="text-lg font-extrabold tracking-wide text-[#5e73e5]">
                {brandTitle}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-white/60">
                {brandSubtitle}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="m-4 rounded-lg bg-slate-900/5 px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/15"
            >
              Close
            </button>
          </div>

          <div className="mx-6 my-5 h-px bg-slate-200/80 dark:bg-white/10" />
          <div className="min-h-0 flex-1 overflow-y-auto">
            <SidebarNav sections={navSections} onNavigate={onClose} />
          </div>
        </SidebarPanel>
      </aside>
    </div>
  );
}

MobileSidebarDrawer.propTypes = {
  brandTitle: PropTypes.string.isRequired,
  brandSubtitle: PropTypes.string.isRequired,
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
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileSidebarDrawer;
