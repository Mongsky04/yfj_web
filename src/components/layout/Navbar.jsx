import { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../../assets/images/YFJ.png";

// Dropdown items for "Product"
const productItems = [
  { label: "All Products", to: "/product/all" },
  { label: "Juices", to: "/product/juices" },
  { label: "Cleanses", to: "/product/cleanses" },
  { label: "Elixirs", to: "/product/elixirs" },
  { label: "Nut Milks & Smoothies", to: "/product/nut-milks-smoothies" },
  { label: "Packages", to: "/product/packages" },
  { label: "Gift Cards", to: "/product/gift-cards" },
];

// Main navigation config
const navConfig = [
  { label: "Home", to: "/" },
  { label: "Product", dropdown: productItems },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Simple NavLink wrapper with active styling
const LinkItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={({ isActive }) =>
      ` font-bold ${
        isActive ? " text-[#FFB22C]" : " text-gray-500"
      }  hover:text-[#FFB22C] uppercase`
    }
  >
    {children}
  </NavLink>
);

// Product dropdown component
const ProductDropdown = ({ items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={` flex items-center font-bold cursor-pointer uppercase ${
          open ? " text-[#FFB22C]" : " text-gray-500"
        }  hover:text-[#FFB22C] focus:outline-none`}
      >
        Product
        <svg className=" w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06L10.53 12a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <ul className=" absolute -left-4 mt-10 w-56 bg-white shadow-lg rounded-lg overflow-hidden z-20">
          {items.map((item, idx) => (
            <li key={idx} className=" px-0 py-0">
              <LinkItem to={item.to} onClick={() => setOpen(false)}>
                <span className=" block px-4 py-3 text-sm font-semibold">{item.label}</span>
              </LinkItem>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function Navbar() {
  return (
    <nav className=" bg-white shadow">
      <div className=" mx-auto px-6 py-4 grid grid-cols-3 items-center">
        {/* Logo on the left */}
        <div>
          <img src={LOGO} alt="YFJ Logo" className=" h-20" />
        </div>

        {/* Centered navigation */}
        <div className=" flex justify-center items-center space-x-8">
          {navConfig.map((item) =>
            item.dropdown ? (
              <ProductDropdown key={item.label} items={item.dropdown} />
            ) : (
              <LinkItem key={item.to} to={item.to}>
                {item.label}
              </LinkItem>
            )
          )}
        </div>

        {/* Right placeholder (empty) */}
        <div />
      </div>
    </nav>
  );
}

export default Navbar;
