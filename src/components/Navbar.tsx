import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';  // <-- Import useAuth

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth();  // <-- Use context
  const [cartItems, setCartItems] = React.useState(0);

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(cart.length);
  }, []);

  return (
    <nav className="navbar navbar-light bg-white sticky-top shadow-sm py-3">
      <div className="container d-flex align-items-center justify-content-between">
        {/* Brand Name */}
        <Link to="/" className="navbar-brand fs-3 fw-bold" style={{ color: 'var(--secondary-color)' }}>
          Allure
        </Link>

        {/* Navbar Links */}
        <ul className="navbar-nav flex-row align-items-center gap-4">
          <li className="nav-item">
            <Link to="/" className="nav-link text-dark">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-link">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>

        {/* Login/Profile and Cart */}
        <div className="d-flex align-items-center gap-3">
          <Link to={ '/login'} className="btn btn-outline-secondary d-flex align-items-center">
            <User size={20} className="me-1" />
            {/* <span>{isAuthenticated ? 'Profile' : 'Login'}</span> */}
          </Link>

          <Link
            to="/cart"
            className="btn position-relative d-flex align-items-center"
            style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-dark)' }}
          >
            <ShoppingCart size={20} />
            {cartItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
