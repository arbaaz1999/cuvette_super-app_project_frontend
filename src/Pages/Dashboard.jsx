import { Box, Grid } from '@mui/material'
import React from 'react'
import { ProfileCard } from '../Components'

const Dashboard = () => {
    return (
        <>
            <Box sx={{ padding: '3% 5%' }}>
                <Grid container>
                    <Grid item xs={4}>
                        <ProfileCard />
                    </Grid>

                </Grid>

            </Box>
        </>
    )
}

export default Dashboard