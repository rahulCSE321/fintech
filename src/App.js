import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import RefundPolicyPage from './pages/RefundPolicyPage';

// IT Service Pages
import ITConsultingPage from './pages/services/ITConsultingPage';
import BPOPage from './pages/services/BPOPage';
import TechnicalSupportPage from './pages/services/TechnicalSupportPage';
import SoftwareDevelopmentPage from './pages/services/SoftwareDevelopmentPage';
import ITStaffingPage from './pages/services/ITStaffingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/services/it-consulting" element={<ITConsultingPage />} />
            <Route path="/services/bpo" element={<BPOPage />} />
            <Route path="/services/technical-support" element={<TechnicalSupportPage />} />
            <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
            <Route path="/services/staffing" element={<ITStaffingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
