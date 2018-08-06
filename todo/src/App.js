import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import ToDo from './components/ToDo/ToDo';
import Header from './components/Header/Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const Reducer = (state=[],action) => {
    if(action.type==='add'){
      return(state.concat(action.payload))
    } else {
      return state;
    }
}
const newLocal = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(Reducer,newLocal);

var items = [];
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header title="ToDo"/>
          <ToDo items={items}/>
        </div>
      </Provider>
    );
  }
}
const position = document.getElementById('root')
ReactDOM.render(<App/>,position);

