
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4" style={{ color: 'var(--secondary-color)' }}>Allure</h5>
            <p className="mb-4">Your destination for premium beauty products that enhance your natural beauty.</p>
            <div className="d-flex">
              <a href="#" className="btn btn-outline-dark btn-sm me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-dark btn-sm me-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-dark btn-sm me-2">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Shop</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/products/skincare" className="text-decoration-none text-dark">Skincare</Link>
              </li>
              <li className="mb-2">
                <Link to="/products/makeup" className="text-decoration-none text-dark">Makeup</Link>
              </li>
              <li className="mb-2">
                <Link to="/products/hair" className="text-decoration-none text-dark">Hair Care</Link>
              </li>
              <li className="mb-2">
                <Link to="/products/fragrance" className="text-decoration-none text-dark">Fragrance</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Help</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/faq" className="text-decoration-none text-dark">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping" className="text-decoration-none text-dark">Shipping</Link>
              </li>
              <li className="mb-2">
                <Link to="/returns" className="text-decoration-none text-dark">Returns</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none text-dark">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/terms" className="text-decoration-none text-dark">Terms & Conditions</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="text-decoration-none text-dark">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none text-dark">About Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-4 mt-4 border-top">
          <p>&copy; 2025 Allure Cosmetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
