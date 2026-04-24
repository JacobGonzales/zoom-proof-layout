import React from "react";
import PropTypes from "prop-types";
import TabButton from "./TabButton";
import DetailField from "./DetailField";
import TractDetailsActionBar from "./TractDetailsActionBar";

export default function TractDetailsFormPanel({
  tabs,
  activeSection,
  activeTab,
  isEditing,
  draftTract,
  onSelectTab,
  onBeginEdit,
  onDiscard,
  onSave,
  onUpdateField,
}) {
  const visibleFields = activeTab.fields.filter((field) => !field.headerOnly);

  return (
    <div className="border border-slate-300/90 dark:border-white/18">
      <div className="flex flex-wrap gap-2 border-b border-slate-300/90 px-4 py-4 dark:border-white/18">
        {tabs.map((tab) => (
          <TabButton key={tab.id} active={activeSection === tab.id} label={tab.label} onClick={() => onSelectTab(tab.id)} />
        ))}
      </div>

      <div className="border-b border-slate-300/90 px-4 py-4 dark:border-white/18">
        <div className="text-sm font-extrabold text-slate-900 dark:text-white">{activeTab.label}</div>
        <div className="mt-1 text-sm text-slate-600 dark:text-white/70">
          {isEditing
            ? "Edit fields across any tab, then save or discard all of your changes."
            : "Fields are read-only until you enter edit mode."}
        </div>
      </div>

      <div className="grid gap-4 px-4 py-5 sm:grid-cols-2">
        {visibleFields.map((field) => (
          <DetailField
            key={field.key}
            field={field}
            value={draftTract[field.key]}
            disabled={!isEditing}
            onChange={(event) => onUpdateField(field.key, event.target.value)}
          />
        ))}
      </div>

      <TractDetailsActionBar
        isEditing={isEditing}
        onBeginEdit={onBeginEdit}
        onDiscard={onDiscard}
        onSave={onSave}
      />
    </div>
  );
}

TractDetailsFormPanel.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          multiline: PropTypes.bool,
        }),
      ).isRequired,
    }),
  ).isRequired,
  activeSection: PropTypes.string.isRequired,
  activeTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
  }).isRequired,
  isEditing: PropTypes.bool.isRequired,
  draftTract: PropTypes.object.isRequired,
  onSelectTab: PropTypes.func.isRequired,
  onBeginEdit: PropTypes.func.isRequired,
  onDiscard: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onUpdateField: PropTypes.func.isRequired,
};
