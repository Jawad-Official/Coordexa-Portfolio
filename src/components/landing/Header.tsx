import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  { id: 1, label: "Knowledge" },
  { id: 2, label: "SOPs" },
  { id: 3, label: "Execution" },
  { id: 4, label: "Freedom" },
  { id: 5, label: "Scoreboards" },
  { id: 6, label: "AI Insights" },
  { id: 7, label: "Structure" },
];

interface HeaderProps {
  currentStep: number;
}

export const Header = ({ currentStep }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [initialWidth, setInitialWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const parentContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (parentContainerRef.current) {
        const fullWidth = parentContainerRef.current.clientWidth - 48; // Subtract padding (px-6 = 24px each side)
        setContainerWidth(fullWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Measure initial width on mount
  useEffect(() => {
    if (containerRef.current && initialWidth === null) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        if (containerRef.current) {
          setInitialWidth(containerRef.current.scrollWidth);
        }
      });
    }
  }, [initialWidth]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4">
      <div ref={parentContainerRef} className="container mx-auto px-6">
        <div className="flex justify-center">
          <div 
            ref={containerRef}
            className="glass-card px-6 py-3"
            style={{
              width: initialWidth !== null && containerWidth > 0
                ? isScrolled 
                  ? `${containerWidth}px` 
                  : `${initialWidth}px`
                : 'auto',
              maxWidth: isScrolled ? '100%' : 'fit-content',
              transition: initialWidth !== null && containerWidth > 0
                ? 'width 700ms cubic-bezier(0.4, 0, 0.2, 1), max-width 700ms cubic-bezier(0.4, 0, 0.2, 1)' 
                : 'max-width 700ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-lg">
                    C
                  </span>
                </div>
                <span className="font-serif text-lg font-semibold text-foreground">
                  Coordexa
                </span>
              </div>

              {/* Journey Bar - appears when scrolled, on same level */}
              <div 
                className="flex items-center gap-4 justify-center"
                style={{
                  flex: isScrolled ? '1 1 0%' : '0 0 0px',
                  minWidth: 0,
                  opacity: isScrolled ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'flex 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease-out 150ms',
                  visibility: isScrolled ? 'visible' : 'hidden'
                }}
              >
                {steps.map((step, index) => (
                  <div 
                    key={step.id} 
                    className={`flex items-center gap-4 whitespace-nowrap ${
                      isScrolled ? 'animate-fade-in-slide' : ''
                    }`}
                    style={{
                      animationDelay: isScrolled ? `${250 + index * 35}ms` : '0ms',
                      opacity: isScrolled ? 0 : 0
                    }}
                  >
                    <button
                      className="flex items-center gap-2 group"
                      onClick={() => {
                        document
                          .getElementById(`section-${step.id}`)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <div
                        className={`step-indicator ${
                          currentStep === step.id
                            ? "active"
                            : currentStep > step.id
                            ? "completed"
                            : "pending"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          currentStep === step.id
                            ? "text-foreground"
                            : currentStep > step.id
                            ? "text-muted-foreground"
                            : "text-muted-foreground/60"
                        }`}
                      >
                        {step.label}
                      </span>
                    </button>
                    {index < steps.length - 1 && (
                      <div className="w-8 h-px bg-border" />
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <Button 
                  size="sm"
                  onClick={() => {
                    document.getElementById("wishlist-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Add Me to the Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
