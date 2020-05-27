import React, { Component } from 'react';
import Items from './component/Items';
class App extends Component {

    constructor(){
        super();
        console.log('constructor');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        console.log(prevProps);
        console.log(prevState);
    }
    state = {
        name: "Mahmoud",
        items: [
            {id:1, name: "Mahmoud", age: 23, count: 1},
            {id:2, name: "Mohammed", age: 24, count: 2},
            {id:3, name: "Ahmed", age: 25, count: 3},
            {id:4, name: "Nasr", age: 26, count: 4},
        ]
    };

    changeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    render(){
        console.log('render');
        return (
            <div className="App">
                Welcome {this.state.name}<br/>
                <input type='text' onChange={this.changeName} placeholder='Write here to change name'/>
                <Items items={this.state.items}/>
            </div>
        );
    }
}
export default App;
