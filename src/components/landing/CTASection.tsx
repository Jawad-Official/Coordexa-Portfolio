import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const CTASection = () => {
  const [step, setStep] = useState<"initial" | "name" | "email">("initial");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInitialClick = () => {
    setStep("name");
  };

  const handleNameNext = () => {
    if (name.trim()) {
      setStep("email");
    }
  };

  const handleEmailSubmit = async () => {
    if (email.trim() && name.trim() && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const url = "https://script.google.com/macros/s/AKfycbzSTAZuIQYZ0IZv6jzMTXq9dfH0R4vCoqIOTQkI_N-MOPlHMq84Zc2i3cvDk5wOu5kp4g/exec";
        
        // Use FormData for no-cors requests (works better than JSON)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        
        // Use no-cors mode to bypass CORS restrictions
        await fetch(url, {
          method: "POST",
          mode: "no-cors",
          body: formData,
        });

        // Since we can't read the response with no-cors, we'll assume success
        setShowSuccessModal(true);
        
        // Reset form
        setStep("initial");
        setName("");
        setEmail("");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error, please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="wishlist-section" className="py-32 section-dark relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-white/70">
              Join the waitlist for early access
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
            Ready to build a
            <br />
            <span className="text-gradient-blue">self-running business?</span>
          </h2>

          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
            Stop being the bottleneck. Capture your knowledge, systemize your
            operations, and regain your freedom.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 w-full justify-center transition-all duration-700 ease-out">
              {/* Input - appears when not initial */}
              <div 
                className={`transition-all duration-700 ease-out ${
                  step === "initial" 
                    ? "opacity-0 w-0 overflow-hidden -translate-x-4" 
                    : "opacity-100 w-auto translate-x-0 flex-1"
                }`}
                style={{
                  transitionDelay: step !== "initial" ? "200ms" : "0ms"
                }}
              >
                <Input
                  type={step === "name" ? "text" : "email"}
                  value={step === "name" ? name : email}
                  onChange={(e) => step === "name" ? setName(e.target.value) : setEmail(e.target.value)}
                  placeholder={step === "name" ? "Type your name" : "Type your email"}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-primary w-full h-12 transition-all duration-500"
                  style={{
                    opacity: step === "initial" ? 0 : 1,
                    transform: step === "initial" ? "translateX(-10px)" : "translateX(0)",
                    transitionDelay: step !== "initial" ? "300ms" : "0ms"
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (step === "name" && name.trim()) {
                        handleNameNext();
                      } else if (step === "email" && email.trim()) {
                        handleEmailSubmit();
                      }
                    }
                  }}
                />
              </div>

              {/* Button - same button that shrinks and moves right */}
              <div 
                className={`transition-all duration-700 ease-out ${
                  step === "initial" 
                    ? "w-full" 
                    : "w-auto flex-shrink-0"
                }`}
              >
                <Button 
                  variant="hero-dark" 
                  size={step === "initial" ? "xl" : "xl"}
                  onClick={
                    step === "initial" 
                      ? handleInitialClick 
                      : step === "name" 
                        ? handleNameNext 
                        : handleEmailSubmit
                  }
                  disabled={
                    (step === "name" && !name.trim()) || 
                    (step === "email" && (!email.trim() || isSubmitting))
                  }
                  className={`transition-all duration-700 ease-out ${
                    step === "initial" 
                      ? "w-full" 
                      : "whitespace-nowrap"
                  }`}
                >
                  {step === "initial" 
                    ? "Add Me to the Wishlist" 
                    : step === "name" 
                      ? "Next" 
                      : "Submit"}
                  <ArrowRight className="w-5 h-5 transition-all duration-500" />
                </Button>
              </div>
            </div>
          </div>

          {/* Feature preview */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Video & Meeting Recording",
                desc: "Capture every decision",
              },
              {
                title: "AI-Powered SOPs",
                desc: "Generate processes automatically",
              },
              {
                title: "Execution Dashboards",
                desc: "See everything at a glance",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                <p className="text-white/40 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="w-[calc(100vw-2rem)] max-w-md mx-4 p-6 sm:p-8 bg-gradient-to-br from-card to-card/95 border-border/50 shadow-2xl rounded-2xl">
          <DialogHeader className="space-y-0">
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5">
              {/* Animated Success Icon */}
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center animate-scale-in shadow-lg">
                  <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 text-primary animate-fade-in-slide" />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75" />
              </div>
              
              {/* Title */}
              <DialogTitle className="text-2xl sm:text-3xl font-serif font-semibold text-foreground leading-tight px-2">
                You're on the waitlist!
              </DialogTitle>
              
              {/* Description */}
              <DialogDescription className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-sm px-2">
                Thank you for joining us. We'll notify you as soon as Coordexa is ready.
              </DialogDescription>
            </div>
          </DialogHeader>
          
          {/* Button */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <Button 
              onClick={() => setShowSuccessModal(false)}
              variant="hero-dark"
              size="lg"
              className="w-full sm:w-auto min-w-[140px] px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
