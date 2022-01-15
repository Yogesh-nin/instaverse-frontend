import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import useStyles from './styles'
import Instaverse from '../../images/Instaverse4.png'

export const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">Instaverse</Typography>
            <img className={classes.image} src={Instaverse} alt="instaverse" height="60" />
        </AppBar>
    )
}


