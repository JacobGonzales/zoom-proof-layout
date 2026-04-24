import React from "react";
import PropTypes from "prop-types";

export default function DetailField({ field, value, disabled, onChange }) {
  const fieldClass = [
    "mt-2 w-full border px-3 py-3 text-sm font-semibold outline-none transition-colors",
    disabled
      ? "border-slate-200 bg-slate-100 text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-white/45"
      : "border-slate-300 bg-white text-slate-900 focus:border-[#5e73e5] dark:border-white/18 dark:bg-[#111831] dark:text-white",
    field.multiline ? "min-h-[9rem]" : "",
  ].join(" ");

  return (
    <label className={field.multiline ? "sm:col-span-2" : ""}>
      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/50">
        {field.label}
      </span>
      {field.multiline ? (
        <textarea value={value || ""} disabled={disabled} className={fieldClass} onChange={onChange} />
      ) : (
        <input type="text" value={value || ""} disabled={disabled} className={fieldClass} onChange={onChange} />
      )}
    </label>
  );
}

DetailField.propTypes = {
  field: PropTypes.shape({
    label: PropTypes.string.isRequired,
    multiline: PropTypes.bool,
  }).isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

DetailField.defaultProps = {
  value: "",
};
