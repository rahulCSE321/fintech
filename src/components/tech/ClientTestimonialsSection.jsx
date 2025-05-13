import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ClientTestimonialsSection.css';

const ClientTestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Amit Bansal',
      position: 'CTO, TechSolutions Inc.',
      content: 'HANU TECH transformed our IT infrastructure and dramatically improved our operational efficiency. Their expertise and professionalism were evident throughout the project.',
      avatar: 'AB'
    },
    {
      id: 2,
      name: 'Sunita Rao',
      position: 'Product Manager, InnovateNow',
      content: 'The software development team at HANU TECH delivered an exceptional product that exceeded our expectations. Their attention to detail and commitment to quality is remarkable.',
      avatar: 'SR'
    },
    {
      id: 3,
      name: 'Jai Prakash',
      position: 'Head of Operations, GlobalRetail',
      content: 'Working with HANU TECH for our technical support needs has been a game-changer. Their responsive team ensures our systems are always running optimally.',
      avatar: 'JP'
    }
  ];

  return (
    <section className="client-testimonials-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">What Our <span className="highlight">Clients Say</span></h2>
          <p className="section-subtitle">
            Don't just take our word for it—hear from some of our satisfied clients.
          </p>
        </div>
        
        <Row>
          {testimonials.map(testimonial => (
            <Col key={testimonial.id} lg={4} md={6} className="mb-4">
              <Card className="testimonial-card h-100">
                <Card.Body>
                  <div className="quote-icon mb-3">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="testimonial-text mb-4">
                    {testimonial.content}
                  </p>
                  <div className="testimonial-author">
                    <div className="avatar">{testimonial.avatar}</div>
                    <div className="author-info">
                      <h5>{testimonial.name}</h5>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <div className="cta-container p-4 rounded">
            <h3 className="mb-3">Let's Transform Your Business</h3>
            <p className="mb-4">Partner with HANU TECH for innovative technology solutions that drive growth and efficiency.</p>
            <a href="/contact" className="btn btn-primary btn-lg">Get Started</a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientTestimonialsSection;
