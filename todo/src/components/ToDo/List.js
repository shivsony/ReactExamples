import React, {Component} from 'react';

class List extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {list} = this.props
        return(
            <li>{list}</li>
        );
    }
} 
export default List