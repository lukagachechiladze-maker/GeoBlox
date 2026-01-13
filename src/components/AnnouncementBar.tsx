import { Instagram, Youtube, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
  const [currency, setCurrency] = useState("USD");
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  const currencies = ["USD", "EUR", "GBP", "CAD", "AUD"];

  return (
    <div className="announcement-bar">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        {/* Announcement Text */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          <span className="text-primary font-semibold">🔥 FLASH SALE</span>
          <span className="text-muted-foreground">Up to 50% off all digital items!</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Currency Selector */}
          <div className="relative">
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {currency}
              <ChevronDown className="w-3 h-3" />
            </button>
            {showCurrencyDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg py-1 z-50">
                {currencies.map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      setCurrency(cur);
                      setShowCurrencyDropdown(false);
                    }}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-secondary transition-colors"
                  >
                    {cur}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Help Button */}
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Help</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
