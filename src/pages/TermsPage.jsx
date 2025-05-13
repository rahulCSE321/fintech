import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './TermsPage.css';

const TermsPage = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} md={10}>
              <h1 className="display-4 fw-bold mb-4">Terms and Conditions</h1>
              <p className="lead mb-0">
                Last updated: May 12, 2025
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Terms Content */}
      <section className="terms-content py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <Card className="shadow-sm p-4 p-md-5">
                <div className="terms-section mb-5">
                  <h2 className="mb-4">Introduction</h2>
                  <p>
                    These Terms and Conditions ("Terms") govern your use of the ByteCharge website and mobile application (collectively, the "Service") operated by ByteCharge ("we," "us," or "our").
                  </p>
                  <p>
                    By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="mb-4">Accounts</h2>
                  <p>
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                  </p>
                  <p>
                    You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                  </p>
                  <p>
                    You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="mb-4">Services</h2>
                  <p>
                    ByteCharge provides various technology services, including but not limited to:
                  </p>
                  <ul className="terms-list">
                    <li>Mobile recharges</li>
                    <li>Bill payments</li>
                    <li>DTH recharges</li>
                    <li>Flight and movie ticket bookings</li>
                    <li>Money transfer services</li>
                    <li>Digital savings accounts</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="mb-4">Payments</h2>
                  <p>
                    All payments made through our Service are processed by our payment partners. By making a payment through our Service, you agree to be bound by the terms and conditions of our payment processors.
                  </p>
                  <p>
                    You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Service. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
                  </p>
                  <p>
                    We reserve the right to refuse any order placed through the Service. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="mb-4">Intellectual Property</h2>
                  <p>
                    The Service and its original content, features, and functionality are and will remain the exclusive property of ByteCharge and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ByteCharge.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="mb-4">User Content</h2>
                  <p>
                    Our Service may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post on or through the Service, including its legality, reliability, and appropriateness.
                  </p>
                  <p>
                    By posting content on or through the Service, you represent and warrant that: (i) the content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) that the posting of your content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person or entity.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="mb-4">Prohibited Uses</h2>
                  <p>
                    You agree not to use the Service for any of the following:
                  </p>
                  <ul className="terms-list">
                    <li>In any way that violates any applicable national or international law or regulation</li>
                    <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way</li>
                    <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
                    <li>To impersonate or attempt to impersonate ByteCharge, a ByteCharge employee, another user, or any other person or entity</li>
                    <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                    <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm ByteCharge or users of the Service or expose them to liability</li>
                  </ul>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="mb-4">Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by applicable law, in no event shall ByteCharge, its affiliates, directors, employees, agents, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses, that result from the use of, or inability to use, the Service.
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, ByteCharge assumes no liability or responsibility for any: (i) errors, mistakes, or inaccuracies of content; (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to or use of our Service; (iii) any unauthorized access to or use of our secure servers and/or any and all personal information stored therein.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="mb-4">Disclaimer</h2>
                  <p>
                    YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE SERVICE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
                  </p>
                  <p>
                    ByteCharge, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
                  </p>
                </div>

                <div className="terms-section mb-5">
                  <h2 className="mb-4">Governing Law</h2>
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                  </p>
                </div>

                <div className="terms-section">
                  <h2 className="mb-4">Changes to Terms</h2>
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                  </p>
                  <p>
                    If you have any questions about these Terms, please contact us at legal@bytecharge.com.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TermsPage;
