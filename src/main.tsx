import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ListContextProvider } from "./context/list/ListContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ListContextProvider>
      <App />
    </ListContextProvider>
  </StrictMode>
);
