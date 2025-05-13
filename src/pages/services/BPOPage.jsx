import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicePage.css';

const BPOPage = () => {
  const benefits = [
    {
      id: 1,
      title: 'Reduced Operational Costs',
      description: 'Lower your overhead expenses by outsourcing functions that would otherwise require significant investment in staff, training, and infrastructure.',
      icon: 'fas fa-money-bill-wave'
    },
    {
      id: 2,
      title: 'Increased Focus on Core Business',
      description: 'Free up valuable time and resources to concentrate on strategic initiatives and core business functions that drive growth and revenue.',
      icon: 'fas fa-bullseye'
    },
    {
      id: 3,
      title: 'Improved Process Efficiency',
      description: 'Benefit from specialized expertise and best practices that enhance process performance and workflow optimization.',
      icon: 'fas fa-cogs'
    },
    {
      id: 4,
      title: 'Access to Specialized Skills',
      description: 'Tap into a pool of skilled professionals with specific domain expertise without the challenges of recruitment and training.',
      icon: 'fas fa-user-tie'
    },
    {
      id: 5,
      title: 'Scalable Resource Management',
      description: 'Easily scale your operations up or down based on business needs without concerns about hiring or layoffs.',
      icon: 'fas fa-expand-arrows-alt'
    }
  ];

  const industries = [
    'Healthcare', 'Finance', 'Retail', 'E-commerce', 'Insurance', 
    'Logistics', 'Manufacturing', 'Technology', 'Telecommunications'
  ];

  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="service-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="service-hero-content">
              <h1 className="display-4 fw-bold mb-4">Business Process Outsourcing</h1>
              <p className="lead mb-4">
                Streamline operations by outsourcing non-core business functions.
              </p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                size="lg" 
                className="mt-2"
              >
                Discuss Your BPO Needs
              </Button>
            </Col>
            <Col lg={6} md={12} className="d-none d-lg-block">
              <img 
                src="https://via.placeholder.com/600x400?text=Business+Process+Outsourcing" 
                alt="Business Process Outsourcing" 
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
              <h2 className="section-title">Business Process Outsourcing</h2>
              <p>
                Our BPO services help businesses focus on their core competencies by managing essential but peripheral business functions. We take on the responsibility of handling these processes with efficiency and expertise, allowing you to concentrate on strategic initiatives and growth opportunities.
              </p>
              <p>
                We offer customized solutions that improve efficiency, reduce costs, and maintain high-quality service standards across all outsourced processes. Our team works as an extension of your business, ensuring seamless integration and alignment with your organizational goals.
              </p>
              <p>
                From customer support and back-office operations to data processing and finance functions, we provide end-to-end BPO services tailored to your specific requirements and industry standards.
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
            Outsourcing your business processes offers numerous advantages to enhance your operational efficiency and business performance.
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
                Our BPO expertise sets us apart from other service providers. We bring years of experience in managing diverse business processes across various industries, ensuring that our solutions are practical, efficient, and tailored to your specific business context.
              </p>
              <p>
                We focus on quality and performance, implementing robust monitoring and reporting systems to ensure that all outsourced processes meet or exceed your expectations. Our team members are carefully selected and trained to deliver exceptional service that represents your brand effectively.
              </p>
              <p>
                We emphasize transparent communication and establish clear expectations from the outset, providing regular updates and performance reports to keep you informed about the status of your outsourced processes. Our flexible engagement models allow you to scale services up or down based on your business needs, ensuring optimal resource utilization.
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
            We provide BPO services to clients across various sectors.
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
            <h2>Ready to Streamline Your Business Operations?</h2>
            <p>
              Partner with Hanu Tech for efficient BPO services that drive operational excellence and cost efficiency.
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

export default BPOPage;
