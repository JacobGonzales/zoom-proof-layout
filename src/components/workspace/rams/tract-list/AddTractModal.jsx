import React, { useState } from "react";
import PropTypes from "prop-types";

const DEFAULT_FORM = {
  tractName: "",
  installation: "Fort Carson",
  county: "El Paso County",
  agency: "USACE Omaha",
  milestone: "Initial Review",
  acquisition: "Pending",
  appraisal: "Pending",
  survey: "Pending",
  title: "Research",
  acreage: "100 acres",
};

function buildNextTractId(existingTracts) {
  const maxId = existingTracts.reduce((max, tract) => {
    const numericId = Number(String(tract.id).replace("TL-", ""));
    return Number.isNaN(numericId) ? max : Math.max(max, numericId);
  }, 1000);

  return `TL-${maxId + 1}`;
}

export default function AddTractModal({ open, existingTracts, onAdd, onClose }) {
  const [form, setForm] = useState(DEFAULT_FORM);

  function closeModal() {
    setForm(DEFAULT_FORM);
    onClose();
  }

  if (!open) {
    return null;
  }

  function updateField(key, value) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.tractName.trim()) {
      return;
    }

    onAdd({
      id: buildNextTractId(existingTracts),
      flagged: false,
      tractName: form.tractName.trim(),
      installation: form.installation,
      county: form.county,
      agency: form.agency,
      milestone: form.milestone,
      acquisition: form.acquisition,
      appraisal: form.appraisal,
      survey: form.survey,
      title: form.title,
      acreage: form.acreage,
      priority: "New tract intake",
      parcelManager: "Unassigned",
      nextAction: "Review newly added tract and complete intake validation.",
      legalNotes: "New tract entry created from the tract list action rail.",
    });

    setForm(DEFAULT_FORM);
  }

  return (
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center bg-slate-950/45 px-4 backdrop-blur-sm"
      onClick={closeModal}
      role="presentation"
    >
      <div
        className="w-full max-w-2xl rounded-3xl border border-slate-300/90 bg-white p-6 shadow-2xl dark:border-white/18 dark:bg-[#111831]"
        onClick={(event) => event.stopPropagation()}
        role="presentation"
      >
        <div className="text-lg font-extrabold text-slate-950 dark:text-white">Add tract</div>
        <div className="mt-2 text-sm text-slate-600 dark:text-white/70">
          Create a new tract record and drop it into the RAMS tract list.
        </div>

        <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          {[
            ["tractName", "Tract Name"],
            ["installation", "Installation"],
            ["county", "County"],
            ["agency", "Agency"],
            ["milestone", "Milestone"],
            ["acquisition", "Acquisition"],
            ["appraisal", "Appraisal"],
            ["survey", "Survey"],
            ["title", "Title"],
            ["acreage", "Acreage"],
          ].map(([key, label]) => (
            <label key={key} className={key === "tractName" ? "sm:col-span-2" : ""}>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
                {label}
              </span>
              <input
                type="text"
                value={form[key]}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#5e73e5] dark:border-white/18 dark:bg-[#0B1026] dark:text-white"
                onChange={(event) => updateField(key, event.target.value)}
              />
            </label>
          ))}

          <div className="sm:col-span-2 flex flex-wrap justify-end gap-2 pt-2">
            <button
              type="button"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/18 dark:text-white/80 dark:hover:bg-white/10"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#5e73e5] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Add tract
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

AddTractModal.propTypes = {
  open: PropTypes.bool,
  existingTracts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

AddTractModal.defaultProps = {
  open: false,
};
