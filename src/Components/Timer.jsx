import React, { useState } from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return (
        <>
            <Box
                component='div'
                p={3}
                sx={{
                    width: '100%',
                    borderRadius: '16px',
                    background: '#1E2343',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
            >
                <Box
                    component='div'
                    p={2}
                    sx={{
                        alignSelf: 'center',
                        borderRadius: '50%',
                        background: '#1E2343',
                        boxShadow: '-3px -7px 16px rgba(95, 88, 88, 0.23), inset 0px 6px 26px rgba(0, 0, 0, 0.61)',
                    }}
                >
                    <CountdownCircleTimer
                        isPlaying
                        trailColor='#00000000'
                        duration={12}
                        colors='#FF6A6A'
                        strokeWidth={8}
                        onComplete={() => {
                            return { shouldRepeat: true, delay: 1.5, newInitialRemainingTime: 10 } // repeat animation in 1.5 seconds
                        }}
                    >
                        {({ remainingTime }) => <h1 style={{ color: '#fff' }}>{remainingTime}</h1>}
                    </CountdownCircleTimer>
                </Box>
                <Box
                    component='div'
                    sx={{
                        maxWidth: '70%',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                    }}
                >
                    <Box component='div' sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <Typography variant='h5' sx={{ color: '#949494' }}>Hours</Typography>
                        <IconButton size='large' onClick={() => setHours(hours + 1)}>
                            <ArrowDropUpIcon sx={{ color: '#949494', fontSize: '3rem' }} />
                        </IconButton>
                        <Typography variant='h5' sx={{ color: '#fff' }}>{hours}</Typography>
                        <IconButton size='large' onClick={() => setHours(hours - 1)}>
                            <ArrowDropDownIcon sx={{ color: '#949494', fontSize: '3rem' }} />
                        </IconButton>
                    </Box>
                    <Typography variant='h5' sx={{ color: '#fff' }}>:</Typography>
                    <Box component='div' sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <Typography variant='h5' sx={{ color: '#949494' }}>Minutes</Typography>
                        <IconButton size='large' onClick={() => setMinutes(minutes + 1)}>
                            <ArrowDropUpIcon sx={{ color: '#949494', fontSize: '3rem' }} />
                        </IconButton>
                        <Typography variant='h5' sx={{ color: '#fff' }}>{minutes}</Typography>
                        <IconButton size='large' onClick={() => setMinutes(minutes - 1)}>
                            <ArrowDropDownIcon sx={{ color: '#949494', fontSize: '3rem' }} />
                        </IconButton>
                    </Box>
                    <Typography variant='h5' sx={{ color: '#fff' }}>:</Typography>
                    <Box component='div' sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <Typography variant='h5' sx={{ color: '#949494' }}>Seconds</Typography>
                        <IconButton size='large' onClick={() => setSeconds(seconds + 1)}>
                            <ArrowDropUpIcon sx={{ color: '#949494', fontSize: '3rem' }} />
                        </IconButton>
                        <Typography variant='h5' sx={{ color: '#fff' }}>{seconds}</Typography>
                        <IconButton size='large' onClick={() => setSeconds(seconds - 1)}>
                            <ArrowDropDownIcon sx={{ color: '#949494', fontSize: '3rem' }} />
                        </IconButton>
                    </Box>
                    <Button
                        variant='filled'
                        fullWidth
                        sx={{ flexGrow: '1', background: '#FF6A6A', color: '#fff', borderRadius: '40px', '&:hover': { background: '#ff3d3d' } }}
                    >
                        Start
                    </Button>

                </Box>
            </Box>
        </>
    )
}

export default Timer