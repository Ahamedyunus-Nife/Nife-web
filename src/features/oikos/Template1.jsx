import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Button, Fab, Grid, ListItem, ListItemIcon, ListItemText, Paper, SvgIcon, Typography } from '@mui/material';
import HorizontalLine from '../../components/functions/HorizontalLine';
import { FaQuestionCircle } from 'react-icons/fa';
import { CheckOutlined } from '@mui/icons-material';


// Inline styles for the icon, container, and rotating border
const iconStyle = {
  fontSize: '40px',
  background: '#0d6efd',
  borderRadius: '50%',
  padding: '1px',
  position: 'relative',
  zIndex: 2,
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const borderStyle = {
  content: "''",
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '55px',
  height: '55px',
  borderRadius: '50%',
  background: 'linear-gradient(to right, #0d6efd, #0056b3, #4dabf7, #0d6efd9e)',
  animation: 'rotateBorder 3s linear infinite',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
};

const Template1 = ({ feature }) => {
  return (
    <Box sx={{ padding: 3, bgcolor: '#121212', color: '#e0e0e0', textAlign: 'center' }}>
      {/* Breadcrumb Navigation */}
      {feature.breadcrumbs && feature.breadcrumbs.length > 0 && (
        <Breadcrumbs aria-label="breadcrumb" sx={{ textAlign: 'left', mb: 3 }}>
          {feature.breadcrumbs.map((crumb, index) => (
            <Typography key={index} color={index === feature.breadcrumbs.length - 1 ? 'textPrimary' : 'inherit'}>
              {crumb}
            </Typography>
          ))}
        </Breadcrumbs>
      )}

      <Box sx={{ my: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
            {feature.hero && (
              <>
                <Typography variant="h2" sx={{ fontSize: '2.8rem', color: '#ffffff', mb: 2 }}>
                  {feature.hero.title}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.4rem', color: '#e0e0e0', mb: 4 }}>
                  {feature.hero.description}
                </Typography>
                <Button
                  variant="contained"
                  href={feature.hero.buttonLink}
                  sx={{
                    mt: 3,
                    bgcolor: '#0d6efd',
                    '&:hover': { bgcolor: '#0056b3' },
                    fontSize: '1.2rem',
                    padding: '10px 20px',
                    borderRadius: '8px',
                  }}
                >
                  {feature.hero.buttonText}
                </Button>
              </>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {feature.hero?.illustration && (
              <img
                src={"https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/redeploy.svg"}
                alt="Feature Illustration"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            )}
          </Grid>
        </Grid>
      </Box>

      {feature.benefits && feature.benefits.length > 0 && (
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" sx={{ my: 2, mt: 4 }}>
            Key Benefits
          </Typography>
          <HorizontalLine />
          <Grid container spacing={3} justifyContent="center">
            {feature.benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper sx={{ backgroundColor: '#1e1e1e', color: '#e0e0e0', p: 4, textAlign: 'center', borderRadius: 2 }}>
                  <Fab color="primary" sx={{ fontSize: '2rem', mb: 2 }}>
                    {React.createElement(require('react-icons/fa')[benefit.icon])}
                  </Fab>
                  <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>{benefit.title}</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>{benefit.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {feature.howItWorks && feature.howItWorks.length > 0 && (
        <Box sx={{ my: 6, maxWidth: 600, margin: '0 auto' }}>
          <Typography variant="h4" sx={{ my: 2, mt: 4 }}>
            How It Works
          </Typography>
          <HorizontalLine />
          {feature.howItWorks.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'left', my: 3 }}>
              <ListItem>
                <ListItemIcon>
                  <div style={containerStyle}>
                    <SvgIcon component={CheckOutlined} style={iconStyle} />
                    <div style={borderStyle} />
                    {/* Inline keyframes for the animation */}
                    <style>{`
        @keyframes rotateBorder {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
                  </div>
                </ListItemIcon>
                <ListItemText primary={<Typography variant="h6" sx={{ color: '#0d6efd', fontWeight: 'bold' }}>{item.step}</Typography>}
                  secondary={<Typography variant="body2" sx={{ color: '#e0e0e0', fontSize: "1rem" }}>{item.description}</Typography>} />
              </ListItem>


            </Box>
          ))}
        </Box>
      )}

      {feature.useCases && feature.useCases.length > 0 && (
        <Box sx={{ my: 6, maxWidth: 600, margin: '0 auto' }}>
          <Typography variant="h4" sx={{ my: 2, mt: 4 }}>
            Use Cases
          </Typography>
          <HorizontalLine />
          <Typography variant="body1" sx={{ mb: 2 }}>
            These features are especially beneficial in the following scenarios:
          </Typography>
          <Paper sx={{ backgroundColor: '#1b1f33', border: '1px solid #545b79', p: 3, borderRadius: '24px' }}>
            {feature.useCases.map((useCase, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', my: 2, color: '#e0e0e0' }}>
                <Box sx={{ fontSize: '1.8rem', color: '#0d6efd', mr: 2 }}>
                  {React.createElement(require('react-icons/fa')[useCase.icon])}
                </Box>
                <Typography sx={{fontSize:"1rem"}} variant="body2">{useCase.text}</Typography>
              </Box>
            ))}
          </Paper>
        </Box>
      )}

      {feature.faqs && feature.faqs.length > 0 && (
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" sx={{ my: 2, mt: 4 }}>
            FAQs
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Here are some common questions regarding this feature:
          </Typography>
          <Box sx={{ margin: '0 auto', maxWidth: '600px' }}>
            {feature.faqs.map((faq, index) => (
              <Accordion key={index} sx={{ backgroundColor: '#1e1e1e', borderRadius: '8px', mb: 2 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#e0e0e0' }} />}
                  aria-controls={`panel${index + 1}a-content`}
                  id={`panel${index + 1}a-header`}
                >
                  <Typography sx={{ color: '#e0e0e0', fontWeight: 'bold' }}>
                    {faq.question} <FaQuestionCircle />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Template1;
