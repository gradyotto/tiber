import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast({ title: "You're on the list", description: "We'll be in touch soon." });
        setEmail("");
      } else throw new Error("Submission failed");
    } catch {
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
    <section className="py-24 px-6 border-t border-navy/10 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Flag glyph */}
        <div className="mb-8 flex justify-center">
          <div className="w-10 h-6 relative border border-navy/20">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-flag-red" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-navy/20" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-navy/10" />
          </div>
        </div>

        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-flag-red mb-4 block">
          &gt; Stay Updated
        </span>
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy mb-6">
          Join the mission.
        </h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy/50 mb-10">
          Get updates on Tiber's capabilities as they come online.
        </p>

        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent border-b border-navy/20 py-3 px-1 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-navy transition"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 font-mono text-[11px] tracking-[0.2em] bg-navy text-cream hover:bg-flag-red transition-all uppercase disabled:opacity-50"
          >
            {isSubmitting ? "..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailCaptureForm;
