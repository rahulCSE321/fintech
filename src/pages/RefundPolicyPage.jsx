import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import './RefundPolicyPage.css';

const RefundPolicyPage = () => {
  return (
    <div className="refund-policy-page">
      {/* Hero Section */}
      <section className="refund-hero py-5 bg-light">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8} md={10}>
              <h1 className="display-4 fw-bold mb-4">Refund & Cancellation Policy</h1>
              <p className="lead mb-0">
                Last updated: May 12, 2025
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Refund Policy Content */}
      <section className="refund-content py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} md={12}>
              <Card className="shadow-sm p-4 p-md-5">
                <div className="refund-section mb-5">
                  <h2 className="mb-4">Refund Policy Overview</h2>
                  <p>
                    At ByteCharge, we strive to ensure complete satisfaction with our services. This Refund and Cancellation Policy outlines the guidelines for requesting refunds and cancellations for various services offered by our company.
                  </p>
                  <p>
                    Please read this policy carefully to understand the refund and cancellation procedures for different types of services you may engage with ByteCharge.
                  </p>
                </div>

                <div className="refund-section mb-5">
                  <h2 className="mb-4">General Refund Policy</h2>
                  <p>
                    In general, refunds are processed under the following circumstances:
                  </p>
                  <ul className="refund-list">
                    <li>Transactions that have failed but your account has been debited</li>
                    <li>Double charges for the same service</li>
                    <li>Incorrect amount charged for a service</li>
                    <li>Service not provided after successful payment</li>
                  </ul>
                  <p>
                    Refund processing time typically takes 5-7 business days, depending on your bank's policies. All refunds will be credited back to the original payment method used for the transaction.
                  </p>
                </div>

                <div className="refund-section mb-5">
                  <h2 className="mb-4">Service-Specific Refund Policies</h2>
                  
                  <Accordion defaultActiveKey="0" className="mb-4">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Mobile & DTH Recharges</Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Mobile and DTH recharge transactions are processed immediately and are typically non-refundable once successful. However, in case of the following circumstances, you may be eligible for a refund:
                        </p>
                        <ul>
                          <li>If the recharge transaction failed but your account was debited</li>
                          <li>If you were charged multiple times for the same recharge</li>
                          <li>If the recharge was applied to an incorrect number due to a system error</li>
                        </ul>
                        <p>
                          To request a refund for mobile or DTH recharges, please contact our customer support within 24 hours of the transaction with your transaction ID and relevant details.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Bill Payments</Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Technology services provided by ByteCharge are typically non-refundable once engaged. However, refunds may be issued in the following cases:
                        </p>
                        <ul>
                          <li>If the bill payment transaction failed but your account was debited</li>
                          <li>If you were charged multiple times for the same bill</li>
                          <li>If the bill payment was not reflected in your biller's system within 72 hours</li>
                        </ul>
                        <p>
                          Refund requests for bill payments must be submitted within 3 days of the transaction. Please contact our customer support with your transaction ID and a screenshot of your biller's website showing that the payment has not been received.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Flight Bookings</Accordion.Header>
                      <Accordion.Body>
                        <p>
                          IT consulting services are subject to the cancellation and refund policies as outlined in the service agreement. ByteCharge serves as a service provider and adheres to the terms specified in the agreement.
                        </p>
                        <p>
                          <strong>Cancellation Charges:</strong>
                        </p>
                        <ul>
                          <li>Cancellations made within 24 hours of booking (provided the flight departure is more than 7 days away): Minimal or no charges</li>
                          <li>Cancellations made more than 7 days before project commencement: No cancellation fee</li>
                          <li>Cancellations made within 7 days of project commencement: 10% of the agreed service fee</li>
                          <li>No-show: Usually non-refundable as per airline policy</li>
                        </ul>
                        <p>
                          The exact cancellation charges may vary based on the airline, fare type, and time of cancellation. The refundable amount will be processed back to your original payment method within 7-14 business days after the airline processes the refund.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Movie Tickets</Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Movie ticket cancellation and refund policies are subject to the terms set by the respective cinema chains. Generally, the following guidelines apply:
                        </p>
                        <ul>
                          <li>Cancellations made at least 4 hours before the show time: Refund with a cancellation fee of ₹25 per ticket</li>
                          <li>Cancellations made within 4 hours of the show time: Non-refundable</li>
                          <li>In case of show cancellation by the cinema: Full refund without any deductions</li>
                        </ul>
                        <p>
                          Refunds for canceled movie tickets will be processed to your original payment method within 5-7 business days.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Money Transfers</Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Money transfer transactions cannot be canceled once they have been successfully processed. However, refunds may be considered in the following circumstances:
                        </p>
                        <ul>
                          <li>If the money transfer failed but your account was debited</li>
                          <li>If there was a duplicate transaction or technical error</li>
                        </ul>
                        <p>
                          For failed money transfers where your account has been debited, the amount will be automatically refunded to your source account within 2-3 business days. If you do not receive the refund within this timeframe, please contact our customer support with your transaction details.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

                <div className="refund-section mb-5">
                  <h2 className="mb-4">How to Request a Refund</h2>
                  <p>
                    To request a refund for any service from ByteCharge, please follow these steps:
                  </p>
                  <ol className="refund-steps">
                    <li>
                      <strong>Log in to your Pay999 account</strong> and go to the "Transaction History" section.
                    </li>
                    <li>
                      <strong>Locate the transaction</strong> for which you want to request a refund and click on "Help with this transaction" or "Report an issue".
                    </li>
                    <li>
                      <strong>Select the appropriate reason</strong> for your refund request from the options provided.
                    </li>
                    <li>
                      <strong>Provide additional details</strong> if required, such as screenshots or error messages.
                    </li>
                    <li>
                      <strong>Submit your request</strong> and note down the refund request ID for future reference.
                    </li>
                  </ol>
                  <p>
                    Alternatively, you can contact our customer support team at 1800-123-4567 or support@pay999.com with your transaction details.
                  </p>
                </div>

                <div className="refund-section mb-5">
                  <h2 className="mb-4">Refund Processing Time</h2>
                  <p>
                    Once your refund request is approved, the processing time depends on your payment method:
                  </p>
                  <ul className="refund-list">
                    <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                    <li><strong>Net Banking:</strong> 3-5 business days</li>
                    <li><strong>UPI:</strong> 1-3 business days</li>
                    <li><strong>Pay999 Wallet:</strong> Immediate to 24 hours</li>
                  </ul>
                  <p>
                    Please note that while Pay999 processes refunds promptly, the actual time for the refund to reflect in your account depends on your bank or payment provider's processing time.
                  </p>
                </div>

                <div className="refund-section">
                  <h2 className="mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about our Refund and Cancellation Policy, please contact us:
                  </p>
                  <ul className="contact-list">
                    <li>By email: refunds@pay999.com</li>
                    <li>By phone: 1800-123-4567 (Toll-free)</li>
                    <li>Through the Help & Support section in the Pay999 app</li>
                  </ul>
                  <p>
                    Our support team is available 24/7 to assist you with any refund or cancellation-related queries.
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

export default RefundPolicyPage;
