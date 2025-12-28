import { useState, useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { KnowledgeSection } from "@/components/landing/KnowledgeSection";
import { SOPSection } from "@/components/landing/SOPSection";
import { ExecutionSection } from "@/components/landing/ExecutionSection";
import { FreedomSection } from "@/components/landing/FreedomSection";
import { ScoreboardsSection } from "@/components/landing/ScoreboardsSection";
import { AIInsightsSection } from "@/components/landing/AIInsightsSection";
import { DepartmentsSection } from "@/components/landing/DepartmentsSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
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
      <Header currentStep={currentStep} />
      
      <main>
        <HeroSection />
        <KnowledgeSection />
        <SOPSection />
        <ExecutionSection />
        <FreedomSection />
        <ScoreboardsSection />
        <AIInsightsSection />
        <DepartmentsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
