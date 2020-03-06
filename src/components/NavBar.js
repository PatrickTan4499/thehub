import React from 'react'
import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import StudyIcon from '../images/study.png';

import {createMuiTheme} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import SignOutButton from './SignOut/signOut';


import { AuthUserContext } from './Session';

/*const styles = {
    name: {
        margin: 'auto auto auto auto'
    }
}*/
/*
const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    name: {
        margin: 'auto auto auto auto'
    },
    button: {
      margin: theme.spacing(5),
    },
  }));*/
  
  
  const theme = createMuiTheme({
    palette: {
        primary: {
        light: '#33c9dc',
        main: '#00bcd4',
        mainGradient: "linear-gradient(30deg, #32bfde, #4b5ae8)",
        dark: '#008394',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ff633',
        main: '#ff3d00',
        dark: '#b22a00',
        contrastText: '#fff'
      }
    }
  });

const Navigation = () => (
    <div>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    </div>
  );
  
  const NavigationAuth = () => (
    
    <div>
    <AppBar style={{ background: theme.palette.primary.mainGradient }}>
        <Toolbar>
            <Button color="inherit" component={Link} to="/home">Home</Button>
           <Button color="inherit" component={Link} to="/home2">Home2 (version B)</Button>
           {/* <Button color="inherit" component={Link} to="/search">Search</Button>
        <Button color="inherit" component={Link} to="/results">Results</Button> */} 
                  <Typography style={{flex: 1}}></Typography>
            <SignOutButton/>
            <img src={StudyIcon} alt="logo" height="50px" width="50px" />
            <Typography variant="h5" >      
                <Box fontWeight="fontWeightBold" m={1}>
                     The Hub
                </Box>   
            </Typography>
        </Toolbar>
    </AppBar>
</div>
  );
  
  
  const NavigationNonAuth = () => (
    <div>
    <AppBar style={{ background: theme.palette.primary.mainGradient }}>
        <Toolbar>
            <img src={StudyIcon} alt="logo" height="50px" width="50px" />
            <Typography variant="h5" >      
                <Box fontWeight="fontWeightBold" m={1}>
                     The Hub
                </Box>   
            </Typography>
        </Toolbar>
    </AppBar>
</div>
  );
  
  export default Navigation;
  /*
export class NavBar extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/search">Search</Button>
                        <Button color="inherit" component={Link} to="/results">Results</Button>
                        <Typography variant="h5" className={classes.name}>      
                            
                        </Typography>
                        <SignOutButton/>
                        <img src={StudyIcon} alt="logo" height="50px" width="50px" />
                        <Typography variant="h5" >      
                            <Box fontWeight="fontWeightBold" m={1}>
                                 The Hub
                            </Box>   
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(NavBar);*/
