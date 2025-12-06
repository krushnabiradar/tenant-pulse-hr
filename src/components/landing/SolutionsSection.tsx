import { Button } from "@/components/ui/button";
import { Building2, Briefcase, UserCircle, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    icon: Building2,
    title: "Super Admin",
    subtitle: "Platform Management",
    description: "Complete system oversight with tenant management, subscription control, and platform-wide analytics. Perfect for SaaS operators and enterprise IT teams.",
    features: ["Multi-tenant management", "Subscription billing", "System metrics", "Audit logs"],
    path: "/super-admin",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Briefcase,
    title: "HR Admin",
    subtitle: "Company-Level Control",
    description: "Comprehensive HR management for your organization including employee records, payroll, attendance, and compliance tools.",
    features: ["Employee management", "Payroll processing", "Leave approvals", "Performance reviews"],
    path: "/hr-admin",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: UserCircle,
    title: "Employee Portal",
    subtitle: "Self-Service Access",
    description: "Empower employees with self-service tools for attendance, leave requests, payslips, and personal document management.",
    features: ["Clock in/out", "Leave requests", "Payslip access", "Profile management"],
    path: "/employee",
    gradient: "from-emerald-500 to-teal-600",
  },
];

const SolutionsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Solutions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Tailored for{" "}
            <span className="gradient-text">Every Role</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Role-based dashboards designed to give each user exactly what they need.
          </p>
        </div>

        {/* Solutions Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all duration-500"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.gradient}`} />
              
              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                  {solution.subtitle}
                </p>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
                  onClick={() => navigate(solution.path)}
                >
                  Explore {solution.title}
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
