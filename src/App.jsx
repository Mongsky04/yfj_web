import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import FormSwitcher from "./components/ui/FormSwitcher";
import OrderForm from "./components/ui/OrderForm";
import ContactForm from "./components/ui/ContactForm";
import OSMMap from "./components/ui/map";
import "leaflet/dist/leaflet.css";
import Location from "./pages/locationpage";
import About from "./pages/about";

function App() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

export default App;
