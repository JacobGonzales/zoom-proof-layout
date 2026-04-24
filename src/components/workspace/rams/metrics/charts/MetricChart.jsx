import React from "react";
import PropTypes from "prop-types";

function TrendLineChart() {
  return (
    <svg viewBox="0 0 240 120" className="h-40 w-full" fill="none" aria-hidden="true">
      <path d="M18 96H222" stroke="currentColor" className="text-slate-300 dark:text-white/18" />
      <path d="M18 72H222" stroke="currentColor" className="text-slate-300/80 dark:text-white/12" />
      <path d="M18 48H222" stroke="currentColor" className="text-slate-300/80 dark:text-white/12" />
      <path d="M18 24H222" stroke="currentColor" className="text-slate-300/80 dark:text-white/12" />
      <path
        d="M18 88C36 82 49 70 66 66C84 61 97 73 114 62C132 49 144 24 162 26C180 28 193 49 222 36"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="66" cy="66" r="4" fill="#10b981" />
      <circle cx="114" cy="62" r="4" fill="#10b981" />
      <circle cx="162" cy="26" r="4" fill="#10b981" />
      <circle cx="222" cy="36" r="4" fill="#10b981" />
    </svg>
  );
}

function VerticalBarChart() {
  const bars = [44, 82, 58, 94, 72, 51, 88];

  return (
    <svg viewBox="0 0 240 120" className="h-40 w-full" fill="none" aria-hidden="true">
      <path d="M18 96H222" stroke="currentColor" className="text-slate-300 dark:text-white/18" />
      {bars.map((value, index) => {
        const x = 28 + index * 28;
        const height = value;
        const y = 96 - height;
        return (
          <rect
            key={x}
            x={x}
            y={y}
            width="16"
            height={height}
            rx="4"
            fill={index % 2 === 0 ? "#5e73e5" : "#10b981"}
            opacity={index === 3 ? 1 : 0.88}
          />
        );
      })}
    </svg>
  );
}

