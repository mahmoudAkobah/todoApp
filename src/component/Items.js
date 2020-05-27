import React , {Component} from 'react';

import './items.css';

class Items extends Component {
    render (){
        // const {id, name, age} = this.props;
        const {items} = this.props;
        const theItems = items.map( (item) => {
            return item.count > 0 ? (
                <div className="item" key={item.id}>
                    <div>My name is {item.name}</div>
                    <div>My id is {item.id}</div>
                    <div>My age is {item.age}</div>
                </div>
            ) : (
                null
            )
        });
        return (
            <div>
                {theItems}
            </div>
        );
    }
}

export default Items;