import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Solution from '../components/Solution'

const styles ={
    solution: {
        textAlign: 'left'
    },
    card: {
        display: 'flex'
    }
}

export class results extends Component {

    componentDidMount(){
        const { problem, solution, notes } = this.props.location.state;

    }
    render() {
        const { classes } = this.props;
        const { problem, solution, notes } = this.props.location.state;
        return (
            <Grid container textAlign="left">
                <Grid item sm/>
                <Grid item sm className={classes.solution}>

                    <Solution problem={problem} solution={solution} notes={notes}/>
                </Grid>

                <Grid item sm/>
            </Grid>
        )
    }
}

export default withStyles(styles)(results);
