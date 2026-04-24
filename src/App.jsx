import React from "react";
import { RouterProvider } from "react-router-dom";
import appRouter from "./AppRoutes";

export default function App() {
  return <RouterProvider router={appRouter} />;
}
