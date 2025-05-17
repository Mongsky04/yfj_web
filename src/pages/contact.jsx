import React from "react";
import Navbar from "../components/layout/Navbar";
import FormSwitcher from "../components/ui/FormSwitcher";
import LocationPage from "../components/ui/locationpage";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 space-y-12">
        <FormSwitcher />
        <section id="location">
          <LocationPage />
        </section>
        
      </main>
    </div>
  );
}
