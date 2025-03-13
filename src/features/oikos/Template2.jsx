import { OpenInNew } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Badge, Box, Button, Container, Grid, Paper, ThemeProvider, Typography, createTheme } from '@mui/material';
import React from 'react';
import { FaDocker } from 'react-icons/fa6';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { MdAdd } from 'react-icons/md';
import { RiGitBranchLine } from 'react-icons/ri';
import { TbWorldCheck } from 'react-icons/tb';
import { TfiLineDotted } from 'react-icons/tfi';
import { useParams } from 'react-router-dom';
import remixlogo from "../../images/logo/Remix.png";

// Define the theme for light and dark mode
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0d6efd', // Using the specified color for the primary theme
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#e0e0e0',
        },
    },
});

const items = [
    { name: "react", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "docker", url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Docker_%28container_engine%29_logo_%28cropped%29.png" },
    { name: "angular", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { name: "deno", url: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg", invert: true  },
    { name: "ember", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/Ember-logo.png" },
    { name: "go", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
    { name: "hugo", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Logo_of_Hugo_the_static_website_generator.svg" },
    { name: "java", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "javascript", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "nodejs", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "remix", url: "https://remix.run/_brand/remix-letter-dark.png" },
    { name: "ruby", url: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
    { name: "typescript", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "unity", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg",invert:true },
    { name: "vite", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
    { name: "vuejs", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
    { name: "elixir", url: "https://cdn.icon-icons.com/icons2/2699/PNG/512/elixir_lang_logo_icon_169207.png" },
  ];

const Template2 = () => {
    const { id: runtime } = useParams(); 
    return (
        <ThemeProvider theme={darkTheme}>
            <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
                {/* Header */}
                <Box textAlign="center" marginBottom={6}>
                    <Typography variant="h2" color="primary" gutterBottom>
                        Create and Deploy {runtime} App on Oikos
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Follow these simple steps to deploy your app on Oikos platform.
                    </Typography>
                </Box>

                {/* Illustration */}
                <Box sx={{ mb: 6 }}>


                    <Grid
                        container
                        direction="row"
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >

                        <Box textAlign="center">
                            <Badge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                    <HiMiniComputerDesktop style={{ fontSize: "40px", background: "#121212", borderRadius: "50%", padding: "5px" }} />
                                }
                            >
                            <img src={items.find((e)=> e.name.toLowerCase() === runtime.toLowerCase()).url}
                            alt="logo" style={{heigh:"100px",width:"100px",objectFit:"contain",filter: items.find((e)=> e.name.toLowerCase() === runtime.toLowerCase()).invert ? "invert(100%)" : undefined}}/>
                            </Badge>
                            <Typography sx={{ mt: 1 }} variant='h6'>
                                Localhost
                            </Typography>

                        </Box>
                        <TfiLineDotted style={{width:"auto",
                                    height:"100px"}}/>
                   
                        <Box>
                              <TbWorldCheck style={{width:"auto",marginLeft:"10px",
                                    height:"100px"}} />
                                     <Typography sx={{ mt: 1 }} variant='h6'>
                                World wide!
                            </Typography>
                        </Box>
                      
                    </Grid>
                </Box>
                {/* Steps Section */}
                <Paper elevation={3} sx={{ padding: 4, backgroundColor: 'black' }}>
                    <Typography variant="h4" color="primary" gutterBottom>
                        Steps to Create and Deploy an App
                    </Typography>

                    <Grid container spacing={4}>
                        {/* Step 1 */}
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                    1. Log in to Oikos
                                </Typography>

                                {/* <Typography
                                    variant="h6"
                                    color="textPrimary"
                                    sx={{
                                        fontFamily: 'monospace',  // Monospace font style for code
                                        fontWeight: 'bold',
                                        wordBreak: 'break-all',
                                        color: 'grey',
                                        bgcolor:"black",
                                        fontSize:"1rem",
                                        p:1,
                                        borderRadius:"12px",
                                    }}
                                >
                                    https://launch.nife.io/
                                </Typography> */}
                                <Typography variant="body1" color="textSecondary">
                                    Access your Oikos account by logging in to your dashboard.
                                </Typography>
                                <Button endIcon={<OpenInNew />} size='small' sx={{ mt: 3 }} disableElevation variant='contained'>Login or Register new account</Button>
                            </Box>
                        </Grid>

                        {/* Step 2 */}
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                    2. Navigate to the Apps Page
                                </Typography> 
                                   <Typography variant="body1" color="textSecondary">
                                    Once logged in, go to the <strong>Apps</strong> page from the main dashboard.
                                </Typography>
                                <img src="https://react-nife-2024.s3.ap-south-1.amazonaws.com/oikos-features/sidebar-apps.png" style={{height:"150px",width:"auto",borderRadius:"5px"}} alt="Sidebar Apps"/>
                            
                            </Box>
                        </Grid>

                        {/* Step 3 */}
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                    3. Create a New App
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Click on the <strong><Button size='small' sx={{boxShadow:"rgb(22, 0, 68) 0px 0.15rem 1.75rem 0px",mx:1,borderRadius:"24px",background:"#160044"}} variant='contained' startIcon={<MdAdd />}>New App</Button></strong> button, give your app a name and select a organization.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                    Workload (Optional Step)
                                </Typography>
                                <Typography variant="body1" sx={{mb:2}} color="textSecondary">
                                    You can also choose a workload of your organization 
                                  
                                </Typography>
                                <strong><RiGitBranchLine style={{fontSize:"25px"}} />Production • <RiGitBranchLine style={{fontSize:"25px"}} /> Development • <RiGitBranchLine style={{fontSize:"25px"}} />Testing </strong>
                            </Box>
                        </Grid>

                        {/* Step 4 - Configure Your App */}
                        <Grid item xs={12}>
                            <Box marginBottom={4}>
                                <Typography variant="h5" gutterBottom>
                                    4. Configure Your App
                                </Typography>
                                <Typography variant="body1" color="textSecondary" marginBottom={3}>
                                    Choose one of the following methods to configure your app:
                                </Typography>

                                {/* Grid for 3 Configuration Options */}
                                <Grid container spacing={4}>
                                    {/* Option 1: GitHub */}
                                    <Grid item xs={12} md={4}>
                                        <Box sx={{
                                            backgroundColor: '#0d6efd3d',  // Using theme color
                                            padding: 3,
                                            borderRadius: 2,
                                            textAlign: 'center',
                                            color: '#fff',
                                        }}>
                                            <GitHubIcon sx={{ fontSize: 40, marginBottom: 2 }} />
                                            <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                                Import from GitHub
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary">
                                                Import your project directly from GitHub. If your project is not Dockerized, select {runtime} as the runtime.
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    {/* Option 2: Docker */}
                                    <Grid item xs={12} md={4}>
                                        <Box sx={{
                                            backgroundColor: '#0d6efd3d',  // Using theme color
                                            padding: 3,
                                            borderRadius: 2,
                                            textAlign: 'center',
                                            color: '#fff',
                                        }}>
                                            <FaDocker style={{ fontSize: 40, marginBottom: 2 }} />
                                            <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                                Use Docker
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary">
                                                Provide the Docker image name for your app.
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    {/* Option 3: Source Code */}
                                    <Grid item xs={12} md={4}>
                                        <Box sx={{
                                            backgroundColor: '#0d6efd3d',  // Using theme color
                                            padding: 3,
                                            borderRadius: 2,
                                            textAlign: 'center',
                                            color: '#fff',
                                        }}>
                                            <CodeIcon sx={{ fontSize: 40, marginBottom: 2 }} />
                                            <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                                Upload Source Code
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary">
                                                Upload your source code directly. If your project is not Dockerized, select {runtime} as the runtime.
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        {/* Step 5 */}
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                    5. Update Ports and Environment Variables
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Set the appropriate ports and environment variables for your app.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Step 6 */}
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                    6. Deploy the App
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Click on the <strong><Button size='small' sx={{boxShadow:"rgb(22, 0, 68) 0px 0.15rem 1.75rem 0px",mx:1,borderRadius:"24px",background:"#160044"}} variant='contained'>Deploy</Button></strong> button to deploy your app.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Step 7 */}
                        <Grid item xs={12} md={12}>
                            <Box>
                                <Typography sx={{fontWeight:"bold"}} variant="h6" gutterBottom>
                                    7. Awesome! Access the Global URL
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Once deployed, your app will be accessible via a global URL provided by Oikos.
                                </Typography>
                                <Box sx={{cursor:"default"}}>
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
                              
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
                {/* <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{background:"#050505",border:"1px solid grey",boxShadow:"",borderRadius:"24px",p:4,mt:4}}>
                        <Typography variant='body2' sx={{opacity:"0.8"}}><FaArrowAltCircleLeft style={{marginRight:"5px"}}/>Previous</Typography>
                            <Typography sx={{fontWeight:"bold",fontSize:"1rem"}}>Deploy React</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{background:"#050505",border:"1px solid grey",textAlign:"right",boxShadow:"",borderRadius:"24px",p:4,mt:4}}>
                        <Typography variant='body2' sx={{opacity:"0.8"}}><FaArrowAltCircleRight style={{marginRight:"5px"}}/>Next</Typography>
                            <Typography sx={{fontWeight:"bold",fontSize:"1rem"}}>Deploy MySQL Database</Typography>
                        </Box>
                    </Grid>
                </Grid> */}

            </Container>
        </ThemeProvider>
    );
};

export default Template2;
