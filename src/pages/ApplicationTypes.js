import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import { Web as WebIcon, DataObject as DataObjectIcon, SportsEsports as SportsEsportsIcon, InsertChart as InsertChartIcon, LiveTv as LiveTvIcon, Storage as StorageIcon, DeviceHub as DeviceHubIcon } from '@mui/icons-material';
import { FaRobot } from 'react-icons/fa'; // AI/LLM icon from react-icons

const ApplicationTypes = () => {
    return (
        <Container>
            <Box sx={{ width: '90%', maxWidth: 1200, margin: '0 auto', paddingY: 8 }}>
                <Grid container spacing={4} justifyContent="center">
                <h4 className="title mx-auto mt-4 gradient-text fw-bold text-center">
          Deploy Anything
        </h4>
                    <Grid item xs={12} textAlign="center">
                        <Typography 
                            variant="body1" 
                            color="text.secondary"
                            sx={{ maxWidth: 800, margin: '0 auto', mb: 4 }}
                        >
                            Our platform provides robust and scalable deployment solutions for various application types. Achieve seamless integration and optimal performance in under 30 seconds.
                        </Typography>
                    </Grid>

                    <Grid container spacing={4} justifyContent="center">
                        {[
                            { icon: <DataObjectIcon sx={{ fontSize: 50 }} />, title: 'APIs', description: 'Effortlessly deploy RESTful and GraphQL APIs to enhance your applications with scalable and reliable data services.' },
                            { icon: <WebIcon sx={{ fontSize: 50 }} />, title: 'Frontend Applications', description: 'Seamlessly host dynamic websites built with React, Angular, Vue.js, or static content on our high-performance serverless platform.' },
                            { icon: <StorageIcon sx={{ fontSize: 50 }} />, title: 'Databases', description: 'Deploy and manage a variety of databases including MySQL, MariaDB, PostgreSQL, MongoDB, and Redis with enhanced security and scalability.' },
                            { icon: <InsertChartIcon sx={{ fontSize: 50 }} />, title: 'Batch Jobs', description: 'Manage and automate large-scale data processing tasks efficiently with our batch job deployment solutions.' },
                            { icon: <LiveTvIcon sx={{ fontSize: 50 }} />, title: 'Streaming Applications', description: 'Deploy real-time streaming applications for data analytics, monitoring, and live content delivery with minimal latency.' },
                            { icon: <SportsEsportsIcon sx={{ fontSize: 50 }} />, title: 'Gaming Applications', description: 'Deploy high-performance gaming applications, ensuring low latency and high responsiveness.' },
                            { icon: <FaRobot style={{ fontSize: 50 }} />, title: 'AI/LLM', description: 'Deploy cutting-edge artificial intelligence models and large language models (LLMs) for natural language processing, machine learning, and advanced analytics.' },
                            { icon: <DeviceHubIcon sx={{ fontSize: 50 }} />, title: 'Latest Technologies', description: 'Leverage the latest tech innovations, including containerized applications, microservices, and serverless architectures, for modern, scalable solutions.' }
                        ].map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
                                <Box 
                                    sx={{ 
                                        mb: 2, 
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                                        '&:hover': { 
                                            transform: 'translateY(-5px)', 
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
                                            cursor: 'pointer'
                                        }
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Typography 
                                    variant="h6" 
                                    sx={{ 
                                        mb: 1, 
                                        fontWeight: 'bold', 
                                        transition: 'color 0.3s ease', 
                                        '&:hover': { 
                                            color: 'primary.main'
                                        }
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="text.secondary"
                                    sx={{ 
                                        transition: 'color 0.3s ease', 
                                        '&:hover': { 
                                            color: 'text.primary'
                                        }
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ApplicationTypes;
