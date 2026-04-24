// src/nav/SidebarNav.jsx
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import CollapsedSidebarRail from "./CollapsedSidebarRail";
import ExpandedSidebarSections from "./ExpandedSidebarSections";

function getInitialExpandedState(sections, pathname) {
  return sections.reduce((acc, section) => {
    section.items.forEach((item) => {
      if (item.defaultExpanded === true) {
        acc[item.key] = true;
      }

      if (
        item.autoExpandOnActive !== false &&
        item.children?.some((child) => child.to === pathname)
      ) {
        acc[item.key] = true;
      }
    });

    return acc;
  }, {});
}

function SidebarNav({ sections, onNavigate, collapsed }) {
  const location = useLocation();
  const routeExpandedGroups = useMemo(
    () => getInitialExpandedState(sections, location.pathname),
    [location.pathname, sections],
  );
  const [manualExpandedGroups, setManualExpandedGroups] = useState({});

  function isGroupExpanded(key) {
    if (Object.prototype.hasOwnProperty.call(manualExpandedGroups, key)) {
      return manualExpandedGroups[key];
    }

    return Boolean(routeExpandedGroups[key]);
  }

  function toggleGroup(key) {
    setManualExpandedGroups((current) => ({
      ...current,
      [key]: !isGroupExpanded(key),
    }));
  }

  const expandedGroups = sections.reduce((acc, section) => {
    section.items.forEach((item) => {
      acc[item.key] = isGroupExpanded(item.key);
    });
    return acc;
  }, {});

  if (collapsed) {
    return <CollapsedSidebarRail sections={sections} onNavigate={onNavigate} />;
  }

  return (
    <ExpandedSidebarSections
      sections={sections}
      pathname={location.pathname}
      expandedGroups={expandedGroups}
      onNavigate={onNavigate}
      onToggleGroup={toggleGroup}
    />
  );
}

SidebarNav.propTypes = {
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
          autoExpandOnActive: PropTypes.bool,
          defaultExpanded: PropTypes.bool,
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
  collapsed: PropTypes.bool,
};

SidebarNav.defaultProps = {
  sections: [],
  onNavigate: null,
  collapsed: false,
};

export default SidebarNav;
