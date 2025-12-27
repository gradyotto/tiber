import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

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
      {/* About Header Section */}
      <div className="py-16 px-6 border-b border-ghost relative">
        <span className="corner-marker top-6 left-6">+</span>
        <span className="corner-marker top-6 right-6">+</span>
        
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs text-primary uppercase tracking-wider opacity-0 animate-fade-up">
            &gt; ABOUT TIBER
          </span>
          <h2 className="mt-4">
            <span className="block font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-foreground uppercase leading-[0.9] opacity-0 animate-fade-up animate-delay-100">
              REBUILDING THE
            </span>
            <span className="block font-sans font-black text-4xl md:text-6xl lg:text-7xl tracking-tighter text-foreground uppercase leading-[0.9] opacity-0 animate-fade-up animate-delay-200">
              INDUSTRIAL BASE
            </span>
          </h2>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-up animate-delay-300">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              &gt; 01 — MISSION
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              AMERICAN DYNAMISM
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Tiber was founded with a singular mission: to rebuild and secure America's 
              manufacturing capabilities. In an era where supply chains have become 
              strategic vulnerabilities, we believe that critical parts should be made 
              on American soil, by American hands.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Named after the river that built an empire, Tiber represents the 
              infrastructure that enables greatness. We are the backbone of the 
              next industrial revolution.
            </p>
          </div>
        </div>
      </div>

      {/* Origin Section */}
      <div className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-up animate-delay-300">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              &gt; 02 — ORIGIN
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              BORN FROM NECESSITY
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Our founders witnessed firsthand the erosion of American manufacturing 
              capacity. Critical defense programs delayed by months. Medical device 
              companies unable to source precision components. Aerospace firms 
              dependent on foreign suppliers for mission-critical parts.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Tiber was created to solve this. Based in Phoenix, Arizona, we operate 
              at the intersection of advanced manufacturing technology and relentless 
              execution. Our algorithmic quoting system eliminates friction. Our 
              24-hour deployment capability eliminates waiting.
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="py-16 px-6 border-b border-ghost">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="opacity-0 animate-fade-up animate-delay-300">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">
              &gt; 03 — CAPABILITIES
            </span>
            <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase mt-4">
              DEFENSE-GRADE<br />PRECISION
            </h2>
          </div>
          <div className="space-y-6">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              We specialize in industrial composites and high-performance materials: 
              Carbon Fiber Nylon, Polycarbonate, ABS, and beyond. Every part we produce 
              meets the exacting standards required by defense, aerospace, and critical 
              infrastructure applications.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary">24H</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">CAD TO PART</p>
              </div>
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary">0.001"</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">TOLERANCE</p>
              </div>
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary">100%</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">USA MADE</p>
              </div>
              <div className="border border-ghost p-4 card-hover">
                <span className="font-mono text-2xl font-bold text-primary">ITAR</span>
                <p className="font-mono text-xs text-muted-foreground mt-1">COMPLIANT</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email capture - now at bottom */}
      <div className="p-8 lg:p-12 group">
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
