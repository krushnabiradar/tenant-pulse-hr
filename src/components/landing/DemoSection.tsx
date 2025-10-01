import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, UserCircle, ArrowRight } from "lucide-react";

const DemoSection = () => {
  const navigate = useNavigate();
  
  const demos = [
    {
      icon: Building2,
      title: "Super Admin",
      description: "Manage multiple companies, subscriptions, and system-wide settings",
      role: 'super-admin',
      gradient: "from-violet-500 to-purple-500",
      features: ["Multi-tenant management", "System analytics", "Subscription control"]
    },
    {
      icon: Users,
      title: "HR Admin",
      description: "Oversee employees, attendance, leave requests, and company HR operations",
      role: 'hr-admin',
      gradient: "from-blue-500 to-cyan-500",
      features: ["Employee management", "Payroll processing", "Performance tracking"]
    },
    {
      icon: UserCircle,
      title: "Employee",
      description: "View personal dashboard, submit leave requests, and track attendance",
      role: 'employee',
      gradient: "from-green-500 to-emerald-500",
      features: ["Personal dashboard", "Leave requests", "Document access"]
    }
  ];

  const handleDemoAccess = (role: string) => {
    switch(role) {
      case 'super-admin':
        navigate('/super-admin');
        break;
      case 'hr-admin':
        navigate('/hr-admin');
        break;
      case 'employee':
        navigate('/employee');
        break;
    }
  };

  return (
    <section id="demo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Try the{" "}
            <span className="text-gradient">Live Demo</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Experience TenantPulse from different perspectives. No signup required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {demos.map((demo, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardHeader className="pb-4">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${demo.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <demo.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{demo.title}</CardTitle>
                <CardDescription className="text-base">
                  {demo.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {demo.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => handleDemoAccess(demo.role)}
                  className="w-full group/btn"
                  variant="outline"
                  size="lg"
                >
                  Access Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;