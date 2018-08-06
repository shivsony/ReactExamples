import React, {Component} from 'react';
import './List.css';

class List extends Component {
    render() {
        var itemList = this.props.list.map((elem,i)=>{
            return(<li key={i}>{elem}</li>)
        });
        return(
            <ul>
                {itemList}
            </ul>
        );
    }
} 
export default List