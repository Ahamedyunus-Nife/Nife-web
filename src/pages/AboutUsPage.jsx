import React from 'react'
import AboutUs from './AboutUs'
import Awards from './Awards'
import { Helmet } from 'react-helmet-async'
import Investors from './Investors';

export default function AboutUsPage() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nife Labs",
    "url": "https://nife.io/about-us",
    "logo": "https://nife.io/static/media/logo.2a112da78536c5540591.png",
    "description": "Nife is a global edge application platform company that rapidly empowers enterprises and developers to launch their applications within the Nife Edge Grid.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+65 8265 3455",
      "contactType": "Technical Support",
      "areaServed": "SG",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "68 Circular Rd",
      "addressLocality": "Singapore",
      "postalCode": "049422",
      "addressCountry": "SG"
    },
    "founder": {
      "@type": "Person",
      "name": "Nida Sahar",
      "description": "Nida Sahar is the founder of Nife Labs, a hybrid cloud platform company.",
      "sameAs": [
        "https://www.linkedin.com/in/nidasahar/"
      ]
    },
    "foundingDate": "2020-05-22",
    "sameAs": [
      "https://www.linkedin.com/company/nifeio/",
            "https://x.com/nifeio",
            "https://www.facebook.com/nifeio/",
            "https://www.instagram.com/nife.io/",
            "https://www.youtube.com/channel/UCBlr6Wk9hcq2WlOnWpYu9LA"
    ],
    "award": [
      "STL Top 100",
      "APAC Insider Winner - Best Hybrid Cloud",
      "5G Barcelona Smart Railway Hackathon Winner",
      "Intel Gold Tier Member"
    ],
    "hasPart": {
      "@type": "WebPage",
      "name": "Awards and Features",
      "url": "https://nife.io/about-us"
    }
  };

  return (
    <div>
      <Helmet>
        <title>Nife - About Us - Hybrid cloud platform </title>
        <link rel="canonical" href="https://nife.io/about-us" />
        <meta name="description"
          content="Nife is a global edge application platform company that rapidly empowers enterprises and developers to launch their applications. Connect to any Cloud, Bare-metal, or Kubernetes servers and infrastructure management. It’s all about seamless automation, allowing you to focus on what truly matters." />
          <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <AboutUs />
      {/* <OurStory/> */}
      <Awards />
      <Investors/>
    </div>
  )
}
