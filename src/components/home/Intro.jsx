import { Box, Container } from '@mui/material';
import React from 'react';

const Intro = () => {

  return (
    <Box sx={{ py: 4, mt: 4, position: 'relative', overflow: 'hidden' }}>
      <Container>
        <h2
          className="title mx-auto text-align-center gradient-text fw-bold"
        >        Deploy. Scale. Optimize.</h2>
        <p className="gray-50 text-center mb-4">
          Continuous Deployment & Build Automation Software
          {" "}
        </p>
      </Container>
    </Box>
  );
};

export default Intro;
