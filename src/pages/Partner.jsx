import React from 'react';
import { lazy } from 'react'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AnimationTitles from "../components/functions/AnimationTitles";
import { Button } from "@mui/material";
import { Container, Row, Col, Card } from 'react-bootstrap';
const HorizontalLine = lazy(() => import('../components/functions/HorizontalLine'));





const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Partner with Nife",
  "description": "Expand your revenue strategies by partnering with Nife. Integrate with our revolutionary public edge cloud ecosystem for hybrid cloud deployments and 5G network integration. Explore reseller, referral, and sales integration programs.",
  "url": "https://nife.io/partner",
  "mainEntity": {
    "@type": "Organization",
    "name": "Nife",
    "url": "https://nife.io",
    "logo": "https://nife.io/path/to/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Partnerships",
      "email": "partnerships@nife.io",
      "telephone": "+1-800-123-4567",
      "url": "https://nife.io/partner"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Remote",
      "addressCountry": "US"
    }
  },
  "offers": {
    "@type": "Offer",
    "name": "Partner Program",
    "url": "https://nife.io/partner",
    "description": "Join Nife's Partner Program to unlock new revenue opportunities through our public edge cloud ecosystem.",
    "priceCurrency": "USD",
    "price": "0",
    "itemOffered": {
      "@type": "Service",
      "name": "Partner Program",
      "description": "Integrate with our public edge cloud ecosystem to offer hybrid cloud solutions and 5G network integration."
    }
  },
  "article": [
    {
      "@type": "Article",
      "headline": "Customer-First Principle",
      "description": "Give your customers and partners a greater growth and scale. Hybrid Cloud Deployments to 5G Network across Regions.",
      "image": "https://nife.io/path/to/customer-first-principle-image.png"
    },
    {
      "@type": "Article",
      "headline": "Referral",
      "description": "Your customers can get access to accelerated deployments and application lifecycle management.",
      "image": "https://nife.io/path/to/referral-image.png"
    },
    {
      "@type": "Article",
      "headline": "Sales & Integration",
      "description": "Onboard yourself to make a remarkable transformation and engage with the operators and partners.",
      "image": "https://nife.io/path/to/sales-integration-image.png"
    }
  ],
  "relatedLink": [
    {
      "@type": "WebPage",
      "name": "Infrastructure Partners",
      "url": "https://nife.io/infra-partners"
    },
    {
      "@type": "WebPage",
      "name": "Application Partners",
      "url": "https://nife.io/application-partner"
    }
  ],
  "potentialAction": {
    "@type": "Action",
    "name": "Request Partnership",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://nife.io/partner"
    },
    "actionOption": "https://schema.org/ActionOption"
  }
};


