import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<div>about</div>} />
      <Route path="/platform/*" element={<div>Platform Page</div>} />
      <Route path="/enterprise" element={<div>Enterprise Page</div>} />
      <Route path="/pricing" element={<div>Pricing Page</div>} />
      <Route path="/login" element={<div>Login Page</div>} />
      <Route path="/contact" element={<div>Contact Sales</div>} />
      <Route path="/get-started" element={<div>Get Started</div>} />
    </Routes>
  </BrowserRouter>
);
