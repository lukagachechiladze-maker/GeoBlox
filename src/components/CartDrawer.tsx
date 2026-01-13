import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const CartDrawer = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Your Cart</h2>
              <span className="badge-stock">{items.length} items</span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Your cart is empty</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Add some awesome items to get started!
                </p>
                <button onClick={onClose} className="btn-primary-glow">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-secondary/50 rounded-xl"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate mb-1">
                        {item.name}
                      </h4>
                      <p className="text-primary font-semibold">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                          }
                          className="w-7 h-7 rounded bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors self-start"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-border space-y-4">
              {/* Subtotal */}
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-xl font-bold text-foreground">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={onCheckout}
                className="w-full btn-primary-glow text-center"
              >
                Proceed to Checkout
              </button>

              <p className="text-xs text-center text-muted-foreground">
                Taxes and shipping calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
