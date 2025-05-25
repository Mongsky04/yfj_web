import React from "react";
import Logo from "../../assets/images/YFJ.png";
import { Link } from "react-router-dom";

const navColumns = [
  {
    items: [
      { label: "OUR STORY", path: "/about#story" },
      { label: "OUR JUICE", path: "/about#our-juice" },
      { label: "LOCATION", path: "/contact#location" },
    ],
  },
  {
    items: [
      { label: "FAQS", path: "/faqs#faqs" },
      { label: "WHOLESALE", path: "/contact?form=order" },
      { label: "CONTACT US", path: "/contact?form=contact" },
    ],
  },
  {
    items: [
      { label: "FACEBOOK", external: true, path: "https://facebook.com/yulianafreshjuice" },
      { label: "INSTAGRAM", external: true, path: "https://instagram.com/yulianafreshjuice" },
      { label: "TERMS OF SERVICE", path: "/terms" },
      { label: "PRIVACY POLICY", path: "/privacy" },
    ],
  },
];

const NavColumn = ({ items }) => (
  <ul className="space-y-3 text-base sm:text-lg font-semibold text-gray-600">
    {items.map(({ label, path, external }) => (
      <li key={label}>
        {external ? (
          <a href={path} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {label}
          </a>
        ) : (
          <Link to={path} className="hover:underline">
            {label}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

const Footer = () => (
  <footer className="bg-gray-100 text-gray-600 px-6 md:px-20 py-10">
    <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img src={Logo} alt="Yuliana Juice" className="w-28 sm:w-32 object-contain" />
        </Link>
      </div>

      {/* Navigation Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 flex-1 w-full max-w-4xl">
        {navColumns.map((col, idx) => (
          <NavColumn key={idx} items={col.items} />
        ))}
      </div>
    </div>

    <hr className="border-gray-300 my-8" />

    <div className="text-xs text-gray-500 text-center font-medium">
      © {new Date().getFullYear()} YFJ - Fresh Juice by Yuliana. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;