import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <section className="policy-hero py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} md={10}>
              <h1 className="display-4 fw-bold mb-4">Privacy Policy</h1>
              <p className="lead mb-0">
                Last updated: May 12, 2025
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Policy Content */}
      <section className="policy-content py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <Card className="shadow-sm p-4 p-md-5">
                <div className="policy-section mb-5">
                  <h2 className="mb-4">Introduction</h2>
                  <p>
                    ByteCharge ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by ByteCharge.
                  </p>
                  <p>
                    This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service") alongside our application, ByteCharge. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
                  </p>
                </div>

                <div className="policy-section mb-5">
                  <h2 className="mb-4">Information We Collect</h2>
                  <p>
                    We collect information from you when you register on our website, place an order, subscribe to a newsletter, respond to a survey, fill out a form, or enter information on our site. The personal information we may collect from you includes:
                  </p>
                  <ul className="policy-list">
                    <li><strong>Contact Information:</strong> Name, email address, mailing address, phone number</li>
                    <li><strong>Account Information:</strong> Username, password, account preferences</li>
                    <li><strong>Payment Information:</strong> Credit card details, bank account numbers, billing address (note: payment information is processed securely through our payment processors)</li>
                    <li><strong>Identity Information:</strong> Date of birth, PAN card, Aadhaar number, and other government-issued identification</li>
                    <li><strong>Technical Information:</strong> IP address, browser type, device information, browsing patterns, and other technical data</li>
                    <li><strong>Usage Information:</strong> Information about how you use our website and services</li>
                  </ul>
                </div>

                <div className="policy-section mb-5">
                  <h2 className="mb-4">How We Use Your Information</h2>
                  <p>We use the information we collect in various ways, including to:</p>
                  <ul className="policy-list">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Process and complete transactions, and send related information including transaction confirmations and invoices</li>
                    <li>Improve, personalize, and expand our services</li>
                    <li>Understand and analyze how you use our services</li>
                    <li>Develop new products, services, features, and functionality</li>
                    <li>Communicate with you, including for customer service, updates, and marketing purposes</li>
                    <li>Prevent fraudulent transactions and monitor against theft</li>
                    <li>Process and resolve disputes and troubleshoot problems</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                <div className="policy-section mb-5">
                  <h2 className="mb-4">Information Sharing and Disclosure</h2>
                  <p>We may share your information with third parties in the following situations:</p>
                  <ul className="policy-list">
                    <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors or agents who perform services for us and require access to such information to do that work.</li>
                    <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.</li>
                    <li><strong>Protect Rights:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, or situations involving potential threats to the safety of any person or illegal activities.</li>
                  </ul>
                </div>

                <div className="policy-section mb-5">
                  <h2 className="mb-4">Data Security</h2>
                  <p>
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include internal reviews of our data collection, storage, and processing practices and security measures, as well as physical security measures to guard against unauthorized access to systems where we store personal data.
                  </p>
                  <p>
                    Despite our best efforts, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. Any information you transmit to us is at your own risk.
                  </p>
                </div>

                <div className="policy-section mb-5">
                  <h2 className="mb-4">Your Rights and Choices</h2>
                  <p>
                    You have certain rights regarding your personal information, which include:
                  </p>
                  <ul className="policy-list">
                    <li><strong>Access:</strong> You can request copies of your personal information we hold.</li>
                    <li><strong>Correction:</strong> You can request that we correct inaccurate information about you.</li>
                    <li><strong>Deletion:</strong> You can request that we delete your personal information in certain circumstances.</li>
                    <li><strong>Restriction:</strong> You can request that we restrict the processing of your information in certain circumstances.</li>
                    <li><strong>Objection:</strong> You can object to our processing of your personal information in certain circumstances.</li>
                    <li><strong>Data Portability:</strong> You can request that we transfer your information to another organization in a structured, commonly used format.</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </div>

                <div className="policy-section mb-5">
                  <h2 className="mb-4">Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and allows us to improve our site.
                  </p>
                  <p>
                    You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                  </p>
                </div>

                <div className="policy-section mb-5">
                  <h2 className="mb-4">Children's Privacy</h2>
                  <p>
                    Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information. If you become aware that a child has provided us with personal information, please contact us.
                  </p>
                </div>

                <div className="policy-section mb-5">
                  <h2 className="mb-4">Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>

                <div className="policy-section">
                  <h2 className="mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <ul className="contact-list">
                    <li>By email: privacy@bytecharge.com</li>
                    <li>By phone: 1800-123-4567</li>
                    <li>By mail: 123 Payment Street, Financial District, New Delhi, 110001</li>
                  </ul>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
