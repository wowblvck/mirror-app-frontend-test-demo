import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

import "./index.css";

import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);
