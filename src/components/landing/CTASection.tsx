import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-white text-white" />
            ))}
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Ready to transform your HR operations?
          </h2>
          
          <p className="text-lg sm:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Join thousands of companies using TenantPulse to build better workplaces. 
            Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white backdrop-blur-sm"
            >
              Schedule Demo
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-white/70">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;