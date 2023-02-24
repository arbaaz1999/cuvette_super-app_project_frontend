import { Box, Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, styled, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const AppHeading = styled(Typography)`
    font-family:'Single Day', cursive;
    color: #72DB73;
    font-weight:400;
    font-size:70px;
    margin-bottom:20px;
`;

const FormContainer = styled(Grid)`
    height:100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Buttons = styled(Button)`
    color:#fff;
    font-size: large;
`;

const MyTextField = styled(TextField)`
    background: #292929;
    border: 1px solid #292929;
    border-radius: 4px;
    & .Mui-focused {
        borderColor: '1px solid #292929',
    }
`;

const RegistrationForm = () => {
    const [userInput, setUserInput] = useState({
        yourName: '',
        userName: '',
        yourEmail: '',
        mobile: '',
    })
    const [terms, setTerms] = useState(false)
    const [formError, setFormError] = useState({})

    const handleUserInputChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(validate(userInput, terms))
        if (Object.keys(formError).length === 0) {
            console.log(userInput)
            setUserInput({
                yourName: '',
                userName: '',
                yourEmail: '',
                mobile: '',
            })
            setTerms(false)
        } else return formError;
    }

    const validate = (values, tAndC) => {
        let errors = {}
        if (!values.yourName) {
            errors.yourName = 'Name is required!'
        }
        if (!values.userName) {
            errors.userName = 'Username is required!'
        }
        if (!values.yourEmail) {
            errors.yourEmail = 'Email is required!'
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.yourEmail) === false) {
            errors.yourEmail = 'Please enter valid email!'
        }
        if (!values.mobile) {
            errors.mobile = 'Contact number is required!'
        } else if (/^\d{10}$/.test(values.mobile) === false) {
            errors.mobile = 'Please enter 10 digits mobile number'
        }
        if (!tAndC) {
            errors.terms = 'Please accept terms and condition!'
        }

        return errors;
    }

    return (
        <>
            <Grid item xs={12} sm={12} md={6}>
                <FormContainer container>
                    <AppHeading variant='h1'>Super App</AppHeading>
                    <Typography variant='body1' sx={{ color: '#fff', fontSize: '22px', marginBottom: '20px' }}>
                        Create your new account
                    </Typography>
                    <ButtonGroup variant="text">
                        <Buttons style={{ borderRight: '2px solid #72DB73', borderColor: '#72DB73' }}>Email</Buttons>
                        <Buttons>Google</Buttons>
                    </ButtonGroup>
                    <Box
                        onSubmit={handleSubmit}
                        component='form'
                        sx={{ width: '65%', margin: '22px 0' }}
                    >
                        <FormControl fullWidth margin='normal'>
                            <MyTextField
                                value={userInput.yourName}
                                onChange={handleUserInputChange}
                                name='yourName'
                                placeholder='Enter your name'
                                type='text'
                                label='Name'
                                InputLabelProps={{
                                    style: { color: '#7c7c7c' }
                                }}
                                sx={{ input: { color: "#7c7c7c" }, "label": { color: "#7c7c7c" } }}
                                error={formError.yourName ? true : false}
                                helperText={formError.yourName ? formError.yourName : null}
                            />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <MyTextField
                                value={userInput.userName}
                                onChange={handleUserInputChange}
                                name='userName'
                                placeholder='Choose your username'
                                type='text'
                                label='Username'
                                InputLabelProps={{
                                    style: { color: '#7c7c7c' }
                                }}
                                sx={{ input: { color: "#7c7c7c" }, "label": { color: "#7c7c7c" } }}
                                error={formError.userName ? true : false}
                                helperText={formError.userName ? formError.userName : null}
                            />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <MyTextField
                                value={userInput.yourEmail}
                                onChange={handleUserInputChange}
                                name='yourEmail'
                                placeholder='example@email.com'
                                type='email'
                                label='Email'
                                InputLabelProps={{
                                    style: { color: '#7c7c7c' }
                                }}
                                sx={{ input: { color: "#7c7c7c" }, "label": { color: "#7c7c7c" } }}
                                error={formError.yourEmail ? true : false}
                                helperText={formError.yourEmail ? formError.yourEmail : null}
                            />
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <MyTextField
                                value={userInput.mobile}
                                onChange={handleUserInputChange}
                                name='mobile'
                                placeholder='+91 9123456780'
                                type='number'
                                label='Mobile'
                                InputLabelProps={{
                                    style: { color: '#7c7c7c' }
                                }}
                                sx={{ input: { color: "#7c7c7c" }, "label": { color: "#7c7c7c" } }}
                                error={formError.mobile ? true : false}
                                helperText={formError.mobile ? formError.mobile : null}
                            />
                        </FormControl>
                        <FormControl
                            fullWidth
                            margin='normal'
                            error={formError.terms ? true : false}
                        >
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            sx={{ color: '#72DB73', '&.Mui-checked': { color: '#72DB73' } }}
                                            checked={terms}
                                            onChange={(e) => {
                                                setTerms(e.currentTarget.checked)
                                            }}
                                        />
                                    }
                                    label="Share my registration data with Superapp"
                                    sx={{ '.MuiFormControlLabel-label': { color: '#7c7c7c' } }}
                                />
                            </FormGroup>
                            <FormHelperText>{formError.terms ? formError.terms : null}</FormHelperText>
                        </FormControl>
                        <Button
                            fullWidth
                            type='submit'
                            variant='contained'
                            sx={{
                                background: '#72DB73', borderRadius: '33px', '&:hover': {
                                    background: '#5AAD5C'
                                }
                            }}
                            size='large'
                        >Sign Up
                        </Button>
                    </Box>
                    <Box
                        component='div'
                        sx={{ width: '65%' }}
                    >
                        <Typography variant='body1' sx={{ color: '#7C7C7C', textAlign: 'justify', fontSize: { md: '18px', sm: '16px', xs: '14px' } }}>
                            By clicking on Sign Up, you agree to <strong style={{ color: '#72DB73' }}>Terms and Conditions of Use</strong>
                        </Typography>
                        <Typography variant='body1' sx={{ color: '#7C7C7C', textAlign: 'justify', fontSize: { md: '18px', sm: '16px', xs: '14px' } }}>
                            To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <strong style={{ color: '#72DB73' }}>Privacy Policy</strong>
                        </Typography>
                    </Box>
                </FormContainer>
            </Grid>
        </>
    )
}

export default RegistrationForm