import { Chip, Grid, styled, Typography } from '@mui/material'
import { profilepic } from '../Assets';
import React from 'react'

const ProfileContainer = styled(Grid)({
    background: '#5746EA',
    borderRadius: '16px',
    padding: '5%',
});

const ProfilePic = styled(Grid)`
    height: 260px;
    border: 4px solid #ffffff;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    justify-content: center;
`;

const Img = styled('img')({
    display: 'block',
})

const ProfileInfo = styled(Grid)`
    display: flex;
    flex-direction: column;
    gap: 22px;
`;



const ProfileCard = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const interests = JSON.parse(localStorage.getItem('categories'))
    console.log(interests, userInfo)
    return (
        <>
            <ProfileContainer container columnSpacing={3}>
                <ProfilePic item xs={3}>
                    <Img src={profilepic} />
                </ProfilePic>
                <ProfileInfo item xs={9}>
                    <Grid container direction='column'>
                        <Typography variant='body1' sx={{ color: '#fff' }}>{userInfo.yourName}</Typography>
                        <Typography variant='body2' sx={{ color: '#fff' }}>{userInfo.yourEmail}</Typography>
                        <Typography variant='h4' sx={{ color: '#fff' }}>{userInfo.userName}</Typography>
                    </Grid>
                    <Grid container gap={2}>
                        {
                            interests.map((e) => (

                                <Chip
                                    sx={{
                                        // marginRight: '12px',
                                        background: '#9F94FF',
                                        '.MuiChip-deleteIconColorPrimary': {
                                            background: '#9F94FF',
                                        }
                                    }}
                                    key={e.id}
                                    label={e.categoryName}
                                    onDelete={true}
                                />
                            ))
                        }
                    </Grid>
                </ProfileInfo>
            </ProfileContainer>
        </>
    )
}

export default ProfileCard