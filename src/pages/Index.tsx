import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  Clock,
  CreditCard,
  Globe,
  Mail,
  Menu,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description:
        "Comprehensive employee profiles, attendance tracking, and leave management with advanced reporting capabilities",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Real-time insights, custom dashboards, and predictive analytics across all HR operations",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "SOC 2 compliance, role-based access control, data encryption, and audit trails",
    },
    {
      icon: Clock,
      title: "Time & Attendance",
      description:
        "Automated time tracking with biometric integration, shift management, and overtime calculations",
    },
    {
      icon: CreditCard,
      title: "Payroll Processing",
      description:
        "Automated payroll with multi-country compliance, tax calculations, and direct deposits",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description:
        "Intelligent automation for approvals, onboarding, and performance reviews",
    },
    {
      icon: Globe,
      title: "Multi-tenant Architecture",
      description:
        "Scalable infrastructure supporting unlimited companies with data isolation",
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description:
        "360-degree feedback, goal tracking, and performance analytics with AI insights",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "per month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 100 employees",
        "Core HR management",
        "Time & attendance tracking",
        "Leave management",
        "Basic reporting",
        "Email support",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      description: "For growing companies with advanced needs",
      features: [
        "Up to 500 employees",
        "Advanced analytics & reporting",
        "Payroll integration",
        "Performance management",
        "Custom workflows",
        "API access",
        "Priority support",
        "Multi-location support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited employees",
        "Multi-company management",
        "Advanced security & compliance",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "24/7 phone support",
        "Custom SLA",
      ],
      popular: false,
    },
  ];

  const testimonials = [
    {
      quote:
        "TenantPulse transformed our HR operations completely. The multi-tenant architecture allowed us to manage all our subsidiaries seamlessly.",
      author: "Sarah Johnson",
      role: "Chief People Officer",
      company: "TechCorp Solutions",
      rating: 5,
    },
    {
      quote:
        "The automation features saved us 40% of administrative time. The ROI was evident within the first quarter of implementation.",
      author: "Michael Chen",
      role: "HR Director",
      company: "Global Dynamics",
      rating: 5,
    },
    {
      quote:
        "Outstanding customer support and enterprise-grade security. Perfect for our compliance requirements in the financial sector.",
      author: "Emma Rodriguez",
      role: "VP of Operations",
      company: "FinanceFirst",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50,000+", label: "Employees Managed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "500+", label: "Enterprise Clients" },
    { number: "24/7", label: "Expert Support" },
  ];

  const handleDemoAccess = (role: string) => {
    switch (role) {
      case "super-admin":
        navigate("/super-admin");
        break;
      case "hr-admin":
        navigate("/hr-admin");
        break;
      case "employee":
        navigate("/employee");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                TenantPulse
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#demo"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Demo
              </a>
              <ThemeToggle />
              <Button>Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a
                href="#features"
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                Pricing
              </a>
              <a
                href="#demo"
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                Demo
              </a>
              <ThemeToggle />
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6" variant="secondary">
              <Award className="h-3 w-3 mr-1" />
              SOC 2 Certified • ISO 27001 Compliant • GDPR Ready
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Enterprise HR Platform for{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Modern Organizations
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Streamline your HR operations with our enterprise-grade,
              multi-tenant platform. From global workforce management to
              advanced analytics, empower your organization with the tools
              needed to scale efficiently and compliantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="gap-2 px-8 py-4">
                Start Free 30-Day Trial <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                Schedule Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-sm font-medium">
                Trusted by leading companies:
              </div>
              <div className="flex flex-wrap gap-8 items-center justify-center">
                {/* TechCorp Logo */}
                <div className="h-8 flex items-center">
                  <svg
                    width="120"
                    height="32"
                    viewBox="0 0 120 32"
                    className="fill-current text-muted-foreground"
                  >
                    <rect
                      x="0"
                      y="8"
                      width="4"
                      height="16"
                      className="fill-primary/60"
                    />
                    <rect
                      x="6"
                      y="4"
                      width="4"
                      height="24"
                      className="fill-primary/60"
                    />
                    <rect
                      x="12"
                      y="0"
                      width="4"
                      height="32"
                      className="fill-primary/60"
                    />
                    <text
                      x="22"
                      y="20"
                      className="text-sm font-semibold"
                      fill="currentColor"
                    >
                      TechCorp
                    </text>
                  </svg>
                </div>

                {/* GlobalDyne Logo */}
                <div className="h-8 flex items-center">
                  <svg
                    width="110"
                    height="32"
                    viewBox="0 0 110 32"
                    className="fill-current text-muted-foreground"
                  >
                    <circle
                      cx="16"
                      cy="16"
                      r="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="16" cy="16" r="6" className="fill-primary/60" />
                    <text
                      x="32"
                      y="20"
                      className="text-sm font-semibold"
                      fill="currentColor"
                    >
                      GlobalDyne
                    </text>
                  </svg>
                </div>

                {/* InnovateLabs Logo */}
                <div className="h-8 flex items-center">
                  <svg
                    width="120"
                    height="32"
                    viewBox="0 0 120 32"
                    className="fill-current text-muted-foreground"
                  >
                    <polygon
                      points="8,4 16,12 8,20 0,12"
                      className="fill-primary/60"
                    />
                    <polygon
                      points="20,8 24,12 20,16 16,12"
                      className="fill-primary/40"
                    />
                    <text
                      x="30"
                      y="20"
                      className="text-sm font-semibold"
                      fill="currentColor"
                    >
                      InnovateLabs
                    </text>
                  </svg>
                </div>

                {/* Nexus Systems Logo */}
                <div className="h-8 flex items-center">
                  <svg
                    width="115"
                    height="32"
                    viewBox="0 0 115 32"
                    className="fill-current text-muted-foreground"
                  >
                    <path
                      d="M4 16 L12 8 L20 16 L12 24 Z"
                      className="fill-primary/60"
                    />
                    <path
                      d="M8 16 L16 8 L24 16 L16 24 Z"
                      className="fill-primary/40"
                      opacity="0.7"
                    />
                    <text
                      x="30"
                      y="20"
                      className="text-sm font-semibold"
                      fill="currentColor"
                    >
                      Nexus Systems
                    </text>
                  </svg>
                </div>

                {/* DataFlow Inc Logo */}
                <div className="h-8 flex items-center">
                  <svg
                    width="105"
                    height="32"
                    viewBox="0 0 105 32"
                    className="fill-current text-muted-foreground"
                  >
                    <rect
                      x="0"
                      y="12"
                      width="8"
                      height="4"
                      className="fill-primary/60"
                    />
                    <rect
                      x="10"
                      y="8"
                      width="8"
                      height="4"
                      className="fill-primary/60"
                    />
                    <rect
                      x="20"
                      y="4"
                      width="8"
                      height="4"
                      className="fill-primary/60"
                    />
                    <rect
                      x="0"
                      y="20"
                      width="8"
                      height="4"
                      className="fill-primary/40"
                    />
                    <rect
                      x="10"
                      y="24"
                      width="8"
                      height="4"
                      className="fill-primary/40"
                    />
                    <text
                      x="32"
                      y="20"
                      className="text-sm font-semibold"
                      fill="currentColor"
                    >
                      DataFlow
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" variant="outline">
              Comprehensive HR Suite
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Everything you need for enterprise HR management
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Powerful, scalable features designed to handle the complexity of
              modern workforce management across multiple organizations and
              locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" variant="outline">
              Customer Success Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Trusted by industry leaders worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              See how leading organizations are transforming their HR operations
              with TenantPulse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" variant="outline">
              Flexible Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Enterprise pricing that scales with you
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the perfect plan for your organization's needs. All plans
              include our core features with no hidden fees or setup costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group ${
                  plan.popular
                    ? "border-primary shadow-xl scale-105 bg-primary/5"
                    : "border-border/50 hover:shadow-lg"
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-8 text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    {plan.description}
                  </CardDescription>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl lg:text-5xl font-bold">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground ml-2 text-base">
                          /{plan.period.split(" ")[1]}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              All plans include 30-day free trial • No setup fees • Cancel
              anytime
            </p>
            <Button variant="ghost" className="gap-2">
              View detailed feature comparison{" "}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Access Section */}
      <section id="demo" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" variant="outline">
              Interactive Demo
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Experience TenantPulse in action
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our platform from different user perspectives and see how
              TenantPulse can transform your HR operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="group hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Super Admin Portal</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Manage multiple companies, configure system-wide settings,
                  monitor subscriptions, and access comprehensive audit trails.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handleDemoAccess("super-admin")}
                  className="w-full"
                  variant="outline"
                  size="lg"
                >
                  Explore Super Admin
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">HR Admin Dashboard</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Oversee workforce management, process leave requests, generate
                  reports, and manage company-wide HR policies and procedures.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handleDemoAccess("hr-admin")}
                  className="w-full"
                  variant="outline"
                  size="lg"
                >
                  Explore HR Admin
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Employee Portal</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Access personal dashboard, submit time-off requests, view pay
                  stubs, and manage personal information and documents.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handleDemoAccess("employee")}
                  className="w-full"
                  variant="outline"
                  size="lg"
                >
                  Explore Employee Portal
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-6">
              No registration required • Full feature access • Reset data
              anytime
            </p>
            <Button size="lg" className="gap-2">
              Schedule Personalized Demo <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Start Your Transformation Today
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to revolutionize your HR operations?
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of forward-thinking organizations using TenantPulse
              to build more efficient, compliant, and employee-centric
              workplaces. Start your transformation with a free 30-day trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="gap-2 px-8 py-4">
                Start Free 30-Day Trial <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 px-8 py-4"
              >
                Schedule Demo Call
              </Button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Full feature access
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                24/7 support included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
                TenantPulse
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Enterprise HR platform empowering organizations to build better
                workplaces through intelligent automation and data-driven
                insights.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Security & Compliance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Enterprise HR
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Multi-Company Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Workforce Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Compliance Management
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog & Insights
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Webinars
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Press & Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Partner Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="text-sm text-muted-foreground">
                  © 2024 TenantPulse. All rights reserved.
                </div>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-3 w-3" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  sales@tenantpulse.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
