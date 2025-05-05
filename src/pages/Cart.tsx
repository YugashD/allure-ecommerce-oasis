import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  const handleCheckout = () => {
    // Empty the cart
    clearCart();
    // Show Thank You card
    setIsCheckoutComplete(true);
  };

  const handleClearCart = () => {
    clearCart(); // Clears all items from the cart
  };

  if (isCheckoutComplete) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2 className="mb-4">Thank You for Your Purchase!</h2>
          <p className="mb-4">We appreciate your order and hope you enjoy your new products.</p>
          <Link 
            to="/products" 
            className="btn" 
            style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
          >
            Shop More
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2 className="mb-4">Your Cart is Empty</h2>
          <p className="mb-4">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/products" 
            className="btn" 
            style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>
      
      <div className="row">
        <div className="col-lg-8 mb-4 mb-lg-0">
          {items.map(item => (
            <div key={item.id} className="card mb-3 border-0 shadow-sm">
              <div className="row g-0">
                <div className="col-md-3">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="img-fluid rounded-start"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                      <h5 className="card-title mb-1">{item.name}</h5>
                      <button 
                        className="btn btn-sm text-danger" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        &times;
                      </button>
                    </div>
                    <p className="text-muted small mb-2">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="input-group" style={{ width: '120px' }}>
                        <button 
                          className="btn btn-outline-secondary btn-sm" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input 
                          type="text" 
                          className="form-control form-control-sm text-center" 
                          value={item.quantity}
                          readOnly
                        />
                        <button 
                          className="btn btn-outline-secondary btn-sm" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <div className="fw-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-4">
            <Link 
              to="/products" 
              className="btn btn-outline-secondary"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>{totalPrice > 50 ? 'Free' : '$5.99'}</span>
              </div>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Tax</span>
                <span>${(totalPrice * 0.07).toFixed(2)}</span>
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">
                  ${(totalPrice + (totalPrice > 50 ? 0 : 5.99) + (totalPrice * 0.07)).toFixed(2)}
                </span>
              </div>
              
              <button 
                className="btn w-100 py-2" 
                style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>

              {/* Clear Cart Button */}
              <button 
                className="btn w-100 py-2 mt-3" 
                style={{ backgroundColor: 'var(--danger-color)', color: 'white' }}
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
