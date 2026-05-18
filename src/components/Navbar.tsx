import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { num: "01", label: "HOME", to: "/" },
  { num: "02", label: "ABOUT", to: "/about" },
  { num: "03", label: "ROADMAP", to: "/roadmap" },
  { num: "04", label: "QUOTE", to: "/quote" },
];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 border-b border-navy/10 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-sm" : "bg-cream"
      }`}
    >
      <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
        <div className="w-7 h-7 bg-navy flex items-center justify-center">
          <span className="font-mono text-[10px] font-bold text-cream">[T]</span>
        </div>
        <span className="font-sans font-black text-lg tracking-tight text-navy uppercase">
          Tiber
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`font-mono text-[10px] tracking-[0.25em] uppercase flex items-center gap-2 transition-colors ${
                active ? "text-navy" : "text-navy/50 hover:text-navy"
              }`}
            >
              <span className={active ? "text-flag-red" : "text-navy/30"}>
                {link.num}
              </span>
              {link.label}
            </Link>
          );
        })}
      </div>

      <Link
        to="/quote"
        className="hidden sm:inline-block border border-navy px-5 py-2 font-mono text-[10px] tracking-[0.25em] uppercase text-navy hover:bg-navy hover:text-cream transition-all"
      >
        Book a Demo →
      </Link>
    </nav>
  );
};

export default Navbar;
