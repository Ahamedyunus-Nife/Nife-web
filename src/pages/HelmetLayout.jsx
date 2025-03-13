import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useParams } from "react-router-dom";

// Updated JSON data for all routes and structured data
const routeMetaData = [
  {
    route: "/",
    title: "Nife - Hybrid Cloud & Edge Application Platform",
    description:
      "Deploy applications seamlessly across cloud and edge with Nife's powerful platform.",
    ogImage: "https://nife.io/home-image.png",
    twitterImage: "https://nife.io/home-image.png",
    keywords: "Hybrid Cloud, Edge Application, Cloud Platform, Nife Labs",
    ogImageAlt: "Nife platform overview",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nife Labs",
      url: "https://nife.io",
      logo: "https://nife.io/images/logo.png",
      sameAs: [
        "https://www.linkedin.com/company/nifeio/",
        "https://x.com/nifeio",
        "https://www.facebook.com/nifeio",
        "https://www.instagram.com/nife.io/",
        "https://www.youtube.com/channel/UCBlr6Wk9hcq2WlOnWpYu9LA",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+65 8265 3455",
        contactType: "Customer Support",
        areaServed: "SG",
        availableLanguage: "English",
      },
      description:
        "Deploy applications seamlessly across cloud and edge with Nife's powerful platform.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "68 Circular Rd",
        addressLocality: "Singapore",
        postalCode: "049422",
        addressCountry: "SG",
      },
      mainEntityOfPage: "https://nife.io",
      keywords: "Hybrid Cloud, Edge Application, Cloud Platform, Nife Labs",
      ogImage: "https://nife.io/home-image.png",
      ogImageAlt: "Nife platform overview",
    },
  },
  {
    route: "/about",
    title: "About Us - Nife",
    description: "Learn more about Nife, our mission, and our journey.",
    ogImage: "https://nife.io/about-image.png",
    twitterImage: "https://nife.io/about-image.png",
    keywords: "About Nife, Edge Cloud Computing, Nife Labs, Cloud Solutions",
    ogImageAlt: "About Nife Labs",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nife Labs",
      url: "https://nife.io/about-us",
      logo: "https://nife.io/static/media/logo.2a112da78536c5540591.png",
      description:
        "Nife is a global edge application platform company that rapidly empowers enterprises and developers to launch their applications within the Nife Edge Grid.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+65 8265 3455",
        contactType: "Technical Support",
        areaServed: "SG",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "68 Circular Rd",
        addressLocality: "Singapore",
        postalCode: "049422",
        addressCountry: "SG",
      },
      founder: {
        "@type": "Person",
        name: "Nida Sahar",
        description:
          "Nida Sahar is the founder of Nife Labs, a hybrid cloud platform company.",
        sameAs: ["https://www.linkedin.com/in/nidasahar/"],
      },
      foundingDate: "2020-05-22",
      sameAs: [
        "https://www.linkedin.com/company/nifeio/",
        "https://x.com/nifeio",
        "https://www.facebook.com/nifeio/",
        "https://www.instagram.com/nife.io/",
        "https://www.youtube.com/channel/UCBlr6Wk9hcq2WlOnWpYu9LA",
      ],
      award: [
        "STL Top 100",
        "APAC Insider Winner - Best Hybrid Cloud",
        "5G Barcelona Smart Railway Hackathon Winner",
        "Intel Gold Tier Member",
      ],
      hasPart: {
        "@type": "WebPage",
        name: "Awards and Features",
        url: "https://nife.io/about-us",
      },
    },
  },
  {
    route: "/careers",
    title: "Careers - Nife",
    description:
      "Join the Nife team and help shape the future of cloud and edge computing.",
    ogImage: "https://nife.io/careers-image.png",
    twitterImage: "https://nife.io/careers-image.png",
    keywords:
      "Careers, Cloud Computing Jobs, Edge Computing Careers, Nife Labs, Nife careers, Devops, Internships",
    ogImageAlt: "Careers at Nife Labs",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Nife Labs",
      url: "https://nife.io",
      description:
        "Nife is a global edge application platform company that empowers enterprises and developers to launch their applications on the Nife Edge Grid.",
      logo: "https://nife.io/static/media/logo.2a112da78536c5540591.png",
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@nife.io",
        contactType: "Customer Support",
      },
      jobPosting: [
        {
          "@type": "JobPosting",
          title: "Sales Junior Associate",
          description:
            "Join Nife as a Sales Junior Associate to drive our cloud solutions and interact with clients.",
          datePosted: "2024-09-10",
          employmentType: "Full-time",
          hiringOrganization: {
            "@type": "Organization",
            name: "Nife Labs",
            sameAs: "https://nife.io",
            logo: "https://nife.io/static/media/logo.2a112da78536c5540591.png",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "Remote",
            },
          },
        },
        {
          "@type": "JobPosting",
          title: "Golang Developer",
          description:
            "We're seeking a skilled Golang Developer to work on our cutting-edge cloud platform.",
          datePosted: "2024-09-10",
          employmentType: "Full-time",
          hiringOrganization: {
            "@type": "Organization",
            name: "Nife Labs",
            sameAs: "https://nife.io",
            logo: "https://nife.io/static/media/logo.2a112da78536c5540591.png",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "Remote",
            },
          },
        },
      ],
    },
  },
  {
    route: "/blog",
    title: "Blog - Nife",
    description: "Read the latest insights, guides, and updates from Nife.",
    ogImage: "https://nife.io/blog-image.png",
    twitterImage: "https://nife.io/blog-image.png",
    keywords: "Nife Blog, Cloud Computing Insights, Edge Computing News",
    ogImageAlt: "Latest updates from Nife",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Nife Blog",
      url: "https://nife.io/blog",
      publisher: {
        "@type": "Organization",
        name: "Nife Labs",
        logo: "https://nife.io/images/logo.png",
      },
      mainEntityOfPage: "https://nife.io/blog",
      description: "Read the latest insights, guides, and updates from Nife.",
    },
  },
  {
    route: "/faq",
    title: "FAQ - Nife",
    description: "Find answers to frequently asked questions about Nife.",
    ogImage: "https://nife.io/faq-image.png",
    twitterImage: "https://nife.io/faq-image.png",
    keywords: "Nife FAQ, Cloud Computing Questions, Edge Computing FAQs",
    ogImageAlt: "Frequently asked questions about Nife",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Nife?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nife is a hybrid cloud and edge application platform that enables businesses to deploy applications seamlessly across cloud and edge networks.",
          },
        },
        {
          "@type": "Question",
          name: "How does Nife's platform work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nife's platform provides an integrated solution for deploying applications and managing resources across hybrid cloud environments, ensuring fast and secure operations at the edge.",
          },
        },
      ],
    },
  },

  {
    route: "/partner",
    title: "Partners - Nife",
    description:
      "Discover partnership opportunities with Nife and collaborate in the cloud and edge computing space.",
    ogImage: "https://nife.io/partner-image.png",
    twitterImage: "https://nife.io/partner-image.png",
    keywords:
      "Partners, Cloud Partnerships, Edge Computing Partners, Nife Partners",
    ogImageAlt: "Nife Partners",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Partner with Nife",
      description:
        "Expand your revenue strategies by partnering with Nife. Integrate with our revolutionary public edge cloud ecosystem for hybrid cloud deployments and 5G network integration. Explore reseller, referral, and sales integration programs.",
      url: "https://nife.io/partner",
      mainEntity: {
        "@type": "Organization",
        name: "Nife",
        url: "https://nife.io",
        logo: "https://nife.io/path/to/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Partnerships",
          email: "partnerships@nife.io",
          telephone: "+1-800-123-4567",
          url: "https://nife.io/partner",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Remote",
          addressCountry: "US",
        },
      },
      offers: {
        "@type": "Offer",
        name: "Partner Program",
        url: "https://nife.io/partner",
        description:
          "Join Nife's Partner Program to unlock new revenue opportunities through our public edge cloud ecosystem.",
        priceCurrency: "USD",
        price: "0",
        itemOffered: {
          "@type": "Service",
          name: "Partner Program",
          description:
            "Integrate with our public edge cloud ecosystem to offer hybrid cloud solutions and 5G network integration.",
        },
      },
      article: [
        {
          "@type": "Article",
          headline: "Customer-First Principle",
          description:
            "Give your customers and partners a greater growth and scale. Hybrid Cloud Deployments to 5G Network across Regions.",
          image: "https://nife.io/path/to/customer-first-principle-image.png",
        },
        {
          "@type": "Article",
          headline: "Referral",
          description:
            "Your customers can get access to accelerated deployments and application lifecycle management.",
          image: "https://nife.io/path/to/referral-image.png",
        },
        {
          "@type": "Article",
          headline: "Sales & Integration",
          description:
            "Onboard yourself to make a remarkable transformation and engage with the operators and partners.",
          image: "https://nife.io/path/to/sales-integration-image.png",
        },
      ],
      relatedLink: [
        {
          "@type": "WebPage",
          name: "Infrastructure Partners",
          url: "https://nife.io/infra-partners",
        },
        {
          "@type": "WebPage",
          name: "Application Partners",
          url: "https://nife.io/application-partner",
        },
      ],
      potentialAction: {
        "@type": "Action",
        name: "Request Partnership",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://nife.io/partner",
        },
        actionOption: "https://schema.org/ActionOption",
      },
    },
  },
  {
    route: "/infra-partners",
    title: "Infrastructure Partners - Nife",
    description:
      "Explore Nife's global infrastructure partners and how they enhance cloud and edge computing.",
    ogImage: "https://nife.io/infra-partners-image.png",
    twitterImage: "https://nife.io/infra-partners-image.png",
    keywords:
      "Infrastructure Partners, Nife Partners, Cloud Infrastructure, Edge Computing",
    ogImageAlt: "Nife Infrastructure Partners",
    structuredData: {
      "@context": "https://schema.org/",
      "@type": "WebPage",
      name: "Multi Access Edge Computing | Infra Partners | Nife",
      description:
        "Join the collaboration of a new generation Telecom + Public Cloud integration + Multi Access Edge Computing + Colocation",
      url: "https://nife.io/infra-partners",
      mainEntity: {
        "@type": "Organization",
        name: "Nife",
        logo: "https://nife.io/images/logo.png",
        url: "https://nife.io",
        sameAs: [
          "https://www.facebook.com/nifeio/",
          "https://x.com/nifeio",
          "https://www.linkedin.com/company/nifeio/",
          "https://www.instagram.com/nife.io/",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Global",
        },
      },
      hasPart: [
        {
          "@type": "WebPageElement",
          name: "Our Locations",
          description:
            "Details about our public cloud locations, colocation regions, and latency reduction with 5G edge locations.",
          mainEntity: {
            "@type": "StatisticalPopulation",
            populationSize: 220,
            description: "Public Cloud Locations",
          },
          additionalType: "https://schema.org/StatisticalPopulation",
        },
        {
          "@type": "WebPageElement",
          name: "Our Ecosystem Partners",
          description:
            "List of ecosystem partners including ISPs, Mobile Networks, Private Clouds, Public Clouds, CDNs, and Enterprises.",
        },
        {
          "@type": "WebPageElement",
          name: "Nife's Edge Ecosystem - Multi Access Edge Computing",
          description:
            "Information about the Nife Edge Ecosystem and its multi-access edge computing capabilities.",
        },
        {
          "@type": "WebPageElement",
          name: "Blog",
          description:
            "Links to recent blog posts about edge cloud computing, gaming cloud servers, and CDN benefits.",
          hasPart: [
            {
              "@type": "Article",
              headline: "Digital Transformation",
              url: "https://docs.nife.io/blog/transformation-of-edge-cloud-computing-companies/",
              image:
                "https://nife.io/static/media/network-accelaration.4339c839fc8d08e9e71c.png",
              description:
                "Exploring digital transformation in edge cloud computing.",
            },
            {
              "@type": "Article",
              headline: "Game Server",
              url: "https://docs.nife.io/blog/quick-guide-why-are-cloud-servers-better-for-gaming/",
              image:
                "https://nife.io/static/media/game-server.22d394ffa2088e80076a.png",
              description: "Why cloud servers are better for gaming.",
            },
            {
              "@type": "Article",
              headline: "CDN",
              url: "https://docs.nife.io/blog/content-delivery-networking-best-cloud-computing-companies/#benefits-of-content-delivery-networking-cdn",
              image:
                "https://docs.nife.io/blog/content-delivery-networking-best-cloud-computing-companies/#benefits-of-content-delivery-networking-cdn",
              description:
                "Benefits of content delivery networking in cloud computing.",
            },
          ],
        },
      ],
    },
  },
  {
    route: "/application-partner",
    title: "Partners - Nife",
    description: "Discover partnership opportunities with Nife.",
    ogImage: "https://nife.io/partners-image.png",
    twitterImage: "https://nife.io/partners-image.png",
    keywords: "Partners, Cloud Partnerships, Edge Computing Partners",
    ogImageAlt: "Partners of Nife Labs",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Application Partners Nife Labs Edge Cloud Computing",
      description:
        "Learn about our Global Partners who help our customers with collaborative Infrastructure for our Edge Cloud Computing Platform.",
      url: "https://nife.io/application-partner",
      mainEntity: {
        "@type": "Organization",
        name: "Nife Labs",
        url: "https://nife.io",
        logo: "https://nife.io/images/logo.png",
      },
      about: {
        "@type": "WebPage",
        name: "Key benefits for your Applications",
        description:
          "Discover the key benefits of our Edge Cloud Computing platform and how it can enhance your application performance and security.",
      },
      additionalType: "https://schema.org/SoftwareApplication",
      offers: {
        "@type": "Offer",
        name: "Edge Cloud Computing Services",
        description:
          "Advanced services for deploying applications on edge cloud infrastructure with benefits like security, privacy, and reduced OPEX costs.",
      },
    },
  },
  {
    route: "/docs",
    title: "Documentation - Nife",
    description: "Access guides and documentation for using Nife's platform.",
    ogImage: "https://nife.io/docs-image.png",
    twitterImage: "https://nife.io/docs-image.png",
    keywords: "Documentation, Nife Docs, Cloud Platform Documentation",
    ogImageAlt: "Nife documentation",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Nife Documentation",
      description:
        "Comprehensive guides and documentation for using the Nife hybrid cloud platform.",
      url: "https://nife.io/docs",
      mainEntityOfPage: "https://nife.io/docs",
      image: "https://nife.io/docs-image.png",
      publisher: {
        "@type": "Organization",
        name: "Nife Labs",
        logo: "https://nife.io/images/logo.png",
      },
    },
  },
  {
    route: "/events",
    title: "Events - Nife",
    description: "Stay updated on upcoming Nife events and webinars.",
    ogImage: "https://nife.io/events-image.png",
    twitterImage: "https://nife.io/events-image.png",
    keywords: "Nife Events, Webinars, Cloud Events, Edge Computing Events",
    ogImageAlt: "Upcoming Nife events",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Nife's Past Events",
      itemListElement: [
        {
          "@type": "Event",
          name: "KubeCon + CloudNativeCon 2024",
          startDate: "2024-04-28",
          location: {
            "@type": "Place",
            name: "Los Angeles, CA",
            address: "Los Angeles, CA",
          },
          description:
            "The premier conference for Kubernetes and Cloud Native technologies.",
        },
        {
          "@type": "Event",
          name: "IMC Event 2024",
          startDate: "2024-05-15",
          location: {
            "@type": "Place",
            name: "Las Vegas, NV",
            address: "Las Vegas, NV",
          },
          description:
            "International Marketing Conference focusing on digital marketing trends and technologies.",
        },
        {
          "@type": "Event",
          name: "VMware Explore 2024",
          startDate: "2024-06-10",
          location: {
            "@type": "Place",
            name: "San Francisco, CA",
            address: "San Francisco, CA",
          },
          description:
            "VMware’s global event focusing on cloud computing, virtualization, and enterprise IT solutions.",
        },
        {
          "@type": "Event",
          name: "Metaverse Quest 2024",
          startDate: "2024-07-20",
          location: {
            "@type": "Place",
            name: "Online",
            address: "Online",
          },
          description:
            "Exploring the future of the Metaverse through workshops and expert-led sessions.",
        },
        {
          "@type": "Event",
          name: "TIE IIOT Summit 2021",
          startDate: "2021-11-03",
          location: {
            "@type": "Place",
            name: "Chicago, IL",
            address: "Chicago, IL",
          },
          description:
            "A summit focusing on the Industrial Internet of Things (IIOT) and digital transformation in industries.",
        },
      ],
    },
  },
  {
    route: "/terms",
    title: "Terms of Service - Nife",
    description: "Review Nife's terms of service and policies.",
    ogImage: "https://nife.io/terms-image.png",
    twitterImage: "https://nife.io/terms-image.png",
    keywords:
      "Nife Terms, Terms of Service, Cloud Terms, Edge Computing Policies",
    ogImageAlt: "Nife terms of service",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Nife Terms of Service",
      description: "Review Nife's terms of service and policies.",
      url: "https://launch.nife.io/policies/terms-and-conditions/",
      mainEntityOfPage: "https://launch.nife.io/policies/terms-and-conditions/",
      image: "https://nife.io/terms-image.png",
      publisher: {
        "@type": "Organization",
        name: "Nife Labs",
        logo: "https://nife.io/images/logo.png",
      },
    },
  },
  {
    route: "/privacy",
    title: "Privacy Policy - Nife",
    description: "Read Nife's privacy policy and data protection practices.",
    ogImage: "https://nife.io/privacy-image.png",
    twitterImage: "https://nife.io/privacy-image.png",
    keywords: "Privacy Policy, Data Protection, Nife Privacy, Cloud Privacy",
    ogImageAlt: "Privacy policy of Nife",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Nife Privacy Policy",
      description:
        "Learn about Nife's privacy policy and the data protection practices that safeguard user information.",
      url: "https://launch.nife.io/policies/privacy-policy/",
      mainEntityOfPage: "https://launch.nife.io/policies/privacy-policy/",
      image: "https://nife.io/privacy-image.png",
      publisher: {
        "@type": "Organization",
        name: "Nife Labs",
        logo: "https://nife.io/images/logo.png",
      },
    },
  },
  {
    route: "/oikos",
    title: "Oikos - Nife",
    description:
      "Discover Oikos, Nife's powerful cloud platform for application deployment.",
    ogImage: "https://nife.io/oikos-image.png",
    twitterImage: "https://nife.io/oikos-image.png",
    keywords: "Oikos, Cloud Platform, Nife Oikos, Hybrid Cloud",
    ogImageAlt: "Oikos by Nife",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Oikos by Nife",
      description:
        "Oikos by Nife is a developer-friendly serverless platform designed to simplify the management, deployment, and scaling of applications globally. It offers robust deployment options, CI/CD integration, and support for various runtimes and application types.",
      url: "https://nife.io/oikos",
      operatingSystem: "Cross-platform",
      applicationCategory: "CloudPlatform",
      brand: {
        "@type": "Organization",
        name: "Nife",
        url: "https://nife.io",
      },
      offers: {
        "@type": "Offer",
        url: "https://landing.nife.io/request-demo",
        name: "Request Demo",
        priceCurrency: "USD",
        price: "0.00",
        description:
          "Request a demo to experience how Oikos can accelerate your global reach with its serverless deployment capabilities.",
      },
      featureList: [
        "React, Python, Docker, Angular, Deno, Ember, Go, Hugo, Java, JavaScript, Node.js, Remix, Ruby, TypeScript, Unity, Vite, Vue.js",
        "APIs, Frontend Applications, Databases, Batch Jobs, Streaming Applications, Gaming Applications, AI/LLM",
        "500+ Locations, Bring Your Own Cloud (BYOC), Bring Your Own Host (BYOH), Stand Alone Cluster",
        "Automate build, test, and deployment processes with GitHub integration.",
      ],
    },
  },
  {
    route: "/oikos/features",
    title: "Oikos Features - Nife",
    description:
      "Explore the features of Oikos, Nife's cloud application platform.",
    ogImage: "https://nife.io/oikos-features-image.png",
    twitterImage: "https://nife.io/oikos-features-image.png",
    keywords: "Oikos Features, Cloud Computing, Nife Oikos",
    ogImageAlt: "Oikos Features",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Oikos Features - Nife",
      url: "https://nife.io/oikos/features",
      description:
        "Explore the features of Oikos, Nife's cloud application platform.",
    },
  },
  {
    route: "/platus",
    title: "Platus - Nife",
    description:
      "Discover Platus, Nife's advanced cloud platform for enterprise-grade deployments.",
    ogImage: "https://nife.io/platus-image.png",
    twitterImage: "https://nife.io/platus-image.png",
    keywords: "Platus, Nife Platus, Cloud Infrastructure, Hybrid Cloud",
    ogImageAlt: "Platus by Nife",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Platus - Nife",
      url: "https://nife.io/platus",
      description:
        "Discover Platus, Nife's advanced cloud platform for enterprise-grade deployments.",
    },
  },
  {
    route: "/plans/hobby",
    title: "Hobby Plan - Nife",
    description:
      "Explore Nife's Hobby plan for individuals and small projects.",
    ogImage: "https://nife.io/plans-image.png",
    twitterImage: "https://nife.io/plans-image.png",
    keywords: "Cloud Pricing, Hobby Plan, Nife Pricing",
    ogImageAlt: "Nife pricing plans",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Hobby Plan - Nife",
      url: "https://nife.io/plans/hobby",
      description:
        "Explore Nife's Hobby plan for individuals and small projects.",
    },
  },
  {
    route: "/plans/starter",
    title: "Starter Plan - Nife",
    description:
      "Affordable cloud and edge computing for startups and small teams.",
    ogImage: "https://nife.io/plans-image.png",
    twitterImage: "https://nife.io/plans-image.png",
    keywords: "Cloud Pricing, Starter Plan, Nife Pricing",
    ogImageAlt: "Nife pricing plans",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Starter Plan - Nife",
      url: "https://nife.io/plans/starter",
      description:
        "Affordable cloud and edge computing for startups and small teams.",
    },
  },
  {
    route: "/plans/premium",
    title: "Premium Plan - Nife",
    description:
      "Unlock advanced features with Nife's Premium plan for growing businesses.",
    ogImage: "https://nife.io/plans-image.png",
    twitterImage: "https://nife.io/plans-image.png",
    keywords: "Cloud Pricing, Premium Plan, Nife Pricing",
    ogImageAlt: "Nife pricing plans",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Premium Plan - Nife",
      url: "https://nife.io/plans/premium",
      description:
        "Unlock advanced features with Nife's Premium plan for growing businesses.",
    },
  },
  {
    route: "/plans/enterprise",
    title: "Enterprise Plan - Nife",
    description:
      "Enterprise-grade cloud and edge solutions with high scalability.",
    ogImage: "https://nife.io/plans-image.png",
    twitterImage: "https://nife.io/plans-image.png",
    keywords: "Cloud Pricing, Enterprise Plan, Nife Pricing",
    ogImageAlt: "Nife pricing plans",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Enterprise Plan - Nife",
      url: "https://nife.io/plans/enterprise",
      description:
        "Enterprise-grade cloud and edge solutions with high scalability.",
    },
  },
  {
    route: "/publications",
    title: "Publications - Nife",
    description: "Explore Nife's latest research, insights, and publications.",
    ogImage: "https://nife.io/publications-image.png",
    twitterImage: "https://nife.io/publications-image.png",
    keywords: "Nife Publications, Research, Cloud Insights",
    ogImageAlt: "Nife Publications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Publications - Nife",
      url: "https://nife.io/publications",
      description:
        "Explore Nife's latest research, insights, and publications.",
    },
  },
  {
    route: "/open-source",
    title: "Open Source - Nife",
    description:
      "Discover Nife's contributions to open-source projects and initiatives.",
    ogImage: "https://nife.io/open-source-image.png",
    twitterImage: "https://nife.io/open-source-image.png",
    keywords: "Open Source, Nife Open Source, Cloud Contributions",
    ogImageAlt: "Nife Open Source",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Open Source - Nife",
      url: "https://nife.io/open-source",
      description:
        "Discover Nife's contributions to open-source projects and initiatives.",
    },
  },
  {
    route: "/supported-runtimes",
    title: "Supported Runtimes - Nife",
    description:
      "View the programming languages and frameworks supported by Nife.",
    ogImage: "https://nife.io/supported-runtimes-image.png",
    twitterImage: "https://nife.io/supported-runtimes-image.png",
    keywords: "Supported Runtimes, Cloud Runtimes, Programming Languages",
    ogImageAlt: "Supported Runtimes",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Supported Runtimes - Nife",
      url: "https://nife.io/supported-runtimes",
      description:
        "View the programming languages and frameworks supported by Nife.",
    },
  },
  {
    route: "/deploy/typescript",
    title: "Deploy TypeScript Applications - Nife",
    description:
      "Easily deploy TypeScript applications on Nife's hybrid cloud platform.",
    ogImage: "https://nife.io/deploy-typescript-image.png",
    twitterImage: "https://nife.io/deploy-typescript-image.png",
    keywords:
      "Deploy TypeScript, TypeScript Apps, Cloud Deployment, Edge Deployment",
    ogImageAlt: "Deploy TypeScript Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy TypeScript Applications - Nife",
      url: "https://nife.io/deploy/typescript",
      description:
        "Easily deploy TypeScript applications on Nife's hybrid cloud platform.",
    },
  },
  {
    route: "/deploy/remix",
    title: "Deploy Remix Applications - Nife",
    description:
      "Deploy Remix applications seamlessly on Nife's cloud platform.",
    ogImage: "https://nife.io/deploy-remix-image.png",
    twitterImage: "https://nife.io/deploy-remix-image.png",
    keywords: "Deploy Remix, Remix Apps, Cloud Deployment, Hybrid Cloud",
    ogImageAlt: "Deploy Remix Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Remix Applications - Nife",
      url: "https://nife.io/deploy/remix",
      description:
        "Deploy Remix applications seamlessly on Nife's cloud platform.",
    },
  },
  {
    route: "/deploy/unity",
    title: "Deploy Unity Applications - Nife",
    description:
      "Deploy Unity applications effortlessly on Nife's cloud platform.",
    ogImage: "https://nife.io/deploy-unity-image.png",
    twitterImage: "https://nife.io/deploy-unity-image.png",
    keywords: "Deploy Unity, Unity Cloud, Game Deployment, Hybrid Cloud",
    ogImageAlt: "Deploy Unity Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Unity Applications - Nife",
      url: "https://nife.io/deploy/unity",
      description:
        "Deploy Unity applications effortlessly on Nife's cloud platform.",
    },
  },
  {
    route: "/deploy/nodejs",
    title: "Deploy Node.js Applications - Nife",
    description:
      "Deploy Node.js applications seamlessly on Nife's cloud platform.",
    ogImage: "https://nife.io/deploy-nodejs-image.png",
    twitterImage: "https://nife.io/deploy-nodejs-image.png",
    keywords: "Deploy Node.js, Node.js Apps, Cloud Deployment, Hybrid Cloud",
    ogImageAlt: "Deploy Node.js Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Node.js Applications - Nife",
      url: "https://nife.io/deploy/nodejs",
      description:
        "Deploy Node.js applications seamlessly on Nife's cloud platform.",
    },
  },
  {
    route: "/deploy/ruby",
    title: "Deploy Ruby Applications - Nife",
    description:
      "Easily deploy Ruby applications on Nife's hybrid cloud platform.",
    ogImage: "https://nife.io/deploy-ruby-image.png",
    twitterImage: "https://nife.io/deploy-ruby-image.png",
    keywords: "Deploy Ruby, Ruby Apps, Cloud Deployment, Edge Deployment",
    ogImageAlt: "Deploy Ruby Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Ruby Applications - Nife",
      url: "https://nife.io/deploy/ruby",
      description:
        "Easily deploy Ruby applications on Nife's hybrid cloud platform.",
    },
  },
  {
    route: "/deploy/deno",
    title: "Deploy Deno Applications - Nife",
    description:
      "Deploy Deno applications effortlessly on Nife's cloud platform.",
    ogImage: "https://nife.io/deploy-deno-image.png",
    twitterImage: "https://nife.io/deploy-deno-image.png",
    keywords: "Deploy Deno, Deno Cloud, Hybrid Cloud, Edge Deployment",
    ogImageAlt: "Deploy Deno Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Deno Applications - Nife",
      url: "https://nife.io/deploy/deno",
      description:
        "Deploy Deno applications effortlessly on Nife's cloud platform.",
    },
  },
  {
    route: "/deploy/react",
    title: "Deploy React Applications - Nife",
    description:
      "Easily deploy React applications on Nife's hybrid cloud platform.",
    ogImage: "https://nife.io/deploy-react-image.png",
    twitterImage: "https://nife.io/deploy-react-image.png",
    keywords: "Deploy React, React Apps, Cloud Deployment, Edge Deployment",
    ogImageAlt: "Deploy React Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy React Applications - Nife",
      url: "https://nife.io/deploy/react",
      description:
        "Easily deploy React applications on Nife's hybrid cloud platform.",
    },
  },
  {
    route: "/deploy/elixir",
    title: "Deploy Elixir Applications - Nife",
    description:
      "Deploy Elixir applications seamlessly on Nife's cloud platform.",
    ogImage: "https://nife.io/deploy-elixir-image.png",
    twitterImage: "https://nife.io/deploy-elixir-image.png",
    keywords: "Deploy Elixir, Elixir Apps, Cloud Deployment, Hybrid Cloud",
    ogImageAlt: "Deploy Elixir Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Elixir Applications - Nife",
      url: "https://nife.io/deploy/elixir",
      description:
        "Deploy Elixir applications seamlessly on Nife's cloud platform.",
    },
  },
  {
    route: "/deploy/java",
    title: "Deploy Java Applications - Nife",
    description:
      "Deploy Java applications efficiently on Nife's hybrid cloud platform.",
    ogImage: "https://nife.io/deploy-java-image.png",
    twitterImage: "https://nife.io/deploy-java-image.png",
    keywords: "Deploy Java, Java Apps, Cloud Deployment, Edge Deployment",
    ogImageAlt: "Deploy Java Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Java Applications - Nife",
      url: "https://nife.io/deploy/java",
      description:
        "Deploy Java applications efficiently on Nife's hybrid cloud platform.",
    },
  },
  {
    route: "/deploy/angular",
    title: "Deploy Angular Applications - Nife",
    description: "Easily deploy Angular applications on Nife's cloud platform.",
    ogImage: "https://nife.io/deploy-angular-image.png",
    twitterImage: "https://nife.io/deploy-angular-image.png",
    keywords: "Deploy Angular, Angular Apps, Cloud Deployment, Hybrid Cloud",
    ogImageAlt: "Deploy Angular Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Angular Applications - Nife",
      url: "https://nife.io/deploy/angular",
      description:
        "Easily deploy Angular applications on Nife's cloud platform.",
    },
  },
  {
    route: "/deploy/go",
    title: "Deploy Go Applications - Nife",
    description:
      "Seamlessly deploy Go applications on Nife's hybrid cloud platform.",
    ogImage: "https://nife.io/deploy-go-image.png",
    twitterImage: "https://nife.io/deploy-go-image.png",
    keywords: "Deploy Go, Go Applications, Edge Deployment, Hybrid Cloud",
    ogImageAlt: "Deploy Go Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Go Applications - Nife",
      url: "https://nife.io/deploy/go",
      description:
        "Seamlessly deploy Go applications on Nife's hybrid cloud platform.",
    },
  },
  {
    route: "/deploy/hugo",
    title: "Deploy Hugo Applications - Nife",
    description:
      "Easily deploy Hugo applications using Nife's cloud infrastructure.",
    ogImage: "https://nife.io/deploy-hugo-image.png",
    twitterImage: "https://nife.io/deploy-hugo-image.png",
    keywords: "Deploy Hugo, Hugo Apps, Cloud Deployment, Static Sites",
    ogImageAlt: "Deploy Hugo Applications",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Deploy Hugo Applications - Nife",
      url: "https://nife.io/deploy/hugo",
      description:
        "Easily deploy Hugo applications using Nife's cloud infrastructure.",
    },
  },
  {
    route: "/nyx-6g",
    title: "Nyx 6G - Nife",
    description:
      "Explore Nife's Nyx 6G technology for next-generation connectivity.",
    ogImage: "https://nife.io/nyx-6g-image.png",
    twitterImage: "https://nife.io/nyx-6g-image.png",
    keywords: "Nyx 6G, 6G Connectivity, Edge Computing, Nife Nyx",
    ogImageAlt: "Nyx 6G by Nife",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Nyx 6G - Nife",
      url: "https://nife.io/nyx-6g",
      description:
        "Explore Nife's Nyx 6G technology for next-generation connectivity.",
    },
  },
  {
    route: "/changelog",
    title: "Changelog - Nife",
    description:
      "Stay updated with the latest changes and improvements in Nife's platform.",
    ogImage: "https://nife.io/changelog-image.png",
    twitterImage: "https://nife.io/changelog-image.png",
    keywords: "Nife Changelog, Platform Updates, Cloud Features",
    ogImageAlt: "Nife Changelog",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Changelog - Nife",
      url: "https://nife.io/changelog",
      description:
        "Stay updated with the latest changes and improvements in Nife's platform.",
    },
  },
  {
    route: "/runtimes",
    title: "Runtimes - Nife",
    description:
      "Explore supported runtimes for deploying applications on Nife's platform.",
    ogImage: "https://nife.io/runtimes-image.png",
    twitterImage: "https://nife.io/runtimes-image.png",
    keywords: "Supported Runtimes, Cloud Runtimes, Programming Languages",
    ogImageAlt: "Nife Supported Runtimes",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Runtimes - Nife",
      url: "https://nife.io/runtimes",
      description:
        "Explore supported runtimes for deploying applications on Nife's platform.",
    },
  },
  {
    route: "/oikos/pricing",
    title: "Oikos Pricing - Nife",
    description: "Find the best pricing plan for Oikos, Nife's cloud solution.",
    ogImage: "https://nife.io/oikos-pricing-image.png",
    twitterImage: "https://nife.io/oikos-pricing-image.png",
    keywords: "Oikos Pricing, Cloud Pricing, Nife Oikos",
    ogImageAlt: "Oikos Pricing Plans",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Oikos Pricing - Nife",
      url: "https://nife.io/oikos/pricing",
      description:
        "Find the best pricing plan for Oikos, Nife's cloud solution.",
    },
  },
  {
    route: "/marketplace",
    title: "Marketplace - Nife",
    description:
      "Discover and explore cloud-based applications in the Nife Marketplace.",
    ogImage: "https://nife.io/marketplace-image.png",
    twitterImage: "https://nife.io/marketplace-image.png",
    keywords: "Nife Marketplace, Cloud Applications, Hybrid Cloud Solutions",
    ogImageAlt: "Nife Marketplace",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Marketplace - Nife",
      url: "https://nife.io/marketplace",
      description:
        "Discover and explore cloud-based applications in the Nife Marketplace.",
    },
  },
  {
    route: "/contact-us",
    title: "Contact Us - Nife",
    description: "Get in touch with the Nife team for inquiries and support.",
    ogImage: "https://nife.io/contact-us-image.png",
    twitterImage: "https://nife.io/contact-us-image.png",
    keywords: "Contact Nife, Support, Cloud Solutions, Hybrid Cloud",
    ogImageAlt: "Nife Contact Us Page",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Us - Nife",
      url: "https://nife.io/contact-us",
      description: "Get in touch with the Nife team for inquiries and support.",
    },
  },
  {
    route: "/solutions",
    title: "Solutions - Nife",
    description:
      "Explore cutting-edge cloud and edge computing solutions by Nife.",
    ogImage: "https://nife.io/solutions-image.png",
    twitterImage: "https://nife.io/solutions-image.png",
    keywords: "Cloud Solutions, Edge Computing, Hybrid Cloud Solutions",
    ogImageAlt: "Nife Solutions Overview",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Solutions - Nife",
      url: "https://nife.io/solutions",
      description:
        "Explore cutting-edge cloud and edge computing solutions by Nife.",
    },
  },
  {
    route: "/solutions/:id",
    title: "Solution - Nife | :id",
    description:
      "Discover how :id enhances cloud and edge computing with Nife's platform.",
    ogImage: "https://nife.io/solutions-image.png",
    twitterImage: "https://nife.io/solutions-image.png",
    keywords:
      ":id, Cloud Solutions, Edge Computing, Hybrid Cloud, Nife Solutions",
    ogImageAlt: "Nife Solution - :id",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Solution - Nife | :id",
      url: "https://nife.io/solutions/:id",
      description:
        "Discover how :id enhances cloud and edge computing with Nife's platform.",
    },
  },
  {
    route: "/features/:slug",
    title: "Feature - Nife | :slug",
    description:
      "Explore the capabilities of :slug and how it powers Nife’s cloud platform.",
    ogImage: "https://nife.io/features-image.png",
    twitterImage: "https://nife.io/features-image.png",
    keywords: ":slug, Cloud Features, Edge Computing, Nife Features",
    ogImageAlt: "Nife Feature - :slug",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Feature - Nife | :slug",
      url: "https://nife.io/features/:slug",
      description:
        "Explore the capabilities of :slug and how it powers Nife’s cloud platform.",
    },
  },
];

