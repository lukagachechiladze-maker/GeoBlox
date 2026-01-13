import { UserPlus, ShoppingBag, Mail, Gift } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up for a free account in seconds. No credit card required to browse.",
  },
  {
    icon: ShoppingBag,
    title: "Purchase Item",
    description: "Browse our selection and add items to your cart. Checkout securely with Stripe.",
  },
  {
    icon: Mail,
    title: "Receive Instructions",
    description: "Get instant delivery instructions via email and in your account dashboard.",
  },
  {
    icon: Gift,
    title: "Claim Your Item",
    description: "Follow the simple steps to claim your digital item in Roblox. Enjoy!",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Get your premium Roblox items in just 4 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card p-6 text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step Number */}
              <div className="relative inline-block mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Connecting Lines (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" style={{ marginTop: "-50px" }} />
      </div>
    </section>
  );
};

export default HowItWorks;
