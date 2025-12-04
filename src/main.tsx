import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import About from "./app/about/About.tsx";
import Communities from "./app/communities/Communities.tsx";
import Resources from "./app/resources/resources.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
