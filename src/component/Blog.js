import React, {Component} from 'react';
import axios from 'axios';
class Blog extends Component {
    state = {
        users: []
    };
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState({
                    users: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    render(){
        return (
            <div className='container'>
                <h2>Blog</h2>
                <p>This is Blog section</p>
                <div className="users">
                    {this.state.users.map(user => <div className='user' key={user.id}>{user.name}, Address : {user.address.street}</div>)}
                </div>
            </div>
        );
    }
}

export default Blog