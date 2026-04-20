import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BreadcrumbTrail({ items }) {
  return (
    <div className="min-w-0 text-xs font-semibold text-slate-600 dark:text-white/70">
      <span className="break-words">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const content = item.to && !isLast ? (
            <Link
              to={item.to}
              className="transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ) : (
            <span className={isLast ? "font-semibold text-slate-900 dark:text-white" : ""}>
              {item.label}
            </span>
          );

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              {index > 0 ? <span className="px-2 text-slate-400 dark:text-white/35">/</span> : null}
              {content}
            </React.Fragment>
          );
        })}
      </span>
    </div>
  );
}

BreadcrumbTrail.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
    }),
  ).isRequired,
};

export default BreadcrumbTrail;
