import React from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import AppWorkspace, { AppWorkspaceRedirect } from "./pages/AppWorkspace";
import Dashboard from "./pages/Dashboard";
import Documentation from "./pages/Documentation";
import Feedback from "./pages/Feedback";
import PageHelp from "./pages/PageHelp";
import Profile from "./pages/Profile";
import SignOut from "./pages/SignOut";
import Tables from "./pages/Tables";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/page-help" element={<PageHelp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<Navigate to="/sign-out" replace />} />
      <Route path="/sign-out" element={<SignOut />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/apps/:appId" element={<AppWorkspaceRedirect />} />
      <Route path="/apps/:appId/:tabId" element={<AppWorkspace />} />
    </>,
  ),
);

export default appRouter;
