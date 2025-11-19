import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import About from "./app/about/About.tsx";
import { BrowserRouter, Route, Routes } from "react-router"; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App /> }/> 
    <Route path="/about" element={<About /> }/> 
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
