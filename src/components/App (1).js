import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from './NavBar';

import home from '../pages/home';
import results from '../pages/results';
import searchClass from '../pages/searchClass';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import SignUpPage from './SignUp/signUp';
import SignInPage from './SignIn/signIn';

import { withAuthentication } from './Session';



const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#33c9dc',
    main: '#00bcd4',
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

const App = () => (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <NavBar/>
        <div class="container">
        <Switch>
        <Route exact path="/" component={SignInPage} />
          <Route exact path="/home" component={home}></Route>
          <Route exact path="/results" component={results}></Route>
          <Route exact path="/search" component={searchClass}></Route>
          <Route exact path="/signUp" component={SignUpPage} />

        </Switch>
        </div>
      </Router>
    </div>
    </MuiThemeProvider>
  );



export default withAuthentication(App);
