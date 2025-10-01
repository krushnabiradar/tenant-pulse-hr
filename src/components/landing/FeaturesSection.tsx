import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, Shield, Clock, CreditCard, Zap, Globe, Briefcase, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Comprehensive employee profiles, attendance tracking, and leave management",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and reporting across all HR operations",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Role-based access control and data encryption at rest",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Time & Attendance",
      description: "Automated time tracking with biometric integration support",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: CreditCard,
      title: "Payroll Processing",
      description: "Streamlined payroll with compliance and tax calculations",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and approval processes",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Multi-Company Support",
      description: "Manage multiple organizations from a single dashboard",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Briefcase,
      title: "Recruitment Pipeline",
      description: "End-to-end hiring process with applicant tracking",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Performance Reviews",
      description: "360-degree feedback and goal tracking system",
      gradient: "from-violet-500 to-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Everything you need to{" "}
            <span className="text-gradient">manage HR</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Powerful features designed to simplify and automate your HR processes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <CardHeader>
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;