import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EightIAHomeVisualLayout from "./home";
import About from "./pages/About";
import Services from "./pages/Services";
import EightSolutionPage from "./pages/Solutions";
import Contact from "./pages/Contact";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<EightIAHomeVisualLayout />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/solucoes" element={<EightSolutionPage />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);