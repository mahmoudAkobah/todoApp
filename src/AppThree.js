import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './component/Nav';
import About from "./component/About";
import Home from "./component/Home";
import Blog from "./component/Blog";
import Params from "./component/Params";
class App extends Component {
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/blog' component={Blog}/>
                        <Route path='/:test_params' component={Params}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
