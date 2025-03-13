import React from "react";
import { Container, Typography, Box, Button, Grid, Paper, List, ListItem, ListItemIcon } from "@mui/material";
import { GitHub, CheckCircle } from "@mui/icons-material";
import { Helmet } from 'react-helmet-async'


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Open Source Tools Showcase",
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "name": "Sync Kai",
        "description": "A powerful and user-friendly tool for syncing files automatically between local storage and AWS S3 cloud storage.",
        "applicationCategory": "Syncing Tool",
        "operatingSystem": "Cross-platform",
        "features": [
          "Best-in-class UI for effortless file syncing",
          "Sync files automatically from local storage to S3 and vice versa",
          "Real-time, two-way sync",
          "Supports AWS S3 and other cloud storage services",
          "Easy configuration and setup for syncing rules"
        ],
        "url": "https://yourtoolwebsite.com/sync-kai" // Example URL
      },
      {
        "@type": "SoftwareApplication",
        "name": "Nife Actions",
        "description": "An automation tool for CI/CD pipelines with seamless integration with GitHub.",
        "applicationCategory": "CI/CD Tool",
        "operatingSystem": "Cross-platform",
        "features": [
          "Customizable workflows",
          "Integration with GitHub repositories and GitHub Actions",
          "Supports Docker, Kubernetes, and cloud deployments",
          "Easy-to-read YAML configuration",
          "Parallel job execution and matrix builds",
          "Rollback support for failed deployments",
          "Advanced caching strategies",
          "Integration with Slack, Email, and more"
        ],
        "url": "https://yourtoolwebsite.com/nife-actions" // Example URL
      }
    ]
  }

function App() {
  return (
    <Container maxWidth="lg">
      <Helmet>
        {/* Metadata for SEO */}
        <meta
          name="description"
          content="Explore powerful open-source tools like Sync Kai and Nife Actions designed to streamline your development workflow with features like file syncing, CI/CD automation, and more."
        />
        <meta
          name="keywords"
          content="Open Source Tools, Sync Kai, Nife Actions, CI/CD, file syncing, AWS S3, GitHub Actions, Kubernetes, Docker, development tools, automation tools"
        />
        <link rel="canonical" href="https://nife.io/open-source/" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h3" color="primary" gutterBottom>
          Open Source Tools Showcase
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Discover powerful open-source tools designed to simplify your development workflow.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* Sync Kai Tool */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5" sx={{fontWeight:"bold"}} gutterBottom>
              Sync Kai
            </Typography>
            <Typography variant="body2" color="info" sx={{fontWeight:"bold",mb:2}}> Syncing Tool</Typography>
            <img src="https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/kai2.png" style={{width:"150px",height:"auto", background:"white",borderRadius:"12px",marginBottom:"10px"}} alt="Kia"/>
            <Typography variant="body1" color="textSecondary" paragraph>
              Sync Kai is a powerful and user-friendly tool that allows you to sync files automatically between your local storage and S3 (Amazon Web Services) cloud storage. It comes with an intuitive interface and seamless integration to ensure your files are always up-to-date, no matter where you are.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Features:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Best-in-class UI for effortless file syncing
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Sync files automatically from local storage to S3 and vice versa
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Real-time, two-way sync to ensure files are always up-to-date
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Supports AWS S3 and other cloud storage services
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Easy configuration and setup for syncing rules
              </ListItem>
            </List>
            <Button
              variant="contained"
              color="primary"
              href="https://github.com/nifetency/synckai-actions"
              target="_blank"
              startIcon={<GitHub />}
            >
              View on GitHub
            </Button>
          </Paper>
        </Grid>

        {/* Nife Actions Tool */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h5" sx={{fontWeight:"bold"}} gutterBottom>
              Nife Actions 
            </Typography>
            <Typography variant="body2" color="info" sx={{fontWeight:"bold",mb:2}}> CI/CD Tool</Typography>
            <img src="https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/nife-actions.png" style={{width:"150px",height:"auto", background:"white",borderRadius:"12px",marginBottom:"10px"}} alt="Kia"/>
            <Typography variant="body1" color="textSecondary" paragraph>
              Nife Actions is a powerful automation tool for continuous integration and deployment (CI/CD) pipelines. It allows you to easily set up and manage workflows to automate your software development process. With its flexibility and integration with GitHub, Nife Actions empowers teams to build, test, and deploy applications effortlessly.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Features:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Customizable workflows to automate your development lifecycle
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Seamless integration with GitHub repositories and GitHub Actions
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Supports Docker, Kubernetes, and cloud deployments
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Easy-to-read YAML configuration for defining complex workflows
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Built-in support for parallel job execution and matrix builds
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Automatic trigger on code push, pull request, or custom events
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Rollback support in case of failed deployments or tests
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Advanced caching strategies for faster builds
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                Integration with popular third-party services like Slack, Email, and more
              </ListItem>
            </List>
            <Button
              variant="contained"
              color="primary"
              href="https://github.com/nifetency/nife-actions/"
              target="_blank"
              startIcon={<GitHub />}
            >
              View on GitHub
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
