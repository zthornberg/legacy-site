import type { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import BusinessListings from './pages/buy/BusinessListings';
import BuyerRegistration from './pages/buy/BuyerRegistration';
import Representation from './pages/buy/Representation';
import BrokerageServices from './pages/sell/BrokerageServices';
import MAServices from './pages/sell/MAServices';
import CaseStudies from './pages/sell/CaseStudies';
import GeneralCaseStudies from './pages/CaseStudies';
import ProgramSummary from './pages/licensing/ProgramSummary';
import Pricing from './pages/licensing/Pricing';
import Testimonials from './pages/licensing/Testimonials';
import OurTeam from './pages/company/OurTeam';
import TeamMemberBio from './pages/company/TeamMemberBio';
import IndustryPage from './pages/industries/IndustryPage';
import IndustriesOverview from './pages/industries/IndustriesOverview';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import BrokerLogin from './pages/portal/BrokerLogin';
import BrokerDashboard from './pages/portal/BrokerDashboard';
import DocumentLibrary from './pages/portal/DocumentLibrary';
import ListingSubmission from './pages/portal/ListingSubmission';
import BuyerNetworkSearch from './pages/portal/BuyerNetworkSearch';
import PrivateEquityRequest from './pages/portal/PrivateEquityRequest';
import MarketResearchRequest from './pages/portal/MarketResearchRequest';

const guard = (el: ReactNode) => <ProtectedRoute>{el}</ProtectedRoute>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-paper">
          <Header />
          <main id="main" className="relative flex-1">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Sell */}
              <Route path="/sell/brokerage" element={<BrokerageServices />} />
              <Route path="/sell/ma-services" element={<MAServices />} />
              <Route path="/sell/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies" element={<GeneralCaseStudies />} />

              {/* Buy */}
              <Route path="/buy/listings" element={<BusinessListings />} />
              <Route path="/buy/representation" element={<Representation />} />
              <Route path="/buy/registration" element={<BuyerRegistration />} />

              {/* Licensing */}
              <Route path="/licensing/program" element={<ProgramSummary />} />
              <Route path="/licensing/pricing" element={<Pricing />} />
              <Route path="/licensing/testimonials" element={<Testimonials />} />

              {/* Company */}
              <Route path="/company/team" element={<OurTeam />} />
              <Route path="/company/team/:name" element={<TeamMemberBio />} />
              <Route path="/company/blog" element={<BlogIndex />} />
              <Route path="/company/blog/:slug" element={<BlogPost />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/contact" element={<Contact />} />

              {/* Industries */}
              <Route path="/industries" element={<IndustriesOverview />} />
              <Route path="/industries/:industry" element={<IndustryPage />} />

              {/* Portal */}
              <Route path="/portal/login" element={<BrokerLogin />} />
              <Route path="/portal" element={guard(<BrokerDashboard />)} />
              <Route path="/portal/documents" element={guard(<DocumentLibrary />)} />
              <Route path="/portal/listing-submission" element={guard(<ListingSubmission />)} />
              <Route path="/portal/buyer-search" element={guard(<BuyerNetworkSearch />)} />
              <Route path="/portal/pe-request" element={guard(<PrivateEquityRequest />)} />
              <Route path="/portal/market-research" element={guard(<MarketResearchRequest />)} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
