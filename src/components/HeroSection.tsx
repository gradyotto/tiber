import TiberRiverMap from "./TiberRiverMap";

const HeroSection = () => {
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
          <div className="relative z-10 space-y-8">
            {/* Main Headline */}
            <h1 className="opacity-0 animate-fade-up">
              <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground">
                CRITICAL PARTS
              </span>
              <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground opacity-0 animate-fade-up animate-delay-100">
                FOR THE AMERICAN
              </span>
              <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground opacity-0 animate-fade-up animate-delay-200">
                INDUSTRIAL BASE
              </span>
            </h1>


            {/* Loading Bar */}
            <div className="opacity-0 animate-fade-up animate-delay-400 space-y-2">
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
    </section>
  );
};

export default HeroSection;
