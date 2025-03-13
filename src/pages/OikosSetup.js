import React, { useState } from 'react';
import { Box, Button, Container, Fab, Fade, Grid, Grow, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import awslogo from "../images/logo/aws.png"
import Chat from '../components/home/Teams';


const OikosSetup = () => {
    const [showSuccess, setshowSuccess] = useState(false);
    const [gcpItems, setGcpItems] = useState([
        { text: 'Frontend site', icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" },
        { text: 'Backend app', icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { text: 'Database', icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    ]);
    const [awsItems, setAwsItems] = useState([
        { text: 'Frontend site', icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" },
        { text: 'Backend app', icon: "https://cdn-hafbj.nitrocdn.com/xTFQNaYoUfbLubhDKHySpXAoUWTukgNl/assets/images/optimized/rev-41ae93d/nife.io/wp-content/uploads/2022/08/Logo-5.png" },

    ]);

    const showMessage = () => {
        setshowSuccess(true);
        setTimeout(() => {
            setshowSuccess(false);
        }, 1000);
    };

    const moveAllToAws = () => {

        setAwsItems([...awsItems, ...gcpItems]);
        setGcpItems([]);
        showMessage();


    };

    const moveAllToGcp = () => {

        setGcpItems([...gcpItems, ...awsItems]);
        setAwsItems([]);
        showMessage();

    };

    const [isDeployed, setisDeployed] = React.useState(false);
    React.useEffect(() => {


        const timer = setTimeout(() => {
            setisDeployed((prevState => !prevState));

        }, 3000);

        return () => {
            clearTimeout(timer);

        }
    }, [isDeployed]);

    return (
        <Container>
            <h2 className="title mx-auto mt-4 gradient-text fw-bold text-center" >
                    Effortless Manage Team and Migrate cloud
                </h2>
            <Grid container spacing={2}>
                


                <Grid item xs={12} md={6} sx={{ width: '80%' }}>
                    <Paper variant='outlined' sx={{ p: 2, borderRadius: "12px" }}>
                        <ListItem sx={{ p: 0 }}>
                            <ListItemIcon>
                                <IconButton sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant='h5'>Manage your Team</Typography>}
                                secondary={"It's a team work"} />
                        </ListItem>
                        <Typography sx={{ p: 1 }}>Invite your team members to organizations with <span style={{ color: "#2196f3" }}>Admin</span>, <span style={{ color: "#9c47cc" }}>Members</span> and <span style={{ color: "#cba200" }}> Viewer</span> roles</Typography>
                        <Chat />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper variant='outlined' sx={{ p: 2, borderRadius: "12px" }}>
                        <ListItem sx={{ p: 0 }}>
                            <ListItemIcon>
                                <IconButton sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.2073 2.29291L15.793 3.70712L18.0859 6.00002H13.0002V8.00001H18.0859L15.793 10.2929L17.2073 11.7071L21.9144 7.00001L17.2073 2.29291ZM7.00015 11.5C9.48543 11.5 11.5002 9.4853 11.5002 7.00001C11.5002 4.51473 9.48543 2.50001 7.00015 2.50001C4.51487 2.50001 2.50015 4.51473 2.50015 7.00001C2.50015 9.4853 4.51487 11.5 7.00015 11.5ZM5.91436 18L8.20726 20.2929L6.79304 21.7071L2.08594 17L6.79304 12.2929L8.20726 13.7071L5.91436 16H11.0002V18H5.91436ZM14.0002 13C13.4479 13 13.0002 13.4477 13.0002 14V20C13.0002 20.5523 13.4479 21 14.0002 21H20.0002C20.5524 21 21.0002 20.5523 21.0002 20V14C21.0002 13.4477 20.5524 13 20.0002 13H14.0002Z"></path></svg>

                                </IconButton>
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant='h5'>Migrate like never before</Typography>}
                                secondary={"It's that simple"} />
                        </ListItem>

                        <Box sx={{ flexGrow: 1, mt: 2, height: "265px" }}>

                            {showSuccess ? <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grow in={true}>
                                    <Button size='medium' variant='contained' startIcon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg>}
                                        color={"success"} sx={{ cursor: "auto", textTransform: "capitalize", mb: 2, boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px", borderRadius: "12px" }}>Successfully migrated!🎉</Button>

                                </Grow>
                                <Typography variant="body2" sx={{ color: "grey" }} align="center"> Migrate in mintunes not months!</Typography>

                            </Grid> :
                                <Fade in={true}><Grid container spacing={2} justifyContent="space-between" alignItems="center">

                                    <Grid item>
                                        <Paper sx={{ width: 200, height: 250, overflow: 'auto' }}>
                                            <Typography variant="h6" align="center"> <img src={"https://brandeps.com/logo-download/G/Google-Cloud-logo-vector-01.svg"} height={"30px"} width={"30px"} style={{ objectFit: "contain", textAlign: "center", marginTop: "10px" }} /></Typography>
                                            <List dense component="div" role="list">
                                                {gcpItems.length === 0 && <Typography variant="body2" sx={{ opacity: "0.5" }} align="center"><i>Empty</i></Typography>}
                                                {gcpItems.map((item, index) => (
                                                    <ListItem key={index} role="listitem">
                                                        <ListItemIcon>
                                                            <img src={item.icon} height={"25px"} width={"25px"} style={{ objectFit: "contain" }} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item.text} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Fab color="primary" aria-label="add" onClick={() => awsItems.length === 0 ? moveAllToAws() : moveAllToGcp()}>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M388.9 266.3c-5.1-5-5.2-13.3-.1-18.4L436 200H211c-7.2 0-13-5.8-13-13s5.8-13 13-13h224.9l-47.2-47.9c-5-5.1-5-13.3.1-18.4 5.1-5 13.3-5 18.4.1l69 70c1.1 1.2 2.1 2.5 2.7 4.1.7 1.6 1 3.3 1 5 0 3.4-1.3 6.6-3.7 9.1l-69 70c-5 5.2-13.2 5.3-18.3.3zM123.1 404.3c5.1-5 5.2-13.3.1-18.4L76.1 338H301c7.2 0 13-5.8 13-13s-5.8-13-13-13H76.1l47.2-47.9c5-5.1 5-13.3-.1-18.4-5.1-5-13.3-5-18.4.1l-69 70c-1.1 1.2-2.1 2.5-2.7 4.1-.7 1.6-1 3.3-1 5 0 3.4 1.3 6.6 3.7 9.1l69 70c5 5.2 13.2 5.3 18.3.3z"></path></svg>
                                        </Fab>

                                    </Grid>
                                    <Grid>
                                        <Paper sx={{ width: 200, height: 250, overflow: 'auto' }}>

                                            <Typography variant="h6" align="center"> <img src={awslogo} height={"30px"} width={"30px"} style={{ objectFit: "contain", textAlign: "center", marginTop: "10px" }} /></Typography>
                                            <List dense component="div" role="list">
                                                {awsItems.length === 0 && <Typography variant="body2" sx={{ opacity: "0.5" }} align="center"><i>Empty</i></Typography>}
                                                {awsItems.map((item, index) => (
                                                    <ListItem key={index} role="listitem">
                                                        <ListItemIcon>          <img src={item.icon} height={"25px"} width={"25px"} style={{ objectFit: "contain" }} /></ListItemIcon>
                                                        <ListItemText primary={item.text} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Paper>
                                    </Grid>
                                </Grid></Fade>
                            }
                        </Box>
                    </Paper>
                </Grid>
            </Grid></Container>


    );
};

export default OikosSetup;
