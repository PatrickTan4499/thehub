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
        const{problem, solution, notes} = this.props;
        return (
            <div>
                
                    <Typography variant="h5" ><Box fontWeight="fontWeightBold" m={1}>
                    Problem:
                </Box>   </Typography>
                        <Card className={classes.description}>
                            <CardContent>

                                <Typography variant="body1"  component="p">
                                {problem}
                                
                                </Typography>

                            </CardContent>
                        </Card>
                        <Typography variant="h5" ><Box fontWeight="fontWeightBold" m={1}>
                    Solution:
                </Box>   </Typography>
                        <Card className={classes.description}>
                            <CardContent>
                                <Typography variant="body1"  component="p">
                                {solution}
                                
                                </Typography>
                            </CardContent>
                        </Card>
                        <Typography variant="h6" ><Box fontWeight="fontWeightBold" m={1}>
                    Notes:
                </Box>   </Typography>
                        <Card className={classes.description}>
                            <CardContent>
                                <Typography variant="body2" component="p">
                                {notes}
                                
                                 
                                </Typography>
                            </CardContent>
                        </Card>
                     {/*   <br></br>
                        <div>
                        <Typography variant="subtitle2">Posted by: name </Typography>
                        <br></br>
                        <Button color="primary" variant="contained"> Edit Post </Button>
                     </div>*/}
            </div>
        )
    }
}

export default withStyles(styles)(Solution);
