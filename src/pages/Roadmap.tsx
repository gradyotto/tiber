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
];

const Roadmap = () => {
  return (
    <div className="min-h-screen text-foreground">
      <div className="noise-overlay" />
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
            WHAT'S <span className="text-primary text-slate-50">DOWNSTREAM</span>
          </Reveal>
        </div>
      </section>

      {/* Terminal body */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Phase list */}
          <div>
            {phases.map((phase, index) => (
              <Reveal
                key={phase.id}
                delay={450 + index * 150}
                className="border-t border-ghost"
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
              </Reveal>
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
