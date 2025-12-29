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
  { id: 8, label: "Profile" },
  { id: 9, label: "Join" },
];

interface HeaderProps {
  currentStep: number;
}

export const Header = ({ currentStep }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [initialWidth, setInitialWidth] = useState<number | null>(null);
  const [prevStep, setPrevStep] = useState(currentStep);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const parentContainerRef = useRef<HTMLDivElement>(null);
  const journeyBarRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update visible steps based on scroll position
  useEffect(() => {
    if (!journeyBarRef.current || !isScrolled) return;

    const updateVisibleSteps = () => {
      const journeyBar = journeyBarRef.current;
      if (!journeyBar) return;

      const barRect = journeyBar.getBoundingClientRect();
      const scrollLeft = journeyBar.scrollLeft;
      const barWidth = journeyBar.clientWidth;
      const visible = new Set<number>();

      stepRefs.current.forEach((stepElement, index) => {
        if (!stepElement) return;

        const stepOffsetLeft = stepElement.offsetLeft;
        const stepWidth = stepElement.offsetWidth;
        const stepLeftVisible = stepOffsetLeft - scrollLeft;
        const stepRightVisible = stepLeftVisible + stepWidth;

        // Step is fully visible if completely within bounds OR is the first step and mostly in view
        const edgeTolerance = 4;
        const firstStep = index === 0;
        const lastStep = index === stepRefs.current.length - 1;
        if (
          (firstStep && stepLeftVisible > -20 && stepRightVisible <= barWidth) ||
          (lastStep && stepLeftVisible >= 0 && stepRightVisible > barWidth - 20) ||
          (stepLeftVisible >= edgeTolerance && stepRightVisible <= barWidth - edgeTolerance)
        ) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
    };

    updateVisibleSteps();
    const interval = setInterval(updateVisibleSteps, 100);
    journeyBarRef.current.addEventListener('scroll', updateVisibleSteps);

    return () => {
      clearInterval(interval);
      journeyBarRef.current?.removeEventListener('scroll', updateVisibleSteps);
    };
  }, [isScrolled]);

  // Track step changes for slide animation and auto-scroll
  useEffect(() => {
    if (currentStep !== prevStep) {
      setSlideDirection(currentStep > prevStep ? 'right' : 'left');
      setPrevStep(currentStep);
      
      // Auto-scroll to show current step if not visible
      if (journeyBarRef.current && isScrolled) {
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          const currentStepIndex = currentStep - 1;
          const stepElement = stepRefs.current[currentStepIndex];
          
          if (stepElement && journeyBarRef.current) {
            const journeyBar = journeyBarRef.current;
            
            // Get the step's position relative to the scroll container
            const stepOffsetLeft = stepElement.offsetLeft;
            const stepWidth = stepElement.offsetWidth;
            const barWidth = journeyBar.clientWidth;
            const currentScrollLeft = journeyBar.scrollLeft;
            
            // Calculate the step's visible position
            const stepLeftVisible = stepOffsetLeft - currentScrollLeft;
            const stepRightVisible = stepLeftVisible + stepWidth;
            
            // Ensure step is fully visible - no partial words
            const minPadding = 4;
            
            // Check if step is fully visible within the viewport
            const isFullyVisible = 
              stepLeftVisible >= minPadding && 
              stepRightVisible <= barWidth - minPadding;
            
            if (!isFullyVisible) {
              // Calculate scroll position to ensure the entire step is visible
              let targetScroll = currentScrollLeft;
              
              if (stepLeftVisible < minPadding) {
                // Step is cut off on the left - scroll left to show it fully
                targetScroll = stepOffsetLeft - minPadding;
              } else if (stepRightVisible > barWidth - minPadding) {
                // Step is cut off on the right - scroll right to show it fully
                targetScroll = stepOffsetLeft + stepWidth - barWidth + minPadding;
              }
              
              // Ensure we don't scroll beyond bounds
              const maxScroll = Math.max(0, journeyBar.scrollWidth - barWidth);
              const finalScroll = Math.max(0, Math.min(targetScroll, maxScroll));
              
              // Only scroll if the step can be fully shown
              if (finalScroll >= 0 && finalScroll <= maxScroll) {
                journeyBar.scrollTo({
                  left: finalScroll,
                  behavior: 'smooth'
                });
              }
            }
          }
        });
      }
    }
  }, [currentStep, prevStep, isScrolled]);

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

  const currentStepData = steps.find(step => step.id === currentStep);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 py-4">
      <div ref={parentContainerRef} className="container mx-auto px-6">
        <div className="flex justify-center">
          <div 
            ref={containerRef}
            className="glass-card px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3"
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
            <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-lg">
                    C
                  </span>
                </div>
                <span className="font-serif text-lg font-semibold text-foreground hidden sm:inline">
                  Coordexa
                </span>
              </div>

              {/* Desktop Journey Bar - full bar with all steps */}
              <div 
                ref={journeyBarRef}
                className="hidden md:flex items-center gap-1 md:gap-1.5 lg:gap-2 justify-center scrollbar-hide"
                style={{
                  flex: isScrolled ? '1 1 0%' : '0 0 0px',
                  minWidth: 0,
                  opacity: isScrolled ? 1 : 0,
                  overflowX: isScrolled ? 'auto' : 'hidden',
                  overflowY: 'hidden',
                  transition: 'flex 700ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease-out 150ms',
                  visibility: isScrolled ? 'visible' : 'hidden',
                  scrollBehavior: 'smooth',
                }}
              >
                {steps.map((step, index) => {
                  const isFullyVisible = visibleSteps.has(step.id) || !isScrolled;
                  return (
                    <div 
                      key={step.id}
                      ref={(el) => {
                        stepRefs.current[index] = el;
                      }}
                      className={`flex items-center gap-1 md:gap-1.5 lg:gap-2 whitespace-nowrap flex-shrink-0 transition-opacity duration-200 ${
                        isScrolled ? 'animate-fade-in-slide' : ''
                      }`}
                      style={{
                        animationDelay: isScrolled ? `${250 + index * 35}ms` : '0ms',
                        opacity: isScrolled ? (isFullyVisible ? 1 : 0) : 0,
                        pointerEvents: isFullyVisible ? 'auto' : 'none',
                      }}
                    >
                    <button
                      className="flex items-center gap-1 md:gap-1.5 group"
                      onClick={() => {
                        const targetId = step.id === 9 
                          ? "waitlist-section" 
                          : `section-${step.id}`;
                        document
                          .getElementById(targetId)
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
                        className={`text-[10px] md:text-xs lg:text-xs font-medium transition-colors duration-300 ${
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
                      <div className="w-2 md:w-3 lg:w-4 h-px bg-border flex-shrink-0" />
                    )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Journey Bar - current step only with slide animation */}
              {isScrolled && (
                <div 
                  className="md:hidden flex items-center gap-2 flex-1 min-w-0 justify-center relative overflow-hidden"
                  style={{
                    opacity: isScrolled ? 1 : 0,
                    transition: 'opacity 400ms ease-out 150ms',
                    visibility: isScrolled ? 'visible' : 'hidden',
                    height: '28px'
                  }}
                >
                  {/* Previous step sliding out */}
                  {prevStep !== currentStep && (
                    <div
                      key={`prev-${prevStep}`}
                      className={`flex items-center gap-2 absolute inset-0 justify-center ${
                        slideDirection === 'right' 
                          ? 'animate-slide-out-to-left' 
                          : 'animate-slide-out-to-right'
                      }`}
                      style={{
                        animation: slideDirection === 'right' 
                          ? 'slideOutToLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                          : 'slideOutToRight 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                      }}
                    >
                      <div className="step-indicator active" />
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {steps.find(s => s.id === prevStep)?.label || `Step ${prevStep}`}
                      </span>
                    </div>
                  )}
                  
                  {/* Current step sliding in */}
                  <div
                    key={`current-${currentStep}`}
                    className={`flex items-center gap-2 absolute inset-0 justify-center ${
                      slideDirection === 'right' 
                        ? 'animate-slide-in-from-right' 
                        : 'animate-slide-in-from-left'
                    }`}
                  >
                    <div
                      className={`step-indicator ${
                        currentStepData ? "active" : ""
                      }`}
                    />
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {currentStepData?.label || `Step ${currentStep}`}
                    </span>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="flex-shrink-0">
                <Button 
                  size="sm"
                  className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 h-7 md:h-9"
                  onClick={() => {
                    document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
