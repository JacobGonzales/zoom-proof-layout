import React, { useState } from "react";
import PropTypes from "prop-types";
import AuroraBackground from "./AuroraBackground";
import TopBar from "./TopBar";
import ThemeToggle from "./ThemeToggle";
import SidebarNav from "../nav/SidebarNav";

function SidebarPanel({ children }) {
  return (
    <div className="sticky top-4 rounded-3xl p-[1px] bg-gradient-to-b from-[#5e73e5]/25 via-cyan-500/10 to-fuchsia-500/10">
      <div className="rounded-3xl bg-white/70 shadow-xl ring-1 ring-black/5 backdrop-blur dark:bg-[#0B1026]/70 dark:ring-white/10">
        {children}
      </div>
    </div>
  );
}

SidebarPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

function AppShell({ pageLabel, title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-dvh bg-slate-50 text-slate-900 dark:bg-[#070A1A] dark:text-white">
      <AuroraBackground />

      <div className="relative flex min-w-0 gap-4">
        <aside className="hidden w-80 shrink-0 lg:block">
          <div className="p-4">
            <SidebarPanel>
              <div className="px-6 pt-8">
                <div className="text-lg font-extrabold tracking-wide text-[#5e73e5]">
                  SETINEL PRISM
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-white/60">
                  Admin Dashboard
                </div>
              </div>

              <div className="mx-6 my-5 h-px bg-slate-200/80 dark:bg-white/10" />
              <SidebarNav />
            </SidebarPanel>
          </div>
        </aside>

        <div
          className={[
            "lg:hidden fixed inset-0 z-50",
            sidebarOpen ? "pointer-events-auto" : "pointer-events-none",
          ].join(" ")}
        >
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar overlay"
            className={[
              "absolute inset-0 bg-black/30 transition-opacity duration-300 ease-out",
              sidebarOpen ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
          <aside
            className={[
              "absolute left-0 top-0 h-dvh w-80 p-4 transform transition-transform duration-300 ease-out",
              sidebarOpen ? "translate-x-0" : "-translate-x-full",
            ].join(" ")}
          >
            <SidebarPanel>
              <div className="flex items-start justify-between">
                <div className="flex-1 px-6 pt-8">
                  <div className="text-lg font-extrabold tracking-wide text-[#5e73e5]">
                    SETINEL PRISM
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-white/60">
                    Admin Dashboard
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="m-4 rounded-lg bg-slate-900/5 px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-900/10 hover:bg-slate-900/10 dark:bg-white/10 dark:text-white/80 dark:ring-white/10 dark:hover:bg-white/15"
                >
                  Close
                </button>
              </div>

              <div className="mx-6 my-5 h-px bg-slate-200/80 dark:bg-white/10" />
              <div className="min-h-0 flex-1 overflow-y-auto">
                <SidebarNav onNavigate={() => setSidebarOpen(false)} />
              </div>
            </SidebarPanel>
          </aside>
        </div>

        <main className="min-w-0 flex-1">
          <TopBar
            pageLabel={pageLabel}
            title={title}
            onOpenMenu={() => setSidebarOpen(true)}
            rightSlot={<ThemeToggle />}
          />
          <div className="mx-auto w-full max-w-[1280px] px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

AppShell.propTypes = {
  pageLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppShell;
