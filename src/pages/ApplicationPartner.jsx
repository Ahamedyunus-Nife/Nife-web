import React from 'react';
import { lazy } from 'react'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AnimationTitles from "../components/functions/AnimationTitles";
import { Button } from "@mui/material";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from 'react-slick';
const HorizontalLine = lazy(() => import('../components/functions/HorizontalLine'));


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900, // Mobile breakpoint
      settings: {
        slidesToShow: 1, // Show one slide at a time on mobile
        slidesToScroll: 1,
      },
    },
  ],
};


function ApplicationPartner() {
  return (
    <>
      <Helmet>
        <title>Application Partners Nife Labs Edge Cloud Computing</title>
        <meta name="description" content="Learn about our Global Partners who help our customers with collaborative Infrastructure for our Edge Cloud Computing Platform." />
        <link rel="canonical" href="https://nife.io/application-partner" />
        <meta name="keywords" content="Edge Cloud Computing, Nife, Application Security, Privacy, OPEX Reduction, Auto Scaling, Localized Compute, 5G MEC, ORAN, VRAN, Cloud Application Development, Nife Edge Cloud, Private MEC, VNF Orchestration, AI Acceleration, Networking Slicing, Cloud Services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Application Partners Nife Labs Edge Cloud Computing",
              "description": "Learn about our Global Partners who help our customers with collaborative Infrastructure for our Edge Cloud Computing Platform.",
              "url": "https://nife.io/application-partner",
              "mainEntity": {
                "@type": "Organization",
                "name": "Nife Labs",
                "url": "https://nife.io",
                "logo": "https://nife.io/images/logo.png"
              },
              "about": {
                "@type": "WebPage",
                "name": "Key benefits for your Applications",
                "description": "Discover the key benefits of our Edge Cloud Computing platform and how it can enhance your application performance and security."
              },
              "additionalType": "https://schema.org/SoftwareApplication",
              "offers": {
                "@type": "Offer",
                "name": "Edge Cloud Computing Services",
                "description": "Advanced services for deploying applications on edge cloud infrastructure with benefits like security, privacy, and reduced OPEX costs."
              }
            }
          `}
        </script>

      </Helmet>

      <div className="about mb-5">
        <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimationTitles duration={1} title="Help your customers Launch your Applications 97% Faster" className="title" />
            <p className="gray-50 fs-6 mb-2">
              Your applications will enjoy the benefits of Security and Privacy with reduced OPEX costs.
            </p>
            <Button onClick={() => window.location.href = "https://landing.nife.io/application-partners"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
              Join as an Application Partner
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

      <div>
        <Container className="my-5 text-center">
          <h2 className="text-white text-center mb-4">Key benefits for your Applications</h2>
          <br />
          <Row className="justify-content-center">
            <Col md={6} lg={3} className="mb-4">
              <Card className="bg-dark text-white border-light">

                <Card.Body>
                  <Card.Title>Application needs On-Demand
                  </Card.Title>
                  <Card.Text>
                    Application needs On-Demand Flexibility and Reliability to deploy applications on need, on-demand based on the usage.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="bg-dark text-white border-light">
                
                <Card.Body>
                  <Card.Title>
                  Localized Compute</Card.Title>
                  <Card.Text>
                  Offload Device compute to a local edge device bringing real-time computation closer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="bg-dark text-white border-light">
                <Card.Body>
                  <Card.Title>Auto Scaling Seamlessly</Card.Title>
                  <Card.Text>
                  With the closest endpoint at your fingertips, you can access any region or location.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <h2 className="text-white text-center mb-4">Wish to learn more about the benefits of cloud computing & cloud application development services?</h2>
          
          <Button onClick={() => window.location.href = "#"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
          Tell me more
            </Button>
            <br />
        </Container>

        <HorizontalLine />

        <Container className="mt-5" style={{ width: '50%' }}>
          <h2 className="text-white text-center mb-4">Building Blocks of Edge Cloud Computing</h2>
          <p className="text-white text-center mb-4">Building Nodes and Meshes for the Enahnced 4G, 5G and Edge Cloud.</p>
          <br />
          
        </Container>

        <Container className="mt-5" style={{ width: '80%' }}>
      <Row>
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body className="text-center">
              <img
                src={require('../images/nife-os.png')}
                alt="Adaptable"
                style={{ width: '50px', height: '50px', marginBottom: '10px' }} // Adjust the size as needed
              />
              <Card.Title className="text-white">Nife Device Offload</Card.Title>
              <Card.Text className="text-white">
              With the power of AI acceleration, Nife offers enhanced inference at the edge.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body className="text-center">
              <img
                src={require('../images/nife-node.png')}
                alt="Unified"
                style={{ width: '50px', height: '50px', marginBottom: '10px' }} // Adjust the size as needed
              />
              <Card.Title className="text-white">Nife ORAN Solution</Card.Title>
              <Card.Text className="text-white">
              In line with Enhanced 4G, Nife Orachestrates, ORAN, VRAN workloads in the Far Edge and Edge Locations within the Telco Network.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body className="text-center">
              <img
                src={require('../images/nife-mesh.png')}
                alt="Nife Edge Cloud"
                style={{ width: '50px', height: '50px', marginBottom: '10px' }} // Adjust the size as needed
              />
              <Card.Title className="text-white">Nife Edge Cloud</Card.Title>
              <Card.Text className="text-white">
              Bringing PaaS closer to the enterprises and their end-users, Nife uses partners Infrastructure to build Nife Edge Cloud.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body className="text-center">
              <img
                src={require('../images/nife-k8s.png')}
                alt="Nife Private MEC"
                style={{ width: '50px', height: '50px', marginBottom: '10px' }} // Adjust the size as needed
              />
              <Card.Title className="text-white">Nife Private MEC</Card.Title>
              <Card.Text className="text-white">
              Bring 5G MEC access to a private location and network with a host of applications providing low latency and higher bandwidth to end-users.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body className="text-center">
              <img
                src={require('../images/nife-5g.png')}
                alt="Unified"
                style={{ width: '50px', height: '50px', marginBottom: '10px' }} // Adjust the size as needed
              />
              <Card.Title className="text-white">Nife 5G MANO</Card.Title>
              <Card.Text className="text-white">
              Use networking slicing seamlessly with VNF orchestration and management.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <br/>
    <br/>
        

        <HorizontalLine />

        <Container className="mt-5" style={{ width: '50%' }}>
          <h2 className="text-white text-center mb-4">Explore the latest trends in Cloud Edge Computing </h2>
          <p className="text-white text-center mb-4">The new age computing keeps re-innovating, read our blog to follow the new trends.</p>
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
                alt="Adaptable"
                style={{ width: '300px', height: '200px', marginBottom: '10px' }} // Adjust the size as needed
              />
              <Card.Title className="text-white">Digital Transformation</Card.Title>
            </Card.Body>
          </Card>
          </a>
        </Col>
        <Col md={4} className="mb-4">
        <a href="https://docs.nife.io/blog/hybrid-cloud-deployment/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body className="text-center">
              <img
                src={require('../images/game-server.png')}
                alt="Hybrid Cloud"
                style={{ width: '300px', height: '200px', marginBottom: '10px' }} // Adjust the size as needed
              />
              <Card.Title className="text-white">Hybrid Cloud</Card.Title>
             </Card.Body>
          </Card>
          </a>
        </Col>
        <Col md={4} className="mb-4">
        <a href="https://docs.nife.io/blog/enhancing-user-experience-and-facilitating-innovation-with-edge-compute/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Card style={{ backgroundColor: '#121212', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Card.Body className="text-center">
              <img
                src={require('../images/CDN.png')}
                alt="Edge Computing"
                style={{ width: '300px', height: '200px', marginBottom: '10px' }} // Adjust the size as needed
              />
              <Card.Title className="text-white">Edge Computing</Card.Title>
            </Card.Body>
          </Card>
          </a>
        </Col>
      </Row>
      </Container>

        <br />
        
        <br />
      

        <HorizontalLine />

        <br />

        <Container className="mt-5 text-center" style={{ width: '50%' }}>
      <h2 className="text-white mb-4" style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
      }}>
        Our Partners
      </h2>
      <Slider {...settings}>
        <div>
          <img
            src={require('../images/Copy-of-Copy-of-PicoNets-Logo-Transparent-Right-768x433 (1).png')}
            alt="Company 1"
            style={{
              width: '320px',
              height: 'auto',
              outline: 'none', // Removes white border when clicked
            }}
          />
        </div>
        <div>
          <img
            src={require('../images/AI-Edge-Labs-logo__1_-removebg-preview.png')}
            alt="Company 2"
            style={{
              width: '320px',
              height: '200px',
              outline: 'none', // Removes white border when clicked
            }}
          />
        </div>
        {/* Add more logos as needed */}
      </Slider>
    </Container>      </div>


    </>
  );
}

export default ApplicationPartner;
