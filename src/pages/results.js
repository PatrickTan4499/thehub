import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';

import { compose } from 'recompose';
import {  withStyles} from '@material-ui/core/styles';
import { withAuthorization } from '../components/Session';

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
      //  const { problem, solution, notes } = this.props.location.state;
        //console.log(this.props.location);

    }
    render() {
        const { classes } = this.props;
        console.log(this.props.location);
        const { problem, solution, notes } = this.props.location.state;
        return (
            <Grid container textAlign="left">
                <Grid item xs={1}/>
                <Grid item xs={10} className={classes.solution}>
            
                    <Solution problem={problem} solution={solution} notes={notes}/>
                </Grid>

                <Grid item xs={1}/>
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
