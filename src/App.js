import React from 'react';
import Button from '@mui/material/Button';
import {AppBar, Container, IconButton, Toolbar, Typography, Box, Paper, Grid, makeStyles} from '@mui/material';
import { ClassNames } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow:1
  }
}))


function App() {
  const classes = useStyles();
  return (
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" 
          color="inherit" aria-laabel="menu" className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>Металлургическое производство</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Log In</Button>
          </Box>
          <Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>

    <main>
      <Paper className={classes.mainFeaturesPost}
      style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
        <Container fixed>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography
                сomponent="h1"
                color="inherit"
                gutterBottom>

                  Металлургическое производство
                </Typography>
                <Typography
                сomponent="h5"
                color="inherit"
                paragraph>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat
                </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
              </div>
            </Grid>
          </Grid>

        </Container>
      </Paper>
    </main>
    </>
  );
}

export default App;
