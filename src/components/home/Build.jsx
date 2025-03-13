import { Box, Button, Chip, CircularProgress, Fade, Grid, Grow, IconButton, LinearProgress, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Build() {
    const [status, setStatus] = useState(0);
    const [isPrivate, setisPrivate] = useState(false);


    useEffect(() => {


        const timer = setTimeout(() => {
            setisPrivate((prevState => !prevState));
            setStatus((prevStatus) => (prevStatus + 1) % 5);
        }, 2000);

        return () => {
            clearTimeout(timer);

        }
    }, [status]);

    return (
        <div className="runtimes">


            <Grid container spacing={2}>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    grabCursor={true}
                    loop={true}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        520: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        992: {
                            slidesPerView: 1,
                        },
                        1198: {
                            slidesPerView: 1,
                        },
                    }}
                    navigation={true}

                    modules={[Autoplay]}
                    className="mySwiper mt-4"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                >

                    <SwiperSlide key={1}>

                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >

                            <Grid item xs={12} md={6}>

                                <Paper variant='outlined' sx={{ p: 2, borderRadius: "12px", height: "280px" }}>
                                    <ListItem sx={{ p: 0 }}>
                                        <ListItemIcon>
                                            <IconButton aria-label='GitHub Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"></path></svg>
                                            </IconButton>
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography variant='h5'>Deploy from Github</Typography>}
                                            secondary={"Public or Private"} />
                                    </ListItem>
                                    <Typography variant='body2' sx={{ p: 1, mb: 1, opacity: "0.5" }}>We build and deploy your app with blazing fast built-in continuous deployment. Develop fearlessly with native versioning of all deployments.</Typography>
                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        {isPrivate ? <Fade in={true}>
                                            <ListItem sx={{ border: "1px solid grey", borderRadius: "12px", width: "100%" }}>
                                                <ListItemIcon>
                                                    {isPrivate ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg> :
                                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>}
                                                </ListItemIcon>
                                                <ListItemText primary={isPrivate ? "nife/secret-app" : "nife/amazing-app"}
                                                    secondary={isPrivate ? "Private repo • Last updated just now" : "Public repo • Last updated an hour ago"} />
                                            </ListItem>
                                        </Fade> :
                                            <Fade orientation="vertical" in={true}>
                                                <ListItem sx={{ border: "1px solid grey", borderRadius: "12px" }}>
                                                    <ListItemIcon>
                                                        {isPrivate ? <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg> :
                                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>}
                                                    </ListItemIcon>
                                                    <ListItemText primary={isPrivate ? "nife/secret-app" : "nife/amazing-app"}
                                                        secondary={isPrivate ? "Private repo • Last updated just now    " : "Public repo • Last updated an hour ago"} />
                                                </ListItem>
                                            </Fade>}
                                        <Box sx={{ border: "1px solid grey", width: "90%", paddingTop: "10px", borderRadius: "12px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>{" "}</Box>
                                        <Box sx={{ border: "1px solid #80808085", width: "70%", paddingTop: "10px", borderRadius: "12px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }}>{" "}</Box>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </SwiperSlide>

                    <SwiperSlide key={2}>

                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >

                            <Grid item xs={12} md={6}>
                                <Paper variant='outlined' sx={{ p: 2, borderRadius: "12px", height: "280px" }}>
                                    <ListItem sx={{ p: 0 }}>
                                        <ListItemIcon>
                                            <IconButton aria-label='Docker Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path></svg>
                                            </IconButton>
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography variant='h5'>Deploy Docker containers</Typography>}
                                            secondary={"Public or Private with Secrets"} />
                                    </ListItem>
                                    <Typography variant='body2' sx={{ p: 1, mb: 1, opacity: "0.5" }}>
                                        Build Docker containers, host them on any registry and atomically deploy your new version worldwid.</Typography>


                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Grid item xs={5} sx={{ textAlign: "right" }}>
                                            <Chip size='small' sx={{ mb: 1, mr: 1 }} variant='outlined' label="Gitlab registry" />

                                            <Chip size='small' sx={{ mb: 1, mr: 1 }} variant='outlined' label="Docker Hub registry" />

                                            <Chip size='small' sx={{ mb: 1, mr: 1 }} variant='outlined' label="Github registry" />



                                        </Grid>
                                        <Grid item xs={5}>
                                            <LinearProgress aria-label="Loading data from docker registry" />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton aria-label='Data collecting Icon'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"></path></svg>
                                            </IconButton>
                                        </Grid>

                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </SwiperSlide>

                    <SwiperSlide key={3}>

                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >

                            <Grid item xs={12} md={6}>
                                <Paper variant='outlined' sx={{ p: 2, borderRadius: "12px", height: "280px" }}>
                                    <ListItem sx={{ p: 0 }}>
                                        <ListItemIcon>
                                            <IconButton aria-label='Source code Icon' sx={{ borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg>
                                            </IconButton>
                                        </ListItemIcon>
                                        <ListItemText primary={<Typography variant='h5'>Deploy with Source code</Typography>}
                                            secondary={"Public or Private"} />
                                    </ListItem>
                                    <Typography variant='body2' sx={{ p: 1, mb: 1, opacity: "0.5" }}>We build and deploy your app with blazing fast built-in continuous deployment. Just upload your source code.</Typography>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"

                                    >
                                        {isPrivate && <CircularProgress size={15} />}
                                        <Typography variant="h6" style={{ marginTop: '0px', color: "grey" }}>

                                            {isPrivate && 'Uploading file...'}


                                            {!isPrivate && <Grow in={true}>
                                                <Button size='medium' variant='contained'
                                                    startIcon={<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path></svg>} color={"primary"} sx={{ color: "black", cursor: "auto", textTransform: "capitalize", mb: 2, boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px", borderRadius: "12px" }}>Successfully Build!</Button>

                                            </Grow>}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                </Swiper>
            </Grid>


        </div>
    )
}
