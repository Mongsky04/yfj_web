import React from "react";
import Logo from "../../assets/images/YFJ.png";
import { Link } from "react-router-dom";

const navColumns = [
  {
    items: ["OUR STORY", "OUR JUICE", "LOCATION"],
  },
  {
    items: ["FAQS", "WHOLESALE", "CONTACT US"],
  },
  {
    items: ["TERMS OF SERVICE", "PRIVACY POLICY"],
  },
];

const NavColumn = ({ items }) => (
  <ul className=" space-y-3 text-lg font-bold text-gray-500">
    {items.map((link) => (
      <li key={link}>
        <a href="#" className=" hover:underline">
          {link}
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => (
  <footer className=" bg-gray-100 text-gray-500 px-6 md:px-20 py-10">
    <div className=" flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0">
      {/* Logo */}
      <div className=" flex-shrink-0 pr-40 cursor-pointer">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Yuliana Juice"
            className=" w-32 object-contain"
          />
        </Link>
      </div>

      {/* Navigation Columns */}
      <div className=" flex flex-wrap gap-40 flex-1 justify-start">
        {navColumns.map((col, idx) => (
          <NavColumn key={idx} items={col.items} />
        ))}
      </div>
    </div>

    <hr className=" border-gray-300 my-8" />

    <div className=" text-xs text-gray-500 text-center font-semibold">
      © {new Date().getFullYear()} YFJ - Fresh Juice by Yuliana. All Rights
      Reserved.
    </div>
  </footer>
);

export default Footer;
