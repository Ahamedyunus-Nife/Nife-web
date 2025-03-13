import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ChangeLog from './components/changelog';
import MainLayout from './layouts/MainLayout';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ApplicationPartner from './pages/ApplicationPartner';
import Careers from './pages/Careers';
import HomePage from './pages/HomePage';
import InfraPartners from './pages/InfraPartners';
import OikosDetailedPage from './pages/OikosDetailedPage';
import Partner from './pages/Partner';
import Platus from './pages/Platus';
import featuresData from './features/oikos/features.json';
import FeaturesRoutes from './features/oikos/FeaturesRoutes';
import FeaturePage from './features/oikos/FeaturePage';
import ShowAllFeatures from './features/oikos/ShowAllFeatures';
import PlanAndPricing from './components/oikos/OikosPricing';
import Template2 from './features/oikos/Template2';
import PublicationsPage from './components/publications';
import EventsPage from './components/events';
import OpenSourcePage from './components/open-source';
import solutions from "../src/features/oikos/solutions.json"
import RuntimeLandingPage from './features/ShowAllRuntimes';
import ShowAllProducts from './features/ShowAllProducts';
import CookieConsent from 'react-cookie-consent';  // Cookie consent library
import ReactGA from 'react-ga4';  // Google Analytics 4
import MarketplaceApps from './components/marketplace';
import Template3 from './features/oikos/Template3';
import ShowAllUseCases from './features/oikos/ShowAllUseCases';
import MetaTags from './pages/HelmetLayout';
import Template4 from './features/oikos/Template4';
import ShowAllCaseStudy from './features/oikos/ShowAllCaseStudyies';

// Create a dark theme for MUI
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: "#0d6efd" },
  },
});

const NotFound = () => {
  return <div style={{ textAlign: "center" }}>
    <img src="https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Server-cuate.svg" style={{ height: "300px" }} alt='404 Not Found' />
    <h2 style={{ fontWeight: "bold" }} >404 - Page Not Found</h2>
  </div>;
};

function App() {
  // Initialize Google Analytics when the component mounts
  useEffect(() => {
    ReactGA.initialize('G-TSD5NZDRF9');  // Replace with your GA tracking ID
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <MainLayout>

            <Routes>
              <Route path="/" element={<>  <HomePage /> </>} />
              <Route path="/about-us" element={<> <AboutUsPage /> </>} />
              <Route path="/changelog" element={<> <MetaTags /> <ChangeLog /> </>} />
              <Route path="/careers" element={<> <Careers /> </>} />
              <Route path="/case-study" element={<>  <ShowAllCaseStudy /> </>} />
              <Route path="/case-study/:slug" element={<> <Template4 /> </>} />
              <Route path="/publications" element={<>  <PublicationsPage /> </>} />
              <Route path="/events" element={<> <EventsPage /> </>} />
              <Route path="/runtimes" element={<> <RuntimeLandingPage /> </>} />
              <Route path="/products" element={<><ShowAllProducts /> </>} />
              <Route path="/oikos/features/*" element={<> <MetaTags /> <FeaturesRoutes /> </>} />
              <Route path="/open-source" element={<> <OpenSourcePage /> </>} />
              <Route path="/oikos/features" element={<> <MetaTags /> <ShowAllFeatures /> </>} />
              <Route path="/oikos/pricing" element={<> <MetaTags /> <PlanAndPricing /> </>} />
              <Route path="/deploy/:id" element={<> <MetaTags /> <Template2 /> </>} />
              <Route path="/marketplace" element={<> <MetaTags /> <MarketplaceApps /> </>} />
              <Route path="/partner" element={<>  <Partner /> </>} />
              <Route path="/application-partner" element={<> <MetaTags /> <ApplicationPartner /> </>} />
              <Route path="/infra-partners" element={<> <MetaTags /> <InfraPartners /> </>} />
              <Route path="/platus" element={<> <Platus /> </>} />
              <Route path="/oikos" element={<><OikosDetailedPage /> </>} />
              <Route path="/contact-us" element={<> <MetaTags /> <ContactUsPage /> </>} />
              <Route path="/solutions/:id" element={<> <MetaTags /> <Template3 dataList={solutions} /> </>} />
              <Route path="/solutions" element={<> <MetaTags /> <ShowAllUseCases /> </>} />

              {/* Dynamic Routes for features */}
              {featuresData.features.map(feature => (
                <Route
                  key={feature.slug}
                  path={`/oikos/features/${feature.slug}`}
                  element={<> <FeaturePage slug={feature.slug} /> </>}
                />
              ))}

              {/* Fallback Route for 404 */}
              <Route path="*" element={<> <MetaTags /> <NotFound /> </>} />
            </Routes>

            {/* Cookie Consent Box at the top */}
            <CookieConsent
              location="bottom"  // Position the consent at the top
              buttonText="I Agree"
              cookieName="user-consent"
              style={{
                position: 'fixed',
                bottom: '0',
                borderTopRightRadius: '12px',
                width: '80%',  // Full width for the bar
                backgroundColor: '#121212',  // Dark background
                color: 'white',  // Text color
                fontFamily: 'Arial, sans-serif',
                padding: '8px 20px',  // Padding to make the bar more compact
                display: 'flex',
                alignItems: 'center',  // Align items vertically centered
                justifyContent: 'flex-start',  // Align text and button to the left
                zIndex: 1000,  // Ensure the bar is on top
                boxShadow: '0px 4px 6px rgba(13, 110, 253, 0.3)',  // Primary color for shadow
                borderBottom: '2px solid #0d6efd',  // Border to emphasize the bar
              }}
              buttonStyle={{
                backgroundColor: '#0d6efd',  // Primary blue button color
                color: 'white',  // Button text color
                borderRadius: '5px',
                padding: '8px 16px',  // Smaller button padding
                fontSize: '14px',  // Button text size
                cursor: 'pointer',
                marginRight: '12px',  // Space between text and button
              }}
              expires={365}  // Cookie expiry duration
              onAccept={() => {
                // Start tracking after the user accepts cookies
                ReactGA.send("pageview");  // Track pageview in GA
              }}
            >
              <p style={{ fontSize: '14px', margin: '0', flex: 1 }}>
                This website uses cookies to improve your experience. By clicking "I Agree," you consent to our use of cookies.
              </p>
            </CookieConsent>

          </MainLayout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
