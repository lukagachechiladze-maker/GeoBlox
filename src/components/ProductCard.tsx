import { ShoppingCart, Eye } from "lucide-react";

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

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { name, image, price, originalPrice, discount, inStock } = product;

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="product-image-container aspect-square relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 badge-discount">
            -{discount}%
          </div>
        )}

        {/* Stock Badge */}
        <div className="absolute top-3 right-3">
          {inStock ? (
            <span className="badge-stock">In Stock</span>
          ) : (
            <span className="badge-sold-out">Sold Out</span>
          )}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary transition-colors">
            <Eye className="w-4 h-4" />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 truncate group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-primary">${price.toFixed(2)}</span>
          {originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => inStock && onAddToCart(product)}
          disabled={!inStock}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-300 ${
            inStock
              ? "bg-primary text-primary-foreground hover:opacity-90 hover:scale-105"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          style={inStock ? { boxShadow: '0 0 20px hsl(var(--primary) / 0.4)' } : {}}
        >
          <ShoppingCart className="w-4 h-4" />
          {inStock ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
