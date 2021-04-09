import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Wrapper from './components/Wrapper';
import TopBar from './components/nav/TopBar'
import Navigation from './components/nav/Navigation';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'green'
  }
}));

function App() {
  const classes = useStyles();
  const [backgroundImage, setBackgroundImage] = useState('green');

  return (
    <div
      style={{
        background: backgroundImage,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
      className={classes.root}>
      <Navigation setBackgroundImage={setBackgroundImage} />
      <Wrapper />
    </div>
  )
}

export default App
