import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import BusinessListings from './pages/buy/BusinessListings';
import BuyerRegistration from './pages/buy/BuyerRegistration';
import BrokerageServices from './pages/sell/BrokerageServices';
import MAServices from './pages/sell/MAServices';
import CaseStudies from './pages/sell/CaseStudies';
import ProgramSummary from './pages/licensing/ProgramSummary';
import Pricing from './pages/licensing/Pricing';
import Testimonials from './pages/licensing/Testimonials';
import OurTeam from './pages/company/OurTeam';
import TeamMemberBio from './pages/company/TeamMemberBio';
import IndustryPage from './pages/industries/IndustryPage';
import IndustriesOverview from './pages/industries/IndustriesOverview';
import BrokerLogin from './pages/portal/BrokerLogin';
import BrokerDashboard from './pages/portal/BrokerDashboard';
import DocumentLibrary from './pages/portal/DocumentLibrary';
import ListingSubmission from './pages/portal/ListingSubmission';
import BuyerNetworkSearch from './pages/portal/BuyerNetworkSearch';
import PrivateEquityRequest from './pages/portal/PrivateEquityRequest';
import MarketResearchRequest from './pages/portal/MarketResearchRequest';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import Contact from './pages/Contact';
import AutoIndustryInjector from './components/AutoIndustryInjector';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import GeneralCaseStudies from './pages/CaseStudies';
import Representation from './pages/buy/Representation';

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 8 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -8 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.15
};

// Wrapper component for page transitions
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main className="relative">
            <AnimatePresence mode="wait">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                
                {/* Buy Section */}
                <Route path="/buy/listings" element={<PageWrapper><BusinessListings /></PageWrapper>} />
                <Route path="/buy/representation" element={<PageWrapper><Representation /></PageWrapper>} />
                <Route path="/buy/registration" element={<PageWrapper><BuyerRegistration /></PageWrapper>} />
                
                {/* Sell Section */}
                <Route path="/sell/brokerage" element={<PageWrapper><BrokerageServices /></PageWrapper>} />
                <Route path="/sell/ma-services" element={<PageWrapper><MAServices /></PageWrapper>} />
                <Route path="/sell/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
                
                {/* Case Studies */}
                <Route path="/case-studies" element={<PageWrapper><GeneralCaseStudies /></PageWrapper>} />
                
                {/* Licensing Program */}
                <Route path="/licensing/program" element={<PageWrapper><ProgramSummary /></PageWrapper>} />
                <Route path="/licensing/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
                <Route path="/licensing/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
                
                {/* Company */}
                <Route path="/company/team" element={<PageWrapper><OurTeam /></PageWrapper>} />
                <Route path="/company/team/:name" element={<PageWrapper><TeamMemberBio /></PageWrapper>} />
                
                {/* Contact */}
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                
                {/* Industries */}
                <Route path="/industries" element={<PageWrapper><IndustriesOverview /></PageWrapper>} />
                <Route path="/industries/:industry" element={<PageWrapper><IndustryPage /></PageWrapper>} />
                
                {/* Blog */}
                <Route path="/company/blog" element={<PageWrapper><BlogIndex /></PageWrapper>} />
                <Route path="/company/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
                
                {/* Portal */}
                <Route path="/portal/login" element={<PageWrapper><BrokerLogin /></PageWrapper>} />
                <Route path="/portal" element={
                  <PageWrapper>
                    <ProtectedRoute>
                      <BrokerDashboard />
                    </ProtectedRoute>
                  </PageWrapper>
                } />
                <Route path="/portal/documents" element={
                  <PageWrapper>
                    <ProtectedRoute>
                      <DocumentLibrary />
                    </ProtectedRoute>
                  </PageWrapper>
                } />
                <Route path="/portal/listing-submission" element={
                  <PageWrapper>
                    <ProtectedRoute>
                      <ListingSubmission />
                    </ProtectedRoute>
                  </PageWrapper>
                } />
                <Route path="/portal/buyer-search" element={
                  <PageWrapper>
                    <ProtectedRoute>
                      <BuyerNetworkSearch />
                    </ProtectedRoute>
                  </PageWrapper>
                } />
                <Route path="/portal/pe-request" element={
                  <PageWrapper>
                    <ProtectedRoute>
                      <PrivateEquityRequest />
                    </ProtectedRoute>
                  </PageWrapper>
                } />
                <Route path="/portal/market-research" element={
                  <PageWrapper>
                    <ProtectedRoute>
                      <MarketResearchRequest />
                    </ProtectedRoute>
                  </PageWrapper>
                } />
              </Routes>
            </AnimatePresence>
            {/* Append contextual industry section below the page content */}
            <AutoIndustryInjector />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;