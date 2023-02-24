import { Button, Grid, styled, Typography } from '@mui/material'
import background from '../Assets/signup_banner_img.jpg'
import React from 'react'

const Banner = styled(Grid)`
    background:url(${background});
    background-size:cover;
    height:100%;
    color:'#fff';
    padding:50px 30px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width: 768px){
        height: 50vh;
        position:sticky;
        top:0;
        z-index: 10;
    }
`;

const LeftBanner = () => {
    return (
        <>
            <Banner item xs={12} sm={12} md={6}>
                <Grid container alignItems='center'>
                    <Typography variant='body1' sx={{ color: '#fff', fontSize: { md: '22px', sm: '18px', xs: '12' } }}>Already have an acoount ?</Typography>
                    <Button
                        type='button'
                        variant='contained'
                        sx={{
                            background: '#72DB73', borderRadius: '33px', marginLeft: { md: '22px', sm: '18px', xs: '14px' }, width: { md: '140px', sm: '120', xs: '80px' }, '&:hover': {
                                background: '#5AAD5C'
                            }
                        }}
                        size='medium'
                    >Login
                    </Button>
                </Grid>
                <Typography variant='h1' sx={{ color: '#fff', fontWeight: '900', fontSize: { md: '70px', sm: '60px', xs: '50px' } }}>
                    Discover new things on Superapp
                </Typography>
            </Banner>
        </>
    )
}

export default LeftBanner