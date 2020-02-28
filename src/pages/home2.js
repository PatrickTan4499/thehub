import React, { Component } from 'react';
import { withAuthorization} from '../components/Session';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { compose } from 'recompose';

import Grid from '@material-ui/core/Grid';

import {withStyles} from '@material-ui/core/styles';
import StudyIcon from '../images/study.png';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import AutoCopmleteText from '../components/Search/AutoCompleteText.js'
import courses from '../components/Search/courses.js'


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


 class home2 extends Component {
    constructor(props) {
        super(props);

        this.state = { name: 'abc',
        error: null,
        redirectToReferrer: false};
    }
    
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    updateName = (newName) => {
        console.log(newName);
        this.setState({
            name: newName.toUpperCase()
        })
       // this.state.name = newName.toUpperCase();
        //this.setState({name: newName});
        console.log(this.state.name);
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
        console.log(this.props.location);
     
        const { classes } = this.props;

        const redirectToReferrer = this.state.redirectToReferrer;

        if (redirectToReferrer === true) {
         //  return <Redirect to="/search" name={this.state.name}/>
         //console.log(name);
          return (<Redirect to={{
            pathname: '/search',
            state: {name: this.state.name}
        }}/>)
        }

        return (
            <Grid container textAlign="center">
                <Grid item xs={1}/>
                <Grid item xs={10} height="1000px">
                <img src={StudyIcon} alt="logo" height="100px" width="100px" className={classes.image}/>
                <Typography variant="h5" className={classes.description}> Welcome to The Hub, search for your UCSD Course Number: (ex. BIMM xxx) to begin learning! :) </Typography>
                <form className={classes.search} noValidate autoComplete="off" onSubmit={this.onSubmit} height="500px">
                    <AutoCopmleteText items={courses} updateName={this.updateName.bind(this)} name={this.state.name}/> 
                
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
                <Grid item xs={1}/>
            </Grid>
        )
    }
}

home2.propTypes = {
    classes: PropTypes.object.isRequired
}

const condition = authUser => !!authUser;

export default compose(
    withStyles(styles),
    withAuthorization(condition),
  withRouter,
)(home2);