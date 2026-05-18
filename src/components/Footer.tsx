const phases = ["00", "01", "02", "03", "04", "05"];
const currentPhase = "01";

const Footer = () => {
  return (
    <footer className="border-t border-navy/10 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="h-px w-12 bg-navy/15" />
          <div className="font-mono text-[9px] tracking-[0.4em] uppercase text-navy/40">
            Chapter 01 • The Industrial Base • 6 Phases
          </div>
          <div className="h-px w-12 bg-navy/15" />
        </div>

        <div className="flex gap-8 font-mono text-[11px]">
          {phases.map((p) => (
            <span
              key={p}
              className={
                p === currentPhase
                  ? "text-flag-red font-bold border-b-2 border-flag-red pb-1"
                  : "text-navy/20"
              }
            >
              {p}
            </span>
          ))}
        </div>

        <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-3 mt-8 pt-6 border-t border-navy/10 font-mono text-[9px] tracking-[0.3em] uppercase text-navy/40">
          <span>Tiber MFG // Est. 2025</span>
          <span>Phoenix, AZ // Sector: Defense</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
