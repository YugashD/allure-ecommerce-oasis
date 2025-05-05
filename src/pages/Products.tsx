
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [sortBy, setSortBy] = useState('featured');
  const [filter, setFilter] = useState<string | null>(category || null);
  
  // Filter products based on category filter
  const filteredProducts = filter 
    ? getProductsByCategory(filter)
    : products;
    
  // Sort products based on sortBy value
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': 
        return a.price - b.price;
      case 'price-high': 
        return b.price - a.price;
      case 'rating': 
        return b.rating - a.rating;
      default: // featured
        return b.featured === a.featured ? 0 : b.featured ? 1 : -1;
    }
  });
  
  const categories = [...new Set(products.map(product => product.category))];
  
  return (
    <div className="container py-5">
      <h2 className="mb-4" style={{ color: 'var(--secondary-color)' }}>
        {filter 
          ? `${filter.charAt(0).toUpperCase() + filter.slice(1)} Products`
          : 'All Products'
        }
      </h2>
      
      <div className="row mb-4">
        <div className="col-md-6 d-flex align-items-center">
          <span className="me-3">Filter by:</span>
          <div className="btn-group me-3">
            <button 
              className={`btn ${filter === null ? 'btn-secondary' : 'btn-outline-secondary'}`}
              onClick={() => setFilter(null)}
            >
              All
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className={`btn ${filter === category ? 'btn-secondary' : 'btn-outline-secondary'}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="col-md-6 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
          <span className="me-3">Sort by:</span>
          <select 
            className="form-select" 
            style={{ width: 'auto' }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
      </div>
      
      <div className="row g-4">
        {sortedProducts.length === 0 ? (
          <div className="col-12 text-center py-5">
            <p className="text-muted">No products found for this category.</p>
          </div>
        ) : (
          sortedProducts.map(product => (
            <div key={product.id} className="col-sm-6 col-lg-3">
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
