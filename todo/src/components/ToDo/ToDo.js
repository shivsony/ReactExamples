import React from 'react';
import { Component } from 'react';
import List from './List';
import './ToDo.css';



class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: props.items
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.Update = this.Update.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        var input = event.target.querySelector('input');
        var text = input.value;
        this.Update(text);
        input.value = ''
    }

    Update(text) {
        var newitems = this.state.items
        newitems.push(text) ;
        this.setState({
            items: newitems
        }) 
    }


    render() {
        return(
            <div className="todo-card">
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  placeholder="Add todo list..."/>
                    <button >submit</button>
                </form>
                <ul>
                    <List list={this.state.items}/>
                </ul>
            </div>
        );
    }
}

export default ToDo