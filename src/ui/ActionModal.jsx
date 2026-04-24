import React from "react";
import PropTypes from "prop-types";

export default function ActionModal({
  open,
  tone,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
}) {
  if (!open) {
    return null;
  }

  const confirmClass =
    tone === "danger"
      ? "bg-rose-600 text-white hover:bg-rose-700"
      : "bg-emerald-600 text-white hover:bg-emerald-700";

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-slate-300/90 bg-white p-6 shadow-2xl dark:border-white/18 dark:bg-[#111831]">
        <div className="text-lg font-extrabold text-slate-950 dark:text-white">{title}</div>
        <div className="mt-2 text-sm leading-6 text-slate-600 dark:text-white/70">{description}</div>
        <div className="mt-6 flex flex-wrap justify-end gap-2">
          {cancelLabel ? (
            <button
              type="button"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/18 dark:text-white/80 dark:hover:bg-white/10"
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
          ) : null}
          <button
            type="button"
            className={["rounded-xl px-4 py-2 text-sm font-semibold transition-colors", confirmClass].join(" ")}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

ActionModal.propTypes = {
  open: PropTypes.bool,
  tone: PropTypes.oneOf(["success", "danger"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string.isRequired,
  cancelLabel: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
};

ActionModal.defaultProps = {
  open: false,
  tone: "success",
  cancelLabel: "",
  onCancel: () => {},
};
