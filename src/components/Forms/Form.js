import React, {useState} from 'react'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
const Form = () =>{
    const classes = useStyles();
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const handleSubmit = () => {

    }
    return(
        <Paper className={classses.paper}>
            <form autoComplete='off' noValidate classname={classes.form} onSubmit={handleSubmit}>

            </form>
            <Typography variant="h6">Create a Post</Typography>
            <TextField
             name='creator'
             variant="outlined"
             label="Creator"
             fullWidth
             value={postData.creator}
             onChange={()=> setPostData({...postData, creator: e.target.value})} 
             ></TextField>
        </Paper>
    )
}
export default Form