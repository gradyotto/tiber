import { useEffect, useState } from "react";
import TiberRiverMap from "./TiberRiverMap";
import tiberLogo from "@/assets/tiber-logo.png";

const ROTATING_PHRASES = [
  "INDUSTRIAL BASE",
  "DRONE INDUSTRY",
  "ROBOTICS INDUSTRY",
  "SPACE INDUSTRY",
  "DEFENSE INDUSTRY",
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
        setAnimating(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[70vh] md:min-h-[90vh] pt-14 relative">
      {/* Corner markers */}
      <span className="corner-marker top-20 left-6 animate-fade-in">+</span>
      <span className="corner-marker top-20 right-6 animate-fade-in">+</span>
      <span className="corner-marker bottom-6 left-6 animate-fade-in">+</span>
      <span className="corner-marker bottom-6 right-6 animate-fade-in">+</span>

      <div className="h-full min-h-[calc(70vh-3.5rem)] md:min-h-[calc(90vh-3.5rem)]">
        <div className="relative flex flex-col items-center p-6 md:p-8 lg:p-12 h-full min-h-[calc(70vh-3.5rem)] md:min-h-[calc(90vh-3.5rem)] overflow-hidden">
          {/* Tiber River Map Background */}
          <div className="absolute inset-0 opacity-70 animate-fade-in">
            <TiberRiverMap className="w-full h-full" />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center text-center space-y-8 md:space-y-12 pt-0 md:pt-2">
            {/* TIBER logo + wordmark */}
            <div
              className="flex items-center justify-center gap-3 md:gap-6 animate-fade-in"
              style={{ animationDelay: "0ms", animationFillMode: "both" }}
            >
              <img
                src={tiberLogo}
                alt="Tiber Logo"
                width="256"
                height="256"
                loading="eager"
                decoding="sync"
                // @ts-expect-error fetchpriority is valid HTML
                fetchpriority="high"
                className="w-28 h-28 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain"
              />
              <span className="font-sans font-black text-6xl md:text-8xl lg:text-9xl tracking-tight text-foreground">
                TIBER
              </span>
            </div>

            {/* Headline */}
            <h1
              className="space-y-1 animate-fade-in"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              <span className="block font-sans font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-foreground">
                CRITICAL PARTS
              </span>
              <span className="block font-sans font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-foreground">
                FOR THE AMERICAN
              </span>
              <span
                key={phraseIndex}
                className={`block font-sans font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-foreground transition-all duration-400 ${
                  animating
                    ? "opacity-0 -translate-y-2 blur-sm"
                    : "opacity-100 translate-y-0 blur-0 animate-fade-in"
                }`}
              >
                {ROTATING_PHRASES[phraseIndex]}
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="font-mono text-xs md:text-sm text-slate-50 uppercase tracking-wider animate-fade-in"
              style={{ animationDelay: "400ms", animationFillMode: "both" }}
            >
              &gt; Scaling Defense-Grade Precision
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
