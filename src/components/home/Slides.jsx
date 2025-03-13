import { Fade, Grid, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';
import gdprlogo from "../../images/logo/gdpr.png";

// Define your list of items with icons, text, and descriptions
const items = [
    {
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/0f/ISO_9001-2015.svg", text: 'ISO compliant',
        description: 'Our company is ISO compliant, ensuring high standards of quality and efficiency.'
    },
    {
        icon: gdprlogo, text: 'GDPR compliant', description:
            'We are GDPR compliant, safeguarding data privacy and ensuring regulatory compliance.'
    },
    { icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"  style={{ height: "70px", width: "70px",position:"absolute",left:"-35px",top:"10px",borderRadius:"12px" }} xmlns="http://www.w3.org/2000/svg"><path d="M376 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48c0 7.7 6.3 14 14 14s14-6.3 14-14c0-53.2-43.9-96.7-97.3-96-52.7.7-94.7 44.5-94.7 97.3V192h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8z"></path></svg>, type: "svg", text: 'Inbuilt TLS', description: 'Our system includes inbuilt TLS for secure data transmission and privacy protection.' },
    {
        icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24"  style={{ height: "60px", width: "60px",position:"absolute",left:"-30px",top:"10px",borderRadius:"12px" }} xmlns="http://www.w3.org/2000/svg"><path d="M7.775 0a1.8 1.8 0 0 0-1.273.527L.528 6.503A1.8 1.8 0 0 0 0 7.775v8.45c0 .478.19.936.528 1.274l5.974 5.974A1.8 1.8 0 0 0 7.775 24h8.45a1.8 1.8 0 0 0 1.273-.527l5.975-5.974A1.8 1.8 0 0 0 24 16.225v-8.45a1.8 1.8 0 0 0-.527-1.272L17.498.527A1.8 1.8 0 0 0 16.225 0zm4.427 3c1.02 0 .958 1.108.958 1.108v6.784s-.009.218.16.218c.188 0 .175-.226.175-.226l-.002-5.63s-.05-.986.959-.986c1.01 0 .97.983.97.983v7.621s.014.158.141.158c.127 0 .944-2.122.944-2.122s.451-1.497 2.576-1.1c.038.008-.167.688-.167.688l-2.283 6.556S15.69 20.7 11.714 20.7c-5.044 0-4.808-5.407-4.814-5.405V7.562s-.016-.99.897-.99c.858 0 .849.99.849.99l.007 3.583s-.004.172.167.172c.16 0 .141-.172.141-.172l.01-5.926s-.055-1.162.966-1.162c1.04 0 .983 1.142.983 1.142v5.611s-.005.204.152.204c.168 0 .154-.206.154-.206l.01-6.693S11.18 3 12.202 3Z"></path></svg>, type: "svg",
        text: 'DDOS proof', description: 'Our platform is DDoS proof, ensuring continuous availability and resilience against malicious traffic attacks.'
    },
];

const ListWithFade = () => {
    return (
        <Grid container spacing={2}>
            {items.map((item, index) => (
                <Grid item xs={12} sm={12} md={12} key={index}>
                    <Fade in={true} timeout={index * 500}>
                        <Paper elevation={3} sx={{
                            padding: 0, mx: 2,


                            boxShadow: "0px 0px 105px 45px #0d6efd5c"


                        }}>
                            <ListItem secondaryAction={
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" style={{ color: "#0d6efd" }} viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>

                            }>
                                <ListItemIcon sx={{ fontSize: '3rem' }}>

                                    {item.type === "svg" ? item.icon : <img alt={item.text} src={item.icon} style={{ height: "70px", width: "70px",position:"absolute",left:"-35px",top:"10px",borderRadius:"12px"}} />}


                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    secondary={<Typography sx={{opacity:"0.6"}} variant="body2">{item.description}</Typography>}
                                />
                            </ListItem>
                        </Paper>
                    </Fade>
                </Grid>
            ))}
        </Grid>
    );
};

export default ListWithFade;
