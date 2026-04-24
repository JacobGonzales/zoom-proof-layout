import React from "react";
import PropTypes from "prop-types";

function FilterSelect({ label, value, options, onChange }) {
  return (
    <label className="flex min-w-0 flex-1 flex-col gap-2">
      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
        {label}
      </span>
      <select
        className="rounded-xl border border-slate-300/90 bg-white px-3 py-3 text-sm font-semibold text-slate-900 outline-none transition-colors focus:border-[#5e73e5] dark:border-white/18 dark:bg-[#111831] dark:text-white"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

FilterSelect.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function RamsMapFilters({ filters, options, onChange }) {
  return (
    <section className="border-b border-slate-300/90 pb-6 dark:border-white/18">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        <FilterSelect
          label="Select Installation"
          value={filters.installation}
          options={options.installation}
          onChange={(event) => onChange("installation", event.target.value)}
        />
        <FilterSelect
          label="Select County"
          value={filters.county}
          options={options.county}
          onChange={(event) => onChange("county", event.target.value)}
        />
        <FilterSelect
          label="Select Milestone"
          value={filters.milestone}
          options={options.milestone}
          onChange={(event) => onChange("milestone", event.target.value)}
        />
        <FilterSelect
          label="Select Branch"
          value={filters.branch}
          options={options.branch}
          onChange={(event) => onChange("branch", event.target.value)}
        />
        <FilterSelect
          label="Select Agency"
          value={filters.agency}
          options={options.agency}
          onChange={(event) => onChange("agency", event.target.value)}
        />
      </div>
    </section>
  );
}

RamsMapFilters.propTypes = {
  filters: PropTypes.shape({
    installation: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    milestone: PropTypes.string.isRequired,
    branch: PropTypes.string.isRequired,
    agency: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.shape({
    installation: PropTypes.arrayOf(PropTypes.string).isRequired,
    county: PropTypes.arrayOf(PropTypes.string).isRequired,
    milestone: PropTypes.arrayOf(PropTypes.string).isRequired,
    branch: PropTypes.arrayOf(PropTypes.string).isRequired,
    agency: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
