import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/product/all" element={<AllProducts />} />
        </Routes>
        <Home />
      </main>

      <Footer />
    </div>
  );
}
