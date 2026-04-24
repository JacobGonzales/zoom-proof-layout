import React from "react";
import PropTypes from "prop-types";

function InfoList({ items, flat }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div
          key={item}
          className={
            flat
              ? "border-b border-slate-300/90 pb-3 text-sm leading-6 text-slate-700 dark:border-white/18 dark:text-white/75"
              : "rounded-2xl bg-slate-900/5 px-4 py-3 text-sm leading-6 text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-white/75 dark:ring-white/10"
          }
        >
          {item}
        </div>
      ))}
    </div>
  );
}

InfoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  flat: PropTypes.bool,
};

InfoList.defaultProps = {
  flat: false,
};

export default InfoList;
