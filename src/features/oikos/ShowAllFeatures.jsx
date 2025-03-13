import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const images = [
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Speed test-rafiki.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/api.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Data extraction-amico.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Data extraction-rafiki.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Investment data-amico.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Speed%20test-pana.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Server-cuate.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Server-bro.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Server-amico.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/pull-request.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Online world-bro.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Online world-amico.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Investment data-rafiki.svg",
    "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Investment data-amico.svg",
];

// Feature data with slugs added
const featureData = [
    {
        title: 'Deployment',
        points: [
            { text: 'Smarter Deployments', slug: 'deployments' },
            { text: 'Re-deploy and Revert', slug: 'redeploy-site' },
            { text: 'Location-Based Deployment', slug: 'locations' },
            { text: 'Remote Build', slug: 'remote-build' },
            { text: 'Built-in Dockerization', slug: 'built-in' },
        ],
        cover: images[0], // Using the first image
    },
    {
        title: 'Access Control & Security',
        points: [
            { text: 'Members & RBAC', slug: 'members-rbac' },
            { text: 'Secrets Management', slug: 'secrets' },
            { text: 'DDoS Protection', slug: 'ddos' },
            { text: 'Private Repository Support', slug: 'support-for-private-repository' },
        ],
        cover: images[1], // Using the second image
    },
    {
        title: 'Monitoring & Insights',
        points: [
            { text: 'Real-Time Alerts', slug: 'alerts' },
            { text: 'Application Logs', slug: 'logs' },
            { text: 'Performance Metrics', slug: 'monitor-performance-metrics' },
            { text: 'User Analytics', slug: 'user-analytics' },
        ],
        cover: images[2], // Using the third image
    },
    {
        title: 'Configuration & Management',
        points: [
            { text: 'Global Variables', slug: 'global-variables' },
            { text: 'Environment Variables', slug: 'environment-variables' },
            { text: 'Config Templates', slug: 'config-template' },
            { text: 'Manage Environments', slug: 'workloads' },
        ],
        cover: images[3], // Using the fourth image
    },
    {
        title: 'Performance Optimization',
        points: [
            { text: 'Performance and Reliability', slug: 'load-balancer' },
            { text: 'Scaling Apps', slug: 'scaling' },
            { text: 'Geolocation Routing', slug: 'routing-policy' },
            { text: 'Traffic Control', slug: 'traffic-control' },
        ],
        cover: images[4], // Using the fifth image
    },
    {
        title: 'Application Resilience',
        points: [
            { text: 'Kubernetes Replicas', slug: 'replicas' },
            { text: 'Backup Regions', slug: 'backup-region' },
        ],
        cover: images[5], // Using the sixth image
    },
    {
        title: 'Marketplace & Integrations',
        points: [
            { text: 'App Marketplace', slug: 'marketplace' },
            { text: 'Webhooks', slug: 'webhook' },
            { text: 'BYOH (Bring Your Own Host)', slug: 'byoh' },
            { text: 'BYOC (Bring Your Own Cluster)', slug: 'byoc' },
        ],
        cover: images[6], // Using the seventh image
    },
];

const LandingPage = () => {
    const feature = {
        hero: {
            title: "Discover Our Amazing Features",
            description: "Explore the tools and functionalities that empower you to achieve more.",
            buttonText: "View Features",
            buttonLink: "/features",
            illustration: "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/redeploy.svg",
        },
    };

    const navigate = useNavigate();

    const handleClick = (slug) => {
        // Example navigation using the slug (can be adapted to the appropriate URL structure)
        navigate(`/oikos/features/${slug}`);
    };

    useEffect(() => {
        // Check if there's a hash in the URL and navigate to that section
        const hash = window.location.hash;
        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                section.scrollIntoView(); // Scroll to the section without smooth scrolling
            }
        }
    }, []);

    return (
        <Box sx={{ my: 0, padding: '40px', borderRadius: '8px' }}>
            {/* Hero Section */}
            <Grid container spacing={0} alignItems="center">
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
                                sx={{ mt: 3, bgcolor: '#0d6efd', '&:hover': { bgcolor: '#0056b3' } }}
                            >
                                {feature.hero.buttonText}
                            </Button>
                        </>
                    )}
                </Grid>
                <Grid item xs={12} md={6}>
                    {feature.hero?.illustration && (
                        <img
                            src={feature.hero.illustration}
                            alt="Feature Illustration"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    )}
                </Grid>
            </Grid>

            <Container>
                {featureData.map((featureItem, index) => (
                    <Grid
                        container
                        spacing={4}
                        key={index}
                        sx={{ mt: 6 }}
                        id={featureItem.title.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and')}
                    >
                        {index % 2 === 0 ? (
                            <>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h4" sx={{ fontWeight: "bold", color: '#ffffff', mb: 2 }}>
                                        {featureItem.title}
                                    </Typography>
                                    <Box>
                                        {featureItem.points.map((item, idx) => (
                                            <Typography key={idx}
                                                onClick={() => handleClick(item.slug)}
                                                variant="body1" sx={{
                                                    color: '#e0e0e0', display: 'flex', fontSize: "1.5rem", alignItems: 'center', mb: 1,
                                                    transition: 'color 0.3s ease, text-decoration-color 0.3s ease', // Smooth transition for both color and underline
                                                    textDecoration: 'none', // Remove underline by default
                                                    '&:hover': {
                                                        color: 'primary.main', // Change to your primary color
                                                        textDecoration: 'underline', // Add underline on hover
                                                        textDecorationColor: 'primary.main', // Set underline color to primary
                                                    },
                                                }}>
                                                <FaRegCircleCheck style={{ color: '#0d6efd', marginRight: 10 }} />
                                                {item.text}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <img
                                        src={featureItem.cover}
                                        alt={`${featureItem.title} Illustration`}
                                        style={{ maxWidth: '100%', height: '400px' }}
                                    />
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item xs={12} md={6}>
                                    <img
                                        src={featureItem.cover}
                                        alt={`${featureItem.title} Illustration`}
                                        style={{ maxWidth: '100%', height: '400px' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h4" sx={{ fontWeight: "bold", color: '#ffffff', mb: 2 }}>
                                        {featureItem.title}
                                    </Typography>
                                    <Box>
                                        {featureItem.points.map((item, idx) => (
                                            <Typography key={idx}
                                                onClick={() => handleClick(item.slug)}
                                                variant="body1" sx={{
                                                    color: '#e0e0e0', display: 'flex', fontSize: "1.5rem", alignItems: 'center', mb: 1,
                                                    transition: 'color 0.3s ease, text-decoration-color 0.3s ease', // Smooth transition for both color and underline
                                                    textDecoration: 'none', // Remove underline by default
                                                    '&:hover': {
                                                        color: 'primary.main', // Change to your primary color
                                                        textDecoration: 'underline', // Add underline on hover
                                                        textDecorationColor: 'primary.main', // Set underline color to primary
                                                    },
                                                }}>
                                                <FaRegCircleCheck style={{ color: '#0d6efd', marginRight: 10 }} />
                                                {item.text}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Grid>
                            </>
                        )}
                    </Grid>
                ))}
            </Container>
        </Box>
    );
};

export default LandingPage;
