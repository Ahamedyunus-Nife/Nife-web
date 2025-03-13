import React from 'react';
import { Box, Typography, IconButton, Card, CardContent, Grid, List, ListItem, ListItemIcon, ListItemText, Container } from '@mui/material';
import { FaVolumeUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';
import GardenIcon from '@mui/icons-material/OutdoorGrill'; // Use a garden-related icon
import { Code } from '@mui/icons-material';

// Motion components for animation
const MotionTypography = motion(Typography);

const DictionaryComponent = () => {
    const theme = useTheme(); // Get the theme to use the primary color
    const handleSpeak = () => {
        alert('Pronunciation audio would play here.');
    };

    return (
        <Container>
            <h4 className="title mx-auto mt-4 gradient-text fw-bold text-center">
                Welcome to Oikos!
            </h4>
            <Box sx={{ padding: 2 }}>
                <Grid container spacing={4}>
                    {/* Card on the left */}
                    <Grid item md={6} xs={12}>
                        <Card sx={{ borderRadius: 2, height: '100%' }}>
                            <CardContent>
                                <Grid container justifyContent={"space-between"} alignItems={"center"}>
                                    <Grid item>
                                        <Typography variant="h4" component="div">
                                            Oikos
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <IconButton onClick={handleSpeak} aria-label="speak pronunciation">
                                            <FaVolumeUp />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <MotionTypography
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1 }}
                                    sx={{ fontStyle: 'italic', color: 'text.secondary' }}
                                    variant="subtitle1"
                                    component="div"
                                >
                                    /ˈɔɪkɒs/
                                    <span style={{ margin: "0px 5px" }}>•</span>
                                    <Typography sx={{ color: "grey", fontStyle: "normal" }} variant="subtitle1" color="textSecondary" component="span">
                                        Noun
                                    </Typography>
                                </MotionTypography>
                                <MotionTypography
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    variant="body1"
                                    sx={{ mt: 2 }}
                                    component="div"
                                >
                                    <p> In Ancient Greek</p>
                                    <ul>
                                        <li><b>Home</b> or <b>estate</b>: <span style={{ opacity: "0.8" }}>Refers to the physical property and economic unit of the family.</span></li>
                                        <li><b>Household</b> or <b>family</b>: <span style={{ opacity: "0.8" }}>Refers The basic unit of ancient Greek society, including the family members, servants, and property.</span></li>
                                    </ul>
                                </MotionTypography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Title and Description on the right */}
                    <Grid item md={6} xs={12}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                            <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                                The Digital Homestead
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: "0.9rem" }} component="div">
                                <b>Oikos is your digital homestead</b>, designed to cater to all your virtual needs. Just as a homestead includes homes, barns, and gardens, <b>Oikos provides dedicated spaces for your applications, databases, and static sites</b>.
                            </Typography>
                            <List dense={true} sx={{ mt: 1 }}>
                                <ListItem sx={{ py: 0, my: 0 }}>
                                    <ListItemIcon>
                                        <HomeIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color={theme.palette.primary.main}>Apps are your primary residences</Typography>}
                                        secondary="Each with its unique purpose."
                                    />
                                </ListItem>
                                <ListItem sx={{ py: 0, my: 0 }}>
                                    <ListItemIcon>
                                        <StorageIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color={theme.palette.primary.main}>Databases act as secure storage rooms</Typography>}
                                        secondary="Keeping your valuable information safe and accessible."
                                    />
                                </ListItem>
                                <ListItem sx={{ py: 0, my: 0 }}>
                                    <ListItemIcon>
                                        <Code color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography color={theme.palette.primary.main}>Static sites are like beautifully landscaped gardens</Typography>}
                                        secondary="Showcasing your content with style and ease."
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default DictionaryComponent;
