import React from 'react';
import { lazy } from 'react'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AnimationTitles from "../components/functions/AnimationTitles";
import { Button } from "@mui/material";
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import Slider from 'react-slick';
const HorizontalLine = lazy(() => import('../components/functions/HorizontalLine'));


const logos = [
  require('../images/6-2.png'),
  require('../images/7-2.png'),
  require('../images/Yotta-Logo-on-white-Bg.png'),
  require('../images/Google-Cloud-Platform-GCP-Logo.png'),
  require('../images/AWS-logo.png'),
  require('../images/singtel-logo.jpg'),
  require('../images/4_1.png'),
  require('../images/8.png')
];

const schemaData = {
  "@context": "https://schema.org/",
  "@type": "WebPage",
  "name": "Multi Access Edge Computing | Infra Partners | Nife",
  "description": "Join the collaboration of a new generation Telecom + Public Cloud integration + Multi Access Edge Computing + Colocation",
  "url": "https://nife.io/infra-partners",
  "mainEntity": {
    "@type": "Organization",
    "name": "Nife",
    "logo": "https://nife.io/images/logo.png",
    "url": "https://nife.io",
    "sameAs": [
      "https://www.facebook.com/nifeio/",
      "https://x.com/nifeio",
      "https://www.linkedin.com/company/nifeio/",
      "https://www.instagram.com/nife.io/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Global"
    }
  },
  "hasPart": [
    {
      "@type": "WebPageElement",
      "name": "Our Locations",
      "description": "Details about our public cloud locations, colocation regions, and latency reduction with 5G edge locations.",
      "mainEntity": {
        "@type": "StatisticalPopulation",
        "populationSize": 220,
        "description": "Public Cloud Locations"
      },
      "additionalType": "https://schema.org/StatisticalPopulation"
    },
    {
      "@type": "WebPageElement",
      "name": "Our Ecosystem Partners",
      "description": "List of ecosystem partners including ISPs, Mobile Networks, Private Clouds, Public Clouds, CDNs, and Enterprises."
    },
    {
      "@type": "WebPageElement",
      "name": "Nife's Edge Ecosystem - Multi Access Edge Computing",
      "description": "Information about the Nife Edge Ecosystem and its multi-access edge computing capabilities."
    },
    {
      "@type": "WebPageElement",
      "name": "Blog",
      "description": "Links to recent blog posts about edge cloud computing, gaming cloud servers, and CDN benefits.",
      "hasPart": [
        {
          "@type": "Article",
          "headline": "Digital Transformation",
          "url": "https://docs.nife.io/blog/transformation-of-edge-cloud-computing-companies/",
          "image": "https://nife.io/static/media/network-accelaration.4339c839fc8d08e9e71c.png",
          "description": "Exploring digital transformation in edge cloud computing."
        },
        {
          "@type": "Article",
          "headline": "Game Server",
          "url": "https://docs.nife.io/blog/quick-guide-why-are-cloud-servers-better-for-gaming/",
          "image": "https://nife.io/static/media/game-server.22d394ffa2088e80076a.png",
          "description": "Why cloud servers are better for gaming."
        },
        {
          "@type": "Article",
          "headline": "CDN",
          "url": "https://docs.nife.io/blog/content-delivery-networking-best-cloud-computing-companies/#benefits-of-content-delivery-networking-cdn",
          "image": "https://docs.nife.io/blog/content-delivery-networking-best-cloud-computing-companies/#benefits-of-content-delivery-networking-cdn",
          "description": "Benefits of content delivery networking in cloud computing."
        }
      ]
    }
  ]
};


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};


