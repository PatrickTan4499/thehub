import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, useTheme, fade, withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { logicalExpression } from '@babel/types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './AutoCompleteText.css';
{/* 
.AutoCompleteText{
    width: 100%;
    border: 1px solid grey;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 2px 4px 1px rgba(0,0,0,.18);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.73);
}
.AutoCompleteText input{
    width: 100%;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.73);
    padding: 10px 5px;
    box-sizing: border-box;
    outline: none;
}
.AutoCompleteText ul{
    list-style-type: none;
    text-align: left;
    margin: 0;
    padding: 0;
    border-top: 1px solid grey;
}
.AutoCompleteText ul::before{
    content: "";
}
.AutoCompleteText li{
    padding: 10px 5px;
    cursor: pointer;
}
.AutoCompleteText li:hover {
    text-decoration: underline;
    background-color: rgba(128, 128, 128, 0.20);
}
*/}
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
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
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

        var course = {text}.text;
        console.log(course);
        e.preventDefault();
    }
    
    render() {
        const { text } = this.state;
        const { name, error } = this.state;
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