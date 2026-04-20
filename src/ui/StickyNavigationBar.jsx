import React from "react";
import PropTypes from "prop-types";
import CompactHeaderNav from "./CompactHeaderNav";
import TopBar from "./TopBar";

function StickyNavigationBar({
  breadcrumbs,
  title,
  navSections,
  onOpenMenu,
  rightSlot,
}) {
  return (
    <div className="sticky top-0 z-40 mb-6 space-y-3 bg-slate-50/88 pb-4 supports-[backdrop-filter]:backdrop-blur-sm dark:bg-[#070A1A]/88">
      <TopBar
        breadcrumbs={breadcrumbs}
        title={title}
        onOpenMenu={onOpenMenu}
        rightSlot={rightSlot}
      />
      <CompactHeaderNav sections={navSections} />
    </div>
  );
}

StickyNavigationBar.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
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
  onOpenMenu: PropTypes.func.isRequired,
  rightSlot: PropTypes.node,
};

StickyNavigationBar.defaultProps = {
  rightSlot: null,
};

export default StickyNavigationBar;
