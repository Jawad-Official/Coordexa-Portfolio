import { Target, User, Building2, CheckCircle2, AlertTriangle, XCircle, Clock, TrendingUp, Calendar } from "lucide-react";
import { CursorPersona } from "./CursorPersona";

export const ScoreboardsSection = () => {
  const individualMetrics = [
    { name: "Outbound Calls", target: 50, actual: 48, status: "green", owner: "Sarah M." },
    { name: "Follow-ups Sent", target: 30, actual: 32, status: "green", owner: "Sarah M." },
    { name: "Demos Booked", target: 5, actual: 3, status: "yellow", owner: "Sarah M." },
    { name: "Pipeline Updated", target: 1, actual: 1, status: "green", owner: "Sarah M." },
  ];

  const departmentFunctions = [
    { name: "Sales", functions: 4, green: 3, yellow: 1, red: 0, score: 92 },
    { name: "Operations", functions: 6, green: 5, yellow: 1, red: 0, score: 94 },
    { name: "Product", functions: 5, green: 4, yellow: 0, red: 1, score: 78 },
    { name: "Support", functions: 4, green: 4, yellow: 0, red: 0, score: 100 },
  ];

  return (
    <section
      id="section-5"
      className="min-h-screen py-32 section-light relative overflow-hidden"
    >
      {/* Subtle accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              05 — FUNCTION SCOREBOARDS
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
              Daily execution,
              <br />
              <span className="text-muted-foreground">measured & visible.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Individual and department scoreboards track every function daily. 
              Green, yellow, red — at a glance.
            </p>
          </div>

          {/* Two-column layout: Individual + Department */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Individual Function Scoreboard */}
            <div className="glass-card p-6 rounded-2xl relative">
              <CursorPersona name="Sarah M." role="SDR" color="green" className="absolute -top-3 -right-3" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Individual Scoreboard</h3>
                  <p className="text-sm text-muted-foreground">SDR – Outbound • Today</p>
                </div>
              </div>

              {/* Daily check-in deadline */}
              <div className="flex items-center justify-between mb-4 p-3 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Check-in deadline</span>
                </div>
                <span className="text-sm font-medium text-foreground">5:00 PM</span>
              </div>

              {/* Metrics list */}
              <div className="space-y-3">
                {individualMetrics.map((metric) => (
                  <div
                    key={metric.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-background border border-border"
                  >
                    <div className="flex items-center gap-3">
                      {metric.status === "green" && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                      {metric.status === "yellow" && (
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      )}
                      {metric.status === "red" && (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <span className="text-sm font-medium text-foreground">{metric.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {metric.actual} / {metric.target}
                      </span>
                      <div
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          metric.status === "green"
                            ? "bg-green-500/10 text-green-600"
                            : metric.status === "yellow"
                            ? "bg-yellow-500/10 text-yellow-600"
                            : "bg-red-500/10 text-red-600"
                        }`}
                      >
                        {metric.status === "green" ? "On Target" : metric.status === "yellow" ? "Below" : "Missed"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick submit */}
              <div className="mt-4 pt-4 border-t border-border">
                <button className="w-full py-2.5 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                  Submit Daily Check-in
                </button>
              </div>
            </div>

            {/* Department Function Scoreboard */}
            <div className="glass-card p-6 rounded-2xl relative">
              <CursorPersona name="Mike R." role="Ops Lead" color="blue" className="absolute -top-3 -right-3" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Department Scoreboards</h3>
                  <p className="text-sm text-muted-foreground">Aggregated daily execution</p>
                </div>
              </div>

              {/* Department summary grid */}
              <div className="space-y-4">
                {departmentFunctions.map((dept) => (
                  <div
                    key={dept.name}
                    className="p-4 rounded-lg bg-background border border-border"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{dept.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {dept.functions} functions
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-foreground">{dept.score}%</span>
                    </div>
                    
                    {/* Status breakdown */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        <span className="text-xs text-muted-foreground">{dept.green}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <span className="text-xs text-muted-foreground">{dept.yellow}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <span className="text-xs text-muted-foreground">{dept.red}</span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-green-500 rounded-full transition-all duration-700"
                        style={{ width: `${dept.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly/Monthly rollup preview */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Automated Dashboards</h3>
                  <p className="text-sm text-muted-foreground">Weekly, monthly, yearly rollups — automatic</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground">Week</button>
                <button className="px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">Month</button>
                <button className="px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">Year</button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "Execution Rate", value: "94%", trend: "+3%", icon: Target },
                { label: "Green Days", value: "18/21", trend: "86%", icon: CheckCircle2 },
                { label: "Missed Check-ins", value: "2", trend: "-5", icon: Calendar },
                { label: "Trend", value: "↑", trend: "Improving", icon: TrendingUp },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-muted/50 border border-border">
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <div className="text-2xl font-semibold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <div className="text-xs text-green-600 font-medium mt-1">{stat.trend}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Emotion callout */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground/60 text-lg italic font-serif">
              "Accountability without micromanagement."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
