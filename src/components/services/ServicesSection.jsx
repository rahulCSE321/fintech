import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMobileAlt, FaFileInvoiceDollar, FaPlane, FaTicketAlt, FaCreditCard, FaUniversity } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <FaMobileAlt />,
      title: 'Mobile Recharge',
      description: 'Recharge prepaid mobile phones across all major networks quickly and securely.',
      link: '/blog'
    },
    {
      id: 2,
      icon: <FaFileInvoiceDollar />,
      title: 'Bill Payments',
      description: 'Pay electricity, water, gas, broadband and other utility bills hassle-free.',
      link: '/blog'
    },
    {
      id: 3,
      icon: <FaPlane />,
      title: 'Flight Bookings',
      description: 'Book domestic and international flights at the best prices with exclusive deals.',
      link: '/blog'
    },
    {
      id: 4,
      icon: <FaTicketAlt />,
      title: 'Movie Tickets',
      description: 'Book movie tickets for the latest releases at theaters near you.',
      link: '/blog'
    },
    {
      id: 5,
      icon: <FaCreditCard />,
      title: 'Credit Card Payments',
      description: 'Pay your credit card bills for all major banks securely and on time.',
      link: '/blog'
    },
    {
      id: 6,
      icon: <FaUniversity />,
      title: 'Savings Account',
      description: 'Open a digital savings account with attractive interest rates and zero paperwork.',
      link: '/blog'
    }
  ];

  return (
    <section id="services" className="services-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Our <span className="highlight">Services</span></h2>
          <p className="section-subtitle">
            Everything you need to manage your finances in one place
          </p>
        </div>
        
        <Row>
          {services.map((service) => (
            <Col key={service.id} lg={4} md={6} className="mb-4">
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
