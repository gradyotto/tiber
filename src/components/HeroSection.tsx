import { useEffect, useState } from "react";
import TiberRiverMap from "./TiberRiverMap";
import tiberLogo from "@/assets/tiber-logo.png";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hasScrolled = window.scrollY > 5;
      setScrolled(hasScrolled);
      
      // Dispatch custom event to notify navbar
      window.dispatchEvent(new CustomEvent('heroScrolled', { detail: { scrolled: hasScrolled } }));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll initially, unlock after first scroll triggers transition
  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
      
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY > 0) {
          setScrolled(true);
          setScrollLocked(false);
          document.body.style.overflow = '';
          window.dispatchEvent(new CustomEvent('heroScrolled', { detail: { scrolled: true } }));
        }
      };
      
      window.addEventListener('wheel', handleWheel, { passive: true });
      return () => window.removeEventListener('wheel', handleWheel);
    }
  }, [scrollLocked]);

  return (
    <section className="min-h-[90vh] pt-14 relative">
      {/* Corner markers */}
      <span className="corner-marker top-20 left-6">+</span>
      <span className="corner-marker top-20 right-6">+</span>
      <span className="corner-marker bottom-6 left-6">+</span>
      <span className="corner-marker bottom-6 right-6">+</span>

      <div className="h-full min-h-[calc(90vh-3.5rem)]">
        {/* Full Width Content */}
        <div className="relative flex flex-col justify-center p-8 lg:p-12 h-full min-h-[calc(90vh-3.5rem)] overflow-hidden">
          {/* Tiber River Map Background */}
          <div className="absolute inset-0 opacity-70">
            <TiberRiverMap className="w-full h-full" />
          </div>
          
          <div className="relative z-10">
            {/* Initial State: TIBER with Logo */}
            <div 
              className={`absolute inset-0 flex items-center transition-all duration-500 ease-out ${
                scrolled 
                  ? "opacity-0 -translate-y-8 pointer-events-none" 
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex items-center gap-4">
                <img 
                  src={tiberLogo} 
                  alt="Tiber Logo" 
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" 
                />
                <span className="font-sans font-black text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
                  TIBER
                </span>
              </div>
            </div>

            {/* Scrolled State: Full Content */}
            <div 
              className={`transition-all duration-500 ease-out ${
                scrolled 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <div className="space-y-8">
                {/* Main Headline */}
                <h1>
                  <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground">
                    CRITICAL PARTS
                  </span>
                  <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground">
                    FOR THE AMERICAN
                  </span>
                  <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground">
                    INDUSTRIAL BASE
                  </span>
                </h1>

                {/* Subtext */}
                <p className="font-mono text-sm text-primary uppercase tracking-wider">
                  &gt; Scaling Defense-Grade Precision
                </p>

                {/* Loading Bar */}
                <div className="space-y-2">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    [ TIBER LAUNCH ]
                  </div>
                  <div className="w-64 h-2 bg-ghost border border-ghost overflow-hidden">
                    <div className="h-full w-1/4 bg-primary" />
                  </div>
                  <div className="font-mono text-xs text-primary uppercase tracking-wider">
                    25% LOADED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
