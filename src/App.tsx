import { lazy, Suspense, type ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import PageMeta from "./components/layout/PageMeta";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Route-level code splitting: only the home page ships in the initial bundle.
const Contact = lazy(() => import("./pages/Contact"));
const BusinessListings = lazy(() => import("./pages/buy/BusinessListings"));
const BuyerRegistration = lazy(() => import("./pages/buy/BuyerRegistration"));
const Representation = lazy(() => import("./pages/buy/Representation"));
const BrokerageServices = lazy(() => import("./pages/sell/BrokerageServices"));
const MAServices = lazy(() => import("./pages/sell/MAServices"));
const CaseStudies = lazy(() => import("./pages/sell/CaseStudies"));
const GeneralCaseStudies = lazy(() => import("./pages/CaseStudies"));
const ProgramSummary = lazy(() => import("./pages/licensing/ProgramSummary"));
const Pricing = lazy(() => import("./pages/licensing/Pricing"));
const Testimonials = lazy(() => import("./pages/licensing/Testimonials"));
const OurTeam = lazy(() => import("./pages/company/OurTeam"));
const TeamMemberBio = lazy(() => import("./pages/company/TeamMemberBio"));
const IndustryPage = lazy(() => import("./pages/industries/IndustryPage"));
const IndustriesOverview = lazy(
  () => import("./pages/industries/IndustriesOverview"),
);
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BrokerLogin = lazy(() => import("./pages/portal/BrokerLogin"));
const BrokerDashboard = lazy(() => import("./pages/portal/BrokerDashboard"));
const DocumentLibrary = lazy(() => import("./pages/portal/DocumentLibrary"));
const ListingSubmission = lazy(
  () => import("./pages/portal/ListingSubmission"),
);
const BuyerNetworkSearch = lazy(
  () => import("./pages/portal/BuyerNetworkSearch"),
);
const PrivateEquityRequest = lazy(
  () => import("./pages/portal/PrivateEquityRequest"),
);
const MarketResearchRequest = lazy(
  () => import("./pages/portal/MarketResearchRequest"),
);

const guard = (el: ReactNode) => <ProtectedRoute>{el}</ProtectedRoute>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <PageMeta />
        <div className="flex min-h-screen flex-col bg-paper">
          <Header />
          <main id="main" className="relative flex-1">
            <Suspense
              fallback={<div className="min-h-[60vh]" aria-busy="true" />}
            >
              <Routes>
                <Route path="/" element={<Home />} />

                {/* Sell */}
                <Route path="/sell/brokerage" element={<BrokerageServices />} />
                <Route path="/sell/ma-services" element={<MAServices />} />
                <Route path="/sell/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies" element={<GeneralCaseStudies />} />

                {/* Buy */}
                <Route path="/buy/listings" element={<BusinessListings />} />
                <Route
                  path="/buy/representation"
                  element={<Representation />}
                />
                <Route
                  path="/buy/registration"
                  element={<BuyerRegistration />}
                />

                {/* Licensing */}
                <Route path="/licensing/program" element={<ProgramSummary />} />
                <Route path="/licensing/pricing" element={<Pricing />} />
                <Route
                  path="/licensing/testimonials"
                  element={<Testimonials />}
                />

                {/* Company */}
                <Route path="/company/team" element={<OurTeam />} />
                <Route path="/company/team/:name" element={<TeamMemberBio />} />
                <Route path="/company/blog" element={<BlogIndex />} />
                <Route path="/company/blog/:slug" element={<BlogPost />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/contact" element={<Contact />} />

                {/* Industries */}
                <Route path="/industries" element={<IndustriesOverview />} />
                <Route
                  path="/industries/:industry"
                  element={<IndustryPage />}
                />

                {/* Portal */}
                <Route path="/portal/login" element={<BrokerLogin />} />
                <Route path="/portal" element={guard(<BrokerDashboard />)} />
                <Route
                  path="/portal/documents"
                  element={guard(<DocumentLibrary />)}
                />
                <Route
                  path="/portal/listing-submission"
                  element={guard(<ListingSubmission />)}
                />
                <Route
                  path="/portal/buyer-search"
                  element={guard(<BuyerNetworkSearch />)}
                />
                <Route
                  path="/portal/pe-request"
                  element={guard(<PrivateEquityRequest />)}
                />
                <Route
                  path="/portal/market-research"
                  element={guard(<MarketResearchRequest />)}
                />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
