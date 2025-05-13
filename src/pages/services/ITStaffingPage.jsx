import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const ITStaffingPage = () => {
  const benefits = [
    {
      id: 1,
      title: 'Access to Pre-Vetted Talent Pool',
      description: 'Quickly connect with qualified candidates who have been thoroughly screened and evaluated for technical skills and cultural fit.',
      icon: 'fas fa-users'
    },
    {
      id: 2,
      title: 'Reduced Hiring Timeframes',
      description: 'Accelerate your recruitment process and fill critical positions faster with our efficient sourcing and screening methodologies.',
      icon: 'fas fa-clock'
    },
    {
      id: 3,
      title: 'Specialized Technical Screening',
      description: 'Benefit from our expertise in evaluating technical skills across various domains and technology stacks.',
      icon: 'fas fa-check-circle'
    },
    {
      id: 4,
      title: 'Flexible Staffing Options',
      description: 'Choose from temporary, contract-to-hire, or direct placement options based on your specific business needs.',
      icon: 'fas fa-sliders-h'
    },
    {
      id: 5,
      title: 'Retention-Focused Placement',
      description: 'Our emphasis on cultural and technical fit leads to higher job satisfaction and longer-term retention of placed candidates.',
      icon: 'fas fa-handshake'
    }
  ];

  const industries = [
    'Healthcare', 'Finance', 'Software', 'E-commerce', 'Manufacturing', 
    'Education', 'Telecommunications', 'Media', 'Startups'
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="service-hero-content">
              <h1 className="display-4 fw-bold mb-4">IT Staffing Services</h1>
              <p className="lead mb-4">
                Connect with top technology talent to strengthen your team.
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                size="lg" 
                className="mt-2"
              >
                Find Tech Talent
              </Button>
            </Col>
            <Col lg={6} md={12} className="d-none d-lg-block">
              <img 
                src="https://via.placeholder.com/600x400?text=IT+Staffing" 
                alt="IT Staffing" 
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
              <h2 className="section-title">IT Staffing</h2>
              <p>
                Our IT staffing services help you find and hire the best technology professionals for your business. We understand the unique skills required for various technology roles and use our extensive network to match you with candidates who have the right expertise and cultural fit.
              </p>
              <p>
                We go beyond traditional recruitment by thoroughly understanding your business goals, technical requirements, and team dynamics to ensure that we identify candidates who will not only meet your immediate needs but also contribute to your long-term success.
              </p>
              <p>
                Whether you need temporary staff for a specific project, contract-to-hire arrangements to evaluate candidates before making permanent commitments, or direct placement of full-time employees, our staffing solutions are flexible and tailored to your specific needs.
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
            Our IT staffing services offer numerous advantages to help you build a strong technology team efficiently.
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
                Our IT staffing expertise sets us apart from other service providers. We have built an extensive network of technology professionals across various specializations, allowing us to quickly identify and engage qualified candidates for your open positions.
              </p>
              <p>
                Our technical recruiters combine industry knowledge with recruitment expertise, ensuring that they can effectively evaluate candidates' technical skills and match them with appropriate opportunities. We employ a thorough screening process that includes technical assessments, cultural fit evaluations, and reference checks to ensure we only present candidates who meet your requirements.
              </p>
              <p>
                We value long-term relationships with both clients and candidates, focusing on making placements that lead to successful and lasting engagements. Our commitment to quality extends beyond the initial placement, with regular follow-ups to ensure satisfaction and address any concerns that may arise.
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
            We provide IT staffing services to clients across various sectors.
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
            <h2>Ready to Build Your Dream Tech Team?</h2>
            <p>
              Partner with Hanu Tech for IT staffing services that connect you with the right technology talent.
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

export default ITStaffingPage;
