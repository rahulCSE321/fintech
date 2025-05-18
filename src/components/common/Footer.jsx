import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../../utils/scrollUtils';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Hanu Tech</h5>
            <p>
              Your one-stop solution for all payment needs. Recharge, pay bills,
              book flights, movie tickets, and more with ease and convenience.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
          
          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Services</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToElement('services'); }} className="text-white">Mobile Recharge</a>
              </li>
              <li className="mb-2">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToElement('services'); }} className="text-white">Bill Payments</a>
              </li>
              <li className="mb-2">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToElement('services'); }} className="text-white">Flight Booking</a>
              </li>
              <li className="mb-2">
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToElement('services'); }} className="text-white">Movie Tickets</a>
              </li>
            </ul>
          </Col>
          
          <Col md={2} sm={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Company</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/about" className="text-white">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white">Contact Us</Link>
              </li>
              {/* <li className="mb-2">
                <Link to="/careers" className="text-white">Careers</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-white">Blog</Link>
              </li> */}
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="text-uppercase mb-4">Contact Us</h5>
            <p><i className="fas fa-home me-3"></i> Dhanbad, Jharkhand, India</p>
            <p><i className="fas fa-envelope me-3"></i> Support@hanutech.io            </p>
            <p><i className="fas fa-phone me-3"></i> +91 9472733238</p>
            {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
          </Col>
        </Row>
        
        <hr className="mb-4" />
        
        <Row className="align-items-center">
          <Col md={8} lg={8}>
            <p className="small text-md-left">
              © {new Date().getFullYear()} Copyright: <strong>HANU TECH SOLUTION PRIVATE LIMITED</strong>. All rights reserved.
            </p>
          </Col>
          <Col md={4} lg={4} className="ml-lg-0 text-md-right">
            <ul className="list-inline text-md-right mb-0">
              <li className="list-inline-item mr-3">
                <Link to="/terms" className="text-white">Terms of Service</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/privacy" className="text-white">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
