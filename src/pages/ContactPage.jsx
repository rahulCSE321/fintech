import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} md={10}>
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead mb-0">
                Have questions or need assistance? We're here to help!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info py-5">
        <Container>
          <Row>
            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-card h-100 text-center">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <Card.Title>Our Office</Card.Title>
                  <Card.Text>
                    123 Payment Street<br />
                    Financial District<br />
                    New Delhi, 110001
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4">
              <Card className="contact-card h-100 text-center">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <Card.Title>Call Us</Card.Title>
                  <Card.Text>
                    Customer Support: 1800-123-4567<br />
                    Business Inquiries: +91 98765 43210<br />
                    Hours: 24x7 Support
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={12} className="mb-4">
              <Card className="contact-card h-100 text-center">
                <Card.Body>
                  <div className="contact-icon mb-3">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <Card.Title>Email Us</Card.Title>
                  <Card.Text>
                    Customer Support: support@bytecharge.com<br />
                    Business Inquiries: business@bytecharge.com<br />
                    Media: media@bytecharge.com
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form */}
      <section className="contact-form py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <Card className="shadow-sm">
                <Card.Body className="p-4 p-md-5">
                  <h2 className="text-center mb-4">Send Us a Message</h2>
                  
                  {formSubmitted ? (
                    <div className="text-center py-4">
                      <div className="success-icon mb-3">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <h3>Thank You!</h3>
                      <p className="mb-4">Your message has been sent successfully. We'll get back to you soon.</p>
                      <Button 
                        variant="primary" 
                        onClick={() => setFormSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control 
                              type="text" 
                              name="name" 
                              value={formData.name} 
                              onChange={handleChange} 
                              placeholder="Enter your name" 
                              required 
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                              type="email" 
                              name="email" 
                              value={formData.email} 
                              onChange={handleChange} 
                              placeholder="Enter your email" 
                              required 
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                              type="tel" 
                              name="phone" 
                              value={formData.phone} 
                              onChange={handleChange} 
                              placeholder="Enter your phone number" 
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control 
                              type="text" 
                              name="subject" 
                              value={formData.subject} 
                              onChange={handleChange} 
                              placeholder="Enter subject" 
                              required 
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group className="mb-4">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          name="message" 
                          value={formData.message} 
                          onChange={handleChange} 
                          rows={5} 
                          placeholder="Enter your message" 
                          required 
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit" size="lg">
                          Send Message
                        </Button>
                      </div>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section py-5">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="faq-item mb-4">
                <h4>How can I track my complaint status?</h4>
                <p>
                  You can track your complaint status by logging into your ByteCharge account, going to "Help & Support" section, 
                  and then selecting "My Complaints" to view the status.
                </p>
              </div>
              <div className="faq-item mb-4">
                <h4>What are your customer service hours?</h4>
                <p>
                  Our customer service team is available 24 hours a day, 7 days a week to assist you with any queries or concerns.
                </p>
              </div>
              <div className="faq-item mb-4">
                <h4>How long does it take to get a refund?</h4>
                <p>
                  Refunds typically take 5-7 business days to process and appear in your account, depending on your bank's policies.
                </p>
              </div>
              <div className="faq-item mb-4">
                <h4>Do you have a physical office I can visit?</h4>
                <p>
                  Yes, you can visit our office at the address mentioned above. Our office hours are Monday to Friday, 9 AM to 6 PM.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
