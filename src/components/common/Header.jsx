import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar 
      expand="lg" 
      className={`header-navbar ${scrolled ? 'scrolled' : ''}`} 
      expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src="/bytecharge-logo.svg" 
            alt="Hanu Tech Logo" 
            className="logo"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/240x60?text=Hanu+Tech';
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            
            <NavDropdown 
              title="Services" 
              id="services-dropdown"
              className={location.pathname.includes('/services') ? 'active' : ''}
            >
              {/* Payment Services */}
              <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
              <NavDropdown.Divider />
              
              {/* IT Services */}
              <NavDropdown.Header>IT Services</NavDropdown.Header>
              <NavDropdown.Item 
                as={Link} 
                to="/services/it-consulting"
                className={location.pathname === '/services/it-consulting' ? 'active' : ''}
              >
                IT Consulting
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/services/bpo"
                className={location.pathname === '/services/bpo' ? 'active' : ''}
              >
                Business Process Outsourcing
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/services/technical-support"
                className={location.pathname === '/services/technical-support' ? 'active' : ''}
              >
                Technical Support
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/services/software-development"
                className={location.pathname === '/services/software-development' ? 'active' : ''}
              >
                Software Development
              </NavDropdown.Item>
              <NavDropdown.Item 
                as={Link} 
                to="/services/staffing"
                className={location.pathname === '/services/staffing' ? 'active' : ''}
              >
                IT Staffing
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Nav.Link>
            <Button 
              variant="outline-primary" 
              className="header-btn ms-2" 
              as={Link} 
              to="/login"
            >
              <FaUser /> Login
            </Button>
            <Button 
              variant="primary" 
              className="header-btn ms-2" 
              as={Link} 
              to="/register"
            >
              <FaUserPlus /> Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
