import React from 'react'
import { Grid } from '@mui/material'
import { LeftBanner, RegistrationForm } from '../Components/index'



const Signup = () => {
    return (
        <>
            <Grid container height='100vh'>
                <LeftBanner />
                <RegistrationForm />
            </Grid>
        </>
    )
}

export default Signup