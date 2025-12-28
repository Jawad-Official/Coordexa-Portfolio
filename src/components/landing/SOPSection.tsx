import { FileText, Video, Users, CheckCircle2, ArrowRight, Play, RefreshCw } from "lucide-react";

export const SOPSection = () => {
  return (
    <section
      id="section-2"
      className="min-h-screen py-32 section-light relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              02 — SOPS THAT GET FOLLOWED
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
              SOPs connected
              <br />
              <span className="text-muted-foreground">to real work.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your processes aren't PDFs gathering dust. They're living systems
              linked to videos, tasks, owners, and outcomes.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Large card - SOP lifecycle */}
            <div className="md:col-span-2 glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    SOP Lifecycle Management
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    From draft to active to improved
                  </p>
                </div>
              </div>

              {/* Lifecycle flow */}
              <div className="flex items-center justify-between mb-8">
                {[
                  { label: "Draft", status: "complete" },
                  { label: "Review", status: "complete" },
                  { label: "Active", status: "current" },
                  { label: "Improved", status: "pending" },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          step.status === "complete"
                            ? "bg-primary text-primary-foreground"
                            : step.status === "current"
                            ? "bg-primary/20 text-primary border-2 border-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step.status === "complete" ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <span className="text-sm font-medium">{i + 1}</span>
                        )}
                      </div>
                      <span
                        className={`text-sm mt-2 ${
                          step.status === "current"
                            ? "text-primary font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < 3 && (
                      <div
                        className={`w-16 h-0.5 mx-2 ${
                          step.status === "complete"
                            ? "bg-primary"
                            : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Example SOP */}
              <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        Active
                      </span>
                      <span className="text-xs text-muted-foreground">
                        v2.3 • Updated 2 days ago
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Client Onboarding Process
                    </h4>
                  </div>
                  <button className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                    View <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    <span>3 videos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>12 steps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>4 owners</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column cards */}
            <div className="space-y-6">
              {/* Video linked card */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Video className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">
                    Video-Linked Steps
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    "Welcome call recording",
                    "Tool setup walkthrough",
                    "Success check-in demo",
                  ].map((video, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Play className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground">
                        {video}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Owners card */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">
                    Assigned Owners
                  </span>
                </div>
                <div className="flex items-center -space-x-2">
                  {["S", "M", "A", "J"].map((initial, i) => (
                    <div
                      key={i}
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 border-card ${
                        i === 0
                          ? "bg-primary text-primary-foreground"
                          : i === 1
                          ? "bg-emerald-500 text-white"
                          : i === 2
                          ? "bg-violet-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      {initial}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm text-muted-foreground border-2 border-card">
                    +2
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emotion callout */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground text-lg italic font-serif">
              "This will actually get done."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