// Function to dynamically get metadata for a given route
const getMetaData = (route) => {
  const routeData = routeMetaData.find((data) => data.route === route);
  return (
    routeData || {
      title: "Nife - Hybrid cloud platform",
      description: "Nife is a global edge application platform company...",
      ogImage: "https://launch.nife.io/nifeLogo.png",
      twitterImage: "https://launch.nife.io/nifeLogo.png",
      keywords: "Hybrid Cloud, Edge Application, Nife Labs",
      ogImageAlt: "Nife platform logo",
      structuredData: null,
    }
  );
};

// Centralized MetaTags component with dynamic data handling
const MetaTags = () => {
  const location = useLocation(); // Get the current location/path
  const { id, slug } = useParams(); // Get dynamic parameters like `:id` or `:slug`

  let route = location.pathname;

  // Handle dynamic routes
  if (id) {
    route = `/solutions/${id}`;
  } else if (slug) {
    route = `/oikos/features/${slug}`;
  }

  const metaData = getMetaData(route); // Get the meta data for the current route

  return (
    <Helmet>
      <title>{metaData.title}</title>
      <link rel="canonical" href={`https://nife.io${route}`} />
      <meta name="description" content={metaData.description} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://nife.io${route}`} />
      <meta property="og:image" content={metaData.ogImage} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:site_name" content="Nife Labs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.twitterImage} />
      <meta name="twitter:site" content="@nifeio" />

      {/* WebSite Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Nife Labs",
          url: "https://nife.io",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://nife.io/search?q={search_term}",
            "query-input": "required name=search_term",
          },
        })}
      </script>

      {/* Structured Data for the route */}
      {metaData.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(metaData.structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaTags;
