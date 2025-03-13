import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FaAngular, FaJava, FaJsSquare, FaNodeJs, FaPython, FaReact, FaUnity } from 'react-icons/fa'; // Import relevant icons
import { FaGolang } from "react-icons/fa6";
import { DiRuby } from "react-icons/di";
import { RiRemixRunFill } from "react-icons/ri";
import { SiElixir } from "react-icons/si";
import { SiDeno, SiHugo } from "react-icons/si";
import { Link } from 'react-router-dom'; // Import Link for navigation
import Runtimes from "../components/home/Runtimes";
import { Helmet } from "react-helmet-async";

export const supportedRuntimes = [
  { name: "TypeScript", icon: <FaJsSquare />, link: "/deploy/typescript" },
  { name: "Python", icon: <FaPython />, link: "/deploy/python" },
  { name: "Remix", icon: <RiRemixRunFill />, link: "/deploy/remix" },
  { name: "Unity", icon: <FaUnity />, link: "/deploy/unity" },
  { name: "Node", icon: <FaNodeJs />, link: "/deploy/nodejs" },
  { name: "Ruby", icon: <DiRuby />, link: "/deploy/ruby" },
  { name: "Deno", icon: <SiDeno />, link: "/deploy/deno" },
  { name: "Static React", icon: <FaReact />, link: "/deploy/react" },
  { name: "Elixir", icon: <SiElixir />, link: "/deploy/elixir" },
  { name: "Java Server Page", icon: <FaJava />, link: "/deploy/java" },
  { name: "Static Angular", icon: <FaAngular />, link: "/deploy/angular" },
  { name: "Go", icon: <FaGolang />, link: "/deploy/go" },
  { name: "Hugo Static", icon: <SiHugo />, link: "/deploy/hugo" }
];
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Supported Development Runtimes | Nife.io",
  "description": "Build applications seamlessly with Nife.io, supporting popular runtimes such as TypeScript, Python, Remix, Unity, Node, Ruby, Deno, React, Elixir, Angular, Go, and Hugo.",
  "url": "https://nife.io/supported-runtimes",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "TypeScript" },
      { "@type": "ListItem", "position": 2, "name": "Python" },
      { "@type": "ListItem", "position": 3, "name": "Remix" },
      { "@type": "ListItem", "position": 4, "name": "Unity" },
      { "@type": "ListItem", "position": 5, "name": "Node.js" },
      { "@type": "ListItem", "position": 6, "name": "Ruby" },
      { "@type": "ListItem", "position": 7, "name": "Deno" },
      { "@type": "ListItem", "position": 8, "name": "React (Static)" },
      { "@type": "ListItem", "position": 9, "name": "Elixir" },
      { "@type": "ListItem", "position": 10, "name": "Java Server Page" },
      { "@type": "ListItem", "position": 11, "name": "Angular (Static)" },
      { "@type": "ListItem", "position": 12, "name": "Go" },
      { "@type": "ListItem", "position": 13, "name": "Hugo (Static)" }
    ]
  }
}

function RuntimeLandingPage() {
  return (
    <Box sx={{ bgcolor: 'background.paper', minHeight: '100vh' }}>
       <Helmet>
        {/* Metadata for SEO */}
        <title>Runtimes - Nife</title>
        <meta
          name="description"
          content="Build applications with Nife.io, supporting popular development runtimes like TypeScript, Python, Remix, Unity, Node.js, Ruby, Deno, React, Elixir, Angular, Go, and Hugo."
        />
        <meta
          name="keywords"
          content="Nife.io runtimes, supported runtimes, TypeScript, Python, Remix, Unity, Node.js, Ruby, Deno, React, Elixir, Angular, Go, Hugo, development tools"
        />
        <link rel="canonical" href="https://nife.io/supported-runtimes" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        </Helmet>

      {/* Hero Section */}
      <Box sx={{ padding: 4 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
 
          <Typography variant="h2" color="text.primary" gutterBottom>
            Our Platform Supports the Best Development Runtimes
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Build applications with your favorite tools. Seamlessly integrate with all major runtimes, databases, and frameworks.
          </Typography>
          <Runtimes/>
          <Button variant="contained" color="primary" size="large">Start Building Now</Button>
        </Container>
      </Box>

      {/* Runtimes Section */}
      <Container maxWidth="lg" sx={{ padding: 4 }}>
        <Typography variant="h4" color="text.primary" align="center" gutterBottom>
          Supported Runtimes
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {supportedRuntimes.map((runtime, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Link to={runtime.link} style={{ textDecoration: 'none' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
                      <Box sx={{ fontSize: 40, color: 'primary.main', marginRight: 2 }}>
                        {runtime.icon}
                      </Box>
                      <Typography variant="h6" color="text.primary" align="center" sx={{ fontWeight: 'bold' }}>
                        {runtime.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ marginTop: 1 }}>
                      Integrate with {runtime.name} easily and get the best performance out of your application.
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  );
}

export default RuntimeLandingPage;
