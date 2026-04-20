import React from "react";
import PropTypes from "prop-types";

function InfoList({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-2xl bg-slate-900/5 px-4 py-3 text-sm leading-6 text-slate-700 ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-white/75 dark:ring-white/10"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

InfoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InfoList;
