import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import AnimationTitles from "../components/functions/AnimationTitles";

const CICDSection = () => {
    return (
        <div className="about mb-5">
            <Container 
                maxWidth="lg" 
                sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' }, 
                    alignItems: 'center', 
                    gap: { xs: 2, md: 4 }, 
                    padding: { xs: 2, md: 4 } 
                }}
            >
                <div
                    className="d-flex flex-column"
                    style={{ 
                        flex: 1, 
                        maxWidth: '100%' 
                    }}
                >
                    <div style={{ width: '100%' }}>
                        <img
                            src={require("../images/7076118.png")}
                            alt="CI/CD Process"
                            style={{ 
                                width: '100%',    
                                height: 'auto',   
                                borderRadius: '8px', 
                            }}
                        />
                    </div>
                </div>

                <div
                    className="d-flex flex-column justify-content-center"
                    style={{ 
                        flex: 1, 
                        textAlign: 'left', 
                        maxWidth: '100%' 
                    }}
                >
                    <AnimationTitles 
                        duration={1} 
                        title="Streamline Your Development with CI/CD" 
                        className="title" 
                    />
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                        Automate your build, test, and deployment processes with our CI/CD integration. Seamlessly connect with GitHub and customize your pipelines to ensure efficient and reliable software delivery.
                    </Typography>
                    <Button 
                        onClick={() => window.location.href = "https://launch.nife.io/"} 
                        sx={{ mt: 4, fontWeight: "bold" }} 
                        size="medium" 
                        variant="contained"
                    >
                        Get Started
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default CICDSection;
