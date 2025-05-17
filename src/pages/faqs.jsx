import React, { useState } from "react";
import faqImage from "../assets/images/faq-fruits.jpg";
import deliveryImage from "../assets/images/shipping-fruits.jpg";
import cleanseImage from "../assets/images/cleanse-fruits.jpg";

const FAQSection = ({ title, faqs, image }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-10 py-12 border-b">
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
        "Currently, we only deliver within the Jakarta area, but we are working to expand our reach.",
    },
    {
      question: "How long do my juices and elixirs last?",
      answer: "Typically, our products last 3–5 days refrigerated.",
    },
    {
      question: "Do my juices need to be stored in a refrigerator?",
      answer: "Yes, we recommend refrigerating immediately upon arrival.",
    },
    {
      question: "How can I return my 16oz bottles?",
      answer:
        "You may return them to any of our physical stores or arrange a return on your next delivery.",
    },
  ];

  const shippingFAQs = [
    {
      question: "What is the cutoff time to place an order for next day delivery?",
      answer: "Orders must be placed before 6 PM for next day delivery.",
    },
    {
      question: "What areas do you deliver to?",
      answer: "We currently deliver across all major zones in Jakarta.",
    },
    {
      question: "Are your Tonics available for national shipping?",
      answer: "Not at this time. We are only servicing local delivery.",
    },
    {
      question: "What are your delivery and shipping fees?",
      answer:
        "Fees vary by location, but free shipping applies to orders over IDR 300,000.",
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
      <FAQSection title="Cleanses" faqs={cleanseFAQs} image={cleanseImage} />
    </div>
  );
}