function InfraPartners() {
  return (
    <>
      <Helmet>
        <title>Multi Access Edge Computing | Infra Partners | Nife</title>
        <meta name="description" content="Join the collaboration of a new generation Telecom + Public Cloud integration + Multi Access Edge Computing + Colocation" />
        <link rel="canonical" href="https://nife.io/infra-partners" />
        <meta name="keywords" content="Edge Ecosystem, Nife, Multi-Access Edge Computing, 5G Network, Public Cloud, Colocation, ISPs, Mobile Networks, Private Clouds, CDNs, Enterprises, IoT, Cloud Computing, 5G Orchestration, Public Edge Cloud, Low Latency, Multi-Cloud Platform" />
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
            <AnimationTitles duration={1} title="You will be part of a massive pool of 500 Regional Access of Edge Grid" className="title" />
            <p className="gray-50 fs-6 mb-2">
              Join the collaboration of a new generation Telecom + Public Cloud integration + Edge + Colocation
            </p>
            <Button onClick={() => window.location.href = "https://landing.nife.io/partnership-page"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
              Join as an Partner
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
                src={require("..//images/cloud.gif")}
                className="p-0 img"
                alt="partner"
                height={400}
                width={500}
              />
            </div>

          </motion.div>
        </Container>


      </div>
      <br />
      <br />


      {/* Our Location */}

      <Container className="mt-5  text-center" style={{ width: '80%' }}>
        <h2 className="text-white text-center mb-4">Our Locations</h2>
        <br />
        <Row >

          <Col>
            <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              <CountUp start={0} end={220} duration={2.5} />{' '}
            </div>
            <p>PUBLIC CLOUD LOCATIONS</p>
          </Col>
          <Col >
            <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              <CountUp start={0} end={300} duration={2.5} />{' '}
            </div>
            <p>COLOCATION REGIONS</p>
          </Col>
          <Col >
            <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              <CountUp start={0} end={70} duration={2.5} />{' '}
              <span style={{ fontSize: '2rem' }}>%</span>
            </div>
            <p>LATENCY REDUCTION WITH 5G EDGE LOCATIONS</p>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <HorizontalLine />
      <br />


      {/* Our Ecosystem Partners */}
      <Container>
        <h2 className="text-white text-center mb-4">Our Ecosystem Partners</h2>
        <br />

        <div style={{ padding: '20px 0', backgroundColor: '#121212' }}>
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  style={{
                    width: '150px',
                    filter: 'grayscale(100%)',
                    margin: '0 auto',
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>

      <br />
      <br />


      <Container className="mt-5">
        <h2 className="text-center text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
          Nife's Edge Ecosystem - Multi Access Edge Computing
        </h2>
        <br />
        <p className="text-center text-white mb-4" style={{ fontSize: '1.2rem' }}>
          A centralised - decentralised model of public edge cloud, a fresh way of computing.
          <br />
          To have a robust, intelligent global infrastructure, it is vital to be updated with the ecosystem.
        </p>
        <br />
        <Row className="justify-content-center">
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/ISPs.png')} alt="ISPs" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">ISPs</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/Mobile-Networks.png')} alt="Mobile Network" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">Mobile Network</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/Private-Clouds.png')} alt="Private Clouds" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">Private Clouds</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/Public-Clouds.png')} alt="Public Clouds" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">Public Clouds</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/CDNs.png')} alt="CDNs" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">CDNs</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <Card style={{ backgroundColor: '#1b1f33', borderRadius: '10px', textAlign: 'center' }}>
              <Card.Body>
                <img src={require('../images/Enterprises.png')} alt="Enterprises" style={{ width: '50px', marginBottom: '10px' }} />
                <Card.Title className="text-white">Enterprises</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <p className="text-white text-center mt-4" style={{ fontSize: '1rem' }}>
          Be it software, hardware, or network, we partner with different patrons of the ecosystem to build an Edge Ecosystem.
        </p>

        <h3 className="text-white text-center mb-4" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          How do we make this happen?
        </h3>
        <div className="text-center">
          <Button onClick={() => window.location.href = "https://nife.io/"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
            Learn More About our Product
          </Button>
        </div>
      </Container>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      {/* 123 */}

      <h2 className="text-center text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        Discover a host of opportunities
      </h2>

      <p className="text-white text-center mt-4" style={{ fontSize: '1rem' }}>
        5G along with Public Cloud is transforming the new generation of Computing
      </p>



      <Container className="my-5 text-center">
        <Row className="justify-content-center">
          <Col md={6} lg={3} className="mb-4">
            <Card className="bg-dark text-white border-light">
              <Card.Body>
                <Card.Title>Enterprise
                </Card.Title>
                <Card.Text>
                  Custom Solution catering to New Network Infrastructure that can build 97% efficiency and reduce TCO by 20%.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="bg-dark text-white border-light">

              <Card.Body>
                <Card.Title>Industrial Internet of Things</Card.Title>
                <Card.Text>
                  Data-sensitive applications and IoT devices generating huge data volumes wherein a manufacturing unit, mining or warehouse can benefit with reliability and reduced data transfer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="bg-dark text-white border-light">
              <Card.Body>
                <Card.Title>
                  5G and Enhanced 4G</Card.Title>
                <Card.Text>
                  Unleash the power of orchestration within the new 5G network and with the exciting enhanced 4G to deliver faster internet.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button onClick={() => window.location.href = "https://nife.io/"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
          Learn about the benefits of Edge Cloud
        </Button>
      </Container>
      
     <br/>
     <br/>
     <br/>

      {/* blog */}

      <HorizontalLine />

      <Container className="mt-5" style={{ width: '50%' }}>
        <h2 className="text-white text-center mb-4">Learn more about Nife’s Multi-Cloud platform and its Use Cases</h2>
        <p className="text-white text-center mb-4">The new age computing keeps re-innovating, read our blog to follow the new trends</p>
        <br />
      </Container>
      <Container className="mt-5" style={{ width: '80%' }}>
        <Row>
       
          <Col md={4} className="mb-4">
          <a href="https://docs.nife.io/blog/transformation-of-edge-cloud-computing-companies/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Card.Body className="text-center">
                <img
                  src={require('../images/network-accelaration.png')}
                  alt="Digital Transformation"
                  style={{ width: '300px', height: '200px', marginBottom: '10px' }} // Adjust the size as needed
                />
                <Card.Title className="text-white">Digital Transformation</Card.Title>
              </Card.Body>
            </Card>
            </a>
          </Col>
          <Col md={4} className="mb-4">
          <a href="https://docs.nife.io/blog/quick-guide-why-are-cloud-servers-better-for-gaming/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Card.Body className="text-center">
                <img
                  src={require('../images/game-server.png')}
                  alt="Game Server"
                  style={{ width: '300px', height: '200px', marginBottom: '10px' }} // Adjust the size as needed
                />
                <Card.Title className="text-white">Game Server</Card.Title>
              </Card.Body>
            </Card>
            </a>
          </Col>
          
          <Col md={4} className="mb-4">
          <a href="https://docs.nife.io/blog/content-delivery-networking-best-cloud-computing-companies/#benefits-of-content-delivery-networking-cdn" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <Card.Body className="text-center">
                <img
                  src={require('../images/CDN.png')}
                  alt="CDN"
                  style={{ width: '300px', height: '200px', marginBottom: '10px' }} // Adjust the size as needed
                />
                <Card.Title className="text-white">CDN</Card.Title>
              </Card.Body>
            </Card>
            </a>
          </Col>
          
        </Row>
      </Container>




    </>
  );
}

export default InfraPartners;
