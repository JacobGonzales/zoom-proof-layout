import React from "react";
import PropTypes from "prop-types";
import TopBar from "./TopBar";

function StickyNavigationBar({
  breadcrumbs,
  titleAction,
  onOpenMenu,
  rightSlot,
}) {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none invisible xl:hidden">
        <div className="pt-3 sm:pt-4 lg:pt-5">
          <TopBar
            breadcrumbs={breadcrumbs}
            titleAction={titleAction}
            onOpenMenu={onOpenMenu}
            rightSlot={rightSlot}
          />
        </div>
      </div>

      <div className="fixed top-3 left-3 right-3 z-40 sm:left-4 sm:right-4 lg:left-[2%] lg:right-[2%] xl:hidden">
        <TopBar
          breadcrumbs={breadcrumbs}
          titleAction={titleAction}
          onOpenMenu={onOpenMenu}
          rightSlot={rightSlot}
        />
      </div>

      <div className="hidden xl:block xl:mb-6">
        <TopBar
          breadcrumbs={breadcrumbs}
          titleAction={titleAction}
          onOpenMenu={onOpenMenu}
          rightSlot={rightSlot}
        />
      </div>
    </>
  );
}

StickyNavigationBar.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
  ).isRequired,
  titleAction: PropTypes.node,
  onOpenMenu: PropTypes.func.isRequired,
  rightSlot: PropTypes.node,
};

StickyNavigationBar.defaultProps = {
  titleAction: null,
  rightSlot: null,
};

export default StickyNavigationBar;
