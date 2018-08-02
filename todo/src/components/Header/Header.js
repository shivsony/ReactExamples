import React, {Component} from 'react';
import './Header.css'; 

class Header extends Component {
    render() {
        const {title} = this.props 
        return(
            <div className="Heade-wrapper">
                <h1>{title}</h1>
            </div>
        );
    }
}

export default Header