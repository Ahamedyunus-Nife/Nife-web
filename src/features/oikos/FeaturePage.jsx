import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Template1 from './Template1';
import featuresData from './features.json';
import { Helmet } from 'react-helmet-async'

const FeaturePage = ({slug}) => {
 
  const [feature, setFeature] = useState(null);

  useEffect(() => {
    // Update the selected feature based on the slug
    const selectedFeature = featuresData.features.find(f => f.slug === slug);
    setFeature(selectedFeature);

    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Adds a smooth scrolling animation
    });
  }, [slug]);

  if (!feature) return <p>Loading...</p>; // Loading state

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Discover Our Amazing Features | Nife.io",
    "description": "Explore the tools and functionalities that empower you to achieve more with smarter deployments, enhanced security, real-time monitoring, and performance optimization.",
    "url": "https://nife.io/oikos/features",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "SoftwareFeature",
          "name": "Deployment",
          "description": "Smarter deployments with features like re-deploy, revert, location-based deployment, remote build, and built-in Dockerization."
        },
        {
          "@type": "SoftwareFeature",
          "name": "Access Control & Security",
          "description": "Ensure secure access with members and RBAC, secrets management, DDoS protection, and private repository support."
        },
        {
          "@type": "SoftwareFeature",
          "name": "Monitoring & Insights",
          "description": "Gain real-time insights with alerts, application logs, performance metrics, and user analytics."
        },
        {
          "@type": "SoftwareFeature",
          "name": "Configuration & Management",
          "description": "Streamline configurations with global and environment variables, templates, and environment management."
        },
        {
          "@type": "SoftwareFeature",
          "name": "Performance Optimization",
          "description": "Optimize performance with scaling apps, geolocation routing, and traffic control."
        },
        {
          "@type": "SoftwareFeature",
          "name": "Application Resilience",
          "description": "Build resilient apps with Kubernetes replicas and backup regions."
        },
        {
          "@type": "SoftwareFeature",
          "name": "Marketplace & Integrations",
          "description": "Extend functionalities with app marketplace, webhooks, and BYOH/BYOC support."
        }
      ]
    }
  }

  return (<>
  <Helmet>
        {/* Metadata for SEO */}
       
        <meta
          name="description"
          content="Explore the powerful features of OIKOS, including smarter deployments, access control, real-time monitoring, configuration management, performance optimization, and application resilience."
        />
        <meta
          name="keywords"
          content="Nife.io features,oikos, smarter deployments, access control, real-time monitoring, configuration management, performance optimization, application resilience, app marketplace, integrations, BYOH, BYOC"
        />
        <link rel="canonical" href="https://nife.io/oikos/features" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

  <Template1 feature={feature} />;
  </>
    
  )

};

export default FeaturePage;
