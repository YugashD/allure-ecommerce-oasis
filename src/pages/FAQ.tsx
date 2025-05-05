import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "How do I choose the right foundation shade?",
      answer: "Finding your perfect foundation shade can be challenging. We recommend testing the product on your jawline rather than your wrist, as this area better matches your face color. If shopping online, use our shade finder tool or contact customer support for personalized assistance. We also offer sample sizes of our foundations to help you find your perfect match."
    },
    {
      question: "Are your products tested on animals?",
      answer: "No, all of our products are 100% cruelty-free. We never test on animals and we don't work with suppliers who test on animals. We're certified by Leaping Bunny and PETA as a cruelty-free brand. Additionally, many of our products are vegan-friendly, which we clearly label on our product pages."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day satisfaction guarantee on all purchases. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Products must be in their original packaging and at least 75% full to be eligible for return. For hygiene reasons, we cannot accept returns on opened lipsticks, mascara, or eyeliner."
    },
    {
      question: "How long will shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the continental US. Expedited shipping (1-2 business days) is available for an additional fee. International shipping times vary by location, generally taking 7-14 business days. You'll receive a tracking number via email once your order ships."
    },
    {
      question: "Do you offer samples with purchases?",
      answer: "Yes! We include two free samples with every order. During checkout, you can select which samples you'd like to receive from our current selection. Orders over $50 receive an additional deluxe sample, and orders over $100 include a mini gift set."
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Many of our products are formulated for sensitive skin, which we clearly label. Our Gentle Essentials line is specifically designed for those with sensitive skin concerns. All of our products list full ingredients on the product page, and we recommend patch testing any new product if you have particularly sensitive skin."
    },
    {
      question: "Do you have a loyalty or rewards program?",
      answer: "Yes, our Beauty Insider program lets you earn points on every purchase that you can redeem for discounts or exclusive products. You'll also get early access to new releases, birthday gifts, and special member-only offers. It's free to join through your account page."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive an email with your tracking information. You can also log into your account on our website to view your order status and tracking details. If you checked out as a guest, use the order tracking tool on our website with your order number and email address."
    }
  ]);
  
  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => 
      i === index ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };
  
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="text-center mb-5" style={{ color: 'var(--secondary-color)' }}>Frequently Asked Questions</h2>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div 
                  className={`faq-question ${faq.isOpen ? 'open' : ''}`} 
                  onClick={() => toggleFAQ(index)}
                  style={{
                    cursor: 'pointer',
                    backgroundColor: faq.isOpen ? 'var(--light-bg)' : 'white',
                    color: 'var(--text-dark)',
                    padding: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    marginBottom: '10px'
                  }}
                >
                  {faq.question}
                </div>
                {faq.isOpen && (
                  <div className="faq-answer" 
                    style={{
                      padding: '15px',
                      border: '1px solid #ddd',
                      borderTop: 'none',
                      borderRadius: '5px',
                      backgroundColor: '#f9f9f9'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 bg-light rounded text-center">
            <h4>Still have questions?</h4>
            <p>Our customer support team is here to help you with any questions you may have.</p>
            <a href="/contact" className="btn" style={{ backgroundColor: 'var(--secondary-color)', color: 'white' }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
