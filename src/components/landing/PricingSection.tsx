import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles } from "lucide-react";

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 employees",
        "Basic HR management",
        "Attendance tracking",
        "Leave management",
        "Email support",
        "Monthly reports"
      ],
      popular: false,
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "For growing companies",
      features: [
        "Up to 200 employees",
        "Advanced analytics",
        "Payroll integration",
        "Performance management",
        "Priority support",
        "Custom workflows",
        "API access",
        "White-label options"
      ],
      popular: true,
      gradient: "from-primary to-primary/80"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Multi-company support",
        "Advanced security",
        "Full API access",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
        "On-premise deployment",
        "SLA guarantee"
      ],
      popular: false,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Simple, transparent{" "}
            <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Choose the perfect plan for your organization's needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105 lg:scale-110' 
                  : 'border-border/50 hover:border-primary/50 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 gap-1">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-8">
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${plan.gradient} w-fit mb-4`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'gradient-primary text-primary-foreground hover:shadow-glow' 
                      : ''
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;