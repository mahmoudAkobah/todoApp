import React from 'react';

const Test = (props) => {
    return (
        <div>
            Child component
            <p>The name is <strong>{props.name}</strong></p>
        </div>

    );
}

export default Test;