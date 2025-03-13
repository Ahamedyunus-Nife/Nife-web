import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDocker, FaRegChartBar, FaCog } from 'react-icons/fa';  // Importing relevant icons

// Animation for the moving liquid gradient
const liquidAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0 0;
  }
`;

// Styled component for the container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f1f1f1;
`;

// Styled component for each feature item
const FeatureItem = styled.div`
  padding: 20px;
  margin: 20px;
  border-radius: 2px;
  width: 100%;
  box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    transform: translateY(-5px);
  }

  /* Dynamic background gradients with dark colors */
  background: ${(props) => props.gradient};
  background-size: 400% 400%;  /* Control the scaling of the gradient */
  animation: ${liquidAnimation} 15s ease infinite;  /* Increased loop time for smoother motion */

  @media (min-width: 768px) {
    width: 30%; /* Show 3 items in a row on large screens */
    margin: 20px; /* Add margin between items */
  }
`;

// Styled component for feature title
const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 12px;
  font-weight: 600;
  margin-left: 20px;
`;

// Styled component for feature description
const FeatureDescription = styled.p`
  color: #b0b0b0;
  font-size: 1rem;
  line-height: 1.6;
  margin-left: 20px;
  flex: 1;
`;

// Styled component for logo/icon
const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #ffffff;
  margin-right: 20px;
`;

const FeaturesList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100vw;
`;

const AIDrivenFeatures = () => {
  const features = [
    {
      title: 'Auto Dockerization with AI',
      description: 'AI-driven automation that simplifies and accelerates the process of containerizing applications into Docker, optimizing deployment workflows effortlessly.',
      icon: <FaDocker />, // Docker icon from react-icons
      gradient: 'linear-gradient(135deg, #2e2a47, #6a4c7c)' // Dark purple to muted violet
    },
    {
      title: 'Scale to As You Grow with AI',
      description: 'AI technology automatically scales your infrastructure based on growing traffic and resource demand, ensuring high performance and cost efficiency.',
      icon: <FaRegChartBar />, // Chart icon from react-icons
      gradient: 'linear-gradient(135deg, #2f3b56, #1d5e77)' // Dark blue to deep cyan
    },
    {
      title: 'AI Recommendation for Cost Management for Infrastructure (Coming Soon)',
      description: 'Stay tuned! Soon, AI will provide smart cost management recommendations to optimize your infrastructure spend based on usage patterns.',
      icon: <FaCog />, // Cog icon from react-icons
      gradient: 'linear-gradient(135deg, #4b1c3d, #b94450)' // Dark red to burgundy
    },
  ];

  return (
    <Container>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index} gradient={feature.gradient}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <div>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </div>
          </FeatureItem>
        ))}
      </FeaturesList>
    </Container>
  );
};

export default AIDrivenFeatures;
