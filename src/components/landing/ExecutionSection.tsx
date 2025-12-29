import { BarChart3, TrendingUp, CheckCircle2, Clock, Users } from "lucide-react";
import { CursorPersona } from "./CursorPersona";

export const ExecutionSection = () => {
  return (
    <section
      id="section-3"
      className="min-h-screen py-32 section-dark relative overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              03 — EXECUTION VISIBILITY
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
              See execution
              <br />
              <span className="text-white/60">without chasing people.</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Weekly Action Maps, function scoreboards, and department dashboards.
              Know what's happening without asking.
            </p>
          </div>

          {/* Dashboard visualization */}
          <div className="glass-card-dark p-8 rounded-3xl relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 relative">
              <CursorPersona name="Jennifer K." role="CEO" color="orange" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Execution Dashboard
                </h3>
                <p className="text-white/40 text-sm">Week of Dec 23, 2024</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  All systems running
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                {
                  label: "Tasks Completed",
                  value: "47",
                  change: "+12%",
                  icon: CheckCircle2,
                  color: "text-green-400",
                },
                {
                  label: "Active SOPs",
                  value: "23",
                  change: "+3",
                  icon: BarChart3,
                  color: "text-primary",
                },
                {
                  label: "Avg. Completion",
                  value: "2.3d",
                  change: "-0.5d",
                  icon: Clock,
                  color: "text-orange-400",
                },
                {
                  label: "Team Members",
                  value: "12",
                  change: "Active",
                  icon: Users,
                  color: "text-violet-400",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 rounded-xl p-4 border border-white/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-xs text-green-400 font-medium">
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-2xl font-semibold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main chart */}
              <div className="md:col-span-2 bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-medium">Weekly Action Map</h4>
                  <div className="flex items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary" />
                      Completed
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-white/20" />
                      Pending
                    </span>
                  </div>
                </div>

                {/* Bar chart visualization */}
                <div className="flex items-end justify-between h-40 gap-2">
                  {[
                    { day: "Mon", completed: 85, pending: 15 },
                    { day: "Tue", completed: 70, pending: 30 },
                    { day: "Wed", completed: 90, pending: 10 },
                    { day: "Thu", completed: 65, pending: 35 },
                    { day: "Fri", completed: 80, pending: 20 },
                    { day: "Sat", completed: 40, pending: 10 },
                    { day: "Sun", completed: 20, pending: 5 },
                  ].map((day, i) => (
                    <div
                      key={day.day}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div className="w-full flex flex-col gap-1">
                        <div
                          className="w-full bg-white/10 rounded-t-lg transition-all duration-700"
                          style={{
                            height: `${day.pending}%`,
                            animationDelay: `${i * 100}ms`,
                          }}
                        />
                        <div
                          className="w-full bg-primary rounded-b-lg transition-all duration-700"
                          style={{
                            height: `${day.completed}%`,
                            animationDelay: `${i * 100}ms`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-white/40">{day.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department scores */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-white font-medium mb-6">
                  Department Scores
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Operations", score: 94, color: "bg-green-400" },
                    { name: "Product", score: 88, color: "bg-primary" },
                    { name: "Sales", score: 76, color: "bg-orange-400" },
                    { name: "Support", score: 92, color: "bg-violet-400" },
                  ].map((dept) => (
                    <div key={dept.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/70">
                          {dept.name}
                        </span>
                        <span className="text-sm font-medium text-white">
                          {dept.score}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${dept.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${dept.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Emotion callout */}
          <div className="text-center mt-16">
            <p className="text-white/30 text-lg italic font-serif">
              Calm authority. Everything is on track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
