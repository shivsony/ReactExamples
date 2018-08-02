import React from 'react';
import { Component } from 'react';
import List from './List';
import './ToDo.css';

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            list: this.state.list.push(event.target.value)
        })
        console.log(this.state.list);
    }


    render() {
        return(
            <div className="todo-card">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  placeholder="todo"/>
                    <button >submit</button>
                </form>
                <ul>
                    <List list={this.state.list}/>
                </ul>
            </div>
        );
    }
}

export default ToDo