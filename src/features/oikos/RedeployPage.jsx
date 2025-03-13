import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Button, Fab, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { FaChartLine, FaClipboardList, FaCogs, FaDollarSign, FaRegLightbulb, FaUndo, FaUsers } from 'react-icons/fa';
import HorizontalLine from '../../components/functions/HorizontalLine';
import redeployIllustration from '../../images/redeploy.svg';

const RedeployPage = () => {
  return (
    <Box sx={{ padding: 3, bgcolor: '#121212', color: '#e0e0e0', textAlign: 'center' }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ textAlign: 'left', mb: 2 }}>
        <Typography color="inherit">Home</Typography>
        <Typography color="inherit">Oikos</Typography>
        <Typography color="inherit">Features</Typography>
        <Typography color="textPrimary">Redeploy and Revert</Typography>
      </Breadcrumbs>

      <Box sx={{ my: 6 }}>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
            <Typography variant="h2" sx={{ fontSize: '2.8rem', color: '#ffffff', mb: 2 }}>
              Instant Redeploy and One-Click Rollback for Sites
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.4rem', color: '#e0e0e0', mb: 4 }}>
              Effortlessly deploy your site with the latest changes or roll back to a previous version—both with just one click!
            </Typography>
            <Button variant="contained" href="/deploy" sx={{ mt: 3, bgcolor: '#0d6efd', '&:hover': { bgcolor: '#0056b3' } }}>
              Get Started Now
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={redeployIllustration} alt="Redeploy Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 6 }}>
        <Typography variant="h4" sx={{ my: 2, mt: 4 }}>
          Key Benefits
        </Typography>
        <HorizontalLine />
        <Grid container spacing={2} justifyContent="center">
          {[
            {
              icon: <FaDollarSign />,
              title: 'Cost Efficiency',
              description: 'Minimize costs associated with manual deployments, streamlining your process.'
            },
            {
              icon: <FaChartLine />,
              title: 'Increased Development Speed',
              description: 'Deploy changes instantly, reducing downtime and responding to feedback quickly.'
            },
            {
              icon: <FaUndo />,
              title: 'Enhanced Flexibility',
              description: 'Quickly test new features or fixes, and revert if necessary.'
            },
            {
              icon: <FaUsers />,
              title: 'Improved Collaboration',
              description: 'Team members can deploy and revert without disrupting workflow.'
            },
            {
              icon: <FaClipboardList />,
              title: 'Better User Experience',
              description: 'Ensure your site is always up-to-date and stable.'
            }
          ].map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ backgroundColor: '#1e1e1e', color: '#e0e0e0', p: 3, textAlign: 'center' }}>
                <Fab color="primary" sx={{ fontSize: '1.5rem', mb: 2 }}>
                  {benefit.icon}
                </Fab>
                <Typography variant="h5" sx={{ mb: 1 }}>{benefit.title}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>{benefit.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <br />
      <Box sx={{ my: 6, maxWidth: 600, margin: '0 auto' }}>
        <Typography variant="h4" sx={{ my: 2, mt: 4 }}>
          How It Works
        </Typography>
        <HorizontalLine />
        {[
          { step: 'Step 1:', description: 'Navigate to Your Dashboard - Go to your project dashboard to view all available options.' },
          { step: 'Step 2:', description: 'Click on "Redeploy" - Apply the latest changes with a single click to deploy your application.' },
          { step: 'Step 3:', description: 'Rollback if Needed - If you encounter issues, simply click "Rollback" to revert to the previous version.' },
          { step: 'Step 4:', description: 'Confirm Your Action - Confirm the action, and your site will be updated instantly!' }
        ].map((item, index) => (
          <Box key={index} sx={{ textAlign: 'left', my: 3 }}>
            <Typography variant="h6" sx={{ color: '#0d6efd' }}>{item.step}</Typography>
            <Typography variant="body2" sx={{ color: '#e0e0e0', ml: 2 }}>{item.description}</Typography>
          </Box>
        ))}
      </Box>
      <br />
      <Box sx={{ my: 6, maxWidth: 600, margin: '0 auto' }}>
        <Typography variant="h4" sx={{ my: 2, mt: 4 }}>
          Use Cases
        </Typography>
        <HorizontalLine />
        <Typography variant="body1" sx={{ mb: 2 }}>
          These features are especially beneficial in the following scenarios:
        </Typography>
        <Paper sx={{ backgroundColor: '#1b1f33', border: '1px solid #545b79', p: 2, borderRadius: '24px' }}>
          {[
            { icon: <FaRegLightbulb />, text: 'Testing new features in a live environment without downtime.' },
            { icon: <FaCogs />, text: 'Quickly fixing bugs or issues that arise after an update.' },
            { icon: <FaUndo />, text: 'Rolling back to a previous version during a critical project phase.' },
            { icon: <FaUsers />, text: 'Streamlining the deployment process for larger teams.' }
          ].map((useCase, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', my: 1, color: '#e0e0e0' }}>
              <Box sx={{ fontSize: '1.5rem', color: '#0d6efd', mr: 1 }}>{useCase.icon}</Box>
              <Typography variant="body2">{useCase.text}</Typography>
            </Box>
          ))}
        </Paper>
      </Box>
      <br />
      <Box sx={{ my: 6 }}>
        <Typography variant="h4" sx={{ my: 2, mt: 4 }}>
          FAQs
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Here are some common questions regarding our redeploy and rollback features:
        </Typography>
        <Box sx={{ margin: '0 auto', maxWidth: '600px' }}>
          {[
            { question: 'Can I see the history of my deployments?', answer: 'Yes, you can view the history of all your deployments in the dashboard.' },
            { question: 'What happens to my data when I roll back?', answer: 'Rolling back will revert your site to the previous version, including all associated data.' },
            { question: 'Is there any limit to how many times I can redeploy or rollback?', answer: 'No, you can redeploy or rollback as many times as needed.' }
          ].map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}a-content`} id={`panel${index + 1}a-header`}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RedeployPage;
