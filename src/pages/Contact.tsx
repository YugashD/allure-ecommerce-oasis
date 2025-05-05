
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    setError('');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h2 className="text-center mb-5" style={{ color: 'var(--secondary-color)' }}>Contact Us</h2>
          
          <div className="row g-4">
            <div className="col-md-5">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h4 className="mb-4">Get in Touch</h4>
                  
                  <div className="mb-4">
                    <h5 className="mb-3">Contact Information</h5>
                    <p className="mb-2">
                      <strong>Customer Support:</strong><br />
                      Email: support@allurecosmetics.com<br />
                      Phone: (555) 123-4567
                    </p>
                    <p className="mb-2">
                      <strong>Business Inquiries:</strong><br />
                      Email: business@allurecosmetics.com
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h5 className="mb-3">Headquarters</h5>
                    <p>
                      1234 Beauty Blvd<br />
                      Suite 500<br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="mb-3">Connect With Us</h5>
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
                      <a href="#" className="btn btn-outline-dark btn-sm">
                        <i className="bi bi-pinterest"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-4">Send a Message</h4>
                  
                  {submitted && (
                    <div className="alert alert-success mb-4" role="alert">
                      Thank you for your message! We'll get back to you shortly.
                    </div>
                  )}
                  
                  {error && (
                    <div className="alert alert-danger mb-4" role="alert">
                      {error}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        className="form-select"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="order-status">Order Status</option>
                        <option value="returns">Returns & Refunds</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn" 
                      style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-5">
            <h4 className="text-center mb-4">Visit Our Stores</h4>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5>Los Angeles</h5>
                    <p className="mb-2">1234 Beauty Blvd, Los Angeles, CA 90001</p>
                    <p className="mb-0">Hours: Mon-Sat 10am-8pm, Sun 11am-6pm</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5>New York</h5>
                    <p className="mb-2">567 Glamour St, New York, NY 10001</p>
                    <p className="mb-0">Hours: Mon-Sat 9am-9pm, Sun 10am-7pm</p>
                  </div>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h5>Miami</h5>
                    <p className="mb-2">890 Radiance Ave, Miami, FL 33101</p>
                    <p className="mb-0">Hours: Mon-Sun 10am-9pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
