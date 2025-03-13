import React, { useState, useEffect } from 'react';
import { Grid, Typography, IconButton, Slide, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const updates = [
    { url: 'https://launch.nife.io/', title: 'Integrate SonarQube, Eslint and code safe on CI/CD deployment' },
    { url: 'https://freetools.nife.io/', title: 'New Free tools for every dev!' },
    { url: '/oikos/features/redeploy-site', title: 'Instant rollback and redeployment for sites' },
  
];

export default function NavBarUpdates() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const nextUpdate = () => {
        setStartAnimation(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
            setStartAnimation(true);
        }, 200);
    };

    const prevUpdate = () => {
        setStartAnimation(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + updates.length) % updates.length);
            setStartAnimation(true);
        }, 200);
    };

    useEffect(() => {
        setStartAnimation(true);
        const interval = setInterval(() => {
            setStartAnimation(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
                setStartAnimation(true);
            }, 200);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Slide in={startAnimation} direction="up" mountOnEnter unmountOnExit timeout={{ enter: 200, exit: 200 }}>
                    {updates.length > 0 && (
                        <Typography
                            sx={{ cursor: "pointer" }}
                            onClick={() => {
                                const url = updates[currentIndex].url;
                                if (url.startsWith("http")) {
                                    window.location.href = url;  // Redirect external links
                                } else {
                                    navigate(url);  // Use navigate for internal links
                                }
                            }} // Use navigate for internal routing & window.location.href for external links
                        >
                            {updates[currentIndex].title} →
                        </Typography>
                    )}
                </Slide>

                <Grid item>
                    <IconButton onClick={prevUpdate}>
                        {/* Previous Arrow SVG */}
                    </IconButton>
                    <span style={{ opacity: "0.6", fontSize: "12px" }}>{currentIndex + 1}/{updates.length}</span>
                    <IconButton onClick={nextUpdate}>
                        {/* Next Arrow SVG */}
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}
