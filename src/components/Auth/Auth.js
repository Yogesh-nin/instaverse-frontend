import React, {useState} from 'react'
import { Avatar, Paper, Typography, Button, Container, Grid, TextField} from '@material-ui/core'
import useStyles from './Styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import {useHistory} from 'react-router-dom'
import {signin, signup} from '../../actions/auth'
import {useDispatch} from 'react-redux'
const initialState = {firstName:"", lastName:"", email:"", password:"", confirmPassword:""}
const Auth = () => {
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState(initialState)
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(isSignUp){
            dispatch(signp(formData, history))
        }
        else{
            dispatch(sigin(formData, history))
        }
    }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const switchMode = () => {
        setIsSignUp((prevIsSignUp)=> !prevIsSignUp)
        setShowPassword(false)
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{isSignUp ? "Sign up": "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}> 
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half  />
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handlechange={handleChange} type="email" />
                    <Input name="password" label="Password" handlechange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    {isSignUp && <Input name="confirmPassword" label="Password" handlechange={handleChange} type='password' handleShowPassword={handleShowPassword} />}
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                    {isSignUp ? "Sign Up" : "sign In"}
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Auth
