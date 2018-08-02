import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import ToDo from './components/ToDo/ToDo';
import Header from './components/Header/Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const Reducer = (state,action) => {
    if(action.type==='add'){
      return([...state])
    }
}

const store = createStore(Reducer,[],window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const action = {
  type: 'add'
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header title="Todo App"/>
          <ToDo/>
        </div>
      </Provider>
    );
  }
}
const position = document.getElementById('root')
ReactDOM.render(<App/>,position);

