import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const ITConsultingPage = () => {
  const benefits = [
    {
      id: 1,
      title: 'Optimized IT Infrastructure',
      description: 'Streamline your technology infrastructure to improve efficiency, reduce costs, and enhance performance.',
      icon: 'fas fa-server'
    },
    {
      id: 2,
      title: 'Reduced Operational Costs',
      description: 'Identify cost-saving opportunities through efficient technology utilization and process optimization.',
      icon: 'fas fa-money-bill-wave'
    },
    {
      id: 3,
      title: 'Enhanced Security Posture',
      description: 'Strengthen your cybersecurity measures to protect your valuable data and critical business assets.',
      icon: 'fas fa-shield-alt'
    },
    {
      id: 4,
      title: 'Improved Business Agility',
      description: 'Develop flexible technology solutions that can adapt quickly to changing business needs and market conditions.',
      icon: 'fas fa-bolt'
    },
    {
      id: 5,
      title: 'Strategic Technology Alignment',
      description: 'Ensure your IT investments are directly aligned with your business objectives and strategic goals.',
      icon: 'fas fa-bullseye'
    }
  ];

  const industries = [
    'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Education', 
    'Logistics', 'Hospitality', 'Real Estate', 'Technology'
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="service-hero-content">
              <h1 className="display-4 fw-bold mb-4">IT Consulting Services</h1>
              <p className="lead mb-4">
                Strategic technology advisory to optimize your business operations.
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                size="lg" 
                className="mt-2"
              >
                Get a Consultation
              </Button>
            </Col>
            <Col lg={6} md={12} className="d-none d-lg-block">
              {/* <img 
                src="https://via.placeholder.com/600x400?text=IT+Consulting" 
                alt="IT Consulting" 
                className="img-fluid rounded shadow-lg"
              /> */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Description */}
      <section className="service-description">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="section-title">IT Consulting</h2>
              <p>
                Our IT consulting services provide expert guidance to help businesses leverage technology strategically. We work closely with your team to understand your business objectives and challenges, and develop tailored technology solutions that align with your goals.
              </p>
              <p>
                We analyze your current IT infrastructure, identify areas for improvement, and develop comprehensive roadmaps for technology implementation. Our consultants bring decades of combined experience across diverse industries, ensuring that our recommendations are practical, forward-thinking, and tailored to your specific business context.
              </p>
              <p>
                Whether you're looking to optimize your existing IT systems, implement new technologies, or develop a comprehensive digital transformation strategy, our consulting team has the expertise to guide you through the process and help you achieve your business objectives.
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
            Our IT consulting services offer numerous advantages to help your business thrive in today's technology-driven landscape.
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
                Our consulting expertise sets us apart from other service providers. Our consultants bring decades of combined experience across diverse industries, ensuring that our recommendations are practical, forward-thinking, and tailored to your specific business context. We combine deep technical knowledge with strong business acumen to deliver solutions that address both immediate challenges and long-term objectives.
              </p>
              <p>
                We take a vendor-neutral approach, focusing solely on what's best for your business rather than pushing specific products or services. Our collaborative methodology ensures that we work closely with your team throughout the engagement, fostering knowledge transfer and building internal capabilities.
              </p>
              <p>
                We remain committed to your success even after the initial engagement, providing ongoing support and guidance as your business evolves and your technology needs change.
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
            We provide IT consulting services to clients across various sectors.
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
            <h2>Ready to Optimize Your IT Strategy?</h2>
            <p>
              Partner with Hanu Tech for expert IT consulting services that drive business growth and efficiency.
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

export default ITConsultingPage;
