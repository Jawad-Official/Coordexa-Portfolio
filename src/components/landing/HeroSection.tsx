import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-light overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(220,100%,50%,0.05)_0%,_transparent_50%)]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Business Automation & Execution Operating System
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground leading-[1.1] mb-8 animate-fade-up [animation-delay:100ms]">
            Build a business
            <br />
            <span className="text-gradient-blue">that runs itself.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up [animation-delay:200ms]">
            Coordexa captures your knowledge, turns it into systems, and tracks execution automatically. 
            <span className="text-foreground font-medium"> Stop being the bottleneck.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
            <Button 
              variant="hero-secondary" 
              size="xl"
              onClick={() => {
                document.getElementById("wishlist-section")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Bell className="w-5 h-5" />
              Notify me when its cooked
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 animate-fade-up [animation-delay:400ms]">
            <div className="flex items-center justify-center gap-8 opacity-40">
              {["$1M+", "$5M+", "$10M+", "$25M+", "$50M+"].map((revenue) => (
                <div
                  key={revenue}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="font-mono text-sm">{revenue}</span>
                  <span className="text-xs">ARR</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/40" />
        </div>
      </div>
    </section>
  );
};
