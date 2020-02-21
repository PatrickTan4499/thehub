import React, { Component } from 'react'
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography, CardActionArea } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const styles ={
    solution: {
        textAlign: 'left'
    },
    card: {
        display: 'flex'
    },
    description: {
        margin: '10px auto 10px auto'
    },
    caption: {
        textAlign: 'left',
        margin: 'auto auto auto 20px'
    }
}


/*export class Problem extends Component {

    render() {

        
        const { classes } = this.props;
        return (
            <Card className={classes.description}>
            <CardContent>
            <Typography variant="h5"  component="p" className={classes.caption}> Problem:  </Typography>
                <Typography variant ="h1"> {props.postBody}</Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.caption}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                 velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                 
                </Typography>
            </CardContent>
        </Card>
        )
    }
}

export default withStyles(styles)(Problem);*/

const Problem = (props) => (
    <CardActionArea component="a" href="#">
    <Card style = {{ margin: '10px auto 10px auto'}}>
        <CardContent>
            <Typography variant="h6"  component="p" style = {{ textAlign: 'left', margin: 'auto auto auto auto'}}> Problem: {props.problem} </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style = {{ textAlign: 'left', margin: 'auto auto auto auto'}}>
                Solution: {props.solution}
                
            </Typography>
        </CardContent>
    </Card>
    </CardActionArea>
);

export default withStyles(styles)(Problem);
