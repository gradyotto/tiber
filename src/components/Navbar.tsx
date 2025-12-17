import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import tiberLogo from "@/assets/tiber-logo.png";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 border-b border-ghost flex items-center justify-between px-6 transition-all duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={tiberLogo} alt="Tiber Logo" className="w-8 h-8 object-contain" />
          <span className="font-sans font-black text-xl tracking-tight text-foreground">
            TIBER
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link 
          to="/" 
          className={`font-mono text-xs uppercase tracking-wider transition-colors ${
            location.pathname === '/' ? 'text-safety' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          HOME
        </Link>
        <Link 
          to="/about" 
          className={`font-mono text-xs uppercase tracking-wider transition-colors ${
            location.pathname === '/about' ? 'text-safety' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          ABOUT
        </Link>
        <Link 
          to="/roadmap" 
          className={`font-mono text-xs uppercase tracking-wider transition-colors ${
            location.pathname === '/roadmap' ? 'text-safety' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          ROADMAP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
