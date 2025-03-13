import { Grid, List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import React from 'react';
import { FaAws, FaCloud, FaCogs, FaCube, FaGoogle, FaRegFileCode, FaTerminal } from 'react-icons/fa'; // Import icons
import { PiCursorClickBold } from 'react-icons/pi';
import { TbGitPullRequest } from 'react-icons/tb';
import { TfiLoop } from 'react-icons/tfi';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Import the arrow icon
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import styled from 'styled-components';

const useCases = [
  { title: 'Cloud Migration', description: 'Effortlessly transition your applications and data to the cloud for improved scalability and cost-effectiveness.', icon: <FaCloud /> },
  { title: 'Release Management', description: 'Streamline your software release process, ensuring smooth and timely updates for your applications.', icon: <TbGitPullRequest /> },
  { title: 'Manage Multiple Environments', description: 'Streamline your workflow and enhance your development process by easily managing multiple environments in one place.', icon: <FaCogs /> },
  { title: 'One Click Deployment', description: 'Simplify your deployment process with one-click deployment and save time while ensuring reliability.', icon: <PiCursorClickBold /> },
  { title: 'Manage Continuous Deployments', description: 'Effortlessly manage continuous deployments and maintain control over your software delivery pipeline.', icon: <TfiLoop /> },
  { title: 'Add AWS EKS Clusters', description: 'Seamlessly expand your cloud infrastructure with AWS Elastic Kubernetes Service (EKS) clusters using Nife.', icon: <FaAws /> },
  { title: 'Add for GCP GKE Clusters', description: 'Seamlessly incorporate Google Cloud Platform (GCP) Google Kubernetes Engine (GKE) clusters into your infrastructure with ease.', icon: <FaGoogle /> },
  { title: 'Deploy Containarized Apps', description: 'Seamlessly launch and manage Containerized applications for unparalleled efficiency and flexibility.', icon: <FaCube /> },
  { title: 'Application Lifecycle Management', description: 'Streamline your application\'s entire lifecycle for better management and efficiency.', icon: <FaRegFileCode /> },
  { title: 'Support for CLI', description: 'Effortlessly manage and deploy applications with powerful command-line tools.', icon: <FaTerminal /> }
];

const Container = styled.div`
  color: #fff;
  padding: 20px;
  margin: 0 auto;
`;

const Title = styled(Typography)`
  font-size: 12px;  // Reduced font size
  text-align: center;
  margin-bottom: 5px;
  color: #f0f0f0;
  text-decoration: uppercase;
`;

const IconWrapper = styled.span`
  margin-right: 10px;
  font-size: 1.3rem;
  color: #0d6efd;
`;

const ShowTopUseCases = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  const handleItemClick = (itemTitle) => {
    navigate(`/solutions/${itemTitle}`);  // Navigate to the corresponding URL
  };

  const handleViewAllClick = () => {
    navigate('/solutions');  // Navigate to /solutions when the button is clicked
  };

  return (
    <Container>
      <Title>USE CASES</Title>
      <Grid container spacing={2}>
        {/* Left column */}
        <Grid item xs={12} md={6}>
          <List>
            {useCases.slice(0, 5).map((useCase, index) => (
              <ListItem key={index} button onClick={() => handleItemClick(useCase.title)}>
                <IconWrapper>{useCase.icon}</IconWrapper>
                <ListItemText
                  primary={<Typography variant="body2" color="textSecondary">{useCase.title}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={6}>
          <List>
            {useCases.slice(5).map((useCase, index) => (
              <ListItem key={index} button onClick={() => handleItemClick(useCase.title)}>
                <IconWrapper>{useCase.icon}</IconWrapper>
                <ListItemText
                  primary={<Typography variant="body2" color="textSecondary">{useCase.title}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      {/* Button for View All Solutions */}
      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Button
          variant="outlined"
          color="primary"
          endIcon={<AiOutlineArrowRight />}
          onClick={handleViewAllClick}
        >
          View All Solutions
        </Button>
      </Grid>
    </Container>
  );
};

export default ShowTopUseCases;
