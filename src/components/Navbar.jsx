import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `text-xs tracking-[0.25em] uppercase transition-opacity
   ${isActive ? "opacity-100" : "opacity-60 hover:opacity-100"}`;

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-sm tracking-[0.5em] font-light">
          ARCHI
        </span>

        {/* Navigation */}
        <ul className="flex gap-12">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink to="/rendez-vous" className={navLinkClass}>
              Rendez-vous
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
