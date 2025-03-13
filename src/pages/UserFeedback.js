import { Avatar, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, ListItem, ListItemAvatar, ListItemText, Paper, Rating, Tooltip, Typography, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import * as React from 'react';

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
        "customer": "Akhilesh Shetty",
        "from": "Founder & CEO, Avirays",
        "message": "Nife.io has been a game-changer for us at Avirays. Our website, which used to face numerous performance issues, is now running smoothly and efficiently thanks to nife.io's cutting-edge platform. The user- friendly interface and robust features of nife.io have enhanced our site’s performance and made it easier for us to manage and deploy updates.",
        "image": "https://nife.io/wp-content/uploads/2024/05/AkhileshShetty.jpg"
    },
    {
        "customer": "Shivam Gupta",
        "from": "CEO, Instaminutes",
        "message": "We got all our branches updated in time, and releases are very smooth",
        "image": "https://nife.io/wp-content/uploads/2023/04/Shivam_Pic.jpg"
    }
    ,
    {
        "customer": "chaotix.ai",
        "from": "chaotix.ai",
        "message": "Nida and the team are absolutely committed to solving the problems of their partners. Some of our deployment challenges were stuck for over a month. While we spent days trying to get customer support from the similar services provider that we were using at that moment and looking for solutions over the internet, we came across the team of Nife. They’ve been extremely helpful in making sure our product went live without friction. They were able to reduce our deployment time from 20 minutes to less than 5 minutes. Nida’s team were available for calls and assistance even at odd hours, going out of their way to smoothen our transition. I sincerely appreciate her and the team’s work.",
        "image": "https://nife.io/wp-content/uploads/2024/05/chaotix_ai_logo-removebg-preview.png"
    }
    ,
    {
        "customer": "Syed Shazli Hussain",
        "from": "Advisory Engineer, Reliance Jio",
        "message": "Nife is a very simple to use, easy product. Good for SMBs and Startups.",
        "image": "https://nife.io/wp-content/uploads/2024/06/1516849371983.jpg"
    }
    ,
    {
        "customer": "Nabayan Roy",
        "from": "Director of Product, Projects, and Software Applications. Structo",
        "message": "Nife's platform product, Oikos, impressed me with its simple design and user-friendly onboarding experience. Oikos is the preferred platform for companies looking for easy and hassle-free deployment at competitive pricing, aimed at reducing operational costs associated with maintaining and managing cloud infrastructure and deployments.",
        "image": "https://nife.io/wp-content/uploads/2024/05/1715762806866.jpg"
    },
    {
        "customer": "Kiran Iyengar",
        "from": "Senior Director at JaMocha Tech",
        "message": "The platform is super intuitive with cost optimization and quick ci/cd integrations. Deployments took less than 30 seconds. To add to it the platform provides application monitoring metrics.",
    }
]

export default function UserFeed() {
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'));

    const getCols = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        return 3;
    };

    const [open, setOpen] = React.useState(false);
    const [item, setitem] = React.useState(false);
    const [showTill, setshowTill] = React.useState(6);

    const handleClickOpen = (item) => {
        setOpen(true);
        setitem(item)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Box sx={{ py: 2 }}>

            </Box>
            <h2   className="title mx-auto text-align-center gradient-text fw-bold">
            Trusted by many teams.
            </h2>
      
            <Typography className="gray-50 text-center mb-4" variant="body1">
                Testimonials - Customers who trust us
            </Typography>
            <Box sx={{ width: "100%", overflowY: 'auto' }}>
                <ImageList variant="masonry" cols={getCols()} gap={isMobile ? 4 : 8}>
                    {customerReviews.slice(0, showTill).map((e, index) => (
                        <ImageListItem key={index}>
                            <Tooltip title="Expand story">
                                <Paper variant='outlined' onClick={() => handleClickOpen(e)} sx={{
                                    bgcolor: "transparent",
                                    m: 2, p: 3, borderRadius: "5px",
                                    '&:hover': {
                                        bgcolor: "#00000070",
                                        cursor: 'pointer'
                                    }
                                }}>
                                    <Rating readOnly name="size-small" defaultValue={5} size="small" />
                                    <Typography sx={{ mb: 2, fontSize: isMobile ? "12px" : "14px" }}>
                                        <svg stroke="currentColor" fill="grey" strokeWidth="0" viewBox="0 0 448 512" style={{ marginRight: "10px" }} height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"></path></svg>
                                        {e.message.slice(0, 100)}...
                                        <svg stroke="currentColor" fill="grey" strokeWidth="0" viewBox="0 0 448 512" style={{ marginLeft: "10px" }} height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                                    </Typography>
                                    <Divider />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar src={e.image} />
                                        </ListItemAvatar>
                                        <ListItemText primary={e.customer} secondary={e.from} />
                                    </ListItem>
                                </Paper>
                            </Tooltip>
                        </ImageListItem>
                    ))}
                </ImageList>
                {showTill < customerReviews.length && <Button fullWidth onClick={() => setshowTill(10)}>Show more</Button>}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        Our Happy Customers! {item.customer}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <ListItem secondaryAction={
                                <Rating readOnly name="size-small" defaultValue={5} size="small" />
                            }>
                                <ListItemAvatar>
                                    <Avatar src={item.image} />
                                </ListItemAvatar>
                                <ListItemText primary={item.customer} secondary={item.from} />
                            </ListItem>
                            <Typography sx={{ mb: 2, fontSize: isMobile ? "12px" : "14px" }}>
                                <svg stroke="currentColor" fill="grey" strokeWidth="0" viewBox="0 0 448 512" style={{ marginRight: "10px" }} height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"></path></svg>
                                {item.message}
                                <svg stroke="currentColor" fill="grey" strokeWidth="0" viewBox="0 0 448 512" style={{ marginLeft: "10px" }} height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
                            </Typography>


                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>close</Button>

                    </DialogActions>
                </Dialog>

            </Box>
        </Container>
    );
}


