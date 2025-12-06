import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground font-bold text-lg shadow-soft">
              TP
            </div>
            <span className="font-bold text-xl tracking-tight">TenantPulse</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate("/employee")}>
              Sign In
            </Button>
            <Button className="gradient-bg shadow-soft" onClick={() => navigate("/super-admin")}>
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-left py-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" onClick={() => navigate("/employee")}>
                  Sign In
                </Button>
                <Button className="gradient-bg" onClick={() => navigate("/super-admin")}>
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
