import { Brain, AlertCircle, Lightbulb, TrendingDown, BookOpen, Users, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { CursorPersona } from "./CursorPersona";

export const AIInsightsSection = () => {
  const failingFunctions = [
    { name: "Lead Response Time", dept: "Sales", days: 5, severity: "high" },
    { name: "Ticket Resolution", dept: "Support", days: 3, severity: "medium" },
  ];

  const recommendations = [
    { 
      type: "sop", 
      icon: BookOpen, 
      title: "Update SOP: Lead Qualification",
      description: "Response time SOP is outdated. Recommend adding automation trigger.",
      impact: "High"
    },
    { 
      type: "training", 
      icon: Users, 
      title: "Training Gap: New Sales Reps",
      description: "3 team members haven't completed onboarding SOP certification.",
      impact: "Medium"
    },
    { 
      type: "automation", 
      icon: Zap, 
      title: "Automation Opportunity",
      description: "Ticket routing can be automated based on detected patterns.",
      impact: "High"
    },
  ];

  return (
    <section
      id="section-6"
      className="min-h-screen py-32 section-dark relative overflow-hidden"
    >
      {/* AI glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              06 — AI EXECUTION INSIGHTS
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              AI that detects gaps
              <br />
              <span className="text-white/60">before they become problems.</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Proactive intelligence on failing functions, missing SOPs, training needs,
              and automation opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Failing functions detection */}
            <div className="lg:col-span-2 glass-card-dark p-6 rounded-2xl relative">
              <CursorPersona name="Mike R." role="Ops Lead" color="red" className="absolute -bottom-3 -right-3" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-red-500/20">
                  <TrendingDown className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Failing Functions</h3>
                  <p className="text-sm text-white/40">Detected this week</p>
                </div>
              </div>

              <div className="space-y-3">
                {failingFunctions.map((func) => (
                  <div
                    key={func.name}
                    className="p-4 rounded-xl bg-white/5 border border-red-500/20"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="font-medium text-white">{func.name}</span>
                        <p className="text-sm text-white/40">{func.dept}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        func.severity === "high" 
                          ? "bg-red-500/20 text-red-400" 
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {func.severity === "high" ? "Critical" : "Warning"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <AlertCircle className="w-4 h-4" />
                      <span>Red for {func.days} consecutive days</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gap analysis summary */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-sm font-medium text-white/60 mb-4">Gap Analysis</h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-xl font-semibold text-white">3</div>
                    <div className="text-xs text-white/40">Missing SOPs</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-xl font-semibold text-white">7</div>
                    <div className="text-xs text-white/40">Late Tasks</div>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5">
                    <div className="text-xl font-semibold text-white">2</div>
                    <div className="text-xs text-white/40">Training Gaps</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="lg:col-span-3 glass-card-dark p-6 rounded-2xl relative">
              <CursorPersona name="AI Assistant" role="System" color="purple" className="absolute -top-3 -left-3" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Recommendations</h3>
                  <p className="text-sm text-white/40">Corrective actions suggested</p>
                </div>
              </div>

              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${
                        rec.type === "sop" 
                          ? "bg-blue-500/20" 
                          : rec.type === "training" 
                          ? "bg-violet-500/20" 
                          : "bg-green-500/20"
                      }`}>
                        <rec.icon className={`w-5 h-5 ${
                          rec.type === "sop" 
                            ? "text-blue-400" 
                            : rec.type === "training" 
                            ? "text-violet-400" 
                            : "text-green-400"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-white">{rec.title}</span>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            rec.impact === "High" 
                              ? "bg-primary/20 text-primary" 
                              : "bg-white/10 text-white/60"
                          }`}>
                            {rec.impact} Impact
                          </span>
                        </div>
                        <p className="text-sm text-white/50 mb-3">{rec.description}</p>
                        <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                          <span>Take Action</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hiring trigger indicator */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/20">
                    <Users className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-white">Hiring Trigger Detected</span>
                    <p className="text-sm text-white/50">Sales team at 120% capacity. Consider adding 1 SDR.</p>
                  </div>
                  <Lightbulb className="w-5 h-5 text-orange-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Emotion callout */}
          <div className="text-center mt-16">
            <p className="text-white/30 text-lg italic font-serif">
              "The system sees what you'd miss."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
