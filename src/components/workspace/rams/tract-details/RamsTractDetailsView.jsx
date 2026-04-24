import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useBlocker, useNavigate } from "react-router-dom";
import RamsMapPanel from "../map/RamsMapPanel";
import { useRamsTracts } from "../data/useRamsTracts";
import { TRACT_DETAIL_TABS } from "./tractDetailTabs";
import TractDetailsHeader from "./TractDetailsHeader";
import TractDetailsFormPanel from "./TractDetailsFormPanel";
import ActionModal from "../../../../ui/ActionModal";

export default function RamsTractDetailsView({ tractId }) {
  const navigate = useNavigate();
  const { tracts, getTractById, updateTract } = useRamsTracts();
  const tract = getTractById(tractId);
  const [activeSection, setActiveSection] = useState(TRACT_DETAIL_TABS[0].id);
  const [savedTract, setSavedTract] = useState(() => tract);
  const [draftTract, setDraftTract] = useState(() => tract);
  const [isEditing, setIsEditing] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [showDiscardConfirm, setShowDiscardConfirm] = useState(false);

  const currentTab = TRACT_DETAIL_TABS.find((tab) => tab.id === activeSection) || TRACT_DETAIL_TABS[0];
  const hasUnsavedChanges = useMemo(
    () => isEditing && JSON.stringify(draftTract) !== JSON.stringify(savedTract),
    [draftTract, isEditing, savedTract],
  );
  const blocker = useBlocker(hasUnsavedChanges);
  const showLeaveConfirm = blocker.state === "blocked";
  const displayTitle = isEditing ? draftTract.tractName : savedTract.tractName;
  const displayFlagged = isEditing ? draftTract.flagged : savedTract.flagged;
  const displayLocation =
    isEditing
      ? `${draftTract.installation} / ${draftTract.county}`
      : `${savedTract.installation} / ${savedTract.county}`;

  useEffect(() => {
    function handleBeforeUnload(event) {
      if (!hasUnsavedChanges) {
        return;
      }

      event.preventDefault();
      event.returnValue = "";
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  function beginEdit() {
    setIsEditing(true);
  }

  function requestDiscardChanges() {
    setShowDiscardConfirm(true);
  }

  function confirmDiscardChanges() {
    setDraftTract(savedTract);
    setIsEditing(false);
    setShowDiscardConfirm(false);
  }

  function saveChanges() {
    setSavedTract(draftTract);
    updateTract(draftTract.id, draftTract);
    setIsEditing(false);
    setShowSaveSuccess(true);
  }

  function updateField(key, value) {
    setDraftTract((current) => ({ ...current, [key]: value }));
  }

  return (
    <>
      <TractDetailsHeader
        title={displayTitle}
        tractId={savedTract.id}
        location={displayLocation}
        flagged={displayFlagged}
        isEditing={isEditing}
        onTitleChange={(value) => updateField("tractName", value)}
        onFlagChange={(value) => updateField("flagged", value)}
        tractOptions={tracts}
        onSelectTract={(nextTractId) => navigate(`/apps/rams/settings?tract=${nextTractId}`)}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)]">
        <TractDetailsFormPanel
          tabs={TRACT_DETAIL_TABS}
          activeSection={activeSection}
          activeTab={currentTab}
          isEditing={isEditing}
          draftTract={draftTract}
          onSelectTab={setActiveSection}
          onBeginEdit={beginEdit}
          onDiscard={requestDiscardChanges}
          onSave={saveChanges}
          onUpdateField={updateField}
        />

        <div className="lg:pt-1">
          <RamsMapPanel
            filters={{
              installation: savedTract.installation,
              county: savedTract.county,
              milestone: savedTract.milestone,
              agency: savedTract.agency,
            }}
          />
        </div>
      </div>

      <ActionModal
        open={showSaveSuccess}
        tone="success"
        title="Changes saved"
        description="Your tract updates were saved successfully."
        confirmLabel="Close"
        onConfirm={() => setShowSaveSuccess(false)}
      />

      <ActionModal
        open={showDiscardConfirm}
        tone="danger"
        title="Discard your edits?"
        description="You have unsaved changes in this tract. If you discard now, those edits will be lost."
        confirmLabel="Discard edits"
        cancelLabel="Keep editing"
        onConfirm={confirmDiscardChanges}
        onCancel={() => setShowDiscardConfirm(false)}
      />

      <ActionModal
        open={showLeaveConfirm}
        tone="danger"
        title="Leave without saving?"
        description="You have unsaved changes. If you continue, your edits will be lost."
        confirmLabel="Leave page"
        cancelLabel="Stay on page"
        onConfirm={() => {
          blocker.proceed?.();
        }}
        onCancel={() => {
          blocker.reset?.();
        }}
      />
    </>
  );
}

RamsTractDetailsView.propTypes = {
  tractId: PropTypes.string,
};

RamsTractDetailsView.defaultProps = {
  tractId: undefined,
};
