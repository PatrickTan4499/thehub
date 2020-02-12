import React, { Component } from 'react'
import { withFirebase } from '../components/Firebase';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification, AuthUserContext, } from '../components/Session';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import Problem from '../components/Problem';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Upload from '../components/Upload';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';



const styles ={
    solution: {
        textAlign: 'center'
    },
    card: {
        display: 'flex'
    },
    add: {
        width: '50px',
        height: '50px',
        textAlign: 'right'
    },
    button: {
        margin: 'auto auto auto 92%'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        border: '2px solid #000',
 
      },
      problem: {
        height: '100px'
      },
      solution: {
        height: '290px'
      },
      notes: {
        height: '60px',
        margin: 'auto auto 30px auto'
      }
}


export class searchClass extends Component {
    constructor(props){
        super(props);


        this.addPost = this.addPost.bind(this);
        this.handlePostEditorChange = this.handlePostEditorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            posts: [],
        };

    }
/*
    componentDidMount() {
        this.setState({ loading: true });
    
        this.props.firebase
          .user(this.state.authUid).on('value', snapshot => {
            // console.log(snapshot.child("pantry_items").val());
            this.setState({
              posts: snapshot.child("posts").val()
            });
            this.state.localpantry = snapshot.child("posts").val();
          });
      }
*/
    state = {
        open: false
    }
    
    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }    

    addPost(postBody) {
        const postToSave = {postBody};
        this.databaseRef.push().set(postToSave);

    }
    
    handlePostEditorChange(ev){
        this.setState({ [ev.target.name]: ev.target.value });
    }
  
    handleSubmit(event) {
        const formItem = {
          problem: this.state.problem,
          solution: this.state.solution,
          notes: this.state.notes,
        };

            // add new item
            this.setState(prevState => ({
              posts: prevState.posts.concat(formItem)
            }));
    
          
          this.setState({
            problem: '',
            solution: '',
            notes: '',
            open: false,
        });
    
        event.preventDefault();
      }

    render() {
        const { problem, solution, notes, error } = this.state;
        const { classes } = this.props;
        const { open } = this.state;
        const isInvalid = solution === '' || problem === '';

        return (
            <div>

            <Grid container textAlign="left">
                <Grid item xs={3}/>
                <Grid item xs={6} className={classes.solution}>
                <Typography variant="h3"> Class Name</Typography>
                <Problem/>
                {
                this.state.posts.map((item, idx) => {
                    return (
                        <Problem key={idx} problem={item.problem} solution={item.solution}/>
                    )
                })
            }
                    <IconButton color="primary" size="medium" className={classes.button}>
                         <AddCircleIcon className={classes.add} onClick={this.handleToggle}/>
                    </IconButton>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={this.handleToggle}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                        <form onSubmit={this.handleSubmit}>
            <Card>
            <CardContent>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="standard-multiline-static"
                    label="Problem"
                    multiline
                    rows="3"
                    className={classes.problem}
                    autoComplete="problem"
                    autoFocus
                    name="problem"
                    value={this.state.problem}
                    onChange={this.handlePostEditorChange}
                    type="text"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="solution"
                    label="Solution"
                    multiline
                    rows="12"
                    className={classes.solution}
                    autoComplete="solution"
                    autoFocus
                    name="solution"
                    value={this.state.solution}
                    onChange={this.handlePostEditorChange}
                    type="text"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="notes"
                    label="Notes"
                    multiline
                    rows="2"
                    className={classes.notes}
                    autoComplete="notes"
                    autoFocus
                    name="notes"
                    value={this.state.notes}
                    onChange={this.handlePostEditorChange}
                    type="text"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isInvalid}
                >
                    Upload
                </Button>
                </CardContent>
                </Card>
                {error && <p>{error.message}</p>}
            </form>
                        </Fade>
                    </Modal>
                </Grid>

                <Grid item xs={3}/>
            </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(searchClass);
