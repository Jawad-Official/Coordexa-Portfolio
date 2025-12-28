import { useState, useEffect } from "react";

const steps = [
  { id: 1, label: "Knowledge" },
  { id: 2, label: "SOPs" },
  { id: 3, label: "Execution" },
  { id: 4, label: "Freedom" },
  { id: 5, label: "Scoreboards" },
  { id: 6, label: "AI Insights" },
  { id: 7, label: "Structure" },
];

interface StepperNavProps {
  currentStep: number;
}

export const StepperNav = ({ currentStep }: StepperNavProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="glass-card px-6 py-3 flex items-center gap-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-4">
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
    </nav>
  );
};
