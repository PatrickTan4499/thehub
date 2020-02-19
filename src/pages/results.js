import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Link from 'react-router-dom/Link';
import { compose } from 'recompose';
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import { withAuthorization, withEmailVerification, AuthUserContext, } from '../components/Session';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Solution from '../components/Solution'
import { withRouter } from 'react-router-dom';

const styles ={
    solution: {
        textAlign: 'left'
    },
    card: {
        display: 'flex'
    }
}

 class results extends Component {

    componentDidMount(){
        const { problem, solution, notes } = this.props.location.state;
        //console.log(this.props.location);

    }
    render() {
        const { classes } = this.props;
        console.log(this.props.location);
        const { problem, solution, notes } = this.props.location.state;
        return (
            <Grid container textAlign="left">
                <Grid item xs={3}/>
                <Grid item xs={6} className={classes.solution}>
            
                    <Solution problem={problem} solution={solution} notes={notes}/>
                </Grid>

                <Grid item xs={3}/>
            </Grid>
        )
    }
}

const condition = authUser => !!authUser;

export default compose(
    withStyles(styles),
  withAuthorization(condition),
  withRouter,
)(results);
//export default withStyles(styles)(results);
