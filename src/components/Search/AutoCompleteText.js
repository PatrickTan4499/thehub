import React from 'react';

import { withStyles} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AutoCompleteText.css';

const styles = {
    search: {
        
    },
    description: {
        margin: 'auto auto 20px auto'
    },
    image: {
        margin: '220px auto auto auto'
    },
    name: {
        margin: 'auto auto 10px auto'
    },
    
}

class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            suggestions: [],
            text: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTextChanged = (e) => {
        const{items} = this.props;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
            this.setState(() => ({suggestions}));
        }
        this.setState(() => ({suggestions, text: value}));
    }

    renderSuggestions() {
        const{suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        var suggestion = [];
        for (var i = 0; i < 5; i++) {
            suggestion.push(suggestions[i]);
        }
        
        return (
            <ul>
                {suggestion.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value, 
            suggestions: [],
        }))
    }

    onSubmit(e) {
        const { text } = this.state;
        console.log(this.props.name);

        console.log(this.props.name);
        var course = {text}.text;
        console.log(course);
        this.props.updateName(course);
        e.preventDefault();
    }
    
    render() {
        const { text } = this.state;
        const { error } = this.state;
        const { classes } = this.props;
        const isInvalid = text === '';

        /*              <form className="AutoCompleteText">
                    <input value={text} onChange={this.onTextChanged} type="text" />
                    {this.renderSuggestions()}
                    <button type="button" onClick={this.onSubmit} className="btn">Submit</button>
                </form> 
                 */
        return (
            <div>
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
                    value={text}
                    onChange={this.onTextChanged}
                    className={classes.name}
                    />
                {this.renderSuggestions()}
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
            </div>
        )
    }
}

export default withStyles(styles)(AutoCompleteText);