import { useState, useEffect, lazy, Suspense } from "react";
import { Header } from "@/components/landing/Header";
import { CursorLight } from "@/components/CursorLight";

// Lazy-loaded components
const HeroSection = lazy(() => import("@/components/landing/HeroSection").then(module => ({ default: module.HeroSection })));
const KnowledgeSection = lazy(() => import("@/components/landing/KnowledgeSection").then(module => ({ default: module.KnowledgeSection })));
const SOPSection = lazy(() => import("@/components/landing/SOPSection").then(module => ({ default: module.SOPSection })));
const ExecutionSection = lazy(() => import("@/components/landing/ExecutionSection").then(module => ({ default: module.ExecutionSection })));
const FreedomSection = lazy(() => import("@/components/landing/FreedomSection").then(module => ({ default: module.FreedomSection })));
const ScoreboardsSection = lazy(() => import("@/components/landing/ScoreboardsSection").then(module => ({ default: module.ScoreboardsSection })));
const AIInsightsSection = lazy(() => import("@/components/landing/AIInsightsSection").then(module => ({ default: module.AIInsightsSection })));
const DepartmentsSection = lazy(() => import("@/components/landing/DepartmentsSection").then(module => ({ default: module.DepartmentsSection })));
const CTASection = lazy(() => import("@/components/landing/CTASection").then(module => ({ default: module.CTASection })));
const ProfileUsersSection = lazy(() => import("@/components/landing/ProfileUsersSection").then(module => ({ default: module.ProfileUsersSection })));

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        document.getElementById("section-1"),
        document.getElementById("section-2"),
        document.getElementById("section-3"),
        document.getElementById("section-4"),
        document.getElementById("section-5"),
        document.getElementById("section-6"),
        document.getElementById("section-7"),
        document.getElementById("section-8"),
        document.getElementById("waitlist-section"),
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentStep(index + 1);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <CursorLight />
      <Header currentStep={currentStep} />
      
      <main id="main-content" aria-label="Main content">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <KnowledgeSection />
          <SOPSection />
          <ExecutionSection />
          <FreedomSection />
          <ScoreboardsSection />
          <AIInsightsSection />
          <DepartmentsSection />
          <ProfileUsersSection />
          <CTASection />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
