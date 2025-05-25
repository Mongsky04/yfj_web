import React, { useState, useEffect } from "react";
import faqImage from "../assets/images/faq-fruits.jpg";
import deliveryImage from "../assets/images/shipping-fruits.jpg";
import cleanseImage from "../assets/images/cleanse-fruits.jpg";
import { useLocation } from 'react-router-dom';

const FAQSection = ({ title, faqs, image }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <div id="faqs" className="flex flex-col md:flex-row items-start gap-10 py-12 border-b">
      <div className="flex-1">
        <h2 className="text-2xl font-bold uppercase mb-6">{title}</h2>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
                <div className="w-full">
                  <p className="text-md font-medium">{faq.question}</p>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openIndex === index
                        ? "max-h-40 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 hidden md:block">
        <img
          src={image}
          alt={title}
          className="w-full max-w-sm object-contain"
        />
      </div>
    </div>
  );
};

export default function FAQsPage() {
  const generalFAQs = [
    {
      question: "Can I order Yuliana Fresh Juice outside of Jakarta?",
      answer:
        "Yes, we are able to deliver outside of Jakarta.",
    },
    {
      question: "Does it contain sugar?",
      answer: "For juices like lemon and lime, we do not add any sugar at all, making them highly recommended as a mixer or a healthy beverage. For our other products, we use a small amount of pure sugar cane to maintain flavor consistency.",
    },
    {
      question: "Do my juices need to be stored in a refrigerator?",
      answer: "Yes, we recommend refrigerating immediately upon arrival.",
    },
    {
      question: "How long does the juice last?",
      answer:
        "Our juice stays fresh for 1–2 weeks when refrigerated at 5°C.",
    },
  ];

  const shippingFAQs = [
    {
      question: "Is there a minimum purchase for HORECA?",
      answer: "Yes, our minimum delivery quantity is 50 liters for the Jabodetabek area.",
    },
    {
      question: "How many days in advance should HORECA orders be placed?",
      answer: "The minimum order notice is 1 day in advance (H-1).",
    },
    {
      question: "What is the return procedure?",
      answer:
        "We apply a customer satisfaction policy — if there are any complaints regarding our product within the best before period, we will conduct an inspection and provide a replacement product accordingly.",
    },
  ];

  const cleanseFAQs = [
    {
      question: "How to prepare before for a cleanse?",
      answer: "Begin with lighter meals and stay hydrated.",
    },
    {
      question: "What to do during a cleanse?",
      answer: "Stick to the juice schedule and rest as needed.",
    },
    {
      question: "What if I am experiencing detox symptoms?",
      answer:
        "Mild symptoms are normal. If concerned, consult a healthcare provider.",
    },
    {
      question: "Can I exercise while cleansing?",
      answer: "Light activity is fine, but avoid strenuous exercise.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      <FAQSection
        title="Frequently Asked Questions"
        faqs={generalFAQs}
        image={faqImage}
      />
      <FAQSection
        title="Shipping and Delivery"
        faqs={shippingFAQs}
        image={deliveryImage}
      />
    </div>
  );
}
