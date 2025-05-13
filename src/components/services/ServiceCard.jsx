import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <Card className="service-card h-100">
      <Card.Body className="d-flex flex-column">
        <div className="icon-container mb-3">
          {icon}
        </div>
        <Card.Title className="mb-3">{title}</Card.Title>
        <Card.Text className="text-muted mb-4">
          {description}
        </Card.Text>
        <Link to={link} className="service-link mt-auto">
          Learn More <i className="fas fa-arrow-right ms-2"></i>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
