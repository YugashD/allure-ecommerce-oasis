
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);


  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate successful subscription
    setIsSubscribed(true);
    setEmail(''); // Clear the email input after submission

    // You can implement an actual API call here for real subscription functionality
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="position-relative">
        <div
          className="bg-image w-100"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D')",
            height: '500px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
          <div className="container h-100 d-flex align-items-center position-relative">
            <div className="text-white col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Discover Your Natural Beauty</h1>
              <p className="fs-5 mb-4">Premium cosmetics made with high-quality ingredients for a radiant, confident you.</p>
              <Link to="/products" className="btn btn-lg" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-dark)' }}>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--secondary-color)' }}>Featured Products</h2>
          
          <div className="row g-4">
            {featuredProducts.map(product => (
              <div key={product.id} className="col-sm-6 col-lg-3">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/products" className="btn" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--secondary-color)' }}>Shop by Category</h2>
          
          <div className="row g-4">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 position-relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1567721913486-6585f069b332?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D" 
                  alt="Skincare" 
                  className="card-img"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-img-overlay d-flex align-items-end" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                  <div>
                    <h3 className="text-white mb-2">Skincare</h3>
                    <Link to="/products/skincare" className="btn btn-light">Explore</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 position-relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFrZXVwfGVufDB8fDB8fHww" 
                  alt="Makeup" 
                  className="card-img"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-img-overlay d-flex align-items-end" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                  <div>
                    <h3 className="text-white mb-2">Makeup</h3>
                    <Link to="/products/makeup" className="btn btn-light">Explore</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100 position-relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhZ3JhbmNlfGVufDB8fDB8fHww" 
                  alt="Fragrance" 
                  className="card-img"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-img-overlay d-flex align-items-end" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                  <div>
                    <h3 className="text-white mb-2">Fragrance</h3>
                    <Link to="/products/fragrance" className="btn btn-light">Explore</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <div className="mb-3 fs-1" style={{ color: 'var(--secondary-color)' }}>🌿</div>
                <h4>Natural Ingredients</h4>
                <p className="text-muted">Our products are made with high-quality, naturally derived ingredients.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center">
                <div className="mb-3 fs-1" style={{ color: 'var(--secondary-color)' }}>🐰</div>
                <h4>Cruelty-Free</h4>
                <p className="text-muted">We never test on animals and are committed to ethical practices.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-center">
                <div className="mb-3 fs-1" style={{ color: 'var(--secondary-color)' }}>♻️</div>
                <h4>Eco-Friendly</h4>
                <p className="text-muted">Sustainable packaging and environmentally conscious formulations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h3 className="mb-4" style={{ color: 'var(--secondary-color)' }}>Join Our Newsletter</h3>
              <p className="mb-4">Stay updated with our latest products, beauty tips, and exclusive offers.</p>
              
              <form className="d-flex" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>
                  Subscribe
                </button>
              </form>
              {/* Success message */}
              {isSubscribed && (
                <div className="alert alert-success mt-3" role="alert">
                  You have successfully subscribed to our newsletter!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
