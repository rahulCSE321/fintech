import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaShieldAlt, FaUserFriends, FaBolt, FaGlobe, FaLightbulb, FaHandshake, FaTrophy, FaCheck } from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
      bio: 'With over 15 years of experience in fintech, John has been at the forefront of digital payment innovation.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'CTO',
      image: 'https://via.placeholder.com/150',
      bio: 'Jane brings her wealth of knowledge in cybersecurity to ensure all transactions on Hanu Tech are safe and secure.'
    },
    {
      id: 3,
      name: 'David Brown',
      position: 'Head of Operations',
      image: 'https://via.placeholder.com/150',
      bio: 'David oversees the day-to-day operations, ensuring a smooth experience for all Hanu Tech users.'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      position: 'Customer Service Director',
      image: 'https://via.placeholder.com/150',
      bio: 'Sarah leads our dedicated customer support team, available 24/7 to assist with any query or concern.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-4 mb-lg-0">
              <Badge className="modern-badge mb-3" bg="light" text="primary">About Us</Badge>
              <h1 className="display-4 fw-bold mb-4">About <span className="gradient-text">Hanu Tech</span></h1>
              <p className="lead mb-4">
                Empowering businesses through innovative technology solutions.              
              </p>
              <p className="mb-4">
                Hanu Tech was founded in 2018 in Bangalore, India, with a vision to empower businesses through innovative technology solutions. Since our inception, we have been dedicated to helping organizations leverage technology to achieve their business objectives.
              </p>
              <p className="mb-4">
                As a registered Indian company (CIN: U74999KA2018PTC116566), we take pride in our commitment to excellence, integrity, and client success. Our team of skilled professionals brings diverse expertise across multiple technology domains to deliver exceptional results.
              </p>
              <p className="mb-4">
                Today, Hanu Tech has established itself as a trusted technology partner for businesses across various industries, providing comprehensive services including IT Consulting, Business Process Outsourcing, Technical Support, Software Development, and IT Staffing.
              </p>
            </Col>
            <Col lg={6} md={12}>
              {/* <img 
                src="https://via.placeholder.com/600x400" 
                alt="About Hanu Tech" 
                className="img-fluid rounded shadow"
              /> */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Mission and Vision */}
      <section className="our-mission py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} md={12} className="text-center">
              <h2 className="section-title text-center mb-2">Our <span>Mission & Vision</span></h2>
              <p className="lead mb-5">Driving innovation and excellence in technology services</p>
            </Col>
          </Row>
          <Row className="align-items-stretch">
            <Col lg={6} md={12} className="mb-4">
              <Card className="modern-card h-100">
                <Card.Body className="p-4">
                  <div className="mission-icon mb-4">
                    <FaLightbulb size={32} />
                  </div>
                  <h3 className="mb-3">Our Mission</h3>
                  <p className="mb-0">To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} className="mb-4">
              <Card className="modern-card h-100">
                <Card.Body className="p-4">
                  <div className="mission-icon mb-4">
                    <FaTrophy size={32} />
                  </div>
                  <h3 className="mb-3">Our Vision</h3>
                  <p className="mb-0">To be globally recognized for technology excellence and client satisfaction, setting new standards in the technology services industry.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Core Values */}
      <section className="our-values py-5">
        <Container>
          <h2 className="section-title text-center mb-5">Our Core <span>Values</span></h2>
          <Row>
            <Col md={3} sm={6} className="mb-4">
              <div className="value-card text-center">
                <div className="value-icon">
                  <FaBolt />
                </div>
                <h4>Innovation</h4>
                <p>We constantly explore new technologies and methodologies to provide cutting-edge solutions.</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="value-card text-center">
                <div className="value-icon">
                  <FaHandshake />
                </div>
                <h4>Integrity</h4>
                <p>We uphold the highest ethical standards in all our business dealings and partnerships.</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="value-card text-center">
                <div className="value-icon">
                  <FaUserFriends />
                </div>
                <h4>Client Success</h4>
                <p>Our clients' success is our primary goal, and we work tirelessly to ensure it.</p>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <div className="value-card text-center">
                <div className="value-icon">
                  <FaCheck />
                </div>
                <h4>Quality</h4>
                <p>We maintain rigorous quality standards throughout our service delivery process.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Team */}
      <section className="our-team py-5">
        <Container>
          <div className="text-center mb-5">
            <Badge className="modern-badge mb-3" bg="light" text="primary">Meet Our Team</Badge>
            <h2 className="section-title">Our <span className="gradient-text">Leadership Team</span></h2>
          </div>
          <Row>
            {teamMembers.map(member => (
              <Col key={member.id} lg={3} md={6} className="mb-4">
                <Card className="leadership-card">
                  <Card.Body className="p-4">
                    <Card.Title className="mb-2" style={{ fontWeight: 'bold', fontSize: '1.4rem', color: '#0063f7' }}>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-3" style={{ fontWeight: '600', color: '#5e60ce' }}>{member.position}</Card.Subtitle>
                    <Card.Text style={{ color: '#555', fontWeight: '400', lineHeight: '1.6' }}>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">Why Choose <span>Hanu Tech</span></h2>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="why-choose-point modern-card p-4">
                <div className="why-choose-point-icon mb-3">
                  <FaLightbulb />
                </div>
                <h4>Expertise</h4>
                <p>Our team brings diverse experience across multiple domains including finance, healthcare, retail, education, and more.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="why-choose-point modern-card p-4">
                <div className="why-choose-point-icon mb-3">
                  <FaUserFriends />
                </div>
                <h4>Skilled Team</h4>
                <p>Our professionals are certified experts in their respective fields with continuous learning being a core part of our culture.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="why-choose-point modern-card p-4">
                <div className="why-choose-point-icon mb-3">
                  <FaHandshake />
                </div>
                <h4>Client-Centric Approach</h4>
                <p>We focus on understanding your specific needs to deliver tailored solutions that address your unique challenges.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="why-choose-point modern-card p-4">
                <div className="why-choose-point-icon mb-3">
                  <FaGlobe />
                </div>
                <h4>Scalable Solutions</h4>
                <p>Our solutions are designed to grow with your business, adapting to your evolving requirements over time.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="why-choose-point modern-card p-4">
                <div className="why-choose-point-icon mb-3">
                  <FaCheck />
                </div>
                <h4>Transparent Communication</h4>
                <p>We believe in maintaining open and clear communication throughout our engagement.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="why-choose-point modern-card p-4">
                <div className="why-choose-point-icon mb-3">
                  <FaShieldAlt />
                </div>
                <h4>Quality Assurance</h4>
                <p>We follow rigorous quality control processes to ensure reliable, high-quality deliverables.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Our Journey */}
      <section className="our-story py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="order-lg-2 mb-4 mb-lg-0">
              <h2 className="section-title mb-4">Our <span>Journey</span></h2>
              <p className="mb-3">
                Hanu Tech was founded in 2018 with a vision to bridge the gap between technology and business needs. What started as a small team of dedicated professionals has now grown into a comprehensive technology service provider.
              </p>
              <p className="mb-3">
                Our journey has been marked by continuous learning, adaptation, and growth. We've expanded our expertise across various technology domains to provide holistic solutions that address the diverse needs of our clients.
              </p>
              <p>
                As we continue to grow, our focus remains on delivering exceptional value to our clients through innovative solutions, reliable service, and a customer-centric approach that prioritizes long-term partnerships over transactional relationships.
              </p>
            </Col>
            <Col lg={6} md={12} className="order-lg-1">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0063f7' }}>2018</h4>
                    <p style={{ color: '#333', fontWeight: '500' }}>Hanu Tech was founded in Bangalore, India</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0063f7' }}>2019</h4>
                    <p style={{ color: '#333', fontWeight: '500' }}>Expanded service offerings to include IT Consulting and BPO services</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0063f7' }}>2020</h4>
                    <p style={{ color: '#333', fontWeight: '500' }}>Introduced Technical Support and Software Development services</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0063f7' }}>2021</h4>
                    <p style={{ color: '#333', fontWeight: '500' }}>Added IT Staffing to our service portfolio and reached 100+ clients</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0063f7' }}>2022</h4>
                    <p style={{ color: '#333', fontWeight: '500' }}>Hanu Tech celebrates delivering 200+ successful projects</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
