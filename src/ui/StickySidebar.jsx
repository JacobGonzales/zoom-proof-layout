import React from "react";
import PropTypes from "prop-types";
import SidebarNav from "../nav/SidebarNav";
import SidebarPanel from "./SidebarPanel";

function StickySidebar({ brandTitle, brandSubtitle, navSections }) {
  return (
    <aside className="hidden shrink-0 self-start xl:sticky xl:top-0 xl:block xl:w-80 xl:max-h-dvh xl:pt-4">
      <div className="h-[calc(100dvh-1rem)]">
        <SidebarPanel>
          <div className="px-6 pt-8">
            <div className="text-lg font-extrabold tracking-wide text-[#5e73e5]">
              {brandTitle}
            </div>
            <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-white/60">
              {brandSubtitle}
            </div>
          </div>

          <div className="mx-6 my-5 h-px bg-slate-200/80 dark:bg-white/10" />
          <div className="min-h-0 flex-1 overflow-y-auto pb-6">
            <SidebarNav sections={navSections} />
          </div>
        </SidebarPanel>
      </div>
    </aside>
  );
}

StickySidebar.propTypes = {
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
};

export default StickySidebar;
