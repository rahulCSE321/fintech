import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCode, FaPuzzlePiece, FaExpandArrowsAlt, FaShieldAlt, FaUsers, FaSyncAlt, FaCheck, FaLaptopCode, FaRocket } from 'react-icons/fa';
import './ServicePage.css';

const SoftwareDevelopmentPage = () => {
  const benefits = [
    {
      id: 1,
      title: 'Tailor-Made Solutions',
      description: 'Custom software built specifically to address your unique business challenges and requirements.',
      icon: 'fas fa-puzzle-piece'
    },
    {
      id: 2,
      title: 'Scalable Architecture',
      description: 'Solutions designed to grow with your business, accommodating increased users, data, and functionality over time.',
      icon: 'fas fa-expand-arrows-alt'
    },
    {
      id: 3,
      title: 'Robust Security Implementation',
      description: 'Security best practices integrated throughout the development lifecycle to protect your data and systems.',
      icon: 'fas fa-shield-alt'
    },
    {
      id: 4,
      title: 'Intuitive User Experience',
      description: 'User-centered design approach ensuring that your software is easy to use and drives user adoption.',
      icon: 'fas fa-users'
    },
    {
      id: 5,
      title: 'Ongoing Maintenance and Updates',
      description: 'Continued support ensuring your software remains current, secure, and aligned with evolving business needs.',
      icon: 'fas fa-sync-alt'
    }
  ];

  const industries = [
    'Healthcare', 'Finance', 'Retail', 'Education', 'Manufacturing', 
    'Logistics', 'Real Estate', 'Technology', 'Media & Entertainment'
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="service-hero-content">
              <Badge className="modern-badge mb-3" bg="light" text="primary">Expert Software Services</Badge>
              <h1 className="display-4 fw-bold mb-4">Software <span className="gradient-text">Development</span> Services</h1>
              <p className="lead mb-4">
                Custom software solutions engineered to transform your business vision into powerful digital reality.              
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                size="lg" 
                className="mt-2"
              >
                Discuss Your Project
              </Button>
            </Col>
            <Col lg={6} md={12} className="d-none d-lg-block">
              <div className="position-relative animate-fadeIn">
                <div className="position-absolute" style={{ top: '-15px', right: '-15px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(94, 96, 206, 0.1) 0%, rgba(94, 96, 206, 0.05) 70%)', borderRadius: '50%', zIndex: '0' }}></div>
                <img 
                  src="https://via.placeholder.com/600x400?text=Software+Development" 
                  alt="Software Development" 
                  className="img-fluid rounded-lg shadow-lg position-relative"
                  style={{ borderRadius: 'var(--border-radius-lg)', zIndex: '1' }}
                />
                <div className="position-absolute" style={{ bottom: '-20px', left: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(78, 168, 222, 0.15) 0%, rgba(78, 168, 222, 0.05) 70%)', borderRadius: '50%', zIndex: '0' }}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Service Description */}
      <section className="service-description section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <h2 className="section-title">Custom <span>Software Development</span></h2>
              <p>
                Our software development team creates custom applications designed specifically for your business needs. We follow a comprehensive development approach that starts with understanding your requirements and ends with delivering a solution that drives real business value.
              </p>
              <p>
                Using agile methodologies, we deliver high-quality, scalable, and secure software that addresses complex business challenges and drives digital transformation. Our development process is transparent and collaborative, keeping you involved and informed at every stage.
              </p>
              
              <div className="mt-4 d-flex flex-wrap">
                <Badge pill bg="light" text="dark" className="me-2 mb-2 py-2 px-3">
                  <FaLaptopCode className="me-1" /> Web Applications
                </Badge>
                <Badge pill bg="light" text="dark" className="me-2 mb-2 py-2 px-3">
                  <FaRocket className="me-1" /> Mobile Apps
                </Badge>
                <Badge pill bg="light" text="dark" className="me-2 mb-2 py-2 px-3">
                  <FaCode className="me-1" /> Enterprise Software
                </Badge>
                <Badge pill bg="light" text="dark" className="me-2 mb-2 py-2 px-3">
                  <FaSyncAlt className="me-1" /> System Integration
                </Badge>
              </div>
            </Col>
            <Col lg={6} md={12} className="mt-4 mt-lg-0">
              <div className="position-relative">
                <div className="glass-effect p-4 rounded-lg" style={{ borderRadius: 'var(--border-radius-lg)' }}>
                  <h5 className="text-primary mb-3">Our Development Process</h5>
                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3" style={{ color: 'var(--primary)' }}>01</div>
                    <div>
                      <h6 className="mb-1">Discovery & Planning</h6>
                      <p className="mb-0 small">Understanding your business requirements and creating a roadmap.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3" style={{ color: 'var(--primary)' }}>02</div>
                    <div>
                      <h6 className="mb-1">Design & Architecture</h6>
                      <p className="mb-0 small">Crafting intuitive UX/UI and robust technical architecture.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3" style={{ color: 'var(--primary)' }}>03</div>
                    <div>
                      <h6 className="mb-1">Development & Testing</h6>
                      <p className="mb-0 small">Building the solution with continuous integration and testing.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <div className="me-3" style={{ color: 'var(--primary)' }}>04</div>
                    <div>
                      <h6 className="mb-1">Deployment & Support</h6>
                      <p className="mb-0 small">Launching the solution and providing ongoing maintenance.</p>
                    </div>
                  </div>
                </div>
                <div className="position-absolute" style={{ top: '-15px', right: '-15px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(94, 96, 206, 0.1) 0%, rgba(94, 96, 206, 0.05) 70%)', borderRadius: '50%', zIndex: '-1' }}></div>
                <div className="position-absolute" style={{ bottom: '-15px', left: '-15px', width: '130px', height: '130px', background: 'radial-gradient(circle, rgba(78, 168, 222, 0.1) 0%, rgba(78, 168, 222, 0.05) 70%)', borderRadius: '50%', zIndex: '-1' }}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="service-benefits">
        <Container>
          <h2 className="section-title text-center">Key Benefits</h2>
          <p className="text-center mb-5">
            Our software development services offer numerous advantages that drive business value and user satisfaction.
          </p>
          <Row>
            {benefits.map(benefit => (
              <Col key={benefit.id} lg={4} md={6} className="mb-4">
                <Card className="benefit-card">
                  <Card.Body>
                    <div className="benefit-icon">
                      {benefit.id === 1 ? <FaPuzzlePiece /> : 
                       benefit.id === 2 ? <FaExpandArrowsAlt /> : 
                       benefit.id === 3 ? <FaShieldAlt /> : 
                       benefit.id === 4 ? <FaUsers /> : 
                       benefit.id === 5 ? <FaSyncAlt /> : null}
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
      <section className="why-choose section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} md={12}>
              <div className="position-relative mb-5 mb-lg-0">
                <div className="glass-effect p-4 rounded-lg" style={{ borderRadius: 'var(--border-radius-lg)' }}>
                  <h4 className="gradient-text">98%</h4>
                  <p className="mb-0">Client satisfaction rate</p>
                </div>
                <div className="glass-effect p-4 rounded-lg position-absolute" style={{ borderRadius: 'var(--border-radius-lg)', top: '120px', right: '0', width: '200px', zIndex: '2' }}>
                  <h4 className="gradient-text">200+</h4>
                  <p className="mb-0">Projects delivered</p>
                </div>
                <div className="glass-effect p-4 rounded-lg position-absolute" style={{ borderRadius: 'var(--border-radius-lg)', bottom: '0', left: '30px', width: '200px', zIndex: '1' }}>
                  <h4 className="gradient-text">15+</h4>
                  <p className="mb-0">Years of experience</p>
                </div>
                <div className="position-absolute" style={{ top: '-20px', left: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(94, 96, 206, 0.1) 0%, rgba(94, 96, 206, 0.05) 70%)', borderRadius: '50%', zIndex: '0' }}></div>
                <div className="position-absolute" style={{ bottom: '-30px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(78, 168, 222, 0.1) 0%, rgba(78, 168, 222, 0.05) 70%)', borderRadius: '50%', zIndex: '0' }}></div>
              </div>
            </Col>
            <Col lg={7} md={12}>
              <h2 className="section-title">Why Choose <span>Hanu Tech</span></h2>
              <p>
                Our software development expertise sets us apart from other service providers. Our team consists of experienced developers, designers, architects, and quality assurance specialists who collaborate to deliver exceptional software solutions.
              </p>
              
              <div className="why-choose-points">
                <div className="why-choose-point">
                  <div className="why-choose-point-icon">
                    <FaCheck />
                  </div>
                  <div className="why-choose-point-content">
                    <h4>Technical Excellence</h4>
                    <p>Our team follows industry best practices and employs modern development methodologies to ensure robust, scalable, and maintainable solutions.</p>
                  </div>
                </div>
                
                <div className="why-choose-point">
                  <div className="why-choose-point-icon">
                    <FaCheck />
                  </div>
                  <div className="why-choose-point-content">
                    <h4>Transparent Process</h4>
                    <p>We prioritize clear communication throughout the development process, providing regular updates and seeking your feedback at every stage.</p>
                  </div>
                </div>
                
                <div className="why-choose-point">
                  <div className="why-choose-point-icon">
                    <FaCheck />
                  </div>
                  <div className="why-choose-point-content">
                    <h4>Ongoing Support</h4>
                    <p>Our commitment to quality extends beyond launch, with comprehensive support and maintenance services to keep your software running optimally.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries Served */}
      <section className="industries">
        <Container>
          <h2 className="section-title text-center">Industries Served</h2>
          <p className="text-center mb-4">
            We provide software development services to clients across various sectors.
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
            <Badge className="modern-badge mb-3" bg="light" text="primary">Let's Build Together</Badge>
            <h2>Ready to Transform Your Software Vision into Reality?</h2>
            <p>
              Partner with Hanu Tech for custom software development services that address your unique business needs.
            </p>
            <div className="mt-4">
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                size="lg"
                className="me-3 mb-3 mb-md-0"
              >
                <FaRocket className="me-2" /> Get Started
              </Button>
              <Button 
                as={Link} 
                to="/services" 
                variant="outline-primary" 
                size="lg"
                className="mb-3 mb-md-0"
              >
                Explore All Services
              </Button>
            </div>
            <div className="glass-effect mt-5 p-4 mx-auto" style={{ maxWidth: '500px', borderRadius: 'var(--border-radius)' }}>
              <p className="mb-0">
                <small className="fw-bold">Founded in 2018,</small> Hanu Tech provides innovative technology solutions to help businesses thrive in today's digital landscape.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;
