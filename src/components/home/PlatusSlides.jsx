import { Fade, Grid, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';
import monitoringIcon from '../../images/real-time.png';
import reportsIcon from '../../images/report.png';
import alertsIcon from '../../images/bell.png';

// Define your list of items with icons, text, and descriptions
const items = [
    {
        icon: monitoringIcon,
        text: 'Real-Time Monitoring',
        description: 'Get up-to-date insights into your cloud spending.'
    },
    {
        icon: reportsIcon,
        text: 'Detailed Reports',
        description: 'Access comprehensive reports on your cloud usage.'
    },
    {
        icon: alertsIcon,
        text: 'Alerts & Notifications',
        description: 'Receive alerts through Slack to stay informed about your spending.'
    },
];

const PlatusSlides = () => {
    return (
        <Grid container spacing={2}>
            {items.map((item, index) => (
                <Grid item xs={12} sm={12} md={12} key={index}>
                    <Fade in={true} timeout={index * 500}>
                        <Paper elevation={3} sx={{
                            padding: 0, mx: 8,
                            boxShadow: "0px 0px 105px 45px #0d6efd5c"
                        }}>
                            <ListItem>
                                <ListItemIcon sx={{ fontSize: '3rem' }}>
                                    <img alt={item.text} src={item.icon} style={{ height: "45px", width: "45px", position: "absolute", left: "8px", top: "20px", borderRadius: "12px" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    secondary={<Typography sx={{ opacity: "0.6" }} variant="body2">{item.description}</Typography>}
                                />
                            </ListItem>
                        </Paper>
                    </Fade>
                </Grid>
            ))}
        </Grid>
    );
};

export default PlatusSlides;
