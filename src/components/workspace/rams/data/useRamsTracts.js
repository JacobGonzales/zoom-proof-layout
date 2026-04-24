import { createContext, useContext } from "react";

export const RamsTractContext = createContext(null);

export function useRamsTracts() {
  const context = useContext(RamsTractContext);

  if (!context) {
    throw new Error("useRamsTracts must be used within RamsTractProvider");
  }

  return context;
}
