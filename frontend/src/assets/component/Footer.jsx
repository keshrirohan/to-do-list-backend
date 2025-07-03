import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--color-bg))] text-[hsl(var(--color-muted))] border-t border-[hsl(var(--color-muted))] py-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[hsl(var(--color-primary))]">
            ByteMinders
          </h2>
          <p className="mt-2 text-sm">
            Helping you stay productive and organized every day with our minimal
            and fast To-Do app.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-[hsl(var(--color-text))] mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[hsl(var(--color-accent))]">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="hover:text-[hsl(var(--color-accent))]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:text-[hsl(var(--color-accent))]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="hover:text-[hsl(var(--color-accent))]"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold text-[hsl(var(--color-text))] mb-2">
            Connect With Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:support@byteminders.com"
                className="hover:text-[hsl(var(--color-accent))]"
              >
                support@byteminders.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/byteMinders_official"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--color-accent))]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/byteMinders"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--color-accent))]"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-10 text-xs text-[hsl(var(--color-muted))]">
        © {new Date().getFullYear()} ByteMinders. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
