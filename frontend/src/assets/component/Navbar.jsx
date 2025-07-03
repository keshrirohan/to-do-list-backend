import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[hsl(var(--color-bg))] text-[hsl(var(--color-text))] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dj9vanzqq/image/upload/e_background_removal/c_crop,w_450,h_240,f_png/v1751542090/Creative_Amazing_Logo_Design_jqi1z2.jpg"
            alt="Logo"
            className="w-28 sm:w-24 object-contain  invert"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden text-[hsl(var(--color-primary))] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full sm:static sm:flex sm:items-center sm:justify-between sm:w-auto bg-[hsl(var(--color-bg))] px-6 py-4 sm:p-0 z-50`}
        >
          <ul className="flex flex-col sm:flex-row gap-4 text-center">
            <li>
              <Link
                to="/"
                className="hover:text-[hsl(var(--color-primary))] border-b-2 border-transparent hover:border-[hsl(var(--color-secondary))] pb-1 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="hover:text-[hsl(var(--color-primary))] border-b-2 border-transparent hover:border-[hsl(var(--color-secondary))] pb-1 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:text-[hsl(var(--color-muted))] border-b-2 border-transparent hover:border-[hsl(var(--color-secondary))] pb-1 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/username/profile"
                className="hover:text-[hsl(var(--color-muted))] border-b-2 border-transparent hover:border-[hsl(var(--color-secondary))] pb-1 transition"
              >
                Dashboard
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0 sm:ml-6">
            <Link
              to="/signup"
              className="px-4 py-2 border border-[hsl(var(--color-text))] rounded-full hover:bg-[hsl(var(--color-text))] hover:text-[hsl(var(--color-bg))] transition"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 border border-[hsl(var(--color-primary))] text-[hsl(var(--color-primary))] rounded-full hover:bg-[hsl(var(--color-primary))] hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
