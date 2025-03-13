import { Box, Button, Container, Grid, Grow, Paper, Typography } from '@mui/material';
import React from 'react';
import Build from '../components/home/Build';
import CompanyDisplay from '../components/home/CompanyDisplay';
import LoadingNife from '../components/home/LoadingNife';
import Runtimes from '../components/home/Runtimes';

const TransferList = () => {



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
            <Grid container spacing={2}>

                <Grid item xs={12} md={12}>
                    <Paper variant='outlined' sx={{ p: 2, borderRadius: "12px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant='h3' component={"h3"} sx={{ fontWeight: "light" }} color={"primary"}> 01 Organize</Typography>
                                <Typography variant='h5' component={"h4"} sx={{ m: 4, mb: 1 }}>
                                    Manage your app, site and database with organizations and workload.
                                </Typography>
                                <Typography variant='body2' sx={{ mx: 4, my: 0, opacity: "0.7" }}>
                                    Each organizations and workload can have it's own infrastructure. You can also migrate with a single click.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <CompanyDisplay />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Paper variant='outlined' sx={{ p: 2, borderRadius: "12px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                            <Typography variant='h3' component={"h3"}  sx={{ fontWeight: "light" }} color={"primary"}> 02 Build</Typography>
                            <Typography variant='h5' component={"h4"}  sx={{ m: 4, mb: 1 }}>
                                    Three Ways to Build your app with our Smart Automation on the fly.
                                </Typography>
                                <Typography variant='body2' sx={{ mx: 4, my: 0, opacity: "0.7" }}>
                                     From GitHub, Docker and Custom source code. Build with any Runtime and Customize.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Build />
                            </Grid>
                            <Grid item xs={12}>
                                <Runtimes/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Paper variant='outlined' sx={{ p: 2, borderRadius: "12px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                            <Typography variant='h3' component={"h3"}  sx={{ fontWeight: "light" }} color={"primary"}> 03 Deploy</Typography>
                            <Typography variant='h5' component={"h4"}  sx={{ m: 4, mb: 1 }}>
                                Deploy Anything, Anytime, Anywhere in mintues.
                                </Typography>
                                <Typography variant='body2' sx={{ mx: 4, mt: 0,mb: 4, opacity: "0.7" }}>
                                    Deploy any app, site and database in mintues to any location and scale with a single click.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ mt: 3 }}>
                                    {isDeployed ?
                                        <Grow in={true}>
                                        <Box>
                                              <Grid
                                                container
                                                direction="column"
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                <Button size='medium' variant='contained'
                                                    startIcon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg>} color={"success"}
                                                    sx={{ cursor: "default", textTransform: "capitalize", my: 2, boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px", borderRadius: "12px" }}>Successfully Deployed!🎉</Button>
                                                <Typography variant='h5' sx={{ fontWeight: "bold", }}>
                                                
                                               
                                                Your App is Live & Globally <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>  Assesible!
                                                
                                               
                                                </Typography>
                                                <Button onClick={() => window.location.href = "https://launch.nife.io/"} sx={{mt:2}} endIcon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>}>open</Button>
                                            </Grid>
                                        </Box>
                                          
                                        </Grow>
                                        :
                                        <Grow in={true}>
                                            <Box> <LoadingNife />

                                            </Box>
                                        </Grow>}
                                </Box>

                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
          
            </Grid></Container>


    );
};

export default TransferList;
