import { CursorPersona } from "./CursorPersona";
import { Mic, FileText, CheckSquare, Sparkles } from "lucide-react";

export const KnowledgeSection = () => {
  return (
    <section
      id="section-1"
      className="min-h-screen py-32 section-dark relative overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              01 — KNOWLEDGE → EXECUTION
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Capture once.
              <br />
              <span className="text-white/60">Execute forever.</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Record meetings, extract insights with AI, and automatically
              generate SOPs and tasks. Never explain the same thing twice.
            </p>
          </div>

          {/* Main visual - Glass dashboard */}
          <div className="relative">
            {/* Floating cursor personas */}
            <CursorPersona
              name="Sarah"
              role="Product"
              color="blue"
              position={{ x: 15, y: 20 }}
              delay={0}
            />
            <CursorPersona
              name="Mike"
              role="Ops"
              color="green"
              position={{ x: 80, y: 35 }}
              delay={0.5}
            />
            <CursorPersona
              name="Alex"
              role="CEO"
              color="purple"
              position={{ x: 60, y: 70 }}
              delay={1}
            />

            {/* Main glass card */}
            <div className="glass-card-dark p-8 rounded-3xl">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-white/40 text-sm font-mono">
                  coordexa.app/meetings
                </span>
              </div>

              {/* Content grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left - Video/Recording */}
                <div className="space-y-6">
                  <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                    <div className="text-center z-10">
                      <Mic className="w-12 h-12 text-primary mx-auto mb-3" />
                      <p className="text-white/60 text-sm">
                        Recording: Weekly Ops Review
                      </p>
                      <p className="text-white/30 text-xs mt-1 font-mono">
                        00:32:15
                      </p>
                    </div>
                    {/* Waveform decoration */}
                    <div className="absolute bottom-4 left-4 right-4 h-8 flex items-end gap-1">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-primary/40 rounded-full"
                          style={{
                            height: `${Math.random() * 100}%`,
                            animationDelay: `${i * 50}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Transcript preview */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-white/60 text-sm">
                        AI Transcript
                      </span>
                    </div>
                    <div className="space-y-2 font-mono text-xs">
                      <p className="text-white/40">
                        <span className="text-primary">@Sarah:</span> We need to
                        standardize the client onboarding...
                      </p>
                      <p className="text-white/40">
                        <span className="text-green-400">@Mike:</span> I can
                        document the current process...
                      </p>
                      <p className="text-white/40">
                        <span className="text-violet-400">@Alex:</span> Let's
                        create an SOP for this...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right - Generated outputs */}
                <div className="space-y-4">
                  {/* SOP Card */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 group hover:border-primary/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-primary font-mono">
                            SOP GENERATED
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        </div>
                        <h4 className="text-white font-medium mb-1">
                          Client Onboarding Process
                        </h4>
                        <p className="text-white/40 text-sm">
                          12 steps • 3 owners • Est. 45 min
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tasks Card */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10 group hover:border-primary/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                        <CheckSquare className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-green-400 font-mono">
                            TASKS CREATED
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        </div>
                        <h4 className="text-white font-medium mb-2">
                          Action Items from Meeting
                        </h4>
                        <div className="space-y-1.5">
                          {[
                            "Document welcome email template",
                            "Create Slack channel setup guide",
                            "Define success metrics",
                          ].map((task, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm text-white/50"
                            >
                              <div className="w-4 h-4 rounded border border-white/20" />
                              {task}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-white/60 text-sm">
                        AI Summary
                      </span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Team aligned on standardizing client onboarding. Mike will
                      document current process by Friday. New SOP will include
                      welcome sequence, tool access, and success check-ins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emotion callout */}
            <div className="text-center mt-12">
              <p className="text-white/30 text-lg italic font-serif">
                "I don't have to explain this again."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
