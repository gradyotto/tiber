import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TiberRiverMap from "./TiberRiverMap";
import tiberLogo from "@/assets/tiber-logo.png";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);
  const location = useLocation();

  // Reset state when navigating to homepage
  useEffect(() => {
    window.scrollTo(0, 0);
    setScrolled(false);
    setScrollLocked(true);
    window.dispatchEvent(new CustomEvent('heroScrolled', { detail: { scrolled: false } }));
  }, [location.key]);

  // Safety net: always restore body scroll when this component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

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

  // Lock scroll initially, unlock after animation completes
  useEffect(() => {
    // Phase 1: locked, waiting for user to scroll down
    if (scrollLocked && !scrolled) {
      document.body.style.overflow = 'hidden';

      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY > 0) {
          setScrolled(true);
          window.dispatchEvent(new CustomEvent('heroScrolled', { detail: { scrolled: true } }));
        }
      };

      let touchStartY = 0;

      const handleTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
      };

      const handleTouchEnd = (e: TouchEvent) => {
        const touchEndY = e.changedTouches[0].clientY;
        if (touchStartY - touchEndY > 30) {
          setScrolled(true);
          window.dispatchEvent(new CustomEvent('heroScrolled', { detail: { scrolled: true } }));
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: true });
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
        document.body.style.overflow = '';
      };
    }

    // Phase 2: animation in progress — unlock after transition completes
    if (scrollLocked && scrolled) {
      const timer = setTimeout(() => {
        setScrollLocked(false);
        document.body.style.overflow = '';
      }, 500);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [scrollLocked, scrolled]);

  return (
    <section className="min-h-[70vh] md:min-h-[90vh] pt-14 relative">
      {/* Corner markers */}
      <span className="corner-marker top-20 left-6">+</span>
      <span className="corner-marker top-20 right-6">+</span>
      <span className="corner-marker bottom-6 left-6">+</span>
      <span className="corner-marker bottom-6 right-6">+</span>

      {/* Coordinate markers - fixed position */}
      <div className="absolute top-24 left-8 font-mono text-xs text-muted-foreground opacity-70 z-10">
        <div>33.4484° N</div>
        <div>112.0740° W</div>
      </div>

      <div className="h-full min-h-[calc(70vh-3.5rem)] md:min-h-[calc(90vh-3.5rem)]">
        {/* Full Width Content */}
        <div className="relative flex flex-col justify-center p-6 md:p-8 lg:p-12 h-full min-h-[calc(70vh-3.5rem)] md:min-h-[calc(90vh-3.5rem)] overflow-hidden">
          {/* Tiber River Map Background */}
          <div className="absolute inset-0 opacity-70">
            <TiberRiverMap className="w-full h-full" />
          </div>
          
          <div className="relative z-10">
            {/* Initial State: TIBER with Logo */}
            <div
              className={`absolute inset-0 flex items-center transition-[opacity,transform] duration-500 ease-out ${
                scrolled
                  ? "opacity-0 -translate-y-8 pointer-events-none"
                  : "opacity-100"
              }`}
            >
              <div className="flex items-center gap-2 md:gap-4">
                <img 
                  src={tiberLogo} 
                  alt="Tiber Logo" 
                  className="w-20 h-20 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
                />
                <span className="font-sans font-black text-4xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
                  TIBER
                </span>
              </div>
            </div>

            {/* Scrolled State: Full Content */}
            <div
              className={`transition-[opacity,transform] duration-500 ease-out ${
                scrolled
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <div className="space-y-6 md:space-y-8">
                {/* Main Headline */}
                <h1>
                  <span className="block font-sans font-black text-3xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground">
                    CRITICAL PARTS
                  </span>
                  <span className="block font-sans font-black text-3xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground">
                    FOR THE AMERICAN
                  </span>
                  <span className="block font-sans font-black text-3xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground">
                    INDUSTRIAL BASE
                  </span>
                </h1>

                {/* Subtext */}
                <p className="font-mono text-xs md:text-sm text-primary text-slate-50 uppercase tracking-wider">
                  &gt; Scaling Defense-Grade Precision
                </p>

                {/* Loading Bar */}
                <div className="space-y-2">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    [ TIBER LAUNCH ]
                  </div>
                  <div className="w-48 md:w-64 h-2 bg-ghost border border-ghost overflow-hidden">
                    <div className={`h-full bg-primary transition-all duration-700 ease-out ${scrolled ? 'w-1/4' : 'w-0'}`} />
                  </div>
                  <div className="font-mono text-xs text-primary text-slate-50 uppercase tracking-wider">
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