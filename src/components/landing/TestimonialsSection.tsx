import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "TenantPulse transformed how we manage our global workforce. The multi-tenant architecture is exactly what we needed for our franchise model.",
    author: "Sarah Chen",
    role: "VP of Human Resources",
    company: "GlobalTech Industries",
    rating: 5,
  },
  {
    quote: "The automation features alone saved us 40 hours per week on payroll and attendance management. It's been a game-changer for our HR team.",
    author: "Michael Rodriguez",
    role: "HR Director",
    company: "Innovate Corp",
    rating: 5,
  },
  {
    quote: "Security and compliance were our top priorities. TenantPulse exceeded our expectations with their enterprise-grade protection.",
    author: "Emily Watson",
    role: "Chief People Officer",
    company: "SecureFinance Ltd",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Loved by{" "}
            <span className="gradient-text">HR Teams Worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers have to say about their experience with TenantPulse.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
