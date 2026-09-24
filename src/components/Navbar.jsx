import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">

        {/* =========================
            DIV 1 — LOGO
        ========================== */}
        <div className="flex shrink-0 items-center">
          <Link to="/" onClick={closeMenu}>
            <img
              src="https://res.cloudinary.com/lglx4hzk/image/upload/v1790204756/cmyk-studio-logo.png"
              alt="CMYK Studios"
              className="h-11 w-auto object-contain"
            />
          </Link>
        </div>

        {/* =========================
            DIV 2 — MENU
        ========================== */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-black transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* =========================
            DIV 3 — START PROJECT
        ========================== */}
        <div className="hidden shrink-0 lg:flex">
          <Link
            to="/start-project"
            className="group flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FFCC00] hover:text-black"
          >
            <span>Start a Project</span>

            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-black transition-colors duration-300 hover:bg-gray-100 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </nav>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <div
        className={`border-t border-gray-100 bg-white lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-gray-100 py-4 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Start Project */}
          <Link
            to="/start-project"
            onClick={closeMenu}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FFCC00] hover:text-black"
          >
            <span>Start a Project</span>
            <FiArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;