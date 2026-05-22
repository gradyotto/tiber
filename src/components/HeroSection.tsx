import TiberRiverMap from "./TiberRiverMap";
import tiberLogo from "@/assets/tiber-logo.png";

const HeroSection = () => {
  return (
    <section className="min-h-[70vh] md:min-h-[90vh] pt-14 relative">
      {/* Corner markers */}
      <span className="corner-marker top-20 left-6">+</span>
      <span className="corner-marker top-20 right-6">+</span>
      <span className="corner-marker bottom-6 left-6">+</span>
      <span className="corner-marker bottom-6 right-6">+</span>


      <div className="h-full min-h-[calc(70vh-3.5rem)] md:min-h-[calc(90vh-3.5rem)]">
        <div className="relative flex flex-col items-center p-6 md:p-8 lg:p-12 h-full min-h-[calc(70vh-3.5rem)] md:min-h-[calc(90vh-3.5rem)] overflow-hidden">
          {/* Tiber River Map Background */}
          <div className="absolute inset-0 opacity-70">
            <TiberRiverMap className="w-full h-full" />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center text-center space-y-8 md:space-y-12 pt-0 md:pt-2">
            {/* TIBER logo + wordmark */}
            <div className="flex items-center justify-center gap-3 md:gap-6">
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
            <h1 className="space-y-1">
              <span className="block font-sans font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-foreground">
                CRITICAL PARTS
              </span>
              <span className="block font-sans font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-foreground">
                FOR THE AMERICAN
              </span>
              <span className="block font-sans font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter uppercase leading-none text-foreground">
                INDUSTRIAL BASE
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-mono text-xs md:text-sm text-slate-50 uppercase tracking-wider">
              &gt; Scaling Defense-Grade Precision
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
