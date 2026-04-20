import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppWorkspace, { AppWorkspaceRedirect } from "./pages/AppWorkspace";
import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/apps/:appId" element={<AppWorkspaceRedirect />} />
      <Route path="/apps/:appId/:tabId" element={<AppWorkspace />} />
    </Routes>
  );
}

export default AppRoutes;
