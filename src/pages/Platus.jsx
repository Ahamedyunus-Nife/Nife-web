import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { Button } from "@mui/material";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { lazy } from 'react';
import PlatusDashoard from "./PlatusDashoard";
import PlatusInventory from "./PlatusInventory";
import UnderstandResourcesSection from "./UnderstandResourcesSection";
import SlackNotificationSection from "./SlackNotificationSection.js";
import { Helmet } from 'react-helmet-async';
const schemaData={
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Platus",
  "description": "Optimize and manage your cloud expenses with Platus. Experience real-time cost monitoring, in-depth reporting, and customizable alerts to keep your cloud spending in check.",
  "url": "https://nife.io/platus",
  "brand": {
    "@type": "Organization",
    "name": "Nife"
  },
  "image": "https://nife.io/static/media/finops-dash.0b51e9dcd1aab3ad4f17.png", 
  "offers": {
    "@type": "Offer",
    "url": "https://landing.nife.io/request-demo",
    "name": "Request Demo",
    "description": "Connect your cloud accounts to gain in-depth insights into your cloud infrastructure.",
    "priceCurrency": "USD",
    "price": "0.00"
  },
  "mainEntity": {
    "@type": "Service",
    "name": "Platus Cloud Cost Monitoring & Management",
    "description": "Manage cloud resources, optimize expenses, and get detailed reports with real-time monitoring and alerts.",
    "provider": {
      "@type": "Organization",
      "name": "Nife"
    }
  },
  "additionalType": "https://schema.org/SoftwareApplication",
  "applicationCategory": "Cloud Cost Management",
  "features": [
    {
      "@type": "PropertyValue",
      "name": "Real-Time Monitoring",
      "value": "Get up-to-date insights into your cloud spending."
    },
    {
      "@type": "PropertyValue",
      "name": "Detailed Reports",
      "value": "Access comprehensive reports on your cloud usage."
    },
    {
      "@type": "PropertyValue",
      "name": "Alerts & Notifications",
      "value": "Receive alerts through Slack to stay informed about your spending."
    }
  ],
  "video": {
    "@type": "VideoObject",
    "name": "Platus in Action: How-To Video",
    "description": "Watch the demonstration video of Platus to understand how it works.",
    "thumbnailUrl": "https://i.ytimg.com/vi/EY-Qdy9saHE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDms9pyDrj9GTDu88U7lL7QRsFzzA",  
    "uploadDate": "2024-01-29", 
    "contentUrl": "https://www.youtube.com/embed/EY-Qdy9saHE?si=yUoNBBb-zplZxI7l"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "15"
  }
}


const VerticalLine = lazy(() => import('../components/functions/VerticalLines'));

function Platus() {
  return (
    <div>
       <Helmet>
        <title>Platus | Cloud Cost Monitoring & Management</title>
        <meta name="description" content="Optimize and manage your cloud expenses with Platus. Experience real-time cost monitoring, in-depth reporting, and customizable alerts to keep your cloud spending in check." />
        <meta name="keywords" content="cloud cost monitoring, cloud cost management, real-time cost monitoring, customizable alerts, cloud expense optimization, Platus, AWS support, GCP support, Azure support, DigitalOcean support" />
        <link rel="canonical" href="https://nife.io/platus" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <div className="about mb-5">
        <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimationTitles duration={1} title="Navigating Your Deployment budgets with Precisions" className="title" />
            <p className="gray-50 fs-6 mb-2">
              Connect your cloud accounts to gain in-depth insights into your cloud infrastructure.
            </p> 


            <Button onClick={() => window.location.href = "https://launch.nife.io/contact-us"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
              Request Demo
            </Button>
            <Button sx={{ mt: 4, fontWeight: "bold",ml:2 }}  onClick={() => window.location.href = "https://launch.nife.io/"}>Start Optimizing Your Cloud Today</Button>


          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex flex-column"
          >

            <div>
              <img
                src={require("..//images/monitoring.png")}
                className="p-0 img"
                alt="partner"
                height={350}
                width={500}
              />
            </div>

          </motion.div>
        </Container>
      </div>
   

      {/* aws gcp azure */}

      <Container className="mt-5">
        <h2 className="text-center text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          Connect Everthing
        </h2>
        <p className="text-center text-white mb-4" style={{ fontSize: '1.2rem' }}>
        No matter the location or platform
        </p>
        <br />
        <Row className="justify-content-center">
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/amazon-web-services.png')} alt="Amazon Web Services" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">Amazon Web Services</Card.Title>
                <p className="gray-90 mt-3">We support AWS</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/1721675.webp')} alt="Google Cloud Platform" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">Google Cloud Platform</Card.Title>
                <p className="gray-90 mt-3">We support GCP</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/microsoft_azure.svg_.png')} alt="microsoft azure cloud" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">Microsoft Azure Cloud</Card.Title>
                <p className="gray-90 mt-3">Coming soon</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/DigitalOcean_icon.svg.png')} alt="DigitalOcean" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">DigitalOcean Cloud</Card.Title>
                <p className="gray-90 mt-3">Coming soon</p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      <VerticalLine />

      {/* platus dashboard */}

      <PlatusDashoard />
      <br/>
      <VerticalLine />

      <PlatusInventory />
      <br/>
      <VerticalLine />
      <SlackNotificationSection/>
      <VerticalLine />
      <UnderstandResourcesSection/>

      <div>
        <br />




      </div>
      <br />
      <Container className="text-center">
            <h2 className="title mx-auto gradient-text fw-bold" style={{ marginBottom: '1rem' }}>
                Platus in Action: How-To Video
            </h2>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', margin: '0 auto' }}>
                <iframe
                    src="https://www.youtube.com/embed/EY-Qdy9saHE?si=yUoNBBb-zplZxI7l"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                ></iframe>
            </div>
        </Container>



    </div>
  );
}

export default Platus;