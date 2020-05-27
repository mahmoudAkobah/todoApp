import React, { Component } from 'react';
import Col from './component/Col';
import './component/col.css'
import theImage from './logo.svg';
class App extends Component {
    render(){
        return (
            <div>
                <img src={theImage}/>
                <img src='https://www.google.com/logos/doodles/2020/jordan-independence-day-2020-6753651837108396-law.gif'/>
                <table id='customers'>
                    <tbody>
                    <tr>
                        <Col />
                    </tr>
                    <tr>
                        <Col />
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default App;
