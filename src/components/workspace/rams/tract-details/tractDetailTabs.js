export const TRACT_DETAIL_TABS = [
  {
    id: "record",
    label: "Record",
    fields: [
      { key: "flagged", label: "Flagged", headerOnly: true },
      { key: "tractName", label: "Tract Name", headerOnly: true },
      { key: "id", label: "Tract ID" },
      { key: "acreage", label: "Acreage" },
      { key: "priority", label: "Priority", multiline: true },
    ],
  },
  {
    id: "location",
    label: "Location",
    fields: [
      { key: "installation", label: "Installation" },
      { key: "county", label: "County" },
      { key: "agency", label: "Agency" },
    ],
  },
  {
    id: "status",
    label: "Status",
    fields: [
      { key: "milestone", label: "Milestone" },
      { key: "acquisition", label: "Acquisition" },
      { key: "appraisal", label: "Appraisal" },
      { key: "survey", label: "Survey" },
      { key: "title", label: "Title" },
    ],
  },
  {
    id: "coordination",
    label: "Coordination",
    fields: [
      { key: "parcelManager", label: "Parcel Manager" },
      { key: "nextAction", label: "Next Action", multiline: true },
      { key: "legalNotes", label: "Legal Notes", multiline: true },
    ],
  },
];
