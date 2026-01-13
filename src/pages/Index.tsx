import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import MainNav from "@/components/MainNav";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import LoginModal from "@/components/LoginModal";
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  inStock: boolean;
  category: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
        },
      ];
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from cart");
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsLoginOpen(true);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <MainNav
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      <main>
        <HeroSection />
        <ProductGrid onAddToCart={handleAddToCart} />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Index;
