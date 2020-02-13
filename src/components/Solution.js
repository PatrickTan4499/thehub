import React, { Component } from 'react'
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Box, Button } from '@material-ui/core';

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
    name: {
        width: '20px'
    }
}

export class Solution extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                    <Typography variant="h4" >Problem:</Typography>
                        <Card className={classes.description}>
                            <CardContent>

                                <Typography variant="body2" color="textSecondary" component="p">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                 velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Typography>

                            </CardContent>
                        </Card>
                    <Typography variant="h4" >Solution:</Typography>
                        <Card className={classes.description}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                 velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Typography>
                            </CardContent>
                        </Card>
                    <Typography variant="h4" >Notes:</Typography>
                        <Card className={classes.description}>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                                 velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                                 proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                 
                                </Typography>
                            </CardContent>
                        </Card>
                        <br></br>
                        <div>
                        <Typography variant="subtitle2">Posted by: name </Typography>
                        <br></br>
                        <Button color="primary" variant="contained"> Edit Post </Button>
                        </div>
            </div>
        )
    }
}

export default withStyles(styles)(Solution);
