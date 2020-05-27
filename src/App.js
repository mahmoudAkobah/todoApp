import React, { Component } from 'react';
import Child from './Child';
import Test from './Test';
import Items from './component/Items';
import Form from './component/Form';
class App extends Component {

  state = {
      name: "Mahmoud",
      items: [
          {id:1, name: "Mahmoud", age: 23},
          {id:2, name: "Akobha", age: 24},
          {id:3, name: "Malas", age: 25},
      ]
  };

  changed = () => {
    this.setState({
        name: "Malas",
        items: [
            {id:1, name: "Mahmoud", age: 23},
            {id:2, name: "Akobha", age: 24},
            {id:3, name: "Malas", age: 25},
        ]
    });
  }

  render(){
    return (
        <div className="App">
            Welcome Form React
            <p>____________________________</p>
            <div>Form</div>
            <Form/>
            <p>____________________________</p>
            <Child name={this.state.name}/>
            <Test name={this.state.name}/>
            <button onClick={this.changed}>Change State</button>
            <Items items={this.state.items}/>

        </div>
    );
  }
}
export default App;
