
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="position-relative">
        <img 
          src={product.imageUrl} 
          className="card-img-top" 
          alt={product.name} 
          style={{ height: '250px', objectFit: 'cover' }}
        />
        {product.featured && (
          <span className="badge position-absolute top-0 end-0 m-2" style={{ backgroundColor: 'var(--accent-color)', color: 'var(--text-dark)' }}>
            Featured
          </span>
        )}
      </div>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-1">
          <h5 className="card-title mb-0">{product.name}</h5>
          <span className="fw-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-muted small mb-2">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <p className="card-text flex-grow-1">{product.description.length > 75 ? `${product.description.substring(0, 75)}...` : product.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="d-flex align-items-center">
            <div className="me-1">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className={i < product.rating ? "text-warning" : "text-muted"}>★</span>
              ))}
            </div>
            <small className="text-muted">({product.reviewCount})</small>
          </div>
          <div className="btn-group">
            <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-secondary">Details</Link>
            <button 
              className="btn btn-sm" 
              style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-dark)' }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
