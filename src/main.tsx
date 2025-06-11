import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/0" />} />
        <Route path="/:currentStep" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
