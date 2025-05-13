import React from 'react';
import Hero from '../components/common/Hero';
import ServicesSection from '../components/services/ServicesSection';
import FeaturesSection from '../components/common/FeaturesSection';
import TechServicesSection from '../components/tech/TechServicesSection';
import WhyChooseUsSection from '../components/tech/WhyChooseUsSection';
import ClientTestimonialsSection from '../components/tech/ClientTestimonialsSection';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <ServicesSection />
      <TechServicesSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      
      {/* Call to Action Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={12}>
              <div className="cta-content">
                <h2>Ready to simplify your finances?</h2>
                <p>
                  Join hundreds of businesses who trust ByteCharge for their technology needs.
                  Get started in minutes with a simple registration process.
                </p>
              </div>
            </Col>
            <Col lg={5} md={12} className="text-lg-end text-center mt-4 mt-lg-0">
              <Button 
                as={Link} 
                to="/register" 
                variant="primary" 
                size="lg" 
                className="cta-button"
              >
                Create an Account
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* ByteCharge Client Testimonials Section */}
      <section className="testimonials-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">What Our <span className="highlight">Clients Say</span></h2>
            <p className="section-subtitle">
              Trusted by businesses across the country
            </p>
          </div>
          
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="testimonial-card">
                <div className="rating mb-3">
                  ★★★★★
                </div>
                <p className="testimonial-text">
                  "ByteCharge has transformed our IT infrastructure completely. Their technical expertise and dedication to our success were impressive!"
                </p>
                <div className="testimonial-author">
                  <div className="avatar">RS</div>
                  <div className="author-info">
                    <h5>Rahul Singh</h5>
                    <p>Delhi</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <div className="testimonial-card">
                <div className="rating mb-3">
                  ★★★★★
                </div>
                <p className="testimonial-text">
                  "The software development team at ByteCharge delivered exactly what we needed. Their agile approach and transparent communication made the process smooth and effective."
                </p>
                <div className="testimonial-author">
                  <div className="avatar">PK</div>
                  <div className="author-info">
                    <h5>Priya Kumar</h5>
                    <p>Mumbai</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="mb-4 mx-auto">
              <div className="testimonial-card">
                <div className="rating mb-3">
                  ★★★★★
                </div>
                <p className="testimonial-text">
                  "Customer support is excellent! They resolved my issue within minutes. Truly professional service."
                </p>
                <div className="testimonial-author">
                  <div className="avatar">AS</div>
                  <div className="author-info">
                    <h5>Amit Sharma</h5>
                    <p>Bangalore</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Business Client Testimonials */}
      <ClientTestimonialsSection />
    </div>
  );
};

export default HomePage;
