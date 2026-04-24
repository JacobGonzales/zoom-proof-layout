import React from "react";
import PropTypes from "prop-types";

export default function TractDetailsActionBar({ isEditing, onBeginEdit, onDiscard, onSave }) {
  return (
    <div className="flex justify-end border-t border-slate-300/90 px-4 py-4 dark:border-white/18">
      <div className="flex flex-wrap items-center gap-2">
        {isEditing ? (
          <>
            <button
              type="button"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/18 dark:text-white/80 dark:hover:bg-white/10"
              onClick={onDiscard}
            >
              Discard changes
            </button>
            <button
              type="button"
              className="rounded-xl bg-[#5e73e5] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              onClick={onSave}
            >
              Save changes
            </button>
          </>
        ) : (
            <button
              type="button"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-slate-900"
              onClick={onBeginEdit}
            >
              Edit
            </button>
        )}
      </div>
    </div>
  );
}

TractDetailsActionBar.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  onBeginEdit: PropTypes.func.isRequired,
  onDiscard: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
