import { Box, Grid } from '@mui/material'
import React from 'react'
import { ProfileCard, WeatherCard } from '../Components'

const Dashboard = () => {
    return (
        <>
            <Box sx={{ width: "90%", margin: '3% auto' }}>
                <Grid container spacing={{ md: 2, sm: 2, xs: 2 }}>
                    <Grid item md={4} sm={6} xs={12}>
                        <ProfileCard />
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <WeatherCard />
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Dashboard