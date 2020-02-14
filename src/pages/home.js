import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import StudyIcon from '../images/study.png';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { logicalExpression } from '@babel/types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AutoCopmleteText from '../components/Search/AutoCompleteText.js'
import courses from '../components/Search/courses.js'
import GoogleLogin from 'react-google-login';

const styles = {
    search: {
        
    },
    description: {
        margin: 'auto auto 20px auto'
    },
    image: {
        margin: '150px auto auto auto'
    },
    name: {
        margin: 'auto auto 10px auto'
    }
}

const INITIAL_STATE = {
    name: '',
    error: null,
    redirectToReferrer: false
  };

 class home extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        const { name } = this.state;
        this.setState({
            redirectToReferrer: true,
        })
        console.log(name);
       // this.props.history.push('/search');
    /*   <Redirect to={{
        pathname: '/search',
        state: { id: '123' }
    }}/>;*/
        event.preventDefault();
    };
    
    render() {
        const { name, error } = this.state;
        const { classes } = this.props;
        const isInvalid = name === '';
        const redirectToReferrer = this.state.redirectToReferrer;

        if (redirectToReferrer === true) {
         //   return <Redirect to="/search" name={this.state.name}/>
          return <Redirect to={{
            pathname: '/search',
            state: [{id: 1, name: 'Ford', color: 'red'}]
        }}/>
        }

        return (
            <Grid container textAlign="center">
                <Grid item sm/>
                <Grid item sm height="1000px">
                <img src={StudyIcon} alt="logo" height="100px" width="100px" className={classes.image}/>
                <Typography variant="h5" className={classes.description}> Welcome to The Hub, search for your class to begin learning! :) </Typography>
                <form className={classes.search} noValidate autoComplete="off" onSubmit={this.onSubmit} height="500px">
                     <AutoCopmleteText items={courses}/>
                </form>
                {/* 
                <form className={classes.search} noValidate autoComplete="off" onSubmit={this.onSubmit} height="500px">
                    <TextField 
                        id="outlined-basic" 
                        label="Enter Class Name:" 
                        variant="outlined" 
                        fullWidth 
                        required
                        autoComplete="name"
                        autoFocus
                        name="name"
                        value={name}
                        onChange={this.onChange}
                        className={classes.name}
                        />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={isInvalid}
                        >
                        Search
                    </Button>
                    {error && <p>{error.message}</p>}
                </form>
                    */}
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

home.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(home);
