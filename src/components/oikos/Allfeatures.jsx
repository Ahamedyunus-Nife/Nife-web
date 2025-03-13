import React, { useState } from 'react';
import featuresData from "../../features/oikos/features.json";
import { Box, Button, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';

const StyledListItem = styled(ListItem)`
    position: relative;
    cursor: pointer;
    color: white;  // Initial text color

    &:hover {
        color: #0d6efd;  // Text color on hover
        transition: color 0.5s ease;  // Smooth transition for text color

        &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            height: 2px;
            width: 0;  // Start width at 0
            background: #0d6efd;  // Use the specified blue color
            animation: expand 1s forwards;  // Use the new animation
        }

        .description {
            opacity: 1;  // Show description on hover
            transform: translateY(0);  // Move into view
        }
    }

    @keyframes expand {
        0% {
            width: 0;
            transform: translateX(-50%);  // Center the starting point
        }
        100% {
            width: 100%;  // Expand to full width
            transform: translateX(-50%);  // Keep it centered
        }
    }
`;

const Description = styled.div`
    opacity: 0;  // Start hidden
    transform: translateY(-10px);  // Start slightly above
    transition: opacity 0.5s ease, transform 0.5s ease;  // Smooth transition
    margin-top: 5px;  // Add some space above the description
`;

export default function Allfeatures() {
    const [showTill, setShowTill] = useState(5);
    const navigate = useNavigate(); // Initialize navigate

    const handleClick = (slug) => {
        navigate(`/oikos/features/${slug}`); // Navigate to the feature's slug
    };

    return (
        <Grid container justifyContent={'center'} alignItems={'center'}>
            <Box sx={{ textAlign: "center", maxWidth: "600px" }}>
                <h1>All the Features</h1>
                <List>
                    {featuresData.features.slice(0, showTill).map((feature) => (
                        <StyledListItem key={feature.slug} onClick={() => handleClick(feature.slug)}>
                            <ListItemIcon>
                                <ArrowForward />
                            </ListItemIcon>
                            <ListItemText primary={feature.pageTitle} />
                            <Description className="description">{feature.description}</Description>
                        </StyledListItem>
                    ))}
                </List>
                {featuresData.features.length >= showTill && (
                    <Button fullWidth onClick={() => setShowTill(showTill + 5)}>
                        Show {featuresData.features.length - showTill} more
                    </Button>
                )}
            </Box>
        </Grid>
    );
}
