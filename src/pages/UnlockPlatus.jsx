import { Button } from '@mui/material';
import React, { startTransition } from 'react'; // Import startTransition
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import oikosLogo from "../images/logo/PlatusLight.svg"

const animateGlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

const Body = styled.body`
  display: flex;
  flex-direction: column; /* Default to column for mobile */
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  color: #999;
  background: #0000;

  @media (min-width: 450px) {
    flex-direction: row; /* Change to row for wider screens */
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: 450px) {
    margin-bottom: 0; /* Adjust margin for wider screens */
  }
`;

const Title = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent; /* Make text transparent to show gradient */
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 10px;
  background: linear-gradient(
    to right,
    rgb(77, 252, 224),
    rgb(169, 119, 241)
  );
  -webkit-background-clip: text; /* Clip background to text */
  background-clip: text; /* Clip background to text */
  animation: ${animateGlow} 1.25s linear infinite; /* Optional glow animation */
`;

const Circle = styled.span`
  position: relative;
  display: inline-block;
  font-size: 1.5rem; /* Match font size with Title */
  margin: 0 8px; /* Increase margin for more space */
  z-index: 1; /* Bring the Circle text above the pseudo-element */

  &::before {
    content: '';
    position: absolute;
    top: -8px; /* Adjust for padding */
    left: -8px; /* Adjust for padding */
    width: calc(100% + 16px); /* Adjust for padding */
    height: calc(100% + 16px); /* Adjust for padding */
    border: 2px solid rgba(255, 255, 255, 0.7); /* Circle styling */
    border-radius: 50%; /* Make it a circle */
    pointer-events: none; /* Prevent interaction */
    z-index: -1; /* Ensure the pseudo-element is behind the text */
  }
`;


const Box = styled.div`
  background: white;
  padding: 16px 0px;
  position: relative;
  margin: 10px;
  border-radius: 25px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.01);
  text-align: center;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(1) translateZ(0);
    filter: blur(25px);
    background: linear-gradient(
      to right,
      rgb(77, 252, 224),
      rgb(169, 119, 241)
    );
    background-size: 200% 200%;
    animation: ${animateGlow} 1.25s ease infinite;
  }
`;

const UnlockPlatus = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = () => {
        startTransition(() => {
            navigate('/platus'); // Navigate to /oikos
            window.scrollTo(0, 0); // Scroll to the top of the page
        });
    };

    return (
        <>
            <Body>
                <Title>
                    Optimize <Circle>Every</Circle> Penny with
                </Title>
                <Box>
                    <img
                        src={oikosLogo}
                        alt="Glowing"
                        style={{ display: 'block', margin: '0 auto' }} // Center the image
                    />
                </Box>
            </Body>
            <Center>
                <Button
                    onClick={handleClick} // Add onClick handler
                    endIcon={
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    }
                    sx={{ bgcolor: "#1b1f33", textAlign: "center", color: "white" }}
                >
                    EXPLORE MORE ABOUT PLATUS IN DETAIL
                </Button>
            </Center>
        </>
    );
};

export default UnlockPlatus;
