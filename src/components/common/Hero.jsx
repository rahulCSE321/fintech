import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="text-container">
            <h1 className="mb-3">All Your <span className="highlight">Financial Needs</span> in One Place</h1>
            <p className="mb-4">
              Recharge mobile, pay bills, book flights & movie tickets, and even open a savings account - all on one secure platform.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button 
                as={Link} 
                to="/register" 
                variant="primary" 
                size="lg"
                className="main-btn"
              >
                Get Started
              </Button>
              <Button 
                as={Link} 
                to="/services" 
                variant="outline-primary" 
                size="lg"
              >
                Explore Services
              </Button>
            </div>
          </Col>
          <Col lg={6} md={12} className="mt-5 mt-lg-0 d-flex justify-content-center">
            <div className="hero-image-container">
              <img 
                src="/hero-image.png" 
                alt="Financial Services" 
                className="hero-image img-fluid"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x500?text=Pay999+App';
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
