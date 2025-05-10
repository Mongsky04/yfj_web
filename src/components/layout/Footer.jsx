import React from "react";
import Logo from "../../assets/images/YFJ.png";

const navColumns = [
  {
    items: [
      "OUR STORY",
      "OUR JUICE",
      "SUSTAINABILITY",
      "VISIT",
      "STORE LOCATOR",
    ],
  },
  {
    items: ["FAQS", "EVENTS & CATERING", "WHOLESALE", "CAREERS", "CONTACT US"],
  },
  {
    items: [
      "FACEBOOK",
      "INSTAGRAM",
      "TERMS OF SERVICE",
      "PRIVACY POLICY",
      "REFUND POLICY",
      "ACCESSIBILITY STATEMENT",
    ],
  },
];

const NavColumn = ({ items }) => (
  <ul className="space-y-3 text-sm font-semibold">
    {items.map((link) => (
      <li key={link}>
        <a href="#" className="hover:underline">
          {link}
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => (
  <footer className="bg-gray-100 text-gray-700 px-6 md:px-12 py-4">
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-8 lg:space-y-0">
      {/* Logo & Navigation */}
      <div className="flex-1 flex flex-col lg:flex-row">
        <img
          src={Logo}
          alt="YFJ – Fresh Juice by Yuliana"
          className="w-32 mb-6 lg:mb-0 lg:mr-12 object-contain"
        />
        <nav className="flex space-x-12">
          {navColumns.map((col, idx) => (
            <NavColumn key={idx} items={col.items} />
          ))}
        </nav>
      </div>

      {/* Newsletter signup */}
      <div className="w-full lg:w-auto">
        <p className="mb-3 font-semibold">Sign up to get the latest info:</p>
        <form className="flex">
          <input
            type="email"
            placeholder="Email*"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white uppercase rounded-r-md font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>

    <hr className="border-gray-300 my-5" />

    {/* Bottom Copyright & Logo */}
    <div className="flex flex-col md:flex-row md:justify-center md:items-center text-xs text-gray-600">
      <div>© {new Date().getFullYear()} YFJ. All Rights Reserved.</div>
    </div>
  </footer>
);

export default Footer;
