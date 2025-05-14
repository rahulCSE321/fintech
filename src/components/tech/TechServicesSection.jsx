import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaCogs, FaHeadset, FaCode, FaUsers, FaLightbulb } from 'react-icons/fa';
import './TechServicesSection.css';

const TechServicesSection = () => {
  const techServices = [
    {
      id: 1,
      title: 'IT Consulting',
      description: 'Strategic technology advisory to optimize your business operations.',
      icon: <FaLaptopCode size={42} />,
      link: '/services/it-consulting'
    },
    {
      id: 2,
      title: 'Business Process Outsourcing',
      description: 'Streamline operations by outsourcing non-core business functions.',
      icon: <FaCogs size={42} />,
      link: '/services/bpo'
    },
    {
      id: 3,
      title: 'Technical Support',
      description: 'Round-the-clock technical assistance for your IT infrastructure and applications.',
      icon: <FaHeadset size={42} />,
      link: '/services/technical-support'
    },
    {
      id: 4,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your unique business requirements.',
      icon: <FaCode size={42} />,
      link: '/services/software-development'
    },
    {
      id: 5,
      title: 'IT Staffing',
      description: 'Connect with top technology talent to strengthen your team.',
      icon: <FaUsers size={42} />,
      link: '/services/staffing'
    }
  ];

  return (
    <section id="tech-services" className="tech-services-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Our <span className="highlight">Tech Services</span></h2>
          <p className="section-subtitle">
            We offer a comprehensive range of technology services to meet all your business needs.
          </p>
        </div>
        
        <Row>
          {techServices.map(service => (
            <Col key={service.id} lg={4} md={6} className="mb-4">
              <Card className="tech-service-card h-100">
                <Card.Body className="d-flex flex-column">
                  <div className="service-icon mb-3">
                    {service.icon}
                  </div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {service.description}
                  </Card.Text>
                  <Button 
                    as={Link} 
                    to={service.link} 
                    variant="outline-primary" 
                    className="mt-auto"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col lg={4} md={6} className="mb-4 mx-auto">
            <Card className="tech-service-card custom-solution-card h-100">
              <Card.Body className="d-flex flex-column text-center">
                <div className="service-icon mb-3">
                  <FaLightbulb size={42} />
                </div>
                <Card.Title>Need a Custom Solution?</Card.Title>
                <Card.Text className="flex-grow-1">
                  Contact us to discuss your specific requirements. We're here to help with tailored technology solutions.
                </Card.Text>
                <Button 
                  as={Link} 
                  to="/contact" 
                  variant="primary" 
                  className="mt-auto"
                >
                  Contact Us
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechServicesSection;
