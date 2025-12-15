import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
      <div className="flex items-center gap-2">
        <Link to="/" className="font-sans font-black text-xl tracking-tight text-foreground hover:text-safety transition-colors">
          TIBER
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link 
          to="/about" 
          className={`font-mono text-xs uppercase tracking-wider transition-colors ${
            location.pathname === '/about' ? 'text-safety' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          ABOUT
        </Link>
        <Link 
          to="/quote" 
          className={`font-mono text-xs uppercase tracking-wider transition-colors ${
            location.pathname === '/quote' ? 'text-safety' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          GET QUOTE
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            SYS: ONLINE
          </span>
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
