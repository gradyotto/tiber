import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCaptureForm from "@/components/EmailCaptureForm";
import Reveal from "@/components/Reveal";

const phases = [
  {
    id: "01",
    title: "PRECISION CNC MACHINING",
    description:
      "Actively sourcing our first CNC machine with 3+2 axis capabilities. Targeting aluminum, stainless, and tool steel for defense and aerospace applications.",
    label: "LOADING",
    active: true,
  },
  {
    id: "02",
    title: "INDUSTRIAL ADDITIVE MANUFACTURING",
    description:
      "Defense-grade 3D printing with carbon fiber composites and high-performance polymers.",
    label: "2027",
    active: false,
  },
  {
    id: "03",
    title: "AUTONOMOUS FACTORY",
    description:
      "Lights-out manufacturing with AI-driven quality control and logistics.",
    label: "2028",
    active: false,
  },
];

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 border-b border-ghost">
        <span className="corner-marker top-20 left-6">+</span>
        <span className="corner-marker top-20 right-6">+</span>
        <div className="max-w-4xl mx-auto">
          <Reveal as="p" className="font-mono text-xs text-primary text-slate-50 tracking-widest mb-4">
            // MANUFACTURING EVOLUTION
          </Reveal>
          <Reveal
            as="h1"
            delay={100}
            className="font-sans font-black text-4xl md:text-6xl tracking-tight uppercase leading-none"
          >
            THE <span className="text-primary text-slate-50">ROAD</span> AHEAD
          </Reveal>
          <Reveal
            as="p"
            delay={200}
            className="font-mono text-sm text-muted-foreground mt-6 max-w-xl"
          >
            From precision machining to fully autonomous production. Follow the sequence.
          </Reveal>
        </div>
      </section>

      {/* Terminal body */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Boot lines */}
          <div className="font-mono text-xs space-y-1.5 mb-12 opacity-0 animate-fade-up animate-delay-300" style={{ animationFillMode: "forwards" }}>
            <p className="text-muted-foreground opacity-50">// TIBER MFG SYSTEMS v1.0 // PHOENIX, AZ</p>
            <p className="text-muted-foreground opacity-50">// MANUFACTURING SEQUENCE INITIALIZED</p>
            <p className="text-primary opacity-70">// 3 PHASES DETECTED // 1 LOADING // 2 PENDING</p>
          </div>

          {/* Phase list */}
          <div>
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className="border-t border-ghost opacity-0 animate-fade-up"
                style={{
                  animationDelay: `${450 + index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className={`py-8 transition-opacity ${!phase.active ? "opacity-40" : ""}`}>
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-6 mb-5">
                    <span className={`font-mono text-sm md:text-base leading-snug ${phase.active ? "text-foreground" : "text-muted-foreground"}`}>
                      <span className={phase.active ? "text-primary" : "text-muted-foreground"}>{">"}</span>
                      {"  "}PHASE {phase.id} // {phase.title}
                    </span>
                    {phase.active ? (
                      <span className="font-mono text-xs bg-primary text-primary-foreground px-2 py-0.5 flex items-center gap-1.5 whitespace-nowrap flex-shrink-0">
                        LOADING
                        <span className="inline-block w-1.5 h-3 bg-primary-foreground animate-pulse" />
                      </span>
                    ) : (
                      <span className="font-mono text-xs border border-ghost text-muted-foreground px-2 py-0.5 whitespace-nowrap flex-shrink-0">
                        {phase.label}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div className={`ml-6 border-l pl-4 ${phase.active ? "border-primary" : "border-ghost"}`}>
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-ghost" />
          </div>

          {/* End of sequence */}
          <p className="font-mono text-xs text-muted-foreground opacity-30 mt-8">
            // END OF SEQUENCE
          </p>
        </div>
      </section>

      <EmailCaptureForm />
      <Footer />
    </div>
  );
};

export default Roadmap;
