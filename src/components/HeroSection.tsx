import heroCnc from "@/assets/hero-cnc.jpg";
import heroInspection from "@/assets/hero-inspection.jpg";
import heroBlueprint from "@/assets/hero-blueprint.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-32 px-6 md:px-12 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />

      {/* Corner markers */}
      <span className="corner-marker top-20 left-6">+</span>
      <span className="corner-marker top-20 right-6">+</span>
      <span className="corner-marker bottom-6 left-6">+</span>
      <span className="corner-marker bottom-6 right-6">+</span>

      {/* Scattered photos */}
      <div className="hidden lg:block absolute left-[6%] top-[18%] -rotate-3 z-0 border-8 border-card shadow-xl">
        <img
          src={heroCnc}
          alt="CNC machining precision part"
          width={220}
          height={158}
          className="block w-[220px] h-[158px] object-cover grayscale opacity-90"
        />
        <div className="absolute -bottom-3 left-2 font-mono text-[9px] bg-card px-2 py-0.5 border border-navy/10 text-navy/60 uppercase tracking-widest">
          OP_22 // LATHE
        </div>
      </div>
      <div className="hidden lg:block absolute right-[7%] top-[14%] rotate-3 z-0 border-8 border-card shadow-xl">
        <img
          src={heroInspection}
          alt="Inspecting a precision-machined part"
          width={260}
          height={173}
          className="block w-[260px] h-[173px] object-cover grayscale opacity-90"
        />
        <div className="absolute -top-3 right-2 font-mono text-[9px] bg-card px-2 py-0.5 border border-navy/10 text-navy/60 uppercase tracking-widest">
          QC_REF // 7075-T6
        </div>
      </div>
      <div className="hidden xl:block absolute left-[14%] bottom-[6%] rotate-2 z-0 border-8 border-card shadow-xl">
        <img
          src={heroBlueprint}
          alt="Engineering blueprint"
          width={160}
          height={200}
          className="block w-[160px] h-[200px] object-cover opacity-90"
        />
        <div className="absolute -bottom-3 left-2 font-mono text-[9px] bg-card px-2 py-0.5 border border-navy/10 text-navy/60 uppercase tracking-widest">
          REV_A // SHEET_01
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-8 bg-navy/20" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-navy/70 flex items-center gap-2">
            <span className="text-flag-red font-bold">EST. 2025</span>
            <span className="text-navy/30">•</span>
            33.4484° N, 112.0740° W
          </span>
          <div className="h-px w-8 bg-navy/20" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-navy mb-8">
          <span className="font-light italic">Precision machining for the</span>
          <br />
          <span className="font-bold">American industrial base.</span>
        </h1>

        {/* Subcopy */}
        <p className="max-w-xl mx-auto text-navy/70 leading-relaxed mb-12 text-base md:text-lg">
          Scaling defense-grade manufacturing through algorithmic quoting. Instant
          pricing for aluminum, stainless, and tool steel components.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/quote"
            className="bg-navy text-cream px-10 py-4 font-mono text-xs tracking-[0.2em] hover:bg-navy/90 transition-all uppercase"
          >
            Start Quote →
          </Link>
          <Link
            to="/about"
            className="border border-navy/20 px-10 py-4 font-mono text-xs tracking-[0.2em] hover:bg-navy/5 transition-all uppercase text-navy"
          >
            Capabilities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
