import React, { Component } from 'react'

import { withStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

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


export class Upload extends Component {
    constructor(props) {
        super(props);
        
        this.createPost = this.createPost.bind(this);
        this.handlePostEditorChange = this.handlePostEditorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = { 
            newPostBody: '',
            problem: '',
            solution: '',
            notes: '',
            error: null,
        };
    }

    addPost() {
        const newState = Object.assign({}, this.state);
        newState.posts.push(this.state.newPostBody);
        newState.newPostBody = '';
        this.setState(newState);

    }
    
    handlePostEditorChange(ev){
        this.setState({ [ev.target.name]: ev.target.value });
    }

    createPost() {
        this.props.addPost(this.state.newPostBody);
        this.setState({
            newPostBody: '',
        });
    }
  
    handleSubmit(event) {
        const formItem = {
          problem: this.state.problem,
          solution: this.state.solution,
          notes: this.state.notes,
        };
    
        if (
          this.state.problem === "" ||
          this.state.solution === "" ||
          this.state.notes === ""
        ) {
          alert("Please fill mandatory filed");
        } else {

            // add new item
            this.setState(prevState => ({
              formdata: prevState.formdata.concat(formItem)
            }));
    
          }
    
          alert("form submited: ");
          this.setState({
            problem: '',
            solution: '',
            notes: ''
        });
    
        event.preventDefault();
      }

    render() {
        const { problem, solution, notes, error } = this.state;
        const { classes } = this.props;
        const isInvalid = solution === '' || problem === '';

        return (
            <form onSubmit={this.props.addPost}>
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
                    value={problem}
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
                    value={solution}
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
                    value={notes}
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
        )
    }
}

export default withStyles(styles)(Upload);
