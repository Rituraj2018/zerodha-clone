import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";


import Login from "./landing_page/login/Login";
// Landing Pages

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

// ✅ Dashboard wrapper
import Home from "./dashboard/Home";

// Layout
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>

      {/* Landing Pages */}
      <Route path="/login" element={<><Navbar /><Login /><Footer /></>} /> 
      <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
      <Route path="/signup" element={<><Navbar /><Signup /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
      <Route path="/product" element={<><Navbar /><ProductPage /><Footer /></>} />
      <Route path="/pricing" element={<><Navbar /><PricingPage /><Footer /></>} />
      <Route path="/support" element={<><Navbar /><SupportPage /><Footer /></>} />

      {/* ✅ Dashboard (IMPORTANT FIX) */}
      <Route path="/dashboard/*" element={<Home />} />

    </Routes>
  </BrowserRouter>
);