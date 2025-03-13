import React from 'react';
import { Container, Grid, Box, Typography, Link as MuiLink } from "@mui/material";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

// Importing JSON files for each section
import platformLinks from '../../src/features/oikos/features.json';
import caseStudyLinks from '../../src/features/oikos/casestudy.json';
// import servicesLinks from '../data/servicesLinks.json';
import solutionsLinks from '../../src/features/oikos/solutions.json';
// import resourcesLinks from '../data/resourcesLinks.json';
// import companyLinks from '../data/companyLinks.json';

const companyLinks = [
  {"name": "About us", "link": "/about-us"},
  {"name": "Partner", "link": "/partner"},
  {"name": "Careers", "link": "/careers"},
  {"name": "Contact us", "link": "/contact-us"}
]

const resourcesLinks = [
  {"name": "Open Source", "link": "/open-source"},
  {"name": "Check list", "link": "https://go.doclink.me/view/80B504A5-0570-496D-9FCA-23A727C113E2"},
  {"name": "Cheat sheet", "link": "https://go.doclink.me/view/686D4C3C-03AD-4679-A06D-39B193E0550A"},
  {"name": "PDF Merger", "link": "https://freetools.nife.io/pdf-merger/"},
  {"name": "QR Code Generator", "link": "https://freetools.nife.io/qr-code/"},
  {"name": "Text to Speech", "link": "https://freetools.nife.io/text-to-speech/"},
  {"name": "URL Shortener", "link": "https://freetools.nife.io/url-shortener/"},
  {"name": "JSON Formatter", "link": "https://freetools.nife.io/json-formatter/"},
  {"name": "XML Formatter", "link": "https://freetools.nife.io/xml-formatter/"}
]
// Section component that renders links dynamically
const LinkSection = ({ title, links }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: 'primary.main', mb: 2 }}>
        {title}
      </Typography>
      <Box>
        {links.filter((e)=>{
          return e.page_title.startsWith("Deploy")
        }).map((link, idx) => (
          <MuiLink
            key={idx}
            href={`/solutions/${link.page_title}`}
            variant="body2"
            sx={{
              display: "block",
              color: "gray",
              mb: 1,
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            {link.page_title}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};

const LinkRes = ({ title, links }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: 'primary.main', mb: 2 }}>
        {title}
      </Typography>
      <Box>
        {links.map((link, idx) => (
          <MuiLink
            key={idx}
            href={link.link}
            variant="body2"
            sx={{
              display: "block",
              color: "gray",
              mb: 1,
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            {link.name}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};

const LinkCase = ({ title, links }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: 'primary.main', mb: 2 }}>
        {title}
      </Typography>
      <Box>
        {links.slice(0,10).map((link, idx) => (
          <MuiLink
            key={idx}
            href={`/case-study/${link.slug}`}
            variant="body2"
            sx={{
              display: "block",
              color: "gray",
              mb: 1,
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            {link.client_overview.about}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};


const LinkFeature = ({ title, links }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: 'primary.main', mb: 2 }}>
        {title}
      </Typography>
      <Box>
        {links.features.slice(0,10).map((link, idx) => (
          <MuiLink
            key={idx}
            href={`/oikos/features/${link.slug}`}
            variant="body2"
            sx={{
              display: "block",
              color: "gray",
              mb: 1,
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            {link.pageTitle}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};
const LinkCom = ({ title, links }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: 'primary.main', mb: 2 }}>
        {title}
      </Typography>
      <Box>
        {companyLinks.map((link, idx) => (
          <MuiLink
            key={idx}
            href={`${link.link}`}
            variant="body2"
            sx={{
              display: "block",
              color: "gray",
              mb: 1,
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            {link.name}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};
const LinkSectionSol = ({ title, links }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: 'primary.main', mb: 2 }}>
        {title}
      </Typography>
      <Box>
        {links.filter((e)=>{
          return !e.page_title.startsWith("Deploy")
        }).map((link, idx) => (
          <MuiLink
            key={idx}
            href={`/solutions/${link.page_title}`}
            variant="body2"
            sx={{
              display: "block",
              color: "gray",
              mb: 1,
              "&:hover": {
                color: "primary.main",
                textDecoration: "underline",
              },
            }}
          >
            {link.page_title}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};
function Footer() {
  return (
    <footer style={{ backgroundColor: "#282828", color: "#fff", paddingTop: "40px", paddingBottom: "20px" }}>
      <Container>
        <Grid container spacing={4}>
          {/* First Column (Logo and Description) */}
          <Grid item xs={12} md={12}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box display="flex" flexDirection="column" alignItems="flex-start">
                <img
                  src={require("../images/logo/logo.png")}
                  alt="Nife logo"
                  style={{ height: "80px", objectFit: "contain" }}
                />
                <Typography variant="body2" sx={{ color: 'gray', mt: 2, textAlign: 'left' }}>
                Nife.io is a hybrid multi-cloud platform delivering cloud-native and edge computing solutions. With Zeke for data centers, Nyx 6G for telcos, and Sky Compute for cloud orchestration, we help businesses of all sizes optimize costs and efficiently deploy distributed applications.
                </Typography>
                <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "bold", color: 'primary.main', mt: 2 }}>
                  Address
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray', textAlign: 'left' }}>
                  Nife Labs Pte Ltd<br />#02-01, 68 Circular Rd, Singapore 049422
                </Typography>
                <Box display="flex" justifyContent="flex-start" mt={2}>
                  {/* Social Media Icons */}
                  <a href="https://www.linkedin.com/company/nifeio/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ color: "gray", marginRight: "10px", fontSize: "24px" }} />
                  </a>
                  <a href="https://x.com/nifeio" target="_blank" rel="noopener noreferrer">
                    <BsTwitterX style={{ color: "gray", marginRight: "10px", fontSize: "24px" }} />
                  </a>
                  <a href="https://www.facebook.com/nifeio/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook style={{ color: "gray", marginRight: "10px", fontSize: "24px" }} />
                  </a>
                  <a href="https://www.instagram.com/nife.io/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram style={{ color: "gray", marginRight: "10px", fontSize: "24px" }} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCBlr6Wk9hcq2WlOnWpYu9LA" target="_blank" rel="noopener noreferrer">
                    <FaYoutube style={{ color: "gray", marginRight: "10px", fontSize: "24px" }} />
                  </a>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Mapping through all sections */}
          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LinkFeature title="Platform" links={platformLinks} />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LinkSectionSol title="Solutions" links={solutionsLinks} />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LinkSection title="Services" links={solutionsLinks} />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LinkRes title="Resources" links={resourcesLinks} />
            </motion.div>
          </Grid>

          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LinkCom title="Company" links={companyLinks} />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={2}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LinkCase title="Case study" links={caseStudyLinks} />
            </motion.div>
          </Grid>
        </Grid>

    

        {/* Footer Bottom */}
        <Box mt={4} sx={{ borderTop: "1px solid #444", pt: 3, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "gray" }}>
            © 2025 Nife. All rights reserved
          </Typography>
          <Box mt={2}>
            <MuiLink href="https://launch.nife.io/policies/privacy-policy/" sx={{ color: "gray", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              Privacy policy | Terms and Conditions
            </MuiLink>
            <span> | v 0.6</span>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
