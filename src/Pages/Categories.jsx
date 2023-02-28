import { Card, CardHeader, CardMedia, Box, Grid, styled, Typography, Button, Chip, Alert } from '@mui/material'
import { action, drama, fantasy, fiction, horror, music, romance, thriller, western } from '../Assets/index'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AppHeading = styled(Typography)`
    font-family:'Single Day', cursive;
    color: #72DB73;
    font-weight:400;
    font-size:70px;
    margin-bottom:20px;
`;

const Banner = styled(Grid)`
    height:100%;
    color:'#fff';
    padding:50px 30px;
    display:flex;
    flex-direction: column;
    gap: 50px;
    @media(max-width: 768px){
        background: 'black';
        height: fit-content;
        gap: 20px;
        padding:20px 10px;
    }
`;

const MyCard = styled(Card)`
   width: 170px;
   height: 170px;
   padding: 14px;
   border-radius: 22px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   cursor:pointer;
`;

const MyCardHeader = styled(CardHeader)`
    padding: 8px;
    font-size: 22px;
`;

const categoryData = [
    {
        'id': 1,
        'categoryName': 'Action',
        'imgUrl': `${action}`,
        'cardBackground': '#FF5209',
    },
    {
        'id': 2,
        'categoryName': 'Drama',
        'imgUrl': `${drama}`,
        'cardBackground': '#D7A4FF',
    },
    {
        'id': 3,
        'categoryName': 'Romance',
        'imgUrl': `${romance}`,
        'cardBackground': '#148A08',
    },
    {
        'id': 4,
        'categoryName': 'Thriller',
        'imgUrl': `${thriller}`,
        'cardBackground': '#84C2FF',
    },
    {
        'id': 5,
        'categoryName': 'Western',
        'imgUrl': `${western}`,
        'cardBackground': '#902500',
    },
    {
        'id': 6,
        'categoryName': 'Horror',
        'imgUrl': `${horror}`,
        'cardBackground': '#7358FF',
    },
    {
        'id': 7,
        'categoryName': 'Fantasy',
        'imgUrl': `${fantasy}`,
        'cardBackground': '#FF4ADE',
    },
    {
        'id': 8,
        'categoryName': 'Music',
        'imgUrl': `${music}`,
        'cardBackground': '#E61E32',
    },
    {
        'id': 9,
        'categoryName': 'Fiction',
        'imgUrl': `${fiction}`,
        'cardBackground': '#6CD061',
    },
]

const Categories = () => {
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState([]);
    const [categoryErr, setCategoryErr] = useState('');
    const [cardBorder, setCardBorder] = useState("")

    const handler = (id) => {
        new Promise((resolve, reject) => {
            let cardSelected = categoryData.find(e => e.id === id)
            let found = selectedCard.some(el => el.id === id);
            if (!found) {
                resolve(cardSelected)
            } else {
                reject('You have already choosen this category')
            }
        }).then(res => {
            setCategoryErr('');
            setSelectedCard([...selectedCard, res])
            console.log(selectedCard)
        }).catch(err => {
            console.log(err)
        })
    }

    const deleteHandler = (id) => {
        setCardBorder("")
        setSelectedCard(selectedCard.filter(e => e.id !== id))
    }

    const submitHandler = () => {
        new Promise((resolve, reject) => {
            let cardError = validate(selectedCard)
            if (cardError) {
                return resolve(cardError)
            } else {
                return reject(selectedCard)
            }
        }).then(res => {
            setCategoryErr(res)
            console.log(categoryErr)
        }).catch((err) => {
            console.log(err)
            setCategoryErr('')
            localStorage.setItem('categories', JSON.stringify(err))
            setTimeout(() => {
                navigate('/dashboard')

            }, 500)
        })

    }

    const validate = (cards) => {
        let cardError = '';
        if (cards.length < 1) {
            cardError = 'Please select atleat one category!';
        }
        return cardError;
    }

    return (
        <>
            <Box component='div' sx={{ width: { md: '86%', sm: '90%', xs: '90%' }, margin: '0px auto', height: '100vh' }}>
                <Grid container height='100%'>
                    <Banner item md={6} xs={12} sm={12}>
                        <AppHeading variant='h1' fontSize={{ md: '70px', sm: '60px', xs: '50px' }}>Super App</AppHeading>
                        <Typography
                            variant='h1'
                            sx={{
                                color: '#fff',
                                fontWeight: '900',
                                fontSize: { md: '60px', sm: '50px', xs: '40px' },
                                letterSpacing: '1.8px'
                            }}
                        >
                            Choose your entertainment categories
                        </Typography>
                        <Box
                            component='div'
                            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', gap: '12px' }}
                        >
                            {selectedCard.map(chip => {
                                return (
                                    <Chip size='large' color='success' label={chip.categoryName} onDelete={() => deleteHandler(chip.id)} />
                                )
                            })}
                        </Box>
                        {categoryErr && <Alert severity='error'>{categoryErr}</Alert>}
                    </Banner>
                    <Grid item md={6} xs={12} sm={12} sx={{ padding: '50px 30px' }}>
                        <Grid container columnGap={4} rowGap={4} justifyContent='center'>
                            {
                                categoryData.map(category => {
                                    let { id, categoryName, imgUrl, cardBackground, setBorder } = category;
                                    return (
                                        <div
                                            name={categoryName}
                                            key={id}
                                            onClick={() => {
                                                handler(id)
                                            }}
                                        >
                                            <MyCard
                                                sx={{
                                                    background: cardBackground,
                                                    border: setBorder ? setBorder : null,
                                                }}
                                            >
                                                <MyCardHeader
                                                    title={categoryName}
                                                    sx={{
                                                        '.MuiCardHeader-title': {
                                                            fontSize: '26px',
                                                            color: '#fff',
                                                            fontWeight: '500',
                                                        }
                                                    }}
                                                />
                                                <CardMedia
                                                    sx={{ borderRadius: '16px' }}
                                                    component="img"
                                                    height="100px"
                                                    image={imgUrl}
                                                />
                                            </MyCard>
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                        <Button
                            onClick={submitHandler}
                            type='button'
                            variant='contained'
                            size='large'
                            sx={{
                                background: '#6CD061',
                                width: '200px',
                                color: '#fff',
                                marginTop: '25px',
                                float: 'right',
                                borderRadius: '40px',
                                '&:hover': {
                                    background: '#148A08',
                                }
                            }}
                        >Next Page</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Categories