import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AnimationTitles from '../functions/AnimationTitles'
import logo from "../../images/logo/logo.png";

export default function OurStory() {
    return (
        <div>
            <Container sx={{mb:10}}>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                        <img src={logo} alt='Nife Labs logo' style={{width:"100%",aspectRatio:"16/9",objectFit:"cover"}}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AnimationTitles duration={1} title="Our Story" className="title" />
                        <Typography variant='body1' sx={{opacity:0.8,mb:2}}>
                            Founded in 2020, in peak of pandemic in a small condo in Singapore, Nife has taken the the mission to accelerate the growth of technology products and companies. Its by Tech for Tech!
                            </Typography>
                            <Typography variant='body1' sx={{opacity:0.8,mb:2}}>
                            Nife (naɪf) is an alloy of Nickel(Ni) and Ferrous(Fe) that forms the core of planets including the Earth.
                            </Typography>
                            <Typography variant='body1' sx={{opacity:0.8,mb:2}}>
                            Knife(pun) cuts Complexity – at the core of applications i.e. Infrastructure. Reducing Complexity at the core of Hybrid, Multi-Cloud, and Edge Deployments enabling <Typography component={"span"}  sx={{fontWeight:"bold",color:"#0d6efd"}}>Connected Last Mile Computing</Typography>
                        </Typography>
                    </Grid>
                   
                </Grid>
            </Container>
        </div>
    )
}
