import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              
              {/* Buy Section */}
              <Route path="/buy/listings" element={<BusinessListings />} />
              <Route path="/buy/representation" element={<Representation />} />
              <Route path="/buy/registration" element={<BuyerRegistration />} />
              
              {/* Sell Section */}
              <Route path="/sell/brokerage" element={<BrokerageServices />} />
              <Route path="/sell/ma-services" element={<MAServices />} />
              <Route path="/sell/case-studies" element={<CaseStudies />} />
              
              {/* Case Studies */}
              <Route path="/case-studies" element={<GeneralCaseStudies />} />
              
              {/* Licensing Program */}
              <Route path="/licensing/program" element={<ProgramSummary />} />
              <Route path="/licensing/pricing" element={<Pricing />} />
              <Route path="/licensing/testimonials" element={<Testimonials />} />
              
              {/* Company */}
              <Route path="/company/team" element={<OurTeam />} />
              <Route path="/company/team/:name" element={<TeamMemberBio />} />
              
              {/* Contact */}
              <Route path="/contact" element={<Contact />} />
              
              {/* Industries */}
              <Route path="/industries" element={<IndustriesOverview />} />
              <Route path="/industries/:industry" element={<IndustryPage />} />
              
              {/* Blog */}
              <Route path="/company/blog" element={<BlogIndex />} />
              <Route path="/company/blog/:slug" element={<BlogPost />} />
              
              {/* Portal */}
              <Route path="/portal/login" element={<BrokerLogin />} />
              <Route path="/portal" element={
                <ProtectedRoute>
                  <BrokerDashboard />
                </ProtectedRoute>
              } />
              <Route path="/portal/documents" element={
                <ProtectedRoute>
                  <DocumentLibrary />
                </ProtectedRoute>
              } />
              <Route path="/portal/listing-submission" element={
                <ProtectedRoute>
                  <ListingSubmission />
                </ProtectedRoute>
              } />
              <Route path="/portal/buyer-search" element={
                <ProtectedRoute>
                  <BuyerNetworkSearch />
                </ProtectedRoute>
              } />
              <Route path="/portal/pe-request" element={
                <ProtectedRoute>
                  <PrivateEquityRequest />
                </ProtectedRoute>
              } />
              <Route path="/portal/market-research" element={
                <ProtectedRoute>
                  <MarketResearchRequest />
                </ProtectedRoute>
              } />
            </Routes>
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