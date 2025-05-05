
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const product = id ? getProductById(parseInt(id)) : undefined;
  
  useEffect(() => {
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);
  
  if (!product) {
    return <div className="text-center py-5">Loading...</div>;
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  return (
    <div className="container py-5">
      <button 
        className="btn btn-link text-decoration-none mb-4" 
        onClick={() => navigate(-1)}
        style={{ color: 'var(--secondary-color)' }}
      >
        &larr; Back
      </button>
      
      <div className="row">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
          />
        </div>
        
        <div className="col-lg-6">
          <h2 className="mb-2">{product.name}</h2>
          
          <div className="d-flex align-items-center mb-3">
            <div className="me-2">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className={i < product.rating ? "text-warning" : "text-muted"}>★</span>
              ))}
            </div>
            <span className="text-muted">({product.reviewCount} reviews)</span>
          </div>
          
          <h3 className="text-primary mb-4">${product.price.toFixed(2)}</h3>
          
          <p className="mb-4">{product.description}</p>
          
          <div className="d-flex align-items-center mb-4">
            <div className="input-group me-3" style={{ width: '130px' }}>
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <input 
                type="number" 
                className="form-control text-center" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
              />
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
            
            <button 
              className="btn" 
              style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
          
          <div className="card border-0 bg-light p-3 mb-4">
            <div className="d-flex mb-2">
              <div className="me-3">📦</div>
              <div>
                <strong>Free Shipping</strong>
                <p className="mb-0 small">On orders over $50</p>
              </div>
            </div>
            <div className="d-flex mb-2">
              <div className="me-3">🔄</div>
              <div>
                <strong>30 Days Return</strong>
                <p className="mb-0 small">If you're not completely satisfied</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-3">🔒</div>
              <div>
                <strong>Secure Checkout</strong>
                <p className="mb-0 small">100% protected payment</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <strong>Category:</strong> {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <h4 className="mb-4">Product Details</h4>
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p>This premium {product.name.toLowerCase()} is crafted with the finest ingredients to provide exceptional results. Our formulation is designed to deliver optimal performance while being gentle on your skin.</p>
              <p>Experience the difference that quality ingredients and thoughtful formulation can make in your beauty routine.</p>
              <ul className="mb-0">
                <li>Cruelty-free and vegan</li>
                <li>Free from parabens and sulfates</li>
                <li>Dermatologically tested</li>
                <li>Suitable for all skin types</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
