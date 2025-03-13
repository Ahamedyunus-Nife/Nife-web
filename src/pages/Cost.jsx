import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AnimationTitles from '../components/functions/AnimationTitles'
import costlogo from "../images/illustration/cost.png"
import item1 from "../images/illustration/item1.png"
import item2 from "../images/illustration/item2.png"
import UnlockPlatus from './UnlockPlatus'

const cardData = [
    {
        title: 'Multi-cloud support',
        description: 'Analyze spending across AWS, GCP, and Azure from a single interface.',
        color: '#0288d1' // Dark blue
    },
    {
        title: 'Cost optimization recommendations',
        description: 'Identify opportunities to reduce cloud costs based on usage patterns.',
        color: '#03a9f4' // Light blue
    },
    {
        title: 'Resource usage analytics',
        description: 'Visualize and understand resource consumption and trends.',
        color: '#9c27b0' // Purple
    },
    {
        title: 'Security and compliance insights',
        description: 'Ensure cloud resources comply with security best practices and standards.',
        color: '#1976d2' // Original blue
    },
    {
        title: 'Cost Forecasting and Budgeting',
        description: 'It helps users predict future spending based on current trends and set budgets to control expenses effectively.',
        color: '#00bcd4' // Cyan
    },
    {
        title: 'Cost allocation tagging',
        description: 'Track spending by applying custom tags to resources and services.',
        color: '#009688' // Teal
    },
    {
        title: 'Alerts and notifications',
        description: 'Set up alerts for cost overruns or unusual spending patterns.',
        color: '#4caf50' // Green
    },
    {
        title: 'Export and download reports',
        description: 'Export detailed cost reports and download them for offline analysis or sharing.',
        color: '#8bc34a' // Light green
    },
    {
        title: 'User-friendly interface',
        description: 'Enjoy an intuitive and responsive interface for efficient cloud cost management.',
        color: '#cddc39' // Lime
    }
];


export default function Cost() {
    return (
        <div>
            <Container>

                <h2 className="title mx-auto mt-4 text-align-center gradient-text fw-bold">Cost optimization.</h2>

                <p className="gray-50 text-center mb-2">
                    Navigating Your Deployment Budgets with Precision.
                    {" "}
                </p>
                <Grid container>

                    <Grid item xs={12} md={4}>

                        <Typography variant='h3' component={"h3"} sx={{ fontWeight: "light" }} color={"info"}> In-depth analysis
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
                            and reports<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,112v32a8,8,0,0,1-8,8H56v16h88a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H56v8a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v8H176a8,8,0,0,1,8,8V80a8,8,0,0,1-8,8H56v16H224A8,8,0,0,1,232,112Z"></path></svg></Typography>
                        <Typography variant='body2' sx={{ my: 2, opacity: "0.8" }}>Nife provides insights into resource usage, identifies cost-saving opportunities, and helps optimize cloud spending by highlighting areas where resources are underutilized or over-provisioned</Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div style={{ position: "relative", marginTop: "30px", marginBottom: "30px" }}>

                            <img alt='Nife Platus demo' className='p-4' src={costlogo} width={"100%"} />
                            <img alt='Nife Platus Pie chart demo' className='floating' src={item1} style={{ width: "190px", height: "auto", position: "absolute", right: "160px", top: "-50px", borderRadius: "6px", boxShadow: "rgb(58, 59, 69) 0px 0.15rem 1.75rem 0px" }} />
                            <img alt='Nife Platus Cost card demo' className='floating' src={item2} style={{ width: "150px", height: "auto", position: "absolute", left: "120px", bottom: "-20px", borderRadius: "12px", boxShadow: "rgba(255, 255, 255, 0.42) 0px 0.15rem 1.75rem 0px" }} />
                            <Typography sx={{ rotate: "5deg", fontWeight: "bold", color: "#6ae1a8", height: "auto", position: "absolute", right: "120px", bottom: "-4px" }}>
                                <svg stroke="currentColor" fill="currentColor" style={{ rotate: "211deg" }} stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M244,88v64a12,12,0,0,1-12,12H168a12,12,0,0,1,0-24h34.9l-15.48-15.37A84,84,0,0,0,44,184a12,12,0,0,1-24,0,108,108,0,0,1,184.37-76.37L220,123.16V88a12,12,0,0,1,24,0Z"></path></svg> Saved <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 288 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path></svg>20 this month!


                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>

                        <Typography variant='h4' component={"h2"} sx={{ fontWeight: "bold", textAlign: "center", mt: 12, mb: 2 }}> Not Just a Pie Chart</Typography>
                        <p className="gray-50 text-center mb-2">
                            Unveiling 9 Essential Features.
                            {" "}
                        </p>

                    </Grid>


                    {cardData.map((card, index) => (
                        <Grid item xs={12} md={4}>
                            <Box sx={{ px: 4, py: 2 }}>
                                <Card
                                    key={index} // Ensure each card has a unique key
                                    title={card.title}
                                    description={card.description}
                                    color={card.color}
                                />
                            </Box>

                        </Grid>
                    ))}





                </Grid>

                <UnlockPlatus/>
            </Container>
        </div>
    )
}

const Card = ({ title, description, color }) => {
    const cardStyle = {
        backgroundColor: "#1f1f1f",

    };

    const beforeStyle = {
        background: color,
    };

    return (
        <div className="row">
            <div className="cost-card" style={cardStyle}>
                <h3 style={{fontSize:"24px"}}>{title}</h3>
                <p>{description}</p>
                <div className="cost-overlay" style={beforeStyle}></div>
            </div>
        </div>
    );
};