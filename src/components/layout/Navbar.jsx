import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LOGO from "../../assets/images/YFJ.png";

const productItems = [
  { label: "All Products", to: "/product/all" },
  { label: "Juices", to: "/product/juices" },
  { label: "Purees", to: "/product/purees" },
  { label: "Concentrates", to: "/product/concentrates" },
  { label: "Imported Fruits", to: "/product/imported-fruits" },
  { label: "Frozen IQF", to: "/product/frozen-iqf" },
];

const navConfig = [
  { label: "HOME", to: "/" },
  { label: "Product", dropdown: productItems },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

const LinkItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={({ isActive }) =>
      `block font-bold ${
        isActive ? "text-[#FFB22C]" : "text-gray-500"
      } hover:text-[#FFB22C]`
    }
  >
    {children}
  </NavLink>
);

const ProductDropdown = ({ items, onSelect }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center font-bold uppercase ${
          open ? "text-[#FFB22C]" : "text-gray-500"
        } hover:text-[#FFB22C]`}
      >
        Product
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06L10.53 12a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <ul className="absolute mt-2 w-56 bg-white shadow-lg rounded-lg z-20">
          {items.map((item, idx) => (
            <li key={idx} className="border-b border-none">
              <LinkItem
                to={item.to}
                onClick={() => {
                  setOpen(false);
                  onSelect?.();
                }}
              >
                <span className="block px-4 py-3 text-sm font-semibold">
                  {item.label}
                </span>
              </LinkItem>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-[10000]">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"}>
          <img src={LOGO} alt="YFJ Logo" className="h-16 cursor-pointer" />
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navConfig.map((item) =>
            item.dropdown ? (
              <ProductDropdown
                key={item.label}
                items={item.dropdown}
              />
            ) : (
              <LinkItem key={item.to} to={item.to}>
                {item.label}
              </LinkItem>
            )
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {navConfig.map((item) =>
            item.dropdown ? (
              <ProductDropdown
                key={item.label}
                items={item.dropdown}
                onSelect={() => setMenuOpen(false)}
              />
            ) : (
              <LinkItem
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </LinkItem>
            )
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
