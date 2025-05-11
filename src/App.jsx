import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import About from "./pages/about";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/product/all" element={<AllProducts />} />
        </Routes>
      </main>

      <Footer />
    </div>
    </>
  );
}

export default App;