function Partner() {
  return (
    <>
      <Helmet>
        <title>Edge Cloud Partners | Cloud Native Development</title>
        <meta name="description" content="Partner with Nife and unlock new revenue opportunities through our Public Edge Cloud ecosystem. Explore reseller, referral, and sales integration programs that enable rapid global deployment and infrastructure access across 500+ regions. Join us to scale innovation with hybrid cloud solutions and 5G network integration." />
        <link rel="canonical" href="https://nife.io/partner" />
        <meta name="keywords" content="Nife partnerships, edge cloud partners, public edge cloud, hybrid cloud deployment, 5G network integration, reseller partnerships, referral program, sales integration, application lifecycle management, regional infrastructure, edge computing resources, decentralized cloud, global public edge, infrastructure distribution, workload deployment, public cloud, mobile networks, partnership alliance" />
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
            <AnimationTitles duration={1} title="Expand your Revenue Strategies by Partnering with Nife" className="title" />
            <p className="gray-50 fs-6 mb-2">
              Integrating the ecosystem of revolutionary partners to realise the power of public edge cloud.
            </p>
            <Button onClick={() => window.location.href = "https://landing.nife.io/partnership-page"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
              Request
            </Button>

          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex flex-column"
          >

            <div>
              <img
                src={require("..//images/partner.gif")}
                className="p-0 img"
                alt="partner"
                height={400}
                width={600}
              />
            </div>

          </motion.div>
        </Container>
      </div>
      <br />
      <br />

      <div>
        <Container className="my-5 text-center">
          <Row className="justify-content-center">
            <Col md={6} lg={3} className="mb-4">
              <Card className="bg-dark text-white border-light">
                <Card.Img
                  variant="top"
                  src={require('../images/2..png')}
                  className="p-0 img"
                  alt="Customer-First Principle"
                  style={{
                    width: '50px', /* Adjust the size as needed */
                    height: '50px', /* Adjust the size as needed */
                    objectFit: 'contain',
                    display: 'block', /* Ensures that image takes up space properly */
                    margin: '10px auto 0',

                  }}
                />
                <Card.Body>
                  <Card.Title>Reseller
                  </Card.Title>
                  <Card.Text>
                    Give your customers and partners a greater growth and scale. Hybrid Cloud Deployments to 5G Network across Regions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="bg-dark text-white border-light">
                <Card.Img
                  variant="top"
                  src={require('../images/1..png')}
                  className="p-0 img"
                  alt="Make it Matter"
                  style={{
                    width: '50px', /* Adjust the size as needed */
                    height: '50px', /* Adjust the size as needed */
                    objectFit: 'contain',
                    display: 'block', /* Ensures that image takes up space properly */
                    margin: '10px auto 0',

                  }}
                />
                <Card.Body>
                  <Card.Title>Referral</Card.Title>
                  <Card.Text>
                    Your Customers can get access to accelerated deployments and application lifecycle management
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="bg-dark text-white border-light">
                <Card.Img
                  variant="top"
                  src={require('../images/3..png')}
                  className="p-0 img"
                  alt="Demand Excellence"
                  style={{
                    width: '50px', /* Adjust the size as needed */
                    height: '50px', /* Adjust the size as needed */
                    objectFit: 'contain',
                    display: 'block', /* Ensures that image takes up space properly */
                    margin: '10px auto 0',

                  }}
                />
                <Card.Body>
                  <Card.Title>Sales & Integration</Card.Title>
                  <Card.Text>
                    Onboard yourself to make a remarkable transformation and engage with the operators and partners
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <HorizontalLine />

        <Container className="mt-5" style={{ width: '50%' }}>
          <h2 className="text-white text-center mb-4">Learn more ways to Partner with us</h2>
          <br />
          <Row>
            <Col md={6} className="mb-4">
              <Card className="text-white  border-light text-center card" style={{ backgroundColor: '#121212' }}>

                <Card.Body>
                  <Card.Text className="card-text">
                    Powering innovation with a centralized – decentralized model of public edge cloud with 500+ regional infrastructure access.
                  </Card.Text>
                  <Button onClick={() => window.location.href = "/infra-partners"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
                    Infrastructure Partners
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="text-white  border-light text-center card" style={{ backgroundColor: '#121212' }}>
                <Card.Body>
                  <Card.Text className="card-text">
                    Powering innovation with a centralized – decentralized model of public edge cloud with 500+ regional infrastructure access.
                  </Card.Text>
                  <Button onClick={() => window.location.href = "/application-partner"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
                    Application Partners
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5" style={{ width: '80%' }}>
          <Row>
            <Col md={4} className="mb-4">
              <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Card.Body>
                  <Card.Title className="text-white text-center">Adaptable</Card.Title>
                  <Card.Text className="text-white text-center">
                    With the Public Edge, our customers get access to the infrastructure distributions world-wide, in every corner and every region. With these, we reach Billions of users and Trillions of devices
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Card.Body>
                  <Card.Title className="text-white text-center">Unified</Card.Title>
                  <Card.Text className="text-white text-center">
                    Nife’s Global Public Edge is a network of edge computing resources that host multiple environments, geographically distributed & locally deployable.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <Card.Body>
                  <Card.Title className="text-white text-center">Widely Spread</Card.Title>
                  <Card.Text className="text-white text-center">
                    In a single aggregated access, developers can deploy workloads to resources from public clouds, mobile networks and other infrastructures.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <br />

        <HorizontalLine />

        <br />
        <Container className="mt-5 text-center" style={{ width: '60%' }}>
          <Row>
            <Col>
              <h2 className="text-white mb-4" style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
              }}>
                Contact our Partnership Alliance team
              </h2>
              <Button
                href="https://landing.nife.io/partnership-page"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
                style={{
                  backgroundColor: '#1b1f33',
                  borderColor: '#1b1f33',
                  color: '#ffffff',
                  padding: '10px 20px',
                  fontSize: '1.2rem',
                  borderRadius: '5px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'background-color 0.3s, transform 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#333';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#1b1f33';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Schedule a Call
              </Button>
            </Col>
          </Row>
        </Container>
        <br />
        <br />


      </div>


    </>
  );
}

export default Partner;
