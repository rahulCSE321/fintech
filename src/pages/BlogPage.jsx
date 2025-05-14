import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaMobileAlt, FaFileInvoiceDollar, FaPlane, FaTicketAlt, FaCreditCard, FaUniversity, FaClock, FaUser } from 'react-icons/fa';
import './BlogPage.css';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mobile Recharge Made Simple: A Complete Guide",
      excerpt: "Learn how to recharge prepaid mobile phones across all major networks quickly and securely with our step-by-step guide.",
      icon: <FaMobileAlt size={24} />,
      author: "Team Hanu Tech",
      date: "May 10, 2025",
      readTime: "5 min read",
      category: "Payment Services",
      content: `
        <h2>Mobile Recharge Made Simple: A Complete Guide</h2>
        
        <p>In today's fast-paced digital world, keeping your mobile phone recharged is essential to stay connected. Hanu Tech offers a seamless mobile recharge experience that allows you to top up your prepaid mobile balance in just a few clicks.</p>
        
        <h3>Why Choose Our Mobile Recharge Service?</h3>
        
        <ul>
          <li><strong>Multi-Network Support:</strong> Recharge any mobile network including Airtel, Jio, Vi, BSNL, and more</li>
          <li><strong>Instant Recharge:</strong> Your recharge is processed immediately with real-time confirmation</li>
          <li><strong>Secure Transactions:</strong> Bank-grade security ensures your payment information is always protected</li>
          <li><strong>Cashback & Offers:</strong> Enjoy exclusive cashback and special offers on every recharge</li>
          <li><strong>24/7 Availability:</strong> Recharge anytime, anywhere, from any device</li>
        </ul>
        
        <h3>How to Recharge Your Mobile</h3>
        
        <p>Recharging your mobile with Hanu Tech is a simple 3-step process:</p>
        
        <ol>
          <li>Enter your mobile number and select your operator</li>
          <li>Choose a recharge plan or enter a custom amount</li>
          <li>Complete the payment using your preferred payment method</li>
        </ol>
        
        <p>Our platform supports various payment options including credit/debit cards, UPI, net banking, and digital wallets, making it convenient for all users.</p>
        
        <h3>Special Features</h3>
        
        <p>Our mobile recharge service comes with additional features designed to enhance your experience:</p>
        
        <ul>
          <li><strong>Recharge History:</strong> Keep track of all your past recharges</li>
          <li><strong>Saved Numbers:</strong> Save frequently recharged numbers for quicker transactions</li>
          <li><strong>Plan Recommendations:</strong> Get personalized recharge plan recommendations based on your usage</li>
          <li><strong>Scheduled Recharges:</strong> Set up automatic recharges to ensure you never run out of balance</li>
        </ul>
        
        <p>Experience the convenience of mobile recharges with Hanu Tech today and enjoy uninterrupted connectivity!</p>
      `
    },
    {
      id: 2,
      title: "Simplifying Bill Payments: Your Ultimate Guide",
      excerpt: "Pay electricity, water, gas, broadband and other utility bills hassle-free with our comprehensive bill payment service.",
      icon: <FaFileInvoiceDollar size={24} />,
      author: "Team Hanu Tech",
      date: "May 8, 2025",
      readTime: "6 min read",
      category: "Payment Services",
      content: `
        <h2>Simplifying Bill Payments: Your Ultimate Guide</h2>
        
        <p>Managing multiple utility bills can be overwhelming. Hanu Tech's bill payment service streamlines this process, allowing you to pay all your bills from a single platform.</p>
        
        <h3>Comprehensive Bill Payment Solutions</h3>
        
        <p>Our platform supports payment for various utilities and services including:</p>
        
        <ul>
          <li><strong>Electricity Bills:</strong> Pay bills for all major electricity boards across the country</li>
          <li><strong>Water Bills:</strong> Clear your water utility payments without visiting collection centers</li>
          <li><strong>Gas Bills:</strong> Pay for piped natural gas and LPG cylinder refills</li>
          <li><strong>Broadband & Internet:</strong> Keep your internet connection active with timely payments</li>
          <li><strong>DTH & Cable TV:</strong> Recharge your DTH or pay cable TV bills</li>
          <li><strong>Insurance Premiums:</strong> Pay life, health, and general insurance premiums</li>
          <li><strong>Loan EMIs:</strong> Make loan repayments on time</li>
        </ul>
        
        <h3>Benefits of Online Bill Payments</h3>
        
        <ul>
          <li><strong>Time-Saving:</strong> No more standing in queues or visiting multiple payment centers</li>
          <li><strong>Reminder Alerts:</strong> Get notified before due dates to avoid late payment charges</li>
          <li><strong>Payment History:</strong> Access a comprehensive record of all your past payments</li>
          <li><strong>Secure Transactions:</strong> End-to-end encryption ensures your financial data remains protected</li>
          <li><strong>Reward Points:</strong> Earn points on every bill payment that can be redeemed for discounts</li>
        </ul>
        
        <h3>How to Pay Bills on Our Platform</h3>
        
        <ol>
          <li>Select the bill category (electricity, water, gas, etc.)</li>
          <li>Choose your service provider from the list</li>
          <li>Enter your consumer/account number or fetch bill details automatically</li>
          <li>Verify the bill amount and proceed to payment</li>
          <li>Select your preferred payment method and complete the transaction</li>
        </ol>
        
        <p>With Hanu Tech's bill payment service, you can manage all your utility payments efficiently, saving time and avoiding late payment penalties.</p>
      `
    },
    {
      id: 3,
      title: "Book Your Perfect Flight: Tips and Tricks",
      excerpt: "Book domestic and international flights at the best prices with exclusive deals using our comprehensive flight booking service.",
      icon: <FaPlane size={24} />,
      author: "Team Hanu Tech",
      date: "May 5, 2025",
      readTime: "7 min read",
      category: "Travel Services",
      content: `
        <h2>Book Your Perfect Flight: Tips and Tricks</h2>
        
        <p>Finding the best flight deals can be time-consuming and confusing. Hanu Tech's flight booking service simplifies this process, helping you book domestic and international flights at competitive prices.</p>
        
        <h3>Why Book Flights With Us?</h3>
        
        <ul>
          <li><strong>Extensive Options:</strong> Access flights from all major airlines, both domestic and international</li>
          <li><strong>Best Price Guarantee:</strong> We ensure you get the most competitive fares available</li>
          <li><strong>Exclusive Deals:</strong> Access special discounts and offers not available elsewhere</li>
          <li><strong>Easy Comparison:</strong> Compare flight timings, prices, and amenities in one place</li>
          <li><strong>Zero Hidden Charges:</strong> Complete transparency in pricing with no surprise fees</li>
          <li><strong>Flexible Booking Options:</strong> Change or cancel bookings with minimal hassle</li>
        </ul>
        
        <h3>Tips for Finding the Best Flight Deals</h3>
        
        <ol>
          <li><strong>Book in Advance:</strong> Generally, booking 3-4 weeks before domestic flights and 5-6 months before international flights offers better rates</li>
          <li><strong>Be Flexible with Dates:</strong> Flying mid-week (Tuesday, Wednesday) is often cheaper than weekends</li>
          <li><strong>Use Fare Alerts:</strong> Set up price alerts for your desired routes to catch price drops</li>
          <li><strong>Consider Nearby Airports:</strong> Sometimes flying to/from alternative airports can save money</li>
          <li><strong>Check for Seasonal Promotions:</strong> Airlines often run special promotions during off-peak seasons</li>
        </ol>
        
        <h3>Additional Services</h3>
        
        <p>Our flight booking service includes several value-added features:</p>
        
        <ul>
          <li><strong>Web Check-in:</strong> Complete your check-in process online</li>
          <li><strong>Seat Selection:</strong> Choose your preferred seats in advance</li>
          <li><strong>Meal Preferences:</strong> Select special meals where available</li>
          <li><strong>Baggage Add-ons:</strong> Purchase additional baggage allowance if needed</li>
          <li><strong>Travel Insurance:</strong> Protect your trip with comprehensive travel insurance</li>
        </ul>
        
        <p>With Hanu Tech's flight booking service, you can enjoy a hassle-free travel planning experience and focus on making memories at your destination.</p>
      `
    },
    {
      id: 4,
      title: "Never Miss a Movie: Your Guide to Booking Movie Tickets",
      excerpt: "Book movie tickets for the latest releases at theaters near you with our user-friendly movie ticket booking service.",
      icon: <FaTicketAlt size={24} />,
      author: "Team Hanu Tech",
      date: "May 2, 2025",
      readTime: "5 min read",
      category: "Entertainment Services",
      content: `
        <h2>Never Miss a Movie: Your Guide to Booking Movie Tickets</h2>
        
        <p>Movie enthusiasts can now enjoy a seamless ticket booking experience with Hanu Tech's movie ticket service. Book tickets for the latest releases at theaters near you with just a few taps.</p>
        
        <h3>Features of Our Movie Ticket Booking Service</h3>
        
        <ul>
          <li><strong>Nationwide Coverage:</strong> Book tickets at theaters across all major cities and towns</li>
          <li><strong>Comprehensive Listings:</strong> Access all the latest movies in various languages</li>
          <li><strong>Real-time Seat Selection:</strong> Choose your preferred seats with an interactive seat layout</li>
          <li><strong>Multiple Show Timings:</strong> View and select from various show timings throughout the day</li>
          <li><strong>Instant Confirmation:</strong> Receive e-tickets immediately after booking</li>
          <li><strong>Contactless Entry:</strong> Show your e-ticket at the theater for a contactless experience</li>
        </ul>
        
        <h3>How to Book Movie Tickets</h3>
        
        <ol>
          <li>Select your city from the dropdown menu</li>
          <li>Browse through the list of movies currently playing</li>
          <li>Choose your preferred movie, theater, date, and show time</li>
          <li>Select the number of tickets and your preferred seats</li>
          <li>Add snacks and beverages (available at select theaters)</li>
          <li>Complete the payment using your preferred payment method</li>
        </ol>
        
        <h3>Additional Benefits</h3>
        
        <ul>
          <li><strong>Discounted Tickets:</strong> Enjoy special discounts on select days and shows</li>
          <li><strong>Combo Offers:</strong> Save on food and beverage combos when booking tickets</li>
          <li><strong>Movie Recommendations:</strong> Get personalized movie suggestions based on your preferences</li>
          <li><strong>Reviews and Ratings:</strong> Make informed decisions with user reviews and ratings</li>
          <li><strong>New Release Alerts:</strong> Stay updated about upcoming movies and advance bookings</li>
        </ul>
        
        <p>With Hanu Tech's movie ticket booking service, you can skip the queues and ensure you never miss out on the latest blockbusters!</p>
      `
    },
    {
      id: 5,
      title: "Managing Credit Card Payments Efficiently",
      excerpt: "Pay your credit card bills for all major banks securely and on time to avoid late fees and maintain a good credit score.",
      icon: <FaCreditCard size={24} />,
      author: "Team Hanu Tech",
      date: "April 28, 2025",
      readTime: "6 min read",
      category: "Financial Services",
      content: `
        <h2>Managing Credit Card Payments Efficiently</h2>
        
        <p>Timely credit card payments are crucial for maintaining a good credit score and avoiding late payment charges. Hanu Tech's credit card payment service makes this process simple and secure.</p>
        
        <h3>Comprehensive Banking Support</h3>
        
        <p>Our platform supports credit card payments for all major banks including:</p>
        
        <ul>
          <li>HDFC Bank</li>
          <li>ICICI Bank</li>
          <li>State Bank of India</li>
          <li>Axis Bank</li>
          <li>Kotak Mahindra Bank</li>
          <li>Citibank</li>
          <li>Standard Chartered</li>
          <li>American Express</li>
          <li>And many more</li>
        </ul>
        
        <h3>Benefits of Online Credit Card Payments</h3>
        
        <ul>
          <li><strong>Convenience:</strong> Pay your credit card bills anytime, anywhere</li>
          <li><strong>Time-Saving:</strong> No need to visit bank branches or ATMs</li>
          <li><strong>Payment Reminders:</strong> Get notified before your due date</li>
          <li><strong>Multiple Payment Options:</strong> Pay using UPI, net banking, debit card, or another credit card</li>
          <li><strong>Secure Transactions:</strong> Advanced encryption ensures your financial data remains protected</li>
          <li><strong>Payment History:</strong> Keep track of all your past payments</li>
        </ul>
        
        <h3>How to Pay Your Credit Card Bill</h3>
        
        <ol>
          <li>Select 'Credit Card Payment' from the services menu</li>
          <li>Choose your bank from the list</li>
          <li>Enter your credit card number or fetch card details (for registered users)</li>
          <li>Enter the payment amount (minimum due, full amount, or custom amount)</li>
          <li>Select your preferred payment method</li>
          <li>Complete the transaction and receive instant confirmation</li>
        </ol>
        
        <h3>Tips for Effective Credit Card Management</h3>
        
        <ul>
          <li><strong>Pay Full Amount:</strong> Whenever possible, pay the full outstanding amount to avoid interest charges</li>
          <li><strong>Pay Before Due Date:</strong> Make payments at least 2-3 days before the due date to avoid processing delays</li>
          <li><strong>Set Up Auto-Pay:</strong> Configure automatic payments to ensure you never miss a due date</li>
          <li><strong>Monitor Statements:</strong> Regularly check your statements for any unauthorized transactions</li>
        </ul>
        
        <p>With Hanu Tech's credit card payment service, you can manage your credit card bills efficiently, maintain a good credit score, and avoid unnecessary late payment charges.</p>
      `
    },
    {
      id: 6,
      title: "Digital Savings Account: Banking Made Simple",
      excerpt: "Open a digital savings account with attractive interest rates and zero paperwork through our streamlined online process.",
      icon: <FaUniversity size={24} />,
      author: "Team Hanu Tech",
      date: "April 25, 2025",
      readTime: "8 min read",
      category: "Banking Services",
      content: `
        <h2>Digital Savings Account: Banking Made Simple</h2>
        
        <p>Traditional banking often involves extensive paperwork and multiple branch visits. Hanu Tech's digital savings account service eliminates these hassles, offering a completely paperless banking experience.</p>
        
        <h3>Advantages of Our Digital Savings Account</h3>
        
        <ul>
          <li><strong>Zero Paperwork:</strong> Complete the entire account opening process online</li>
          <li><strong>Quick Activation:</strong> Get your account activated within 24-48 hours</li>
          <li><strong>Attractive Interest Rates:</strong> Enjoy competitive interest rates on your savings</li>
          <li><strong>Zero Balance Option:</strong> No minimum balance requirement for basic accounts</li>
          <li><strong>Free Digital Services:</strong> Access net banking, mobile banking, and UPI services at no extra cost</li>
          <li><strong>Virtual Debit Card:</strong> Get an instant virtual debit card for online transactions</li>
        </ul>
        
        <h3>Types of Digital Savings Accounts</h3>
        
        <p>We offer various types of digital savings accounts to suit different needs:</p>
        
        <ul>
          <li><strong>Basic Savings Account:</strong> Zero balance requirement, ideal for students and low-volume transactions</li>
          <li><strong>Premium Savings Account:</strong> Higher interest rates with additional benefits like airport lounge access and premium customer support</li>
          <li><strong>Senior Citizen Account:</strong> Special higher interest rates for individuals above 60 years</li>
          <li><strong>Family Account:</strong> Joint account options with customizable access controls</li>
        </ul>
        
        <h3>How to Open a Digital Savings Account</h3>
        
        <ol>
          <li>Select 'Open Digital Savings Account' from our services menu</li>
          <li>Fill in your basic details (name, mobile number, email, etc.)</li>
          <li>Complete the KYC verification using Aadhaar and PAN</li>
          <li>Take a selfie for photo verification</li>
          <li>Set up your net banking credentials</li>
          <li>Make an initial deposit (if applicable)</li>
        </ol>
        
        <h3>Additional Features</h3>
        
        <ul>
          <li><strong>24/7 Customer Support:</strong> Get assistance anytime via chat, email, or phone</li>
          <li><strong>Integrated Bill Payments:</strong> Pay all your utility bills directly from your account</li>
          <li><strong>Automated Savings:</strong> Set up recurring deposits or auto-save features</li>
          <li><strong>Investment Options:</strong> Access mutual funds, fixed deposits, and other investment products</li>
          <li><strong>Detailed Analytics:</strong> Track your spending patterns and manage your finances better</li>
        </ul>
        
        <p>Experience the future of banking with Hanu Tech's digital savings account – convenient, secure, and designed for the digital age.</p>
      `
    }
  ];

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <Badge className="modern-badge mb-3" bg="light" text="primary">Our Blog</Badge>
              <h1 className="display-4 fw-bold mb-4">Latest <span className="gradient-text">Insights</span></h1>
              <p className="lead mb-4">
                Discover the latest trends, tips, and guides on our payment and technology services
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog-posts py-5">
        <Container>
          <Row>
            {blogPosts.map(post => (
              <Col lg={6} md={6} className="mb-4" key={post.id}>
                <Card className="blog-card h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="blog-icon me-3">
                        {post.icon}
                      </div>
                      <Badge bg="light" text="primary" className="category-badge">
                        {post.category}
                      </Badge>
                    </div>
                    <Card.Title className="blog-title mb-3">{post.title}</Card.Title>
                    <Card.Text className="blog-excerpt mb-3">
                      {post.excerpt}
                    </Card.Text>
                    <div className="blog-meta d-flex align-items-center">
                      <div className="me-3 d-flex align-items-center">
                        <FaUser className="me-1" size={12} />
                        <small>{post.author}</small>
                      </div>
                      <div className="me-3 d-flex align-items-center">
                        <FaClock className="me-1" size={12} />
                        <small>{post.readTime}</small>
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0 pb-4 px-4">
                    {/* <button className="btn btn-link p-0 read-more-link">Read Full Article</button> */}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Blog Detail Modal would be implemented here */}
    </div>
  );
};

export default BlogPage;
