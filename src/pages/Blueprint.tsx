import { Link } from "react-router-dom";
import blueprintHero from "@/assets/blueprint-hero.png";

const Blueprint = () => {
  return (
    <div className="min-h-screen w-full bg-[#1d4ed8] text-white font-sans">
      {/* Top bar */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6">
        <Link to="/" className="font-mono text-sm tracking-widest text-white/90 hover:text-white">
          [T] TIBER
        </Link>
        <nav className="flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
          <Link to="/blueprint" className="text-white">Home</Link>
          <Link to="/about" className="text-white/70 hover:text-white">About</Link>
          <Link to="/roadmap" className="text-white/70 hover:text-white">Roadmap</Link>
          <Link to="/quote" className="text-white/70 hover:text-white">Quote</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Blueprint grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Sketch illustration */}
        <img
          src={blueprintHero}
          alt="Blueprint sketch of mountains and a river"
          className="relative w-full h-auto select-none pointer-events-none"
          draggable={false}
        />

        {/* Headline overlay */}
        <div className="absolute inset-0 flex flex-col items-center pt-[8%] px-6 text-center">
          <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/70 mb-6">
            / / FIG. 01 — AMERICAN INDUSTRIAL BASE
          </p>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            Critical parts for the<br />American Industrial Base
          </h1>
          <div className="mt-10 flex items-center gap-4 font-mono text-xs tracking-widest">
            <Link
              to="/quote"
              className="border border-white/70 px-5 py-2 hover:bg-white hover:text-[#1d4ed8] transition-colors"
            >
              REQUEST A QUOTE
            </Link>
            <Link
              to="/about"
              className="px-5 py-2 underline underline-offset-4 hover:text-white/80"
            >
              READ THE BRIEF →
            </Link>
          </div>
        </div>

        {/* Bottom annotation strip */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 py-4 font-mono text-[10px] tracking-widest text-white/60 border-t border-white/20 bg-[#1d4ed8]/60 backdrop-blur-[1px]">
          <span>SHEET 01 / 04</span>
          <span>SCALE — 1 : 1</span>
          <span>PHOENIX, AZ · 33.4484°N 112.0740°W</span>
          <span>REV. A</span>
        </div>
      </section>

      {/* Sub band */}
      <section className="border-t border-white/20">
        <div className="max-w-5xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-10">
          {[
            { k: "01", t: "Drawn by Hand", d: "Every part is sketched, machined, and inspected with old-world care." },
            { k: "02", t: "Built in America", d: "Phoenix-based precision shop serving defense and aerospace." },
            { k: "03", t: "Made to Last", d: "Tolerances measured in tenths. Built like the country we work for." },
          ].map((b) => (
            <div key={b.k} className="border-t border-white/30 pt-4">
              <p className="font-mono text-[10px] tracking-widest text-white/60">FIG. {b.k}</p>
              <h3 className="font-serif text-2xl mt-2">{b.t}</h3>
              <p className="font-sans text-sm text-white/80 mt-3 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blueprint;
