import React from 'react'
import { Avatar, Paper, Typography, Button, Container, Grid, TextField} from '@material-ui/core'
import useStyles from './Styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
const Auth = () => {
    const classes = useStyles()
    const isSignUp = false

    const handleSubmit = () =>{

    }

    const handleChange = () =>{

    }
    return (
        <container component="main" maxWidth="xs">
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
                                <Input name="firstName" label="First Name" handleChange={handleChange} half  />
                            </>
                        )
                    }
                </Grid>
                </form>
            </Paper>

        </container>
    )
}

export default Auth
