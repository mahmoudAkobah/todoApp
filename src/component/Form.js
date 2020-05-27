import React, {Component} from 'react';

class Form extends Component {
    state = {
        name: ''
    };
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name);
    }

    handleSelect = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    render (){
        return (
            <form onSubmit={this.handleSubmit}>
                <p>{this.state.name}</p>
                <textarea onChange={this.handleChange}/><br/>
                <select onChange={this.handleSelect}>
                    <option value="Value1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <input type="submit" value="Send"/>
            </form>
        );
    }
}

export default Form;