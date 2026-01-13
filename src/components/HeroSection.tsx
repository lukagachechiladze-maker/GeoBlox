import { ArrowRight, Play, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Instant Digital Delivery</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up">
            <span className="text-foreground">Premium </span>
            <span className="gradient-text">Roblox Items</span>
            <br />
            <span className="text-foreground">Up to </span>
            <span className="text-primary glow-text">50% OFF</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The most trusted marketplace for Roblox limiteds, bundles, and robux. 
            Fast delivery, secure checkout, and 24/7 support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#products" className="btn-primary-glow flex items-center gap-2 group">
              Shop Limiteds
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#products" className="btn-outline-glow flex items-center gap-2">
              Browse Bundles
            </a>
            <a href="#how-it-works" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Play className="w-5 h-5" />
              Watch Tutorial
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-success" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-secondary border-2 border-background" />
                ))}
              </div>
              <span>10,000+ Happy Customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-xl bg-card border border-border shadow-lg animate-float opacity-50 hidden lg:block" />
      <div className="absolute bottom-1/3 right-10 w-16 h-16 rounded-xl bg-primary/20 border border-primary/30 shadow-lg animate-float opacity-50 hidden lg:block" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default HeroSection;
