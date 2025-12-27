import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import missionGraphic from "@/assets/mission-graphic.svg";

const EmailCaptureForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "You're on the list",
        description: "We'll be in touch soon.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="py-16 px-6 border-t border-ghost relative">
      {/* Corner markers */}
      <span className="corner-marker top-6 left-6">+</span>
      <span className="corner-marker top-6 right-6">+</span>

      <div className="max-w-xl mx-auto text-center space-y-6">
        <span className="font-mono text-xs text-primary uppercase tracking-wider">
          &gt; STAY UPDATED
        </span>
        <div className="flex items-center justify-center gap-4">
          <img src={missionGraphic} alt="Mission graphic" className="h-12 w-auto" />
          <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase">
            JOIN THE MISSION
          </h2>
        </div>
        <p className="font-mono text-sm text-muted-foreground">
          Get updates on Tiber's progress and be the first to know when new capabilities come online.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-background border-ghost font-mono text-sm placeholder:text-muted-foreground"
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="font-mono text-xs uppercase tracking-wider"
          >
            {isSubmitting ? "Submitting..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EmailCaptureForm;
