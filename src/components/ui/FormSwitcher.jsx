import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";
import OrderForm from "./OrderForm";

const FormSwitcher = () => {
  const location = useLocation();
  const [showOrder, setShowOrder] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const formType = params.get("form");

    if (formType === "order") {
      setShowOrder(true);
    } else if (formType === "contact") {
      setShowOrder(false);
    }

    setTimeout(() => {
      if (formRef.current) {
        const offset = 200
        const topPos = formRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }
    }, 200);
  }, [location.search]);

  return (
    <div className="relative min-h-screen bg-gray-50 px-6 pt-20 pb-10">
      {/* Toggle Switch */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <span
          className={`text-sm font-montserrat ${
            !showOrder ? "text-[#FFB22C]" : "text-gray-500"
          }`}
        >
          Contact
        </span>
        <label className="relative inline-block w-12 h-6 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={showOrder}
            onChange={() => setShowOrder((v) => !v)}
          />
          <div className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-[#FFB22C] transition-colors" />
          <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-transform" />
        </label>
        <span
          className={`text-sm font-montserrat ${
            showOrder ? "text-[#FFB22C]" : "text-gray-500"
          }`}
        >
          Order
        </span>
      </div>

      {/* Form Section with scroll target */}
      <div ref={formRef} className="mt-6">
        {showOrder ? <OrderForm /> : <ContactForm />}
      </div>
    </div>
  );
};

export default FormSwitcher;
