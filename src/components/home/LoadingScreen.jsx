import { Grid } from '@mui/material'
import React from 'react'
import nifelogo from "../../images/logo/logo.png";

export default function LoadingScreen() {
    return (
        <div>
            <Grid container direction={"column"} justifyContent="center"
                alignItems="center" sx={{ height: "100vh" }}>
                <Grid item>
                    <img alt='Nife logo' loading='lazy' style={{ height: "80px", aspectRatio: "16/9", objectFit: "cover" }} src={nifelogo} />

                </Grid>
                <Grid item>
                    <div className='loader-line'></div>

                </Grid>
            </Grid>
        </div>
    )
}
