import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLock, FaBolt, FaHeadset, FaMoneyBillWave } from 'react-icons/fa';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaLock />,
      title: 'Secure Transactions',
      description: 'Bank-grade security for all your transactions with end-to-end encryption.'
    },
    {
      id: 2,
      icon: <FaBolt />,
      title: 'Fast Processing',
      description: 'Quick processing of all payments and bookings with instant confirmations.'
    },
    {
      id: 3,
      icon: <FaHeadset />,
      title: '24/7 Support',
      description: 'Our dedicated support team is available round the clock to assist you.'
    },
    {
      id: 4,
      icon: <FaMoneyBillWave />,
      title: 'Cashback & Rewards',
      description: 'Earn cashback and exclusive rewards on every transaction you make.'
    }
  ];

  return (
    <section className="features-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Why Choose <span className="highlight">ByteCharge</span></h2>
          <p className="section-subtitle">
            Experience the best-in-class digital payment platform
          </p>
        </div>
        
        <Row>
          {features.map((feature) => (
            <Col key={feature.id} md={6} lg={3} className="mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
