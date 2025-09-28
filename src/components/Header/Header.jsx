import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import ski2 from "../../assets/ski2.png";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Courses", to: "/courses" },
    { label: "Student Results", to: "/results" },
    { label: "Legalities", to: "/legal" },
    { label: "Contact Us", to: "/contact" },
  ];

  const linkClass = ({ isActive }) => (isActive ? "is-active" : undefined);

  return (
    <>
      {/* Skip link for accessibility */}
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="Header" role="banner">
        <div className="Header__inner">
          {/* Brand */}
          <Link className="Header__brand" to="/" aria-label="SkillIncome Home">
            <img src={ski2} alt="SkillIncome logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="Header__nav" aria-label="Primary">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.to}
                    className={linkClass}
                    end={item.to === "/"}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="Header__actions">
            <Link className="btn btn--primary" to="/dashboard">
              Dashboard
            </Link>

            {/* Mobile toggle */}
            <button
              className="Header__menuBtn"
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="Header__menuIcon" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`MobileMenu ${menuOpen ? "is-open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={linkClass}
                  end={item.to === "/"}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="MobileMenu__cta">
              <Link className="btn btn--primary" to="/dashboard" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
