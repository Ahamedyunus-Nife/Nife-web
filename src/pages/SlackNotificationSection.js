import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import AnimationTitles from "../components/functions/AnimationTitles";

const SlackNotificationSection = () => {
    return (
        <div className="about mb-5">
            <Container 
                maxWidth="lg" 
                sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    gap: { xs: 2, md: 4 }, 
                    alignItems: 'center',
                    padding: { xs: 2, md: 4 } 
                }}
            >
                <div
                    className="d-flex flex-column"
                    style={{ 
                        flex: 1, 
                        maxWidth: '100%', 
                        marginBottom: { xs: 4, md: 0 } // Add margin-bottom on mobile
                    }}
                >
                    <div style={{ width: '100%' }}>
                        <img
                            src={require("../images/slack.png")} 
                            className="p-0 img"
                            alt="Slack Notifications"
                            style={{ 
                                width: '100%',     
                                maxWidth: '400px', // Set max-width for larger screens
                                height: 'auto',    
                                borderRadius: '8px', 
                                boxShadow: '0 4px 8px rgba(94, 53, 182, 0.5)',
                                margin: '0 auto' // Center image on mobile
                            }}
                        />
                    </div>
                </div>

                <div
                    className="d-flex flex-column justify-content-center"
                    style={{ 
                        flex: 1, 
                        textAlign: { xs: 'center', md: 'left' }, // Center text on mobile, left-align on larger screens
                        maxWidth: '100%' 
                    }}
                >
                    <AnimationTitles 
                        duration={1} 
                        title="Stay Informed with Slack Notifications" 
                        className="title" 
                    />
                    <Typography 
                        variant="body2" 
                        color="textSecondary" 
                        sx={{ 
                            mb: 2, 
                            fontSize: { xs: '1rem', md: '1.125rem' }, // Responsive font size
                            lineHeight: 1.6 
                        }}
                    >
                        Integrate Slack with Platus to receive real-time notifications on cost increases. Set up webhooks and alerts to get immediate updates in your Slack channel when costs exceed your defined thresholds. Keep your budget in check and stay informed effortlessly.
                    </Typography>
                    <Button 
                        onClick={() => window.location.href = "https://platus.nife.io/"} 
                        sx={{ 
                            mt: 2, 
                            fontWeight: "bold", 
                            fontSize: { xs: '0.875rem', md: '1rem' } // Responsive button text size
                        }} 
                        size="medium" 
                        variant="contained"
                    >
                        Learn More
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default SlackNotificationSection;
