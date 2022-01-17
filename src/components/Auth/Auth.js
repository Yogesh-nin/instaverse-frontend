import React from 'react'
import { Avatar, Paper, Typography, Button, Container, Grid} from '@material-ui/core'
import useStyles from './Styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
const Auth = () => {
    const classes = useStyles()
    const isSignUp = false
    return (
        <container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>Sign In</Typography>
            </Paper>

        </container>
    )
}

export default Auth