function AreaChart() {
  return (
    <svg viewBox="0 0 240 120" className="h-40 w-full" fill="none" aria-hidden="true">
      <path d="M18 96H222" stroke="currentColor" className="text-slate-300 dark:text-white/18" />
      <path
        d="M18 88C40 80 56 74 78 70C100 66 118 80 140 58C162 36 181 18 222 28V96H18Z"
        fill="url(#areaFill)"
      />
      <path
        d="M18 88C40 80 56 74 78 70C100 66 118 80 140 58C162 36 181 18 222 28"
        stroke="#06b6d4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="areaFill" x1="120" y1="18" x2="120" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06b6d4" stopOpacity="0.35" />
          <stop offset="1" stopColor="#06b6d4" stopOpacity="0.02" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DonutChart() {
  const segments = [
    { color: "#10b981", dash: "75 188", offset: "0" },
    { color: "#5e73e5", dash: "59 204", offset: "-75" },
    { color: "#06b6d4", dash: "44 219", offset: "-134" },
    { color: "#f59e0b", dash: "31 232", offset: "-178" },
  ];

  return (
    <div className="flex h-40 items-center justify-center">
      <svg viewBox="0 0 120 120" className="h-32 w-32" fill="none" aria-hidden="true">
        <circle cx="60" cy="60" r="38" stroke="currentColor" strokeWidth="12" className="text-slate-300 dark:text-white/18" />
        {segments.map((segment) => (
          <circle
            key={segment.color}
            cx="60"
            cy="60"
            r="38"
            stroke={segment.color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={segment.dash}
            strokeDashoffset={segment.offset}
            transform="rotate(-90 60 60)"
          />
        ))}
        <text x="60" y="56" textAnchor="middle" className="fill-slate-900 text-[14px] font-bold dark:fill-white">
          84%
        </text>
        <text x="60" y="72" textAnchor="middle" className="fill-slate-500 text-[8px] font-semibold uppercase tracking-[0.18em] dark:fill-white/55">
          Coverage
        </text>
      </svg>
    </div>
  );
}

function ScatterChart() {
  const points = [[36, 78], [60, 64], [82, 72], [106, 52], [124, 58], [148, 46], [172, 38], [196, 30]];

  return (
    <svg viewBox="0 0 240 120" className="h-40 w-full" fill="none" aria-hidden="true">
      <path d="M18 96H222" stroke="currentColor" className="text-slate-300 dark:text-white/18" />
      <path d="M24 18V96" stroke="currentColor" className="text-slate-300 dark:text-white/18" />
      {points.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#8b5cf6" />
      ))}
      <path d="M36 78 60 64 82 72 106 52 124 58 148 46 172 38 196 30" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5 5" />
    </svg>
  );
}

function StackedBarsChart() {
  const bars = [[24, 18, 20], [34, 12, 22], [28, 22, 18], [38, 18, 16], [30, 14, 26]];

  return (
    <svg viewBox="0 0 240 120" className="h-40 w-full" fill="none" aria-hidden="true">
      <path d="M18 96H222" stroke="currentColor" className="text-slate-300 dark:text-white/18" />
      {bars.map((segments, index) => {
        const x = 34 + index * 34;
        let currentY = 96;
        return segments.map((segment, segmentIndex) => {
          currentY -= segment;
          const colors = ["#10b981", "#06b6d4", "#5e73e5"];
          return (
            <rect
              key={`${x}-${segmentIndex}`}
              x={x}
              y={currentY}
              width="20"
              height={segment}
              rx="3"
              fill={colors[segmentIndex]}
            />
          );
        });
      })}
    </svg>
  );
}

function WaveChart() {
  return (
    <svg viewBox="0 0 240 120" className="h-40 w-full" fill="none" aria-hidden="true">
      <path
        d="M18 78C34 62 50 62 66 78C82 94 98 94 114 78C130 62 146 62 162 78C178 94 194 94 222 66"
        stroke="#f59e0b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M18 92C34 80 50 80 66 92C82 104 98 104 114 92C130 80 146 80 162 92C178 104 194 104 222 82"
        stroke="#06b6d4"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

function HorizontalBarsChart() {
  const rows = [
    { label: "East", width: 162, color: "#5e73e5" },
    { label: "South", width: 138, color: "#10b981" },
    { label: "North", width: 116, color: "#06b6d4" },
    { label: "West", width: 94, color: "#f59e0b" },
  ];

  return (
    <div className="grid gap-3 pt-3">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[3.5rem,1fr] items-center gap-3">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-white/55">
            {row.label}
          </div>
          <div className="h-3 bg-slate-200/90 dark:bg-white/12">
            <div className="h-3" style={{ width: `${row.width}px`, backgroundColor: row.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniColumnsChart() {
  const values = [22, 30, 18, 36, 42, 31, 26, 48, 38, 44, 29, 35];

  return (
    <svg viewBox="0 0 240 120" className="h-40 w-full" fill="none" aria-hidden="true">
      <path d="M18 96H222" stroke="currentColor" className="text-slate-300 dark:text-white/18" />
      {values.map((value, index) => {
        const x = 20 + index * 17;
        return (
          <rect
            key={x}
            x={x}
            y={96 - value}
            width="10"
            height={value}
            rx="2"
            fill={index > 7 ? "#10b981" : "#5e73e5"}
            opacity={0.82}
          />
        );
      })}
    </svg>
  );
}

const CHART_COMPONENTS = {
  "trend-line": TrendLineChart,
  "vertical-bars": VerticalBarChart,
  area: AreaChart,
  donut: DonutChart,
  scatter: ScatterChart,
  "stacked-bars": StackedBarsChart,
  wave: WaveChart,
  "horizontal-bars": HorizontalBarsChart,
  "mini-columns": MiniColumnsChart,
};

export default function MetricChart({ chartId }) {
  const ChartComponent = CHART_COMPONENTS[chartId] || TrendLineChart;
  return <ChartComponent />;
}

MetricChart.propTypes = {
  chartId: PropTypes.oneOf(Object.keys(CHART_COMPONENTS)).isRequired,
};
