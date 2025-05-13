import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const TechnicalSupportPage = () => {
  const benefits = [
    {
      id: 1,
      title: '24/7 System Availability',
      description: 'Round-the-clock support ensures your critical systems remain operational at all times, minimizing business disruption.',
      icon: 'fas fa-clock'
    },
    {
      id: 2,
      title: 'Rapid Issue Resolution',
      description: 'Quick response times and efficient problem-solving processes minimize downtime and restore normal operations promptly.',
      icon: 'fas fa-bolt'
    },
    {
      id: 3,
      title: 'Preventive Maintenance',
      description: 'Proactive system monitoring and regular maintenance prevent issues before they impact your business operations.',
      icon: 'fas fa-shield-alt'
    },
    {
      id: 4,
      title: 'Comprehensive Documentation',
      description: 'Detailed records of all support activities and solutions for future reference and knowledge management.',
      icon: 'fas fa-file-alt'
    },
    {
      id: 5,
      title: 'Multi-Channel Support Options',
      description: 'Access to support through various channels including phone, email, chat, and remote assistance for your convenience.',
      icon: 'fas fa-headset'
    }
  ];

  const industries = [
    'Healthcare', 'Finance', 'Education', 'E-commerce', 'Manufacturing', 
    'Logistics', 'Hospitality', 'Real Estate', 'Technology'
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="service-hero-content">
              <h1 className="display-4 fw-bold mb-4">Technical Support Services</h1>
              <p className="lead mb-4">
                Round-the-clock technical assistance for your IT infrastructure and applications.
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                size="lg" 
                className="mt-2"
              >
                Get Support
              </Button>
            </Col>
            <Col lg={6} md={12} className="d-none d-lg-block">
              <img 
                src="https://via.placeholder.com/600x400?text=Technical+Support" 
                alt="Technical Support" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Description */}
      <section className="service-description">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title">Technical Support</h2>
              <p>
                Our technical support services provide reliable assistance for all your technology needs. From routine maintenance to emergency troubleshooting, our team ensures your systems remain operational at all times, minimizing downtime and maximizing productivity.
              </p>
              <p>
                We offer multiple support tiers with guaranteed response times to address issues promptly. Our support team is available 24/7, providing assistance through various channels including phone, email, chat, and remote access, ensuring that help is always just a call or click away.
              </p>
              <p>
                With a focus on both reactive and proactive support, we not only resolve issues as they arise but also work to prevent future problems through regular system checks, updates, and maintenance activities.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <Container>
          <h2 className="section-title text-center">Key Benefits</h2>
          <p className="text-center mb-5">
            Our technical support services offer numerous advantages to keep your technology infrastructure running smoothly.
          </p>
          <Row>
            {benefits.map(benefit => (
              <Col key={benefit.id} lg={4} md={6} className="mb-4">
                <Card className="benefit-card">
                  <Card.Body>
                    <div className="benefit-icon">
                      <i className={benefit.icon}></i>
                    </div>
                    <Card.Title className="h4 mb-3">{benefit.title}</Card.Title>
                    <Card.Text>
                      {benefit.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title">Why Choose Hanu Tech</h2>
              <p>
                Our technical support expertise sets us apart from other service providers. Our support team is composed of certified professionals with diverse technical backgrounds, ensuring that we have the right expertise to address any issue that may arise.
              </p>
              <p>
                We employ a systematic approach to problem-solving, using established protocols and best practices to efficiently diagnose and resolve issues. Our tiered support structure ensures that complex problems are escalated appropriately and addressed by specialists with the right expertise.
              </p>
              <p>
                We emphasize documentation and knowledge management, maintaining detailed records of all support activities and solutions. This approach allows us to identify recurring issues, implement preventive measures, and continuously improve our support services.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries Served */}
      <section className="industries">
        <Container>
          <h2 className="section-title text-center">Industries Served</h2>
          <p className="text-center mb-4">
            We provide technical support services to clients across various sectors.
          </p>
          <div className="text-center">
            {industries.map((industry, index) => (
              <span key={index} className="industry-item">{industry}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <h2>Ready to Enhance Your Technical Support?</h2>
            <p>
              Partner with Hanu Tech for reliable technical support services that keep your systems running smoothly.
            </p>
            <Button 
              as={Link} 
              to="/contact" 
              variant="primary" 
              size="lg"
            >
              Get Started
            </Button>
            <p className="footer-note mt-4">
              Founded in 2018, Hanu Tech provides innovative technology solutions to help businesses thrive in today's digital landscape.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TechnicalSupportPage;
