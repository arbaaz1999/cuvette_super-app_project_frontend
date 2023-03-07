import { Grid, styled } from '@mui/material'
import React from 'react'
import { NewsCard, NotesCard, ProfileCard, Timer, WeatherCard } from '../Components/index'

const DashBoardContainer = styled(Grid)(({ theme }) => ({
    display: 'grid',
    maxWidth: '90%',
    height: '100%',
    margin: '2% auto',
    placeContent: 'center',
    gridTemplateColumns: '33.33% 33.33% 33.33%',
    gridTemplateRows: '[row1-start] auto [row1-end] auto [third-line] auto [last-line]',
    columnGap: '1.5rem',
    rowGap: '1.5rem',
}));

const GridItem3 = styled(Grid)(({ theme }) => ({
    gridColumnStart: '3',
    gridRow: '1 / span 3',
}));

const GridItem2 = styled(Grid)(({ theme }) => ({
    gridColumnStart: '2',
    gridRow: '1 / span 2',
}));

const GridItem5 = styled(Grid)(({ theme }) => ({
    gridRowStart: '3',
    gridColumn: '1 / span 2',
}))

const Dashboard = () => {
    return (
        <>
            <DashBoardContainer container>
                <Grid item>
                    <ProfileCard />
                </Grid>
                <GridItem2 item>
                    <NotesCard />
                </GridItem2>
                <GridItem3 item>
                    <NewsCard />
                </GridItem3>
                <Grid item>
                    <WeatherCard />
                </Grid>
                <GridItem5>
                    <Timer />
                </GridItem5>
            </DashBoardContainer>
        </>
    )
}

export default Dashboard