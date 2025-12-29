import { Building2, Users, Shield, FileCheck, Settings, ChevronRight, CheckCircle2, Eye, Edit3, Lock } from "lucide-react";
import { CursorPersona } from "./CursorPersona";

export const DepartmentsSection = () => {
  const departments = [
    { 
      name: "Sales", 
      owner: "Jennifer K.", 
      members: 8, 
      functions: 6, 
      sopCoverage: 85,
      kpis: ["Revenue", "Demos", "Pipeline"]
    },
    { 
      name: "Operations", 
      owner: "Mike R.", 
      members: 12, 
      functions: 9, 
      sopCoverage: 94,
      kpis: ["Efficiency", "Uptime", "Cost"]
    },
    { 
      name: "Product", 
      owner: "Alex T.", 
      members: 6, 
      functions: 5, 
      sopCoverage: 72,
      kpis: ["Velocity", "Quality", "Adoption"]
    },
  ];

  const roles = [
    { role: "CEO / Founder", permissions: ["All Departments", "All Functions", "All SOPs", "Audit Logs"], color: "text-primary" },
    { role: "Department Owner", permissions: ["Own Department", "Team Functions", "Edit SOPs", "View Reports"], color: "text-violet-400" },
    { role: "Manager", permissions: ["Team View", "Submit Entries", "View SOPs", "Create Tasks"], color: "text-blue-400" },
    { role: "Employee", permissions: ["Own Functions", "Submit Daily", "View Assigned SOPs"], color: "text-green-400" },
  ];

  return (
    <section
      id="section-7"
      className="min-h-screen py-32 section-light relative overflow-hidden"
    >
      {/* Subtle accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-mono text-sm tracking-wider mb-4 block">
              07 — ORGANIZATIONAL STRUCTURE
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
              Structure that scales
              <br />
              <span className="text-muted-foreground">with governance built in.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Departments, role-based access, and audit trails. 
              Everyone sees exactly what they need — nothing more.
            </p>
          </div>

          {/* Departments Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Department Management
              </h3>
              <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                <Settings className="w-4 h-4" />
                Configure
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={dept.name} className="glass-card p-6 rounded-2xl group hover:shadow-lg transition-shadow relative">
                  {index === 0 && (
                    <CursorPersona name="Admin" role="System" color="red" className="absolute -bottom-3 -right-3" />
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{dept.name}</h4>
                      <p className="text-sm text-muted-foreground">Owner: {dept.owner}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-muted/50">
                      <div className="text-lg font-semibold text-foreground">{dept.members}</div>
                      <div className="text-xs text-muted-foreground">Members</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-muted/50">
                      <div className="text-lg font-semibold text-foreground">{dept.functions}</div>
                      <div className="text-xs text-muted-foreground">Functions</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-muted/50">
                      <div className="text-lg font-semibold text-foreground">{dept.sopCoverage}%</div>
                      <div className="text-xs text-muted-foreground">SOP</div>
                    </div>
                  </div>

                  {/* KPIs */}
                  <div className="flex flex-wrap gap-2">
                    {dept.kpis.map((kpi) => (
                      <span key={kpi} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {kpi}
                      </span>
                    ))}
                  </div>

                  {/* SOP Coverage bar */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">SOP Coverage</span>
                      <span className="font-medium text-foreground">{dept.sopCoverage}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-green-500 rounded-full"
                        style={{ width: `${dept.sopCoverage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RBAC & Permissions */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Role-based access */}
            <div className="glass-card p-6 rounded-2xl relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Role-Based Access Control</h3>
                  <p className="text-sm text-muted-foreground">Permissions by role</p>
                </div>
              </div>

              <div className="space-y-4">
                {roles.map((item) => (
                  <div key={item.role} className="p-4 rounded-xl bg-background border border-border">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-medium ${item.color}`}>{item.role}</span>
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.permissions.map((perm) => (
                        <span key={perm} className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3" />
                          {perm}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Trail */}
            <div className="glass-card p-6 rounded-2xl relative">
              <CursorPersona name="Alex T." role="Product" color="purple" className="absolute -bottom-3 -left-3" />
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Audit Trail</h3>
                  <p className="text-sm text-muted-foreground">Complete history of all actions</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { action: "Daily entry submitted", user: "Sarah M.", dept: "Sales", time: "2 min ago", icon: Edit3 },
                  { action: "SOP updated", user: "Mike R.", dept: "Operations", time: "15 min ago", icon: Edit3 },
                  { action: "Task completed", user: "Alex T.", dept: "Product", time: "1 hour ago", icon: CheckCircle2 },
                  { action: "Permission granted", user: "Admin", dept: "System", time: "2 hours ago", icon: Shield },
                  { action: "Report viewed", user: "Jennifer K.", dept: "Sales", time: "3 hours ago", icon: Eye },
                ].map((log, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-background border border-border">
                    <div className="p-1.5 rounded-lg bg-muted">
                      <log.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{log.action}</span>
                        <span className="text-xs text-muted-foreground">{log.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{log.user} • {log.dept}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2.5 px-4 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
                Export Audit Log
              </button>
            </div>
          </div>

          {/* Emotion callout */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground/60 text-lg italic font-serif">
              "Structure creates freedom."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
