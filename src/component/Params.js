import React from 'react';

const Params = (props) => {
    console.log(props);
    let p = props.match.params.test_params;
    return (
        <div className='container'>
            <h2>Params</h2>
            <p>This is Params section</p>
            <p>You are enter this params {p}</p>
        </div>
    );
}

export default Params