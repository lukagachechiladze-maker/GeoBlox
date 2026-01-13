import { Instagram, Youtube, Mail, Shield, CreditCard, Lock } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
    alert("Thanks for subscribing!");
  };

  return (
    <footer id="footer" className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Get Exclusive Deals
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for special offers and new item alerts
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button type="submit" className="btn-primary-glow whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">GEO</span>
              </div>
              <span className="font-bold text-xl">
                <span className="text-foreground">GeoBlox</span>
                <span className="text-primary">.ge</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              The most trusted marketplace for premium Roblox items. Fast, secure, and reliable.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Products", "How It Works", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Terms of Service", "Privacy Policy", "Refund Policy", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Security */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Trust & Security</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-success" />
                <span>Buyer Protection</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Lock className="w-5 h-5 text-success" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CreditCard className="w-5 h-5 text-success" />
                <span>Secure Payments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">We accept:</span>
              <div className="flex gap-2">
                {["Visa", "MC", "Amex", "PayPal"].map((method) => (
                  <div
                    key={method}
                    className="px-3 py-1.5 bg-secondary rounded text-xs font-medium text-muted-foreground"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 GeoBlox.ge. All rights reserved. Not affiliated with Roblox Corporation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
