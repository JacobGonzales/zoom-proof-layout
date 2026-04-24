import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRamsTracts } from "../data/useRamsTracts";
import PaginationButton from "./table/PaginationButton";
import SortButton from "./table/SortButton";
import MobileTractRowCard from "./table/MobileTractRowCard";
import StackedFilterPicker from "./StackedFilterPicker";
import { SORTABLE_COLUMNS } from "./table/tractTableColumns";
import { compareValues } from "./table/tractTableUtils";

const DEFAULT_FILTERS = {
  flaggedOnly: false,
  acquisition: "all",
  appraisal: "all",
  survey: "all",
  title: "all",
};

const STACKABLE_FILTER_OPTIONS = [
  { key: "acquisition", label: "Acquisition" },
  { key: "appraisal", label: "Appraisal" },
  { key: "survey", label: "Survey" },
  { key: "title", label: "Title" },
];

export default function RamsTractTable({ showStackedFilters }) {
  const navigate = useNavigate();
  const { tracts, updateTract } = useRamsTracts();
  const [sortConfig, setSortConfig] = useState({ column: "tractName", direction: "asc" });
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [tractNameQuery, setTractNameQuery] = useState("");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [activeStackedFilters, setActiveStackedFilters] = useState(
    STACKABLE_FILTER_OPTIONS.map((option) => option.key),
  );

  const filterOptions = useMemo(
    () => ({
      acquisition: [...new Set(tracts.map((row) => row.acquisition))],
      appraisal: [...new Set(tracts.map((row) => row.appraisal))],
      survey: [...new Set(tracts.map((row) => row.survey))],
      title: [...new Set(tracts.map((row) => row.title))],
    }),
    [tracts],
  );

  const visibleColumns = useMemo(
    () =>
      SORTABLE_COLUMNS.filter(
        (column) => column.key === "tractName" || activeStackedFilters.includes(column.key),
      ),
    [activeStackedFilters],
  );

  const filteredRows = useMemo(
    () =>
      tracts.filter((row) => {
        const matchesName = row.tractName.toLowerCase().includes(tractNameQuery.toLowerCase().trim());
        const matchesFlag = !filters.flaggedOnly || row.flagged;
        const matchesAcquisition =
          filters.acquisition === "all" || row.acquisition === filters.acquisition;
        const matchesAppraisal =
          filters.appraisal === "all" || row.appraisal === filters.appraisal;
        const matchesSurvey =
          filters.survey === "all" || row.survey === filters.survey;
        const matchesTitle = filters.title === "all" || row.title === filters.title;

        return (
          matchesName &&
          matchesFlag &&
          matchesAcquisition &&
          matchesAppraisal &&
          matchesSurvey &&
          matchesTitle
        );
      }),
    [filters, tractNameQuery, tracts],
  );

  const sortedRows = useMemo(
    () =>
      [...filteredRows].sort((left, right) =>
        compareValues(left[sortConfig.column], right[sortConfig.column], sortConfig.direction),
      ),
    [filteredRows, sortConfig],
  );

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / itemsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleRows = sortedRows.slice(startIndex, endIndex);

  function toggleSort(column) {
    setSortConfig((current) => ({
      column,
      direction: current.column === column && current.direction === "asc" ? "desc" : "asc",
    }));
  }

  function toggleRow(id, nextFlagged) {
    updateTract(id, { flagged: nextFlagged });
  }

  function changeItemsPerPage(nextValue) {
    setItemsPerPage(nextValue);
    setCurrentPage(1);
  }

  function updateFilter(key, value) {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
    setCurrentPage(1);
  }

  function openDetails(tractId) {
    navigate(`/apps/rams/settings?tract=${tractId}`);
  }

  function toggleStackedFilter(key) {
    setActiveStackedFilters((current) => {
      const isActive = current.includes(key);

      if (isActive) {
        updateFilter(key, "all");
        if (sortConfig.column === key) {
          setSortConfig({ column: "tractName", direction: "asc" });
        }
        return current.filter((item) => item !== key);
      }

      return [...current, key];
    });
  }

  return (
    <section>
      {showStackedFilters ? (
        <StackedFilterPicker
          options={STACKABLE_FILTER_OPTIONS}
          selectedKeys={activeStackedFilters}
          onToggle={toggleStackedFilter}
        />
      ) : null}

      <div className="mt-4 border border-slate-300/90 dark:border-white/18">
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[44rem] border-collapse xl:min-w-0">
            <thead className="bg-slate-50 dark:bg-[#111831]">
              <tr className="border-b border-slate-300/90 dark:border-white/18">
                <th className="w-16 px-3 py-3 text-left lg:w-20 lg:px-4">
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-500 dark:text-white/55">
                    Flag
                  </span>
                </th>
                {visibleColumns.map((column) => (
                  <th key={column.key} className="px-3 py-3 text-left lg:px-4">
                    <SortButton
                      label={column.label}
                      columnKey={column.key}
                      sortConfig={sortConfig}
                      onSort={toggleSort}
                    />
                  </th>
                ))}
              </tr>
              <tr className="border-b border-slate-300/90 dark:border-white/18">
                <th className="px-3 py-3 text-left lg:px-4">
                  <label className="inline-flex items-center text-xs font-semibold text-slate-700 dark:text-white/80">
                    <input
                      type="checkbox"
                      aria-label="Show flagged tracts only"
                      checked={filters.flaggedOnly}
                      onChange={(event) => updateFilter("flaggedOnly", event.target.checked)}
                    />
                  </label>
                </th>
                {visibleColumns.map((column) => (
                  <th key={column.key} className="px-3 py-3 text-left lg:px-4">
                    {column.key === "tractName" ? (
                      <input
                        type="text"
                        aria-label="Search tract names"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 outline-none placeholder:text-slate-400 dark:border-white/18 dark:bg-[#0B1026] dark:text-white/80 dark:placeholder:text-white/35"
                        placeholder="Search tract name"
                        value={tractNameQuery}
                        onChange={(event) => {
                          setTractNameQuery(event.target.value);
                          setCurrentPage(1);
                        }}
                      />
                    ) : (
                      <select
                        aria-label={`Filter ${column.label.toLowerCase()} status`}
                        className="w-full rounded-lg border border-slate-300 bg-white px-2 py-2 text-xs font-semibold text-slate-700 outline-none dark:border-white/18 dark:bg-[#0B1026] dark:text-white/80"
                        value={filters[column.key]}
                        onChange={(event) => updateFilter(column.key, event.target.value)}
                      >
                        <option value="all">All {column.key}</option>
                        {filterOptions[column.key].map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-slate-300/90 text-sm text-slate-700 last:border-b-0 dark:border-white/18 dark:text-white/80"
                >
                  <td className="px-3 py-4 lg:px-4">
                    <input
                      type="checkbox"
                      aria-label={`Flag ${row.tractName}`}
                      checked={row.flagged}
                      onClick={(event) => event.stopPropagation()}
                      onChange={(event) => toggleRow(row.id, event.target.checked)}
                    />
                  </td>
                  {visibleColumns.map((column) => (
                    <td
                      key={column.key}
                      className={[
                        "px-3 py-4 lg:px-4",
                        column.key === "tractName" ? "font-semibold text-slate-900 dark:text-white" : "",
                      ].join(" ")}
                    >
                      {column.key === "tractName" ? (
                        <button
                          type="button"
                          className="transition-colors hover:text-[#5e73e5] dark:hover:text-[#7c8dff]"
                          onClick={() => openDetails(row.id)}
                        >
                          {row.tractName}
                        </button>
                      ) : (
                        row[column.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          {visibleRows.map((row) => (
            <MobileTractRowCard
              key={row.id}
              fields={visibleColumns.filter((column) => column.key !== "tractName")}
              row={row}
              selected={row.flagged}
              onToggle={(event) => toggleRow(row.id, event.target.checked)}
              onOpenDetails={openDetails}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-300/90 px-4 py-4 dark:border-white/18 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-sm text-slate-600 dark:text-white/70">
            Showing <span className="font-semibold text-slate-900 dark:text-white">{startIndex + 1}</span> -{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              {Math.min(endIndex, sortedRows.length)}
            </span>{" "}
            of <span className="font-semibold text-slate-900 dark:text-white">{sortedRows.length}</span>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:justify-end">
            <label className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-white/70">
              <span>Items to show</span>
              <select
                className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 outline-none ring-0 dark:border-white/18 dark:bg-[#111831] dark:text-white"
                value={itemsPerPage}
                onChange={(event) => changeItemsPerPage(Number(event.target.value))}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <PaginationButton
                disabled={safeCurrentPage === 1}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              >
                Previous
              </PaginationButton>
              <div className="min-w-[7rem] text-sm font-semibold text-slate-700 dark:text-white/80">
                Page {safeCurrentPage} of {totalPages}
              </div>
              <PaginationButton
                disabled={safeCurrentPage === totalPages}
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              >
                Next
              </PaginationButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

RamsTractTable.propTypes = {
  showStackedFilters: PropTypes.bool,
};

RamsTractTable.defaultProps = {
  showStackedFilters: true,
};
