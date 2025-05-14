import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCoins, FaChartLine, FaClock, FaTools, FaCheckCircle } from 'react-icons/fa';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      id: 1,
      title: 'Cost-Effective',
      description: 'Our solutions focus on maximizing ROI by optimizing resource utilization.',
      icon: <FaCoins size={40} />
    },
    {
      id: 2,
      title: 'Scalable',
      description: 'Our infrastructure and solutions grow seamlessly with your business needs.',
      icon: <FaChartLine size={40} />
    },
    {
      id: 3,
      title: 'Time-Saving',
      description: 'We streamline processes to reduce time-to-market and operational overhead.',
      icon: <FaClock size={40} />
    },
    {
      id: 4,
      title: 'Customizable',
      description: 'Our solutions are tailored to address your specific business requirements.',
      icon: <FaTools size={40} />
    }
  ];

  return (
    <section className="why-choose-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Why Choose <span className="highlight">Hanu Tech</span></h2>
          <p className="section-subtitle">
            We deliver excellence in every aspect of our service, ensuring optimal results for your business.
          </p>
        </div>
        
        <Row>
          {benefits.map(benefit => (
            <Col key={benefit.id} lg={3} md={6} className="mb-4">
              <Card className="benefit-card text-center h-100">
                <Card.Body>
                  <div className="benefit-icon mb-3">
                    {benefit.icon}
                  </div>
                  <Card.Title className="text-on-dark">{benefit.title}</Card.Title>
                  <Card.Text>
                    {benefit.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <p className="founded-text">
            Founded in 2018, Hanu Tech provides innovative technology solutions to help businesses thrive in today's digital landscape.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;
