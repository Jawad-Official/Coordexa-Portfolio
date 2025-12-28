import { Shield, Eye, Lock, LogOut, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FreedomSection = () => {
  return (
    <section
      id="section-4"
      className="min-h-screen py-32 section-light relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              04 — FOUNDER INDEPENDENCE
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
              The business runs
              <br />
              <span className="text-muted-foreground">without you.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              CEO control center, role-based access, and complete audit logs.
              Step away knowing everything is handled.
            </p>
          </div>

          {/* Clean executive dashboard */}
          <div className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
            {/* Status banner */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-green-900 font-semibold">
                    Your systems are running.
                  </h3>
                  <p className="text-green-700 text-sm">
                    Nothing needs your attention right now.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold text-green-900">
                  100%
                </div>
                <div className="text-sm text-green-600">System Health</div>
              </div>
            </div>

            {/* Minimal stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Eye,
                  label: "Visibility",
                  value: "Complete",
                  desc: "All departments reporting",
                },
                {
                  icon: Lock,
                  label: "Access Control",
                  value: "Secured",
                  desc: "Role-based permissions active",
                },
                {
                  icon: LogOut,
                  label: "Last Check-in",
                  value: "3 days ago",
                  desc: "Business continued normally",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-6 rounded-xl bg-muted/30"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-lg font-semibold text-foreground">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick access */}
            <div className="border-t border-border pt-8">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                Quick Access
              </h4>
              <div className="space-y-2">
                {[
                  "View weekly summary",
                  "Check audit logs",
                  "Review team permissions",
                ].map((action) => (
                  <button
                    key={action}
                    className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <span className="text-foreground">{action}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Emotion callout */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground text-lg italic font-serif">
              "I can step away."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
