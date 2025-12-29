import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Accueil", to: "/" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Rendez-vous", to: "/rendez-vous" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        
        <span className="logo">ARCHI-REFLEX</span>

        {/* Desktop links */}
        <div className="nav-links desktop">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav-link">
              {link.name}
              <span className="underline" />
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Mobile slide menu */}
      <div className={`mobile-slide-menu ${mobileOpen ? "open" : ""}`}>
        {/* Croix pour fermer */}
        <button
          className="mobile-menu-close"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>

        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.name}
            <span className="underline" />
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
