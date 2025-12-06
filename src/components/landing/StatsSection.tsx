const stats = [
  { value: "2,000+", label: "Companies" },
  { value: "500K+", label: "Employees Managed" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "150+", label: "Countries" },
];

const StatsSection = () => {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
