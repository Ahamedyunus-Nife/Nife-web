import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Chip, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import {
    FaChartLine,
    FaCog,
    FaLock,
    FaServer,
    FaStoreAlt,
    FaTachometerAlt,
    FaTasks,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import OikosLogo from "../../images/logo/OikosDark.svg";
import PlatusLogo from "../../images/logo/PlatusNew.svg";
import SyncDriveLogo from "../../images/logo/SyncDriveLight.svg";

const groups = {
    'Deployment': [
        'Smarter Deployments',
        'Re-deploy and Revert',
        'Location-Based Deployment',
        'Remote Build',
        'Built-in Dockerization',
    ],
    'Access Control & Security': [
        'Members & RBAC',
        'Secrets Management',
        'DDoS Protection',
        'Private Repository Support',
    ],
    'Monitoring & Insights': [
        'Real-Time Alerts',
        'Application Logs',
        'Performance Metrics',
        'User Analytics',
    ],
    'Configuration & Management': [
        'Global Variables',
        'Environment Variables',
        'Config Templates',
        'Manage Environments',
    ],
    'Performance Optimization': [
        'Performance and Reliability',
        'Scaling Apps',
        'Geolocation Routing',
        'Traffic Control',
    ],
    'Application Resilience': [
        'Kubernetes Replicas',
        'Backup Regions',
    ],
    'Marketplace & Integrations': [
        'App Marketplace',
        'Webhooks',
        'BYOH (Bring Your Own Host)',
        'BYOC (Bring Your Own Cluster)',
    ],
};

// const images = [
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Speed test-rafiki.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/api.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Data extraction-amico.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Data extraction-rafiki.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Investment data-amico.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Speed%20test-pana.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Server-cuate.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Server-bro.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Server-amico.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/pull-request.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Online world-bro.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Online world-amico.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Investment data-rafiki.svg",
//     "https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Investment data-amico.svg",
// ]

const icons = {
    'Deployment': <FaTasks size={20} />,
    'Access Control & Security': <FaLock size={20} />,
    'Monitoring & Insights': <FaChartLine size={20} />,
    'Configuration & Management': <FaCog size={20} />,
    'Performance Optimization': <FaTachometerAlt size={20} />,
    'Application Resilience': <FaServer size={20} />,
    'Marketplace & Integrations': <FaStoreAlt size={20} />,
};

const GroupComponent = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/oikos/features');
    };

    const handleGroupClick = (group) => {
        const formattedGroup = group.toLowerCase().replace(/ /g, '-').replace(/&/g, 'and');
        navigate(`/oikos/features#${formattedGroup}`);
    };

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={5}>
                <List dense>
                    {Object.keys(groups).map((group) => (
                        <ListItem
                            key={group}
                            onClick={() => handleGroupClick(group)}
                            button
                        >
                            <ListItemIcon>
                                <IconButton sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                                    {icons[group]}
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText primary={group} />
                        </ListItem>
                    ))}
                </List>
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleClick}
                    sx={{ mt: 2 }} // Add margin-top for spacing
                >
                    View all features
                </Button>
                <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => navigate("/runtimes")}
                    sx={{ mt: 2 }} // Add margin-top for spacing
                >
                    View all runtime
                </Button>
            </Grid>
            <Grid item xs={12} lg={7} sx={{ borderLeft: "1px solid #5e6379", }}>
                <Box sx={{ p: 2, ml: 2 }}>

                    <Grid
                        container
                        direction="row"
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        onClick={() => navigate("/products")}
                    >

                        <Typography variant='caption' textAlign={"center"} sx={{ mb: 2 }}>PRODUCTS</Typography>
                        <Typography variant='caption' color='primary' textAlign={"center"} sx={{ mb: 2, cursor: "pointer" }}>View All</Typography>
                    </Grid>
                    <Box>


                        <Grid
                            container
                            direction="row"
                            sx={{
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >

                            <div>
                                <a href="/oikos">
                                    <img alt="Oikos logo" src={OikosLogo} style={{ height: "30px", objectFit: "cover", textAlign: "center" }} />
                                </a>
                            </div>

                        </Grid>
                        <Typography variant="body2" sx={{ opacity: "0.6", fontSize: "12px", mt: 1 }}>
                            Deploy Anything! Anytime Anywhere. Including LLMs, RAGs and AiOps</Typography>

                        <Chip
                            sx={{ fontSize: "12px", mr: 1 }}
                            label="Docs"
                            onClick={() => window.open("https://docs.nife.io/docs/Introduction/Nife/", "_blank")}
                            size="small"
                        />

                        <Chip
                            sx={{ fontSize: "12px", mr: 1 }}
                            label="Pricing"
                            onClick={() => window.open("/oikos/pricing", "_blank")}

                            size="small"
                        />

                        <Chip
                            sx={{ fontSize: "12px", mr: 1 }}
                            label="Changelog"
                            onClick={() => window.location.href = "/changelog"}
                            size="small"
                        />

                        <Chip
                            sx={{ fontSize: "12px", mr: 1 }}
                            label="Case Study"
                            onClick={() => window.location.href = "/case-study?filter=Oikos"}
                            size="small"
                        />
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <a href="/products">
                            <img alt="Platus logo" src={"https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/Zeke.svg"} style={{ height: "17px", objectFit: "cover", textAlign: "center" }} />
                        </a>
                    </Box>
                    <Typography variant="body2" sx={{ opacity: "0.6", fontSize: "12px", mt: 1 }}>
                        Datacenter solution for AI and GPU orchestration and management.
                    </Typography>
                    <Chip
                            sx={{ fontSize: "12px", mr: 1 }}
                            label="Case Study"
                            onClick={() => window.location.href = "/case-study?filter=Zeke"}
                            size="small"
                        />

                    <Box sx={{ mt: 2 }}>
                        <a href="/platus">
                            <img alt="Platus logo" src={PlatusLogo} style={{ height: "20px", objectFit: "cover", textAlign: "center" }} />
                        </a>
                    </Box>
                    <Typography variant="body2" sx={{ opacity: "0.6", fontSize: "12px", mt: 1 }}>
                        Navigating Your Deployment Budgets with Precision.
                    </Typography>
                    <Chip
                        sx={{ fontSize: "12px", mr: 1 }}
                        label="Visit"
                        onClick={() => window.open("https://platus.clb2.nifetency.com/", "_blank")}
                        size="small"
                    />
                    <Chip
                        sx={{ fontSize: "12px", mr: 1 }}
                        label="Demo"
                        onClick={() => window.open("https://landing.nife.io/request-demo", "_blank")}
                        size="small"
                    />
                      <Chip
                            sx={{ fontSize: "12px", mr: 1 }}
                            label="Case Study"
                            onClick={() => window.location.href = "/case-study?filter=Platus"}
                            size="small"
                        />
                    <Box sx={{ mt: 2 }}>
                        <a href="/products">
                            <img alt="Platus logo" src={"https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/nyx-6g.svg"} style={{ height: "20px", objectFit: "cover", textAlign: "center" }} />
                        </a>
                    </Box>
                    <Typography variant="body2" sx={{ opacity: "0.6", fontSize: "12px", mt: 1 }}>
                        Edge computing for AI workload placement for low latency and mobility.
                    </Typography>
                    <Chip
                            sx={{ fontSize: "12px", mr: 1 }}
                            label="Case Study"
                            onClick={() => window.location.href = "/case-study?filter=NYX 6G"}
                            size="small"
                        />




                    <Box sx={{ mt: 2 }}>
                        <a href="/products">
                            <img alt="Platus logo" src={SyncDriveLogo} style={{ height: "20px", objectFit: "cover", textAlign: "center" }} />
                        </a>
                    </Box>
                    <Typography variant="body2" sx={{ opacity: "0.6", fontSize: "12px", mt: 1 }}>
                        Syncing Innovation Crafted for your own Infra.
                    </Typography>
                    

                </Box>
            </Grid>
        </Grid>
    );
};

export default GroupComponent;
