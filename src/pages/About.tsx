
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="position-relative">
        <div
          className="bg-image w-100"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvc21ldGljcyUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D')",
            height: '400px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}></div>
          <div className="container h-100 d-flex align-items-center position-relative">
            <div className="text-white col-lg-8">
              <h1 className="display-4 fw-bold mb-3">About Allure</h1>
              <p className="fs-5">Redefining beauty through innovation, quality, and sustainability.</p>
            </div>
          </div>
        </div>
      </section>
      
     {/* Our Story Section */}
<section className="py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <img 
          src="Ourstory.jpg" 
          alt="Our Story" 
          className="img-fluid rounded shadow"
        />
      </div>
      <div className="col-lg-6">
        <h2 className="mb-4" style={{ color: 'var(--secondary-color)' }}>Our Story</h2>
        <p className="mb-4">Founded in 2018 by beauty enthusiast and cosmetic scientist Emma Chen, Allure was born from a simple yet powerful vision: to create beauty products that enhance, not mask, your natural beauty.</p>
        <p className="mb-4">After years of working in the beauty industry, Emma noticed a gap in the market for products that were both effective and formulated with clean, high-quality ingredients. She set out to create a line that would defy the traditional beauty standards and empower individuals to embrace their unique features.</p>
        <p>What started as a small collection of five essential products has now grown into a comprehensive range of skincare, makeup, and body care loved by customers worldwide. Despite our growth, we remain committed to our founding principles of quality, transparency, and sustainability.</p>
      </div>
    </div>
  </div>
</section>
      
      {/* Our Values Section */}
      <section className="py-5" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--secondary-color)' }}>Our Values</h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3 fs-1" style={{ color: 'var(--secondary-color)' }}>✨</div>
                  <h4 className="card-title mb-3">Quality First</h4>
                  <p className="card-text">We never compromise on quality. Every ingredient is carefully selected, and every formulation is rigorously tested to ensure effectiveness and safety.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3 fs-1" style={{ color: 'var(--secondary-color)' }}>🌎</div>
                  <h4 className="card-title mb-3">Sustainability</h4>
                  <p className="card-text">From recyclable packaging to ethically sourced ingredients, we're committed to reducing our environmental footprint at every stage of our production process.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <div className="mb-3 fs-1" style={{ color: 'var(--secondary-color)' }}>🤝</div>
                  <h4 className="card-title mb-3">Inclusivity</h4>
                  <p className="card-text">Beauty comes in all shapes, colors, and forms. We develop products that work for everyone, celebrating diversity and individual beauty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: 'var(--secondary-color)' }}>Meet Our Team</h2>
          
          <div className="row justify-content-center g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center d-flex flex-column">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" 
                  alt="Emma Chen" 
                  className="card-img-top"
                />
                <div className="card-body flex-grow-1">
                  <h5 className="card-title">Emma Chen</h5>
                  <p className="text-muted">Founder & CEO</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center d-flex flex-column">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww" 
                  alt="David Kim" 
                  className="card-img-top"
                />
                <div className="card-body flex-grow-1">
                  <h5 className="card-title">David Kim</h5>
                  <p className="text-muted">Lead Formulator</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center d-flex flex-column">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww" 
                  alt="Michael Johnson" 
                  className="card-img-top"
                />
                <div className="card-body flex-grow-1">
                  <h5 className="card-title">Michael Johnson</h5>
                  <p className="text-muted">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-5 text-center" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="mb-4" style={{ color: 'var(--secondary-color)' }}>Join the Allure Family</h3>
              <p className="mb-4">Discover our range of products and experience the difference of premium, ethically made cosmetics.</p>
              <Link to="/products" className="btn me-3" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>
                Shop Now
              </Link>
              <Link to="/contact" className="btn btn-outline-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
