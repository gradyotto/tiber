import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import missionGraphic from "@/assets/mission-graphic.png";

const EmailCaptureForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    try {
      const response = await fetch("https://formspree.io/f/xvzonvwp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "You're on the list",
          description: "We'll be in touch soon.",
        });
        setEmail("");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 border-t border-ghost relative">
      {/* Corner markers */}
      <span className="corner-marker top-6 left-6">+</span>
      <span className="corner-marker top-6 right-6">+</span>

      <div className="max-w-xl mx-auto text-center space-y-6">
        <span className="font-mono text-xs text-primary uppercase tracking-wider">
          &gt; EARLY ACCESS
        </span>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <h2 className="font-sans font-black text-2xl md:text-3xl tracking-tight text-foreground uppercase leading-none text-center">
            JOIN THE EARLY ACCESS LIST
          </h2>
          <img src={missionGraphic} alt="Mission graphic" className="h-8 w-auto flex-shrink-0 text-slate-50" />
        </div>
        <p className="font-mono text-sm text-muted-foreground">
          Early access subscribers lock in <span className="text-primary">founding member pricing</span> — a rate that stays with you for the lifetime of your relationship with Tiber. Be first to quote when we go live.
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
