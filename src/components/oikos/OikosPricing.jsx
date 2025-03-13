import TelegramIcon from '@mui/icons-material/Telegram';
import { Avatar, Button, Container, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Paper, Rating, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { BsStars } from 'react-icons/bs';
import { FaCheckCircle, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { ImRocket } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { MdOutlineKeyboardBackspace } from 'react-icons/md';


// const useStyles = makeStyles((theme) => ({
//     card: {
//         position: "relative",
//         top: "0px",
//         transition: "top ease 0.5s",
//         '&:hover': {
//             top: "-10px"
//         }
//     },
// }))

const customerReviews = [
    {
        "customer": "Samir Hasan",
        "from": "CEO, Knowtified",
        "message": "We choose Nife because our customers need global hyperlocal Infra. Our customers get Privacy, Security and even the regional scaling via Nife",
        "image": "https://nife.io/wp-content/uploads/2023/04/resize.png"
    },
    {
        "customer": "Deepak Pedro",
        "from": "Product Manager, Towno",
        "message": "Nife was of great help in all our deployment and hosting challenges. The team was available for any queries at any given point. Looking forward to having more successful collabs in future with Nife.",
        "image": "https://nife.io/wp-content/uploads/2023/04/1678762000357.jpeg"
    },
    {
        "customer": "Shivam Gupta",
        "from": "CEO, Instaminutes",
        "message": "We got all our branches updated in time, and releases are very smooth",
        "image": "https://nife.io/wp-content/uploads/2023/04/Shivam_Pic.jpg"
    }
]
export const whichEnv = "dev";





function PlanAndPricing(props) {

    // const classes = useStyles();

    const freePlanExpired = false;
    const upgradePlan = false;
    const [showHobbySkip, setshowHobbySkip] = React.useState(false);


    // const handleUserOnBroad = (email) => {
    //     var ac = new ActiveCampaign("https://nife.api-us1.com", '1795baa14b413b8fa1ad0704a489c3afc016f24c0d4c4715750ef5078b7fcdf46d1926ae');
    //     var account_view = ac.api("account/view", {});
    //     ac.track_actid = "253757379";
    //     ac.track_key = "97202107d06a3691badb755df3fe5df00309ba00";
    //     ac.track_email = JSON.parse(localStorage.getItem("useronboard")).email;
    //     account_view.then(function (result) {
    //     }, function (result) {
    //     });

    //     var eventdata = {
    //         event: "loginevent",
    //         eventdata: JSON.parse(localStorage.getItem("useronboard")).firstName

    //     };

    //     var tracking_test3 = ac.api("tracking/log", eventdata);
    //     tracking_test3.then(function (result) {
    //     }, function (result) {
    //         // request error
    //     });


    // }

    // const handleFreePlan = (e) => {
    //     const headers = {
    //         'Content-Type': 'application/json'
    //     }
    //     const data = {
    //         'userId': localStorage.getItem("userId"),
    //         'isfreePlan': true,
    //     }
    //     axios.put(`${CONFIG_APP_BASE_API}/api/v1/freePlan`, data, { headers: headers }).then((res) => {
    //         if (res.data) {
    //             history.push("/")
    //             props.openLoginAgain(true)
    //             if (localStorage.getItem("useronboard") && JSON.parse(localStorage.getItem("useronboard")).email) {
    //                 handleUserOnBroad(JSON.parse(localStorage.getItem("useronboard")).email)
    //             }
    //         }
    //     }, (err) => {
    //         enqueueSnackbar(err.message, {
    //             variant: 'error',
    //             anchorOrigin: {
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //             },
    //         })
    //         console.log(err.response.status)

    //     }
    //     )

    // }
    // const handleProductionPlan = (plan) => {
    //     props.logout()
    //     window.location.assign(calculatePayment(plan))


    // }
    return (
        <div style={{ textAlign: "center" }} >





            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >

                <Grid item lg={2}>
                    {upgradePlan && <div>

                        <IconButton>
                            <MdOutlineKeyboardBackspace style={{ fontSize: "35px" }} />
                        </IconButton>


                    </div>}

                </Grid>
                <Grid item lg={8}>
             
                  <h1 style={{ textAlign: "center" }}>  <span style={{color:"#13d7ff"}}>O</span>ikos Plans & Pricing.</h1>
                    <p style={{ textAlign: "center", margin: "0px 0px 0px 15px", color: "#fff", paddingBottom: "10px" }}>Flexible and transparent pricing to fit you and your business needs.</p>
                </Grid>
                <Grid item lg={2}>

                </Grid>

            </Grid>

            <Grid container justifyContent="center" spacing={0}>


                <Grid item onMouseEnter={() => setshowHobbySkip(true)} onMouseLeave={() => setshowHobbySkip(false)} sx={{
                    position: "relative",
                    top: "0px",
                    transition: "top ease 0.5s",
                    '&:hover': {
                        top: "-10px"
                    }
                }} style={{ background: "linear-gradient(to bottom, #160044, #00d7ff)", width: "270px", margin: "10px", boxShadow: "none", padding: "20px", borderRadius: "12px", boxSizing: "border-box" }}>
                    <h1 style={{ color: "white" }} >Hobby</h1>
                
                        <Button className="btn btn-outline-primary ChoosePlanBtn"

                            onClick={() => {

                            }}

                            style={{
                                padding: "14px 20px",
                                width: "100%",
                                background: "#fff",
                                border: "none",
                                borderRadius: "20px",
                                color: "#160044",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                boxShadow: "none",

                            }}
                        >
                        free tiral for 14 days
                        </Button>
                    <p className="price" style={{ color: "white", fontSize: "25px", textDecoration: "underline white" }}>$5 /mo</p>
                    <p style={{ color: "white", fontSize: "15px", marginTop: "0px" }}>Per Microservice</p>
                    <p className="per-month" style={{ color: "white", textAlign: "center", fontSize: "12px", marginBottom: "10px" }}>Ideal for One Application.</p>
                    <div style={{ marginTop: "30px", color: "white", textAlign: "left", lineHeight: "1.5", fontSize: "0.9rem" }}>
                        <List dense={true}>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#fff" }} />
                                </ListItemIcon>
                                Deploy from GIT Repo directly
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#fff" }} />
                                </ListItemIcon>
                                No Credit Card Needed
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#fff" }} />
                                </ListItemIcon>
                                Deploy a single application to a Location
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#fff" }} />
                                </ListItemIcon>
                                Deploy to Nife Public Cloud
                            </ListItem>
                        </List>
                    </div>
                </Grid>

                <Grid item sx={{
                    position: "relative",
                    top: "0px",
                    transition: "top ease 0.5s",
                    '&:hover': {
                        top: "-10px"
                    }
                }} style={{ width: "270px", margin: "10px", background: "#fff", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", padding: "20px", borderRadius: "12px", boxSizing: "border-box" }}>
                    <h1 className="h1" style={{color:"black"}}>Starter </h1>

                  <Button className="btn btn-outline-primary ChoosePlanBtn"
                            endIcon={<TelegramIcon style={{ transform: "roate(180)" }} />}
                            // onClick={() => }
                            style={{
                                padding: "14px 20px",
                                width: "100%",
                                background: "#160044",
                                border: "none",
                                borderRadius: "20px",
                                color: "#fff",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                boxShadow: "0px 2px 18px 0px rgba(22, 33, 113, 0.26)",
                                '&:hover': {
                                    background: "linear-gradient(to bottom, #160044, #00d7ff)",
                                    color: "red",
                                },

                            }}
                        >Get Started
                        </Button>
                    <p className="price" style={{ color: "#111", fontSize: "25px", fontFamily: "Popins, sans-serif", textDecoration: "underline #141455" }}>$99 /mo </p>
                    <p style={{ color: "#111", fontSize: "15px" }}>Per Microservice</p>
                    <p className="per-month" style={{ color: "#111", textAlign: "center", fontSize: "12px", marginBottom: "10px" }}>Ideal for Small Scale. Simple, straight forward and serverless deployments.</p>
                    <div style={{ marginTop: "30px", color: "#111", textAlign: "left", lineHeight: "1.5", fontSize: "0.9rem" }}>
                        <List dense="true">
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Hobby features +
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Deploy from Docker and More
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                BYOH (Bring your own Host)
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Deploy an application to any Location
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Secrets and Global Environment variables
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Invite a member
                            </ListItem>
                        </List>
                    </div>

                </Grid>

                <Grid item sx={{
                    position: "relative",
                    top: "0px",
                    transition: "top ease 0.5s",
                    '&:hover': {
                        top: "-10px"
                    }
                }} style={{ width: "270px", margin: "10px", background: "#fff", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", padding: "20px", borderRadius: "12px", boxSizing: "border-box" }}>
                    <h1 className="h1" style={{color:"black"}}>Premium</h1>

                  
                        <Button className="btn btn-outline-primary ChoosePlanBtn"
                            endIcon={<ImRocket />}
                            // onClick={() => handleProductionPlan("premium")}
                            style={{
                                padding: "14px 20px",
                                width: "100%",
                                background: "#160044",
                                border: "none",
                                borderRadius: "20px",
                                color: "#fff",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                boxShadow: "0px 2px 18px 0px rgba(22, 33, 113, 0.26)",
                            }}
                        >Get Started
                        </Button>
                    <p className="price" style={{ color: "#111", fontSize: "25px", fontFamily: "Popins, sans-serif", textDecoration: "underline #0983b6" }}>$169 /mo</p>
                    <p style={{ color: "#111", fontSize: "15px", marginTop: "0px" }}>Per Microservice</p>
                    <p className="per-month" style={{ color: "#111", textAlign: "center", fontSize: "12px", marginBottom: "10px" }}>Ideal for performance-centric, complex applications, connecting hybrid infrastructure to the global edge.</p>
                    <div style={{ marginTop: "30px", color: "#111", textAlign: "left", lineHeight: "1.5", fontSize: "0.9rem" }}>
                        <List>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Starter features +
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Complex, Hybrid, and Private Deployments
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                5 Deployments to any locations
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Cost-effective Reservations With Defined Capacity Plans
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Contact Support
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Workload Management
                            </ListItem>
                        </List>
                    </div>

                </Grid>

                <Grid item sx={{
                    position: "relative",
                    top: "0px",
                    transition: "top ease 0.5s",
                    '&:hover': {
                        top: "-10px"
                    }
                }} style={{ width: "270px", margin: "10px", background: "#fff", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", padding: "20px", borderRadius: "12px", boxSizing: "border-box" }}>
                    <h1 className="h1" style={{color:"black"}}>Enterprise</h1>

                   <Button className="btn btn-outline-primary ChoosePlanBtn"
                            endIcon={<IoMdCall />}
                            onClick={() => window.location.assign("https://nife.io/contact-us/")}
                            style={{
                                padding: "14px 20px",
                                width: "100%",
                                background: "#160044",
                                border: "none",
                                borderRadius: "20px",
                                color: "#fff",
                                fontWeight: "bold",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                boxShadow: "0px 2px 18px 0px rgba(22, 33, 113, 0.26)",
                            }}
                        >Get in touch
                        </Button>

                    <p className="price" style={{ color: "#111", fontSize: "25px", fontFamily: "Popins, sans-serif", textDecoration: "underline #01ccf6" }}>Customized plan</p>
                    <p style={{ color: "#111", fontSize: "15px", marginTop: "0px" }}>Unlock Everything</p>
                    <p className="per-month" style={{ color: "#111", textAlign: "center", fontSize: "12px", marginBottom: "10px" }}>Bespoke for extensive super scale, enterprise application, network and infrastructure needs.</p>
                    <div style={{ marginTop: "30px", color: "#111", textAlign: "left", lineHeight: "1.5", fontSize: "0.9rem" }}>
                        <List>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Premium features +
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Custom Access to Edge
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Bring your own Edge
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Bespoke Platform To Fit Your Specific Needs
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Unlimited Invite Members
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Custom Onboarding
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Contact Support
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Monitoring Platform
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Dedicated Account Manager
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: "30px" }}>
                                    <FaCheckCircle style={{ color: "#160044" }} />
                                </ListItemIcon>
                                Custom Pricing to fit your enterprise needs
                            </ListItem>
                        </List>
                    </div>
                </Grid>
            </Grid>
            <Container minWidth={false}>

                <Grid container sx={{ px: 2, mb: 5 }}>
                    <Grid item xs={12}>
                        <Divider>
                            <Typography sx={{ textAlign: "center", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "3.2px", my: 4, p: 2 }}><BsStars /> Trusted by many teams <BsStars /></Typography>
                        </Divider>
                    </Grid>
                    {customerReviews.map((e) => {
                        return <Grid item xs={4}>
                            <Paper elevation={0} sx={{
                                borderRadius: '8px', // You can adjust the border radius as needed
                                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.3)',
                                '&:hover': {
                                    boxShadow: "rgba(22,0, 68, 0.2) 0px 0.05rem 1.05rem 0px",
                                },
                                // boxShadow: "0 30px 60px rgba(0,0,0,0.6),0 0 0 1px rgba(0,0,0,.05)", 
                                m: 2, p: 3,
                            }}>
                                <Rating readOnly name="size-small" defaultValue={5} size="small" />
                                <Typography sx={{ mb: 2 }}>
                                    <FaQuoteLeft style={{ marginRight: "10px" }} />
                                    {e.message}
                                    <FaQuoteRight style={{ marginLeft: "10px" }} />  </Typography>

                                <Divider />
                                <ListItem>
                                    <ListItemAvatar><Avatar src={e.image} /></ListItemAvatar>
                                    <ListItemText primary={e.customer} secondary={e.from} />
                                </ListItem>
                            </Paper>
                        </Grid>
                    })}

                    {/* <Grid item xs={12}>
                        <Typography sx={{ textAlign: "center", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "3.2px", my: 4, pt: 2 }}>Compare plans <BsStars /></Typography>
                    </Grid> */}
                    {/* <Grid item xs={12}>
                        {false && <div className="main">
                            <table className="price-table">
                                <tbody>
                                    <tr className="price-table-head">
                                        <td></td>
                                        <td>
                                            Starter

                                        </td>
                                        <td>
                                            <span class="animate-charcter"> Most Popular</span>
                                            <br />
                                            Premium
                                        </td>
                                        <td className="green-width">
                                            Enterprise
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="price">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            fill="#000000"

                                            version="1.1"
                                            id="Layer_1"
                                            viewBox="0 0 512 512"
                                            xmlSpace="preserve"
                                        >

                                            <path fill={"url(#MyGradient3)"} d="M508.645,18.449c-2.929-2.704-7.133-3.51-10.826-2.085L6.715,204.446c-3.541,1.356-6.066,4.515-6.607,8.264c-0.541,3.75,0.985,7.496,3.995,9.796l152.127,116.747c-0.004,0.116-0.575,0.224-0.575,0.342v83.592c0,3.851,2.663,7.393,6.061,9.213c1.541,0.827,3.51,1.236,5.199,1.236c2.026,0,4.181-0.593,5.931-1.756l56.12-37.367l130.369,99.669c1.848,1.413,4.099,2.149,6.365,2.149c1.087,0,2.186-0.169,3.248-0.516c3.27-1.066,5.811-3.672,6.786-6.974L511.571,29.082C512.698,25.271,511.563,21.148,508.645,18.449z M170.506,321.508c-0.385,0.36-0.7,0.763-1.019,1.163L31.659,217.272L456.525,54.557L170.506,321.508z M176.552,403.661v-48.454l33.852,25.887L176.552,403.661z M359.996,468.354l-121.63-93.012c-1.263-1.77-2.975-3.029-4.883-3.733l-47.29-36.163L480.392,60.86L359.996,468.354z" />

                                        </svg>
                                        <br /><span>$5/mo</span>
                                            <br /><span style={{ fontSize: "14px", marginBottom: "20px" }}>Per Microservice</span>
                                        </td>
                                        <td className="price" style={{padding:"10px"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128">
                                                <defs />
                                                <linearGradient id="MyGradient">
                                                    <stop offset="5%" stop-color="#1CD8D2" />
                                                    <stop offset="95%" stop-color="#93EDC7" />
                                                </linearGradient>
                                                <path fill={"url(#MyGradient3)"} d="M76.1 91.4V71.7a1 1 0 00-.2-.6l-5.7-6.9V15.4a1.1 1.1 0 00-.1-.4.5.5 0 000-.1l-5.8-10a1 1 0 00-1.7 0l-5.9 10a.5.5 0 000 .1 1.2 1.2 0 00-.1.4v48.8l-5.7 6.9a1 1 0 00-.2.6v19.7a1 1 0 001 1h10.6V95a1 1 0 102 0v-2.7h10.8a1 1 0 001-1zm-17.6-75h9.7v4h-9.7zm4.8-9l4.1 7h-8.1zM52.6 72l4-4.8v23h-4zm11.7 18.3V56.7a1 1 0 10-2 0v33.7h-3.8v-68h9.7v68zm9.8 0h-4v-23l4 4.7z" />
                                                <path fill={"url(#MyGradient3)"} d="M59 94.7a1 1 0 00-1 1v10.9a4.2 4.2 0 00-3.3 2.7 1 1 0 00.6 1.3 1 1 0 00.4 0 1 1 0 001-.6 2.2 2.2 0 012.8-1.4 1 1 0 10.7-1.9H60v-11a1 1 0 00-1-1zM68.7 101.2v-5.5a1 1 0 00-2 0v5.5a1 1 0 102 0zM60.2 112.8a1.4 1.4 0 011.3 1 1 1 0 001.9.3 2.5 2.5 0 014.7 1.4 1 1 0 002 0 4.6 4.6 0 00-7.4-3.6 3.4 3.4 0 00-2.5-1.1 1 1 0 000 2zM73.2 109.7a1 1 0 002 0 6.1 6.1 0 00-6.1-6.1 1 1 0 000 2 4.1 4.1 0 014.1 4zM105.2 109a9.8 9.8 0 00-19-3 6.4 6.4 0 00-2.8-.7 6.5 6.5 0 00-6.5 6.5 1 1 0 002 0 4.5 4.5 0 014.5-4.5 4.4 4.4 0 012.8 1 1 1 0 001.6-.6 7.8 7.8 0 0115.4 1.4 1 1 0 002 0zM7.8 123a8 8 0 006.2-.1 1 1 0 00-.8-1.8 6 6 0 01-8-3 6 6 0 012.9-8 9.4 9.4 0 001.5.8 1 1 0 00.4.1 1 1 0 00.4-2 7.5 7.5 0 01-1-13.2 1 1 0 00.1-1.6A4.2 4.2 0 018.1 91a4.2 4.2 0 017.1-3 1 1 0 001 .2 1 1 0 00.6-.6 5.8 5.8 0 0111.3 1.1A7.4 7.4 0 0022 96a1 1 0 002 0 5.4 5.4 0 118.6 4.4 8.9 8.9 0 00-5.4 7 6.6 6.6 0 00-1 0 6.4 6.4 0 00-4.5 1.9 1 1 0 000 1.4 1 1 0 001.4 0 4.4 4.4 0 017.5 3.1 1 1 0 002 0 6.4 6.4 0 00-3.4-5.7 6.8 6.8 0 014.2-5.9 6.8 6.8 0 019.4 5.9 1 1 0 001.4.8 4.8 4.8 0 011.8-.3 5 5 0 015 5 1 1 0 002 0 7 7 0 00-8.4-6.9 8.9 8.9 0 00-8.6-7h-.2a7.4 7.4 0 00-5.7-11.1 7.8 7.8 0 00-14.6-2.9 6.2 6.2 0 00-3.2-.9 6.2 6.2 0 00-5 10 9.4 9.4 0 00-1 13.9 8.1 8.1 0 00-3.3 4A8 8 0 007.8 123zM91.8 119.8a1 1 0 002 0 6.4 6.4 0 00-11-4.5 1 1 0 000 1.4 1 1 0 001.4 0 4.4 4.4 0 013.1-1.3 4.4 4.4 0 014.5 4.4zM125.4 103.3a7.7 7.7 0 00-3.4-6.4 8.1 8.1 0 00.7-3.3A8.3 8.3 0 00107 90a5.8 5.8 0 00-4 10.6 1 1 0 101.1-1.7 3.8 3.8 0 013.2-6.8 1 1 0 001.2-.6 6.3 6.3 0 0112.2 2 6.2 6.2 0 01-1 3.3 1 1 0 000 .8 1 1 0 00.5.6 5.6 5.6 0 011 9.5 8.4 8.4 0 00-2.8-1.6 1 1 0 10-.6 1.8 6.7 6.7 0 01-.4 12.8 1 1 0 00-.7 1.2 1 1 0 001 .8 1.1 1.1 0 00.2 0A8.7 8.7 0 00124 112a8.7 8.7 0 00-1.3-2.8 7.6 7.6 0 002.7-6z" />
                                            </svg>
                                            <br /><span>$79/mo</span>
                                            <br /><span style={{ fontSize: "14px", marginBottom: "20px" }}>Per Microservice</span>

                                        </td>
                                        <td className="price">
                                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128">
                                                <defs />
                                                <linearGradient id="MyGradient2">
                                                    <stop offset="5%" stop-color="#a18cd1" />
                                                    <stop offset="95%" stop-color="#fbc2eb" />
                                                </linearGradient>
                                                <path fill={"url(#MyGradient3)"} d="M62.6 103.3a1 1 0 00-1.4 0L44 120.8a1 1 0 000 1.4 1 1 0 00.7.3 1 1 0 00.7-.3l17.3-17.3a1 1 0 000-1.5zM58.7 116.3a1 1 0 00.7-.3l7.2-7.2a1 1 0 00-1.4-1.5l-7.2 7.3a1 1 0 00.7 1.7zM55.2 117.4l-2.8 2.8a1 1 0 00.7 1.7 1 1 0 00.7-.3l2.8-2.8a1 1 0 000-1.4 1 1 0 00-1.4 0zM5.9 84.1a1 1 0 00.7.3 1 1 0 00.7-.3l17.4-17.3a1 1 0 10-1.5-1.4L6 82.7a1 1 0 000 1.4zM13.4 70l7.3-7.2a1 1 0 10-1.5-1.4L12 68.6a1 1 0 00.7 1.7 1 1 0 00.7-.3zM7.8 75.6l2.8-2.8a1 1 0 000-1.4 1 1 0 00-1.4 0l-2.8 2.8a1 1 0 000 1.4 1 1 0 00.7.3 1 1 0 00.7-.3zM68 33.6L27.1 40a1 1 0 00-.5.3L20 46.8a1 1 0 000 1.5l16.6 16.6-4.7 4.7a1 1 0 000 1.5l11.5 11.4-4.6 4.6a1 1 0 00.7 1.7 1 1 0 00.7-.3l4.6-4.6L57 96a1 1 0 001.4 0l4.7-4.7 16.7 16.6a1 1 0 001.4 0l6-6 .5-.5a1 1 0 00.3-.6L94.4 60l20.3-20.3a22.8 22.8 0 006-10.3.6.6 0 000-.2 22 22 0 00.5-3.4l1.1-11.3a8.1 8.1 0 00-8.8-8.8l-11.3 1a22.7 22.7 0 00-3.4.6h-.1a22.8 22.8 0 00-10.4 6zm-23.9 24L28.4 41.8 65.6 36zm-22-10l4.6-4.6 16 16-4.6 4.5zm58.4 58.2l-16-16 4.5-4.5 16 16zm5.6-6.3L70.5 84 92 62.4zm16.3-90.8l11.3-1.1a6.1 6.1 0 016.7 6.7l-1.1 11.3-.2 1.3-18-18 1.3-.2zm-3.6.7l19.8 19.8a21 21 0 01-5.3 9L57.7 94 46.3 82.5 75 53.7a1 1 0 000-1.4 1 1 0 00-1.5 0L45 81.1 34 70.3l10.7-10.6 45-45a21 21 0 019-5.3zM10.9 120.4a3.3 3.3 0 001.4-.3l19.5-9.1A11.2 11.2 0 1017 96.2l-9.1 19.5a3.3 3.3 0 003 4.7zm-1.2-3.9l9-19.5a9.1 9.1 0 016.8-5.2 10.2 10.2 0 011.7-.1 9.2 9.2 0 019 10.8 9.1 9.1 0 01-5.2 6.7l-19.5 9a1.3 1.3 0 01-1.8-1.7z" />
                                                <path fill={"url(#MyGradient3)"} d="M96.2 42.3a10.5 10.5 0 10-7.4-3 10.4 10.4 0 007.4 3zm-6-16.5a8.5 8.5 0 110 12 8.4 8.4 0 010-12z" />
                                            </svg>
                                            <br />$129/mo
                                            <br /><span style={{ fontSize: "14px", marginBottom: "20px" }}>Per Microservice</span>

                                        </td>
                                        <td className="price">
                                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128">
                                                <defs />
                                                <linearGradient id="MyGradient3">
                                                    <stop offset="5%" stop-color="#89f7fe" />
                                                    <stop offset="95%" stop-color="#5c84f5" />
                                                </linearGradient>
                                                <path fill={"url(#MyGradient3)"} d="M38.6 53.2a14.6 14.6 0 0010.6-24.6 1 1 0 00-.7-.3 1.1 1.1 0 00-.7.3l-8.9 8.9-1.7-1.7a1 1 0 00-1.4 1.4l1.7 1.7-9 8.9a1 1 0 000 1.4 14.5 14.5 0 0010.1 4zm9.9-22.4a12.6 12.6 0 01-17.7 17.7z" />
                                                <path fill={"url(#MyGradient3)"} d="M2.7 102.7a1 1 0 00.3.7L24.5 125a1 1 0 00.7.3 1 1 0 00.7-.3l12.4-12.3a.8.8 0 00.4-.5l12.1-12a1 1 0 00.3-.2.9.9 0 00.2-.3l12.3-12.3a1 1 0 000-1.4l-8.4-8.4 1.5-1.5 11.8 11.9 3.7 6.4.1.1a1 1 0 00.1.2l5.1 5.1a1 1 0 00.7.3 1 1 0 00.7-.3L99.7 79a1 1 0 000-1.4l-5-5.1a1 1 0 00-.2-.1h-.1l-6.5-3.8-11.8-11.9 1.4-1.4 8.4 8.3a1 1 0 00.7.3 1 1 0 00.7-.3L125 26a1 1 0 000-1.4L103.5 3a1 1 0 00-1.4 0L89.7 15.4a.8.8 0 00-.4.5L77.2 28a1 1 0 00-.3.2.9.9 0 00-.2.3L64.4 40.8a1 1 0 000 1.4l8.4 8.4-1.5 1.4-11.4-11.4a1 1 0 00-1.4 0l-18 17.9a1 1 0 000 1.4L52 71.3l-1.4 1.4-8.4-8.3a1 1 0 00-1.4 0L3 102a1 1 0 00-.3.7zM29 79l9.3 9.3L27 99.5l-9.4-9.3zm10.7 10.8l9.3 9.3-11.1 11.1-9.3-9.3zm38.7 7.8L74.6 94 94 74.6l3.7 3.7zm-4.9-5.3l-2.8-5 16.8-16.7 5 2.8zm-4-6.5L67 83.6 78.7 72a1 1 0 000-1.4 1 1 0 00-1.4 0L65.7 82.2 46.3 62.8l16.5-16.5 19.4 19.4-1.7 1.7a1 1 0 101.4 1.4l1.7-1.7 2.2 2.2zm20.8-68l9.3 9.3-11 11.1L79 29zm10.7 10.8l9.4 9.3L99.2 49l-9.4-9.3zm1.9-23.4l20 20-11.1 11.2-9.3-9.3 10-10a1 1 0 000-1.4 1 1 0 00-1.5 0l-10 10-9.3-9.3zM77.7 30.3l9.3 9.3-9.6 9.7a1 1 0 000 1.4 1 1 0 001.4 0l9.6-9.7 9.3 9.4-11 11.1-20.2-20zM74.2 52l2 2-1.5 1.4-2-2zm-15-9.2l2.2 2.2L45 61.4l-2.2-2.2zm-5.8 30l1.9 2-1.5 1.4-2-2zm-12-6.2l20 20-11 11.2-9.4-9.3 9.6-9.7a1 1 0 00-1.4-1.4L39.6 87l-9.3-9.3zm-25 25l9.2 9.4-10 10a1 1 0 000 1.4 1 1 0 001.5 0l10-10 9.3 9.3-11.2 11.2-20-20zM43.6 28.2a1 1 0 00-.3-1.4 11.9 11.9 0 00-16.5 16.5 1 1 0 00.9.5 1 1 0 00.5-.2 1 1 0 00.3-1.4 9.9 9.9 0 0113.7-13.7 1 1 0 001.4-.3z" />
                                                <path fill={"url(#MyGradient3)"} d="M38.6 32.3a1 1 0 10.9-1.8 6.7 6.7 0 00-9 9 1 1 0 00.9.5 1 1 0 00.9-1.4 4.7 4.7 0 016.3-6.3z" />
                                            </svg>
                                            <br />$259/mo
                                            <br /><span style={{ fontSize: "14px", marginBottom: "20px" }}>Per Microservice</span>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-asset-updates" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Orchestration Platform</td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-core-updates" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Workload Management</td>
                                        <td></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-security-monitoring" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Data Plane and Control Plane (Telco) / CI/CD Pipeline</td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-uptime-monitoring" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Monitoring Platform</td>
                                        <td></td>
                                        <td>Basic</td>
                                        <td>Advanced</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> BYOH (Bring your own Host)</td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Secrets and Global Environment variables</td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> App Notificaton</td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-malware-cleanup" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Alerts and Advisories</td>
                                        <td></td>
                                        <td>Email</td>
                                        <td>Emails and Reporting</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-security-audit" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Single Sign On</td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-security-audit" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a>  Org-level controls</td>
                                        <td>Invite up to 1 member</td>
                                        <td>Invite up to 5 members</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-priority-support" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Audit Logs/ Archival</td>
                                        <td>Last 1 day</td>
                                        <td>Last 7 days</td>
                                        <td>Unlimited</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Version Control Panel</td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Application Health Dashboard</td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Organisation Management</td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                        <td><FaCheck /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> SSL/Security</td>
                                        <td>Manual Configuration</td>
                                        <td>Manual Configuration</td>
                                        <td>Advanced</td>
                                    </tr>
                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Infrastructure configuration</td>
                                        <td></td>
                                        <td>Upto 16 VCPU'S and Upto 16 GB RAM</td>
                                        <td>Upto 32 VCPU'S and Upto 32 GB RAM</td>
                                    </tr>

                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Storage</td>
                                        <td></td>
                                        <td>Evaluated on Need Basis</td>
                                        <td>Evaluated on Need Basis</td>
                                    </tr>

                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> BYOC</td>
                                        <td></td>
                                        <td></td>
                                        <td>Add upto 1</td>
                                    </tr>

                                    <tr>
                                        <td><a href="#wordpress-billing" className="price-table-help"><i className="far fa-fw fa-question-circle"></i></a> Kubernetes replicas</td>
                                        <td>1 Replica</td>
                                        <td>3 Replicas</td>
                                        <td>5 Replicas</td>
                                    </tr>

                                    <tr>

                                        <td></td>
                                        <td className="price">
                                            <Button onClick={() => handleProductionPlan(plan,whichEnv)price_prod[0])} style={{ borderRadius: "24px", background: "linear-gradient(90deg, rgb(137, 194, 254) 0%, rgb(102, 166, 255) 100%)", boxShadow: "rgba(58, 59, 69, 0.15) 0px 0.15rem 1.75rem 0px" }} variant="contained">Get started</Button>
                                        </td>
                                        <td className="price">
                                            <Button onClick={() => handleProductionPlan(plan,whichEnv)price_prod[1])} style={{ borderRadius: "24px", background: "linear-gradient(90deg, rgb(137, 194, 254) 0%, rgb(102, 166, 255) 100%)", boxShadow: "rgba(58, 59, 69, 0.15) 0px 0.15rem 1.75rem 0px" }} variant="contained">Get started</Button>
                                        </td>
                                        <td className="price">
                                            <Button onClick={() => handleProductionPlan(plan,whichEnv)price_prod[2])} style={{ borderRadius: "24px", background: "linear-gradient(90deg, rgb(137, 194, 254) 0%, rgb(102, 166, 255) 100%)", boxShadow: "rgba(58, 59, 69, 0.15) 0px 0.15rem 1.75rem 0px" }} variant="contained">Get started</Button>
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>}
                    </Grid> */}

                </Grid>
            </Container>


        </div>
    );
}


export default PlanAndPricing