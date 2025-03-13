import { Button } from "@mui/material";
import { motion } from "framer-motion";
import React, { lazy } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import AnimationTitles from "../components/functions/AnimationTitles";
import Runtimes from '../components/home/Runtimes';
import DictionaryComponent from '../components/oikos/DictionaryComponent';
import ApplicationTypes from "../pages/ApplicationTypes";
import CICDSection from "../pages/CICDSection";
import DatabaseDeployment from "../pages/DatabaseDeployment";
import LocationForOikos from "../pages/LocationForOikos";
import MarketplaceApplications from "../pages/MarketplaceApplications";
import Allfeatures from "../components/oikos/Allfeatures";

const VerticalLine = lazy(() => import('../components/functions/VerticalLines'));
const OikosSetup = lazy(() => import('./OikosSetup'));

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Oikos by Nife",
  "description": "Oikos by Nife is a developer-friendly serverless platform designed to simplify the management, deployment, and scaling of applications globally. It offers robust deployment options, CI/CD integration, and support for various runtimes and application types.",
  "url": "https://nife.io/oikos",
  "brand": {
    "@type": "Organization",
    "name": "Nife",
    "url": "https://nife.io"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://landing.nife.io/request-demo",
    "name": "Request Demo",
    "priceCurrency": "USD",
    "price": "0.00",
    "description": "Request a demo to experience how Oikos can accelerate your global reach with its serverless deployment capabilities."
  },
  "additionalType": "https://schema.org/SoftwareApplication",
  "applicationCategory": "Cloud Platform",
  "features": [
    {
      "@type": "PropertyValue",
      "name": "Supported Runtimes",
      "value": "React, Python, Docker, Angular, Deno, Ember, Go, Hugo, Java, JavaScript, Node.js, Remix, Ruby, TypeScript, Unity, Vite, Vue.js"
    },
    {
      "@type": "PropertyValue",
      "name": "Deployment Options",
      "value": "APIs, Frontend Applications, Databases, Batch Jobs, Streaming Applications, Gaming Applications, AI/LLM"
    },
    {
      "@type": "PropertyValue",
      "name": "Scalability",
      "value": "500+ Locations, Bring Your Own Cloud (BYOC), Bring Your Own Host (BYOH), Stand Alone Cluster"
    },
    {
      "@type": "PropertyValue",
      "name": "CI/CD Integration",
      "value": "Automate build, test, and deployment processes with GitHub integration."
    }
  ],
  "hasPart": [
    {
      "@type": "WebPageElement",
      "name": "Dictionary Component",
      "description": "Provides definitions and explanations related to Oikos and its features."
    },
    {
      "@type": "WebPageElement",
      "name": "Application Types",
      "description": "Details various application types supported by Oikos."
    },
    {
      "@type": "WebPageElement",
      "name": "Supported Runtimes",
      "description": "Lists the runtimes supported by Oikos for application deployment."
    },
    {
      "@type": "WebPageElement",
      "name": "CI/CD Section",
      "description": "Describes the CI/CD integration capabilities of Oikos."
    },
    {
      "@type": "WebPageElement",
      "name": "Database Deployment",
      "description": "Information about deploying and managing databases with Oikos."
    },
    {
      "@type": "WebPageElement",
      "name": "Location for Oikos",
      "description": "Details about the geographic locations where Oikos can deploy applications."
    },
    {
      "@type": "WebPageElement",
      "name": "Oikos Setup",
      "description": "Instructions for setting up and configuring Oikos."
    },
    {
      "@type": "WebPageElement",
      "name": "Marketplace Applications",
      "description": "Explores available applications in the Oikos marketplace."
    }
  ]
}


export default function OikosDetailedPage() {
  return (
    <div>
      <Helmet>
        <title>Nife | Developer-Friendly Serverless Platform</title>
        <meta name="description" content="Nife is a developer-friendly serverless platform designed to simplify the management, deployment, and scaling of applications globally." />
        <meta name="keywords" content="serverless platform, application deployment, cloud management, global scalability, developer tools, Oikos by Nife, CI/CD pipelines, runtime support" />
        <link rel="canonical" href="https://nife.io/oikos" />
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
            <AnimationTitles duration={1} title="Accelerate Your Global Reach with Oikos by Nife" className="title" />
            <p className="gray-50 fs-6 mb-2">
              Unleash the full potential of your applications with lightning-fast deployments across the globe. Oikos empowers you to innovate at speed, bringing your ideas to life faster than ever before.
            </p>


            <Button onClick={() => window.location.href = "https://landing.nife.io/request-demo"} sx={{ mt: 4, fontWeight: "bold" }} size="medium" className="text-align-center" variant="contained">
              Request Demo
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
                src={require("..//images/4421964.png")}
                className="p-0 img"
                alt="deployment"
                height={300}
                width={400}
              />
            </div>

          </motion.div>
        </Container>
      </div>
      <VerticalLine />
      <DictionaryComponent />
      <VerticalLine />
      <ApplicationTypes />

      <VerticalLine />
      <div>
        <h4 className="title mx-auto mt-4 gradient-text fw-bold text-center">
          Supported Runtime
        </h4>
        <Runtimes />

      </div>

      <VerticalLine />
      <CICDSection />
      <VerticalLine />
      <DatabaseDeployment />
      <VerticalLine />
      <LocationForOikos />
      <VerticalLine />
      <OikosSetup />
      <VerticalLine />

      <MarketplaceApplications />

      <Allfeatures />
      <div>

      </div>
    </div>
  )
}
