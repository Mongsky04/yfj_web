import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Juices from "./pages/juices";
import Puree from "./pages/puree";
import Concentrate from "./pages/concentrate";
import ProductDetail from "./pages/ProductDetail";
import ImportedFruits from "./pages/importedFruits";
import FrozenIQF from "./pages/frozenIQF";
import Terms from "./pages/TermsandCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQsPage from "./pages/faqs";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/all" element={<AllProducts />} />
          <Route path="/product/juices" element={<Juices />} />
          <Route path="/product/purees" element={<Puree />} />
          <Route path="/product/concentrates" element={<Concentrate />} />
          <Route path="/product/imported-fruits" element={<ImportedFruits />} />
          <Route path="/product/frozen-iqf" element={<FrozenIQF />} />
          <Route path="/product/:type/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<FAQsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
