import React, { Component, useState, useEffect } from 'react'
import Link from 'react-router-dom/Link';
import { withFirebase } from '../components/Firebase';
import { compose } from 'recompose';
import firebase from '../components/Firebase';
import app from '../components/Firebase';
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
import 'firebase/firestore';
import Solution from '../components/Solution';


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




const SearchClassPage = () => (

    <SearchClass />

);

class SearchClassBase extends Component {
    constructor(props){
        super(props);


        this.addPost = this.addPost.bind(this);
        this.handlePostEditorChange = this.handlePostEditorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            posts: [],      
            authUid: this.props.firebase.auth.O,
            loading: false,
            problem: '',
            solution: '',
            notes: '',
            keys: []
        };

        

    }
    
      componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase
          .posts().on('value', snapshot => {
             //console.log(snapshot.val());
          /*  this.setState({
              posts: Object.keys(snapshot.val())
            });*/
           // this.state.posts = Object.keys(snapshot.val());
            console.log(this.state.posts);
            var problems = snapshot.val();
            var keys = Object.keys(snapshot.val());
            for(var i = 0; i< keys.length; i++){
                var k = keys[i];
                var problem = problems[k].problem;
                var solution =problems[k].solution;
                var notes = problems[k].notes;
                const formItem = {
                    problem: problem,
                    solution: solution,
                    notes: notes,
                  };
          
                      // add new item
                      this.setState(prevState => ({
                        posts: prevState.posts.concat(formItem)
                      }));
            }
          /*  const formItem = {
                problem: this.state.problem,
                solution: this.state.solution,
                notes: this.state.notes,
              };
      
                  // add new item
                  this.setState(prevState => ({
                    posts: prevState.posts.concat(formItem)
                  }));*/
                //  this.state.posts.push(this.state.formItem);
          });
 


      }
    
      componentWillUnmount() {
        this.props.firebase.posts().off();
      }
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
    
    savePost(problem, solution, notes){
        var newPost = this.props.firebase.posts().push();
        newPost.set({
            problem: problem,
            solution: solution,
            notes: notes
        });

    }

    handleSubmit(event) {
    /*    const formItem = {
          problem: this.state.problem,
          solution: this.state.solution,
          notes: this.state.notes,
        };

            // add new item
            this.setState(prevState => ({
              posts: prevState.posts.concat(formItem)
            }));*/
          //  this.state.posts.push(this.state.formItem);
            const problem = this.state.problem;
            const solution = this.state.solution;
            var notes = this.state.notes;
           /* if(this.state.notes == ''){
                notes = ' ';
            }*/
            
          this.savePost(problem, solution, notes);
          this.setState({
            problem: '',
            solution: '',
            notes: '',
            open: false,
        });

       /* this.props.firebase.posts().update({
            posts: this.state.posts
          });*/
    
        event.preventDefault();
      }


    render() {
        const { problem, solution, notes, error } = this.state;
        const { classes } = this.props;
        const { open } = this.state;
        const isInvalid = solution === '' || problem === '';
        /*                <ol>
                    {times.map((time) =>
                        <li key={time.id}>
                        <div className="time-entry">
                            {time.title}
                        </div>
                        <code>{time.time_stamp} seconds</code>
                        </li>)}
                </ol> 
                                this.state.posts.map((item, idx) => {
                    return (
                        <Problem key={idx} problem={item.problem} solution={item.solution}/>
                    )
                })
            }*/
        return (
            <div>

            <Grid container textAlign="left">
                <Grid item xs={3}/>
                <Grid item xs={6} style = {{ textAlign: 'center'}}>
                <Typography variant="h3"> Class Name</Typography>
                {this.state.posts.map((item, idx) => {
                    return (
                        
                      <Button style = {{ margin: '0 0 0 0',
                      display: 'flex'}} component={Link} to="/results">  <Problem key={idx} problem={item.problem} solution={item.solution}/></Button>
                    )
                })
            }
                    <IconButton color="primary" size="medium" style = {{ margin: 'auto auto auto 92%'}}>
                         <AddCircleIcon style = {{ width: '50px',
                                                    height: '50px',
                                                    textAlign: 'right'}} onClick={this.handleToggle}/>
                    </IconButton>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        style = {{ display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',}}
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
            <Card >
            <CardContent >
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="standard-multiline-static"
                    label="Problem"
                    multiline
                    rows="3"

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

//export default withStyles(styles)(SearchClassPage);

const SearchClass = withFirebase(SearchClassBase);

const condition = authUser => !!authUser;

export default compose(
    withStyles(styles),
  withAuthorization(condition),
)(SearchClassPage);

