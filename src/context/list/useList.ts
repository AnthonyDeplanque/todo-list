import { useContext } from "react";
import { ListContext, ListContextType } from "./listContext";

export const useList = (): ListContextType => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error("useList must be used within a ThemeProvider");
  }

  return context;
};
