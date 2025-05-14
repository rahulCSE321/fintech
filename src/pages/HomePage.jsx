import React, { useRef } from 'react';
import Hero from '../components/common/Hero';
import ServicesSection from '../components/services/ServicesSection';
import FeaturesSection from '../components/common/FeaturesSection';
import TechServicesSection from '../components/tech/TechServicesSection';
import WhyChooseUsSection from '../components/tech/WhyChooseUsSection';
import ClientTestimonialsSection from '../components/tech/ClientTestimonialsSection';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCheck, FaCode, FaRocket } from 'react-icons/fa';
import { scrollToElement } from '../utils/scrollUtils';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <ServicesSection />
      <TechServicesSection />
      <FeaturesSection />
      
      {/* Software Development Expertise Section */}
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
     
      
      <WhyChooseUsSection />
      
      {/* Call to Action Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={12}>
              <div className="cta-content">
                <h2>Ready to simplify your finances?</h2>
                <p>
                  Join hundreds of businesses who trust Hanu Tech for their technology needs.
                  Get started in minutes with a simple registration process.
                </p>
              </div>
            </Col>
            <Col lg={5} md={12} className="text-lg-end text-center mt-4 mt-lg-0">
              {/* <Button 
                as={Link} 
                to="/register" 
                variant="primary" 
                size="lg" 
                className="cta-button"
              >
                Create an Account
              </Button> */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Software Development CTA Section */}
      <section className="cta-section software-cta-section">
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
                variant="outline-primary" 
                size="lg"
                className="mb-3 mb-md-0"
                onClick={() => scrollToElement('tech-services')}
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
      
      {/* Hanu Tech Client Testimonials Section */}
      <section className="testimonials-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title">What Our <span className="highlight">Clients Say</span></h2>
            <p className="section-subtitle">
              Trusted by businesses across the country
            </p>
          </div>
          
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <div className="testimonial-card">
                <div className="rating mb-3">
                  ★★★★★
                </div>
                <p className="testimonial-text">
                  "Hanu Tech revolutionized our digital payment processes. Their integrated platform reduced transaction times by 40% and significantly improved our customer satisfaction scores!"
                </p>
                <div className="testimonial-author">
                  <div className="avatar">VG</div>
                  <div className="author-info">
                    <h5>Vikram Gupta</h5>
                    <p>CTO, NextGen Retail</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="mb-4">
              <div className="testimonial-card">
                <div className="rating mb-3">
                  ★★★★★
                </div>
                <p className="testimonial-text">
                  "We've been using Hanu Tech's payment solutions alongside their IT consulting services for over a year. The seamless integration between financial tools and technical support has been a game-changer for our business."
                </p>
                <div className="testimonial-author">
                  <div className="avatar">NM</div>
                  <div className="author-info">
                    <h5>Neha Malhotra</h5>
                    <p>Operations Director, CloudServe</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="mb-4 mx-auto">
              <div className="testimonial-card">
                <div className="rating mb-3">
                  ★★★★★
                </div>
                <p className="testimonial-text">
                  "The custom software solution developed by Hanu Tech helped us streamline our payment collection process. Their technical team was responsive, professional, and delivered exactly what we needed on time and within budget."
                </p>
                <div className="testimonial-author">
                  <div className="avatar">RK</div>
                  <div className="author-info">
                    <h5>Rajiv Kapoor</h5>
                    <p>Finance Head, TechSolutions India</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Business Client Testimonials */}
      <ClientTestimonialsSection />
    </div>
  );
};

export default HomePage;
