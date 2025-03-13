import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import SlidingList from '../components/home/PlatusSlides';

const AnimatedComponent = () => {
  return (
    <Container>
      <h2 className="title mx-auto text-align-center gradient-text fw-bold">
        Platus
      </h2>
      
      <p className="text-center text-white mb-4" style={{ fontSize: '1.2rem' }}>
        Effectively manage cloud resources and optimize operational expenses with our cost monitoring feature.
      </p>

      <div id="animatedComponent">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ px: { xs: 2, md: 4 } }}>
              <Grid container justifyContent="center" alignItems="center">
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <img
                    id="finops-dashboard"
                    src={require("..//images/finops-dash.png")}
                    alt="Finops dashboard"
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                    }}
                  />
                </div>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { xs: 2, md: 4 }, pt: { xs: 2, md: 0 } }}>
              <SlidingList />
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default AnimatedComponent;
