import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // To get the slug from the URL
import { Grid, Typography, Box, Chip, List, ListItem, ListItemText, Card, CardContent, Paper } from "@mui/material";
import caseStudyData from "./casestudy.json";
import { PiCheckFatFill } from "react-icons/pi";
import { MdDoNotDisturbOn } from "react-icons/md";
import oikosImg from '../../images/logo/OikosDark.svg';
import { FaBook } from "react-icons/fa";

// Main Template4 component
const Template4 = () => {
   const navigate = useNavigate();
  const { slug } = useParams(); // Get the slug from the URL
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    // Filter the caseStudyData by the slug from the URL
    const foundCaseStudy = caseStudyData.find(item => item.slug === slug);
    setCaseStudy(foundCaseStudy); // Set the filtered case study data
  }, [slug]);

  if (!caseStudy) return <Typography variant="h6" align="center" color="white">Loading...</Typography>;

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "20px", borderRadius: "10px", color: "#ddd" }}>

      {/* Case Study Title */}
      <Paper variant="outlined" sx={{ mb: 2, cursor:"pointer" }}  onClick={() => navigate(`/case-study/`)}>
        <Grid
          container
          direction="row"
          sx={{
            p: 2,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <FaBook style={{ fontSize: "2rem" }} />
          <Typography variant="h4" sx={{ ml: 2, mb: 0 }} align="left" gutterBottom>
            Case Study of {caseStudy.solution.provider}
          </Typography>
        </Grid>
      </Paper>

      {/* Logo and Company Name / About Section */}
      {caseStudy.client_overview && (
        <Grid container spacing={4}>
        
          <Grid item xs={12} md={12}>
          <Typography component={"h1"} color="info" sx={{ fontSize: "4rem" }}>
                {caseStudy.client_overview.about}
              </Typography>
              <Typography variant="span" sx={{ fontSize: "1rem" }} fontWeight="bold">
              {caseStudy.client_overview.company_name}
            
            </Typography>
            <Typography variant="body1" sx={{ opacity: "0.8", color: "#5e6379" }}>
              {caseStudy.client_overview.desc}
            </Typography>
          </Grid>
        </Grid>
      )}

      {/* Services Chips Section */}
      {caseStudy.client_overview?.services && (
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" color="info" gutterBottom>
            Services
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginBottom: 3 }}>
            {caseStudy.client_overview.services.map((service, index) => (
              <Chip
                key={index}
                label={service}
                variant="filled"
                sx={{ fontWeight: "bold", textTransform: "capitalize" }}
              />
            ))}
          </Box>
        </Box>
      )}

      {/* Service Details Section */}
      {caseStudy.client_overview?.services && (
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" color="info" gutterBottom>
            Service Details
          </Typography>
          <Grid container spacing={4}>
            {caseStudy.client_overview.services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ backgroundColor: "#333", borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" sx={{ textTransform: "capitalize" }}>
                      {service}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {
                        caseStudy.client_overview[
                          service.toLowerCase().replace(/\s+/g, "_")
                        ]
                      }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Challenge Section */}
      {caseStudy.challenge && (
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" color="info" gutterBottom>
            Challenges
          </Typography>
          <List sx={{ borderRadius: 2, marginBottom: 2 }}>
            {caseStudy.challenge.map((challenge, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={<Typography sx={{ fontSize: "1.3rem" }}><MdDoNotDisturbOn style={{ marginRight: "5px" }} />{challenge}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Solution Section */}
      {caseStudy.solution && (
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" color="info" gutterBottom>
            Solution
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            <img src={caseStudy.solution.provider === "Oikos" ? oikosImg : ""} alt="provider" />
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {caseStudy.solution.description}
          </Typography>
        </Box>
      )}

      {/* Implementation Section */}
      {caseStudy.implementation?.steps && (
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" color="info" gutterBottom>
            Implementation
          </Typography>
          <List sx={{ borderRadius: 2, marginBottom: 2 }}>
            {caseStudy.implementation.steps.map((step, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={<Typography sx={{ fontSize: "1.3rem" }}><PiCheckFatFill style={{ marginRight: "5px" }} />{step}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Results Section */}
      {caseStudy.results && (
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" color="info" gutterBottom>
            Results
          </Typography>
          <Grid container spacing={4}>
            {/* Image Section */}
            <Grid item xs={12} md={2} textAlign="center">
              <img
                src="https://launch.nife.io/deployed.gif"
                alt="Deployment"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>

            {/* Results List Section */}
            <Grid item xs={12} md={10}>
              <List sx={{ maxHeight: "400px", overflowY: "auto" }}>
                {caseStudy.results.map((result, index) => (
                  <ListItem key={index} sx={{ backgroundColor: "#333", borderRadius: 2, marginBottom: 2 }}>
                    <ListItemText
                      primary={<Typography color="success" sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>{result.name}</Typography>}
                      secondary={result.value}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Call to Action */}
      {caseStudy.call_to_action && (
        <Box sx={{ marginTop: 3, textAlign: "center" }}>
          <Typography variant="h6" color="info">
            {caseStudy.call_to_action.message} {caseStudy.call_to_action.emoji}
          </Typography>
        </Box>
      )}

    </Box>
  );
};

export default Template4;
