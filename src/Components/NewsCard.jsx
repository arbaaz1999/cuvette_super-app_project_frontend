import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useGetNewsQuery } from '../Services/newsAPI'

const NewsCard = () => {
    let random = Math.ceil(Math.random() * 100)
    const { data: allNews, isLoading: gettingNews } = useGetNewsQuery("Movies");
    let news = allNews?.articles[random];
    console.log(news)
    if (gettingNews) return 'Loding...'
    return (
        <>
            <Card sx={{ width: '100%', height: '100%', borderRadius: '16px' }}>

                <CardMedia
                    component='img'
                    src={news?.urlToImage}
                    height='55%'
                    width='100%'
                    sx={{ display: 'inline-block', zIndex: '-1' }}
                />
                <CardHeader sx={{ color: 'black' }}>
                    {news.title}
                </CardHeader>
                <CardContent>
                    <Typography paragraph>
                        {news.content}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}
export default NewsCard;