
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { forgotPassword } = useAuth();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    try {
      setMessage('');
      setError('');
      setIsLoading(true);
      const success = await forgotPassword(email);
      
      if (success) {
        setMessage('Password reset link has been sent to your email');
      } else {
        setError('Failed to send password reset email');
      }
    } catch (err) {
      setError('An error occurred while processing your request');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow">
            <div className="card-body p-5">
              <h2 className="text-center mb-4" style={{ color: 'var(--secondary-color)' }}>Reset Password</h2>
              
              {message && (
                <div className="alert alert-success" role="alert">
                  {message}
                </div>
              )}
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn w-100 py-2 mb-3"
                  style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Reset Password'}
                </button>
                
                <div className="text-center mt-3">
                  <Link to="/login" className="text-decoration-none" style={{ color: 'var(--secondary-color)' }}>
                    &larr; Back to Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
