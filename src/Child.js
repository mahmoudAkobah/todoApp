import React, {Component} from 'react';

class Child extends Component {
    render (){
        return (
            <div>
                Child component
                <p>The name is <strong>{this.props.name}</strong></p>
            </div>

        );
    };
}

export default Child;