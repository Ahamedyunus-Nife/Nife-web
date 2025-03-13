
import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import SlidingList from '../components/home/Slides';
import cover from "../images/illustration/security.webp";

const AnimatedComponent = ({hideTitle}) => {

  return (
    <Container>
    {!hideTitle && <h2 className="title mx-auto text-align-center gradient-text fw-bold">
    Security at Its Peak.
    </h2>}
   
    {!hideTitle && <p className="gray-50 text-center mb-4">
        Security Fortified: ISO Compliance, GDPR Alignment, Built-in TLS, and DDoS Resilience by Default.
        {" "}
      </p>}



      <div id="animatedComponent">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{px:4}}>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  src={cover}
                  alt="Nife Security Illustration"
                  style={{ aspectRatio: "1/1", width: "80%" }}
                />
              </Grid>
            </Box>

          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: 4,pt:2 }}>  <SlidingList /></Box>

          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default AnimatedComponent;
