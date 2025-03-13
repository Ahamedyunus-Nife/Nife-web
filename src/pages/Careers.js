import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AnimationTitles from "../components/functions/AnimationTitles";
import OurValues from './OurValues';




function Careers() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://angel.co/javascripts/embed_jobs.js";
    script.setAttribute("data-startup", "nifelabs");
    script.id = "angellist_embed";
    script.async = true;

    const angelListContainer = document.getElementById('angelListContainer');
    if (angelListContainer) {
      angelListContainer.appendChild(script);
    }

    return () => {
      if (angelListContainer) {
        angelListContainer.innerHTML = "";
      }
    };
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nife Labs",
    "url": "https://nife.io",
    "description": "Nife is a global edge application platform company that empowers enterprises and developers to launch their applications on the Nife Edge Grid.",
    "logo": "https://nife.io/static/media/logo.2a112da78536c5540591.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@nife.io",
      "contactType": "Customer Support"
    },
    "jobPosting": [
      {
        "@type": "JobPosting",
        "title": "Sales Junior Associate",
        "description": "Join Nife as a Sales Junior Associate to drive our cloud solutions and interact with clients.",
        "datePosted": "2024-09-10",
        "employmentType": "Full-time",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Nife Labs",
          "sameAs": "https://nife.io",
          "logo": "https://nife.io/static/media/logo.2a112da78536c5540591.png"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Remote"
          }
        }
      },
      {
        "@type": "JobPosting",
        "title": "Golang Developer",
        "description": "We're seeking a skilled Golang Developer to work on our cutting-edge cloud platform.",
        "datePosted": "2024-09-10",
        "employmentType": "Full-time",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Nife Labs",
          "sameAs": "https://nife.io",
          "logo": "https://nife.io/static/media/logo.2a112da78536c5540591.png"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Remote"
          }
        }
      }
    ]
  };
  

  return (
    <>
      <Helmet>
        <title>Nife - Careers - Join Our Team and Shape the Future of Cloud</title>
        <meta name="description" content="Explore career opportunities at Nife and join our mission to build the future of hybrid cloud deployments. Be part of an innovative team working on cutting-edge cloud and edge computing technologies. Open positions for Sales Junior Associate, Golang Developer, and more. Discover how you can impact the next generation of technology." />
        <meta name="keywords" content="Nife careers, hybrid cloud deployment jobs, Golang Developer, Sales Junior Associate, tech startup jobs, cloud computing careers, edge computing, business development jobs, remote jobs, join Nife team, cloud infrastructure, open job positions" />
        <link rel="canonical" href="https://nife.io/careers" />
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
            <AnimationTitles duration={1} title="Amplify Your Professional Journey" className="title" />
            <p className="gray-50 fs-6 mb-2">
              Be an integral part of our exhilarated adventure to build the future of hybrid cloud deployments
            </p>
            <br />
            <p className="gray-50 fs-6 mb-2">
              our Passion and Expertise will be boasted working on challenges in Start-Up. Things you build here will have tremendous impact on the future of Technology as we know it.
            </p>
            <br />
            <p className="gray-50 fs-6 mb-5">
              Be a leader, director, challenger & explorer.
            </p>
            <br />
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex flex-column"
          >

            <div>
              <img
                src={require("..//images/Img-New-Img-removebg-preview.png")}
                className="p-0 img"
                alt="about us"
              />
            </div>

          </motion.div>
        </Container>
      </div>

      <div className="career-page">
        <Helmet>
          <title>Nife - Careers - Join Our Team</title>
          <meta name="description" content="Explore career opportunities at Nife, a global edge application platform company. Join our team and help shape the future of cloud and edge computing." />
          <link rel="canonical" href="https://nife.io/careers" />
        </Helmet>

        <Container className="d-flex justify-content-center flex-column text-center">
          <h1 className="title">Open Job Positions</h1>
          <br />

          <p className="gray-50 fs-6 mb-2">
            Be an integral part of our exhilarated adventure to build the future of hybrid cloud deployments
          </p>

          <br />
          <div id="angelListContainer" className="job-listings"></div>
          <br />
          <p className="gray-50 fs-6 mb-2">
            We are always looking for great talent, if you are interested in other roles than the open positions, hybrid cloud deployments or just want to catch up with us,
          </p>
          <p className="gray-50 fs-6 mb-5">
            Reach out to us at hello@nife.io
          </p>
        </Container>
      </div>
      <OurValues />
    </>
  );
}

export default Careers;
