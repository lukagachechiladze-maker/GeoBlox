import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
interface MainNavProps {
  cartCount: number;
  onCartClick: () => void;
  onLoginClick: () => void;
}
const MainNav = ({
  cartCount,
  onCartClick,
  onLoginClick
}: MainNavProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    label: "Home",
    href: "#"
  }, {
    label: "Limiteds",
    href: "#products"
  }, {
    label: "Bundles",
    href: "#products"
  }, {
    label: "Robux",
    href: "#products"
  }, {
    label: "Accounts",
    href: "#products"
  }, {
    label: "Tutorials",
    href: "#how-it-works"
  }, {
    label: "FAQ",
    href: "#faq"
  }, {
    label: "Contact",
    href: "#footer"
  }];
  return <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">GEO</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">
              <span className="text-foreground">GeoBlox</span>
              <span className="text-primary">.ge</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map(item => <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>)}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Login Button */}
            <button onClick={onLoginClick} className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <User className="w-5 h-5" />
              <span>Login</span>
            </button>

            {/* Cart Button */}
            <button onClick={onCartClick} className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>}
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map(item => <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors">
                  {item.label}
                </a>)}
              <button onClick={() => {
            onLoginClick();
            setMobileMenuOpen(false);
          }} className="px-4 py-3 text-left text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors sm:hidden">
                Login
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default MainNav;