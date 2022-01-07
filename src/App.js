import React, {useEffect} from 'react'
import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'

import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"
import Instaverse from './images/Instaverse3.png'
import useStyles from './styles'
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar classname={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Instaverse</Typography>
        <img className={classes.image} src={Instaverse} alt="instaverse" width="60" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems='stretch' spacing="4">
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
