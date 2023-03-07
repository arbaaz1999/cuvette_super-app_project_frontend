import { Box, styled, TextField, Typography } from '@mui/material'
import React from 'react'

const NotesBox = styled(Box)`
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    background: #F1C75B;
    border-radius: 16px;
`;



const NotesCard = () => {
    return (
        <>
            <NotesBox component='div'>
                <Typography variant='h4' fontWeight='600'>All Notes</Typography>
                <TextField
                    multiline
                    rows={16}
                    fullWidth
                />
            </NotesBox>
        </>
    )
}

export default NotesCard