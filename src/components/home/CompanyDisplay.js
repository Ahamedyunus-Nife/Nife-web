import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText, Fade, Grid, Avatar, Tooltip, ListItemIcon, IconButton } from '@mui/material';

// List of app icons
const appIcons = [
    { name: "react", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "docker", url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png" },
    { name: "angular", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { name: "deno", url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg", invert: true },
    { name: "ember", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/Ember-logo.png" },
    { name: "go", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
    { name: "hugo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Logo_of_Hugo_the_static_website_generator.svg" },
    { name: "java", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "javascript", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "nodejs", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "remix", url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg", invert: true },
    { name: "ruby", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
    { name: "typescript", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "unity", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg", invert: true },
    { name: "vite", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
    { name: "vuejs", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
];

const companyData = [
    {
        name: 'MediTech Innovations',
        category: 'Healthcare Technology',
        departments: [
            { name: 'Medical Devices', app: 'react', environment: 'prod', database: 'MySQL', location: '🇺🇸 Boston, USA', admin: 'Dr. Emily Johnson', members: { member: 20, viewer: 50 } },
            { name: 'Health Informatics', app: 'python', environment: 'dev', database: 'PostgreSQL', location: '🇨🇦 Toronto, Canada', admin: 'Dr. Michael Lee', members: { member: 15, viewer: 30 } },
        ]
    },
    {
        name: 'TechCommerce Solutions',
        category: 'E-commerce Platform',
        departments: [
            { name: 'Technology Operations', app: 'docker', environment: 'prod', database: 'PostgreSQL', location: '🇺🇸 San Francisco, USA', admin: 'Sarah Brown', members: { member: 50, viewer: 100 } },
            { name: 'Product Development', app: 'angular', environment: 'testing', database: 'MySQL', location: '🇬🇧 London, UK', admin: 'Alex Smith', members: { member: 30, viewer: 80 } },
        ]
    },
    {
        name: 'Global Energy Solutions',
        category: 'Renewable Energy',
        departments: [
            { name: 'Solar Power', app: 'go', environment: 'prod', database: 'MySQL', location: '🇩🇪 Berlin, Germany', admin: 'Dr. Peter Mueller', members: { member: 40, viewer: 90 } },
            { name: 'Wind Energy', app: 'typescript', environment: 'dev', database: 'PostgreSQL', location: '🇫🇷 Paris, France', admin: 'Dr. Sophie Dubois', members: { member: 20, viewer: 50 } },
        ]
    },
];

const getIconUrl = (appName) => {
    const icon = appIcons.find(icon => icon.name === appName);
    return icon ? icon.url : '';
};

const CompanyDisplay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % companyData.length);
                setFadeIn(true);
            }, 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentCompany = companyData[currentIndex];

    return (
        <Fade in={fadeIn} timeout={{ enter: 500, exit: 500 }}>
            <Box sx={{ p: 2,cursor:"default" }}>
                <Typography variant="h6" gutterBottom>{currentCompany.category}</Typography>
                <Grid container spacing={2}>
                    {currentCompany.departments.map((dept, idx) => (
                        <Grid item key={idx} xs={12} sm={currentCompany.departments.length === 2 ? 6 : 4}>
                            <Card sx={{ height: '100%',borderRadius:"12px"}}>
                                <CardContent>
                                    <ListItem sx={{ p: 0 }}>
                                        <ListItemIcon>
                                            <IconButton aria-label='Organization Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                                            <svg stroke="currentColor" fill="rgba(255, 255, 255, 0.7)" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M349.1 334.7c-11.2-4-29.5-4.2-37.6-7.3-5.6-2.2-14.5-4.6-17.4-8.1-2.9-3.5-2.9-28.5-2.9-28.5s7-6.6 9.9-14c2.9-7.3 4.8-27.5 4.8-27.5s6.6 2.8 9.2-10.4c2.2-11.4 6.4-17.4 5.3-25.8-1.2-8.4-5.8-6.4-5.8-6.4s5.8-8.5 5.8-37.4c0-29.8-22.5-59.1-64.6-59.1-42 0-64.7 29.4-64.7 59.1 0 28.9 5.7 37.4 5.7 37.4s-4.7-2-5.8 6.4c-1.2 8.4 3 14.4 5.3 25.8 2.6 13.3 9.2 10.4 9.2 10.4s1.9 20.1 4.8 27.5c2.9 7.4 9.9 14 9.9 14s0 25-2.9 28.5-11.8 5.9-17.4 8c-8 3.1-26.3 3.5-37.6 7.5-11.2 4-45.8 22.2-45.8 67.2h278.3c.1-45.1-34.5-63.3-45.7-67.3z"></path><path d="M140 286s23.9-.8 33.4-9.3c-15.5-23.5-7.1-50.9-10.3-76.5-3.2-25.5-17.7-40.8-46.7-40.8h-.4c-28 0-43.1 15.2-46.3 40.8-3.2 25.5 5.7 56-10.2 76.5C69 285.3 93 285 93 285s1 14.4-1 16.8c-2 2.4-7.9 4.7-12 5.5-8.8 1.9-18.1 4.5-25.9 7.2-7.8 2.7-22.6 17.2-22.6 37.2h80.3c2.2-8 17.3-22.3 32-29.8 9-4.6 17.9-4.3 24.7-5.2 0 0 3.8-6-8.7-8.3 0 0-17.2-4.3-19.2-6.7-1.9-2.2-.6-15.7-.6-15.7zM372 286s-23.9-.8-33.4-9.3c15.5-23.5 7.1-50.9 10.3-76.5 3.2-25.5 17.7-40.8 46.7-40.8h.4c28 0 43.1 15.2 46.3 40.8 3.2 25.5-5.7 56 10.2 76.5-9.5 8.6-33.5 8.3-33.5 8.3s-1 14.4 1 16.8c2 2.4 7.9 4.7 12 5.5 8.8 1.9 18.1 4.5 25.9 7.2 7.8 2.7 22.6 17.2 22.6 37.2h-80.3c-2.2-8-17.3-22.3-32-29.8-9-4.6-17.9-4.3-24.7-5.2 0 0-3.8-6 8.7-8.3 0 0 17.2-4.3 19.2-6.7 1.9-2.2.6-15.7.6-15.7z"></path></svg>
                                            </IconButton>
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography variant='h6'>{dept.name}</Typography>}
                                            secondary={`Organization • ${dept.location}`} />
                                    </ListItem>

                                  
                                    <List dense={true}>
                                        <ListItem>
                                            <Tooltip title={dept.app}>
                                                <Avatar alt={dept.app} src={getIconUrl(dept.app)} sx={{ width: 24, height: 24, marginRight: "10px", objectFit: "cover", aspectRatio: "1/1" }} />
                                            </Tooltip>
                                            <ListItemText primary={dept.name} secondary={<>{dept.environment === "prod" ?
                                                <svg stroke="currentColor" fill="green" stroke-width="0" viewBox="0 0 512 512" height="0.6em" width="0.6em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg>
                                                : (dept.environment === "dev" ?

                                                    <svg stroke="currentColor" fill="#0d6efd" stroke-width="0" viewBox="0 0 512 512" height="0.6em" width="0.6em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg>
                                                    :
                                                    <svg stroke="currentColor" fill="yellow" stroke-width="0" viewBox="0 0 512 512" height="0.6em" width="0.6em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg>
                                                )} {dept.environment} workload</>} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={`Database: ${dept.database}`} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={`Managed by ${dept.admin}`} secondary={`Members: ${dept.members.member}, Viewers: ${dept.members.viewer}`} />
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Fade>
    );
};

export default CompanyDisplay;
