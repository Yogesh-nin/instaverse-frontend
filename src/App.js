import React, {useEffect, useState} from 'react'
import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'

import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import {Container, Grow, Grid} from "@material-ui/core"

import useStyles from './styles'
import { Navbar } from './components/Navbar/Navbar'
const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  
  }, [currentId ,dispatch])

  return (
    <Container maxWidth="lg">
      <Navbar/>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container direction="column-reverse" justifyContent="space-between" alignItems='stretch' spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
