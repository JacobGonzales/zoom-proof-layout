export const FILTER_OPTIONS = {
  installation: ["Fort Carson", "Peterson SFB", "Schriever SFB", "Buckley SFB", "Cheyenne Mountain"],
  county: ["El Paso County", "Douglas County", "Arapahoe County", "Jefferson County", "Pueblo County"],
  milestone: ["Initial Review", "Appraisal", "Survey", "Title Review", "Ready for Acquisition"],
  branch: ["Army", "Space Force", "Air Force", "Army National Guard", "USACE"],
  agency: ["USACE Omaha", "AFCEC", "GSA", "State Land Board", "Local Authority"],
};

export const DEFAULT_FILTERS = {
  installation: FILTER_OPTIONS.installation[0],
  county: FILTER_OPTIONS.county[0],
  milestone: FILTER_OPTIONS.milestone[0],
  branch: FILTER_OPTIONS.branch[0],
  agency: FILTER_OPTIONS.agency[0],
};
