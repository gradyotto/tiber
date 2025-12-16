import { Calculator, Layers, Zap, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const capabilities = [
  {
    icon: Calculator,
    title: "ALGORITHMIC QUOTING",
    description: "Instant pricing. Zero friction.",
  },
  {
    icon: Layers,
    title: "INDUSTRIAL COMPOSITES",
    description: "Carbon Fiber Nylon. Polycarbonate. ABS.",
  },
  {
    icon: Zap,
    title: "RAPID DEPLOYMENT",
    description: "From CAD to Part in 24 hours.",
  },
];

const CapabilitiesSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "NOTIFICATION REGISTERED",
        description: "You'll be notified when Tiber launches.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="border-t border-ghost">
      {/* Top row - 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {capabilities.map((cap, index) => (
          <div
            key={cap.title}
            className={`p-8 lg:p-12 card-hover group ${
              index < 2 ? "border-b md:border-b-0 md:border-r border-ghost" : "border-b md:border-b-0"
            }`}
          >
            <div className="space-y-6">
              {/* Icon */}
              <div className="relative">
                <cap.icon
                  className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  strokeWidth={1}
                />
                {/* Hover glow */}
                <div className="absolute inset-0 w-8 h-8 bg-primary opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* Title */}
              <h3 className="font-sans font-black text-xl tracking-tight uppercase text-foreground">
                {cap.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-sm text-muted-foreground">
                {cap.description}
              </p>

              {/* Bottom accent line */}
              <div className="h-px bg-ghost w-0 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row - Email capture */}
      <div className="border-t border-ghost p-8 lg:p-12 group">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Mail className="w-6 h-6 text-primary" strokeWidth={1} />
            <h3 className="font-sans font-black text-2xl md:text-3xl tracking-tight uppercase text-foreground">
              GET NOTIFIED
            </h3>
          </div>
          <p className="font-mono text-sm md:text-base text-muted-foreground">
            Enter your email to be notified when Tiber launches.
          </p>
          
          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL ADDRESS"
              required
              className="flex-1 bg-background border border-ghost px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "SENDING..." : "NOTIFY ME"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
