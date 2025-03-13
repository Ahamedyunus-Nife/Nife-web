import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

const MarketplaceApplications = () => {
    return (
        <Grid 
            container 
            spacing={4} 
            alignItems="center" 
            justifyContent="center" 
            sx={{ 
                pt: 4, 
                pb: 4, 
                pl: { xs: 2, md: 10, lg: 20 }, 
                pr: { xs: 2, md: 10, lg: 20 } 
            }}
        >
            <Grid item xs={12} textAlign="center">
                <Typography 
                    variant="h4" 
                    component="h2" 
                    sx={{ 
                        fontWeight: "bold", 
                        color: 'text.primary', 
                        mb: 3, 
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } // Responsive font size
                    }}
                >
                    Explore Our Marketplace Applications
                </Typography>
            </Grid>

            <Grid 
                item 
                xs={12} 
                md={6} 
                sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: { xs: 4, md: 0 },  // Add bottom margin for mobile view
                    pr: { xs: 0, md: 4 } 
                }}
            >
                <img 
                    src={require("../images/market-icon.png")}
                    alt="Marketplace Screenshot"
                    style={{ 
                        width: '100%', 
                        maxWidth: '400px', // Limit max width on larger screens
                        borderRadius: '8px', 
                        boxShadow: '8px 4px 8px rgba(94, 53, 182, 0.5)' 
                    }}
                />
            </Grid>

            <Grid 
                item 
                xs={12} 
                md={6} 
                sx={{ 
                    pl: { xs: 0, md: 4 }, 
                    textAlign: { xs: 'center', md: 'left' } // Center text on mobile, left-align on larger screens
                }}
            >
                <Typography 
                    variant="body1" 
                    sx={{ 
                        mb: 2, 
                        fontSize: { xs: '1rem', md: '1.125rem' }, // Responsive font size
                        lineHeight: 1.6 
                    }}
                >
                    Explore our diverse marketplace of applications, where you can effortlessly deploy your chosen application with just one click.
                </Typography>

                <Button 
                    variant="contained" 
                    color="primary" 
                    href="https://docs.nife.io/marketplace/" 
                    target="_blank"
                    sx={{ 
                        mt: 2, 
                        fontSize: { xs: '0.875rem', md: '1rem' } // Responsive button text size
                    }}
                >
                    Check Out All Applications
                </Button>
            </Grid>
        </Grid>
    );
};

export default MarketplaceApplications;
