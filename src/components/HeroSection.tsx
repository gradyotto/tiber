import tiberLogo from "@/assets/tiber-logo.png";
import TiberRiverMap from "./TiberRiverMap";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] pt-14 relative">
      {/* Corner markers */}
      <span className="corner-marker top-20 left-6">+</span>
      <span className="corner-marker top-20 right-6">+</span>
      <span className="corner-marker bottom-6 left-6">+</span>
      <span className="corner-marker bottom-6 right-6">+</span>

      <div className="h-full grid grid-cols-1 lg:grid-cols-2 min-h-[calc(90vh-3.5rem)]">
        {/* Left Column - Content */}
        <div className="relative flex flex-col justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-ghost overflow-hidden">
          {/* Tiber River Map Background */}
          <div className="absolute inset-0 opacity-30">
            <TiberRiverMap className="w-full h-full" />
          </div>
          <div className="relative z-10 space-y-8">
            {/* Main Headline */}
            <h1 className="opacity-0 animate-fade-up">
              <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground">
                ADVANCED COMPOSITES
              </span>
              <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground opacity-0 animate-fade-up animate-delay-100">
                FOR AMERICA'S
              </span>
              <span className="block font-sans font-black text-5xl md:text-6xl lg:text-7xl tracking-tighter uppercase leading-none text-foreground opacity-0 animate-fade-up animate-delay-200">
                MAKERS
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-mono text-sm text-primary uppercase tracking-wider opacity-0 animate-fade-up animate-delay-300">
              &gt; DEFENSE-GRADE PRECISION AT SCALE
            </p>

            {/* Loading Bar */}
            <div className="opacity-0 animate-fade-up animate-delay-400 space-y-2">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                [ TIBER LAUNCH ]
              </div>
              <div className="w-64 h-2 bg-ghost border border-ghost overflow-hidden">
                <div className="h-full w-1/4 bg-primary animate-pulse" />
              </div>
              <div className="font-mono text-xs text-primary uppercase tracking-wider">
                25% LOADED
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Logo */}
        <div className="relative flex items-center justify-center p-8 lg:p-12 tech-grid">
          {/* Radial overlay */}
          <div className="absolute inset-0 radial-overlay" />
          
          {/* Logo */}
          <div className="relative opacity-0 animate-scale-in animate-delay-300">
            <img 
              src={tiberLogo} 
              alt="Tiber Logo" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
            />
            
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 blur-3xl opacity-20 bg-primary -z-10 animate-glow" />
          </div>

          {/* Technical data overlay */}
          <div className="absolute bottom-8 left-8 font-mono text-xs text-muted-foreground opacity-0 animate-fade-in animate-delay-600">
            <div>REV: 2.4.1</div>
            <div>BUILD: 20250611</div>
          </div>

          <div className="absolute top-8 right-8 font-mono text-xs text-muted-foreground text-right opacity-0 animate-fade-in animate-delay-700">
            <div>LAT: 33.4484°</div>
            <div>LON: -112.0740°</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
