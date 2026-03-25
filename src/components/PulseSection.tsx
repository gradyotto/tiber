import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PULSE_API = "https://pulse.tibermfg.com/api/health";
const SEGMENTS = 25;

type HealthLabel = "Strong" | "Stable" | "Cautious" | "Stressed" | "Critical";

interface HealthScore {
  total: number;
  label: HealthLabel;
  summary: string;
}

function statusColor(label: HealthLabel): string {
  if (label === "Strong" || label === "Stable") return "text-foreground";
  if (label === "Critical") return "text-destructive";
  return "text-primary"; // Cautious / Stressed
}

function barColor(label: HealthLabel): string {
  if (label === "Critical") return "bg-destructive";
  return "bg-primary";
}

const PulseSection = () => {
  const [score, setScore] = useState<HealthScore | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(PULSE_API)
      .then((r) => r.json())
      .then((data) => {
        if (data?.score?.total !== undefined) {
          setScore({
            total: data.score.total,
            label: data.score.label,
            summary: data.score.summary,
          });
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  const filled = score ? Math.round(score.total / (100 / SEGMENTS)) : 0;

  return (
    <section className="border-t border-ghost">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left: description + CTA */}
        <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-ghost flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              &gt; SUPPLY CHAIN INTELLIGENCE
            </span>
            <h3 className="font-sans font-black text-2xl md:text-3xl tracking-tight uppercase text-foreground">
              TIBER PULSE
            </h3>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Live visibility into the commodity markets behind every part.
              Copper, aluminum, steel, energy — tracked daily with tariff-adjusted
              landed costs.
            </p>
          </div>

          <a
            href="https://pulse.tibermfg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider w-fit"
          >
            OPEN PULSE
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Right: health score */}
        <div className="p-8 lg:p-12 flex flex-col justify-center gap-5">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            SUPPLY CHAIN HEALTH SCORE
          </span>

          {/* Score */}
          <div className="flex items-end gap-2">
            <span className={`font-mono font-bold text-7xl leading-none tabular-nums transition-colors duration-500 ${score ? statusColor(score.label) : "text-ghost"}`}>
              {score ? score.total : "—"}
            </span>
            <span className="font-mono text-sm text-muted-foreground pb-2">/ 100</span>
          </div>

          {/* Segmented bar */}
          <div className="flex gap-px">
            {Array.from({ length: SEGMENTS }).map((_, i) => (
              <div
                key={i}
                className={`h-2 flex-1 transition-colors duration-500 ${
                  !score
                    ? "bg-ghost"
                    : i < filled
                    ? barColor(score.label)
                    : "bg-ghost"
                }`}
              />
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 animate-pulse ${score ? barColor(score.label) : "bg-ghost"}`} />
            <span className={`font-mono text-xs uppercase tracking-wider ${score ? statusColor(score.label) : "text-muted-foreground"}`}>
              {error
                ? "UNAVAILABLE"
                : score
                ? score.label.toUpperCase()
                : "LOADING..."}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PulseSection;
