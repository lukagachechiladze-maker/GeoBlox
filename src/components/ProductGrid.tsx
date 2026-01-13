import { useState } from "react";
import ProductCard from "./ProductCard";

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

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  { id: 1, name: "Dominus Empyreus", image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=400&fit=crop", price: 249.99, originalPrice: 499.99, discount: 50, inStock: true, category: "Limiteds" },
  { id: 2, name: "Korblox Deathspeaker", image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&h=400&fit=crop", price: 89.99, originalPrice: 149.99, discount: 40, inStock: true, category: "Limiteds" },
  { id: 3, name: "Valkyrie Helm", image: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=400&h=400&fit=crop", price: 129.99, originalPrice: 199.99, discount: 35, inStock: true, category: "Limiteds" },
  { id: 4, name: "Clockwork Headphones", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop", price: 59.99, originalPrice: 99.99, discount: 40, inStock: false, category: "Limiteds" },
  { id: 5, name: "Starter Bundle Pack", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop", price: 19.99, originalPrice: 39.99, discount: 50, inStock: true, category: "Bundles" },
  { id: 6, name: "Ultimate Avatar Bundle", image: "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=400&h=400&fit=crop", price: 49.99, originalPrice: 79.99, discount: 37, inStock: true, category: "Bundles" },
  { id: 7, name: "10,000 Robux", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=400&fit=crop", price: 99.99, originalPrice: 129.99, discount: 23, inStock: true, category: "Robux" },
  { id: 8, name: "5,000 Robux", image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=400&h=400&fit=crop", price: 49.99, originalPrice: 64.99, discount: 23, inStock: true, category: "Robux" },
  { id: 9, name: "Premium Account Lvl 50+", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop", price: 199.99, originalPrice: 349.99, discount: 43, inStock: true, category: "Accounts" },
  { id: 10, name: "Rare Collectibles Pack", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop", price: 179.99, originalPrice: 299.99, discount: 40, inStock: true, category: "Bundles" },
  { id: 11, name: "Headless Horseman", image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&h=400&fit=crop", price: 399.99, originalPrice: 599.99, discount: 33, inStock: false, category: "Limiteds" },
  { id: 12, name: "25,000 Robux", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=400&fit=crop", price: 199.99, originalPrice: 274.99, discount: 27, inStock: true, category: "Robux" },
];

const categories = ["All", "Limiteds", "Bundles", "Robux", "Accounts"];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Browse our curated selection of premium Roblox items at unbeatable prices
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-outline-glow">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
