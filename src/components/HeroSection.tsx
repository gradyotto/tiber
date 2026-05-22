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

      {/* Coordinate markers - fixed position */}
      <div className="absolute top-24 left-8 font-mono text-xs text-muted-foreground opacity-70 z-10">
        <div>33.4484° N</div>
        <div>112.0740° W</div>
      </div>

      <div className="h-full min-h-[calc(70vh-3.5rem)] md:min-h-[calc(90vh-3.5rem)]">
        <div className="relative flex flex-col items-center p-6 md:p-8 lg:p-12 h-full min-h-[calc(70vh-3.5rem)] md:min-h-[calc(90vh-3.5rem)] overflow-hidden">
          {/* Tiber River Map Background */}
          <div className="absolute inset-0 opacity-70">
            <TiberRiverMap className="w-full h-full" />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center text-center space-y-8 md:space-y-12 pt-4 md:pt-8">
            {/* TIBER logo + wordmark */}
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <img
                src={tiberLogo}
                alt="Tiber Logo"
                className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
              />
              <span className="font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground">
                TIBER
              </span>
            </div>

            {/* Headline */}
            <h1 className="space-y-1">
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
