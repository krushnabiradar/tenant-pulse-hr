import {
  Users,
  Calendar,
  DollarSign,
  BarChart3,
  Shield,
  Zap,
  Globe,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    description: "Complete employee lifecycle management from onboarding to offboarding with detailed profiles and documents.",
  },
  {
    icon: Calendar,
    title: "Time & Attendance",
    description: "Automated time tracking, leave management, and shift scheduling with real-time visibility.",
  },
  {
    icon: DollarSign,
    title: "Payroll Processing",
    description: "Automated payroll calculations, tax compliance, and multi-currency support for global teams.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "AI-powered workforce analytics and customizable dashboards for data-driven decisions.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance built-in.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Workflow automation for approvals, notifications, and repetitive HR tasks.",
  },
  {
    icon: Globe,
    title: "Multi-Tenant",
    description: "Manage multiple companies and branches from a single platform with isolated data.",
  },
  {
    icon: HeartHandshake,
    title: "Employee Experience",
    description: "Self-service portal, mobile app, and engagement tools for better employee satisfaction.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Manage Your Workforce</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of tools designed to streamline your HR operations 
            and empower your team.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
