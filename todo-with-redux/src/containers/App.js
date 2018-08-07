import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setName,setAge} from '../actions/userAction';
import {addNum,subNum} from '../actions/mathAction';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App" >
          <h1 onClick={() => this.props.setName("shiv")}>{this.props.user.name}</h1>
          <h2 onClick={() => this.props.setAge(90)}>{this.props.user.age}</h2>

          <h2>{this.props.math.result}</h2>
          <h2 onClick={() => this.props.Add(9)}>{this.props.math.lastValue.map((item)=>{return <ul><li>{item}</li></ul>})}</h2>

        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    math: state.math,
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    setAge: (age) => {
      dispatch(setAge(age));
    },
    Add: (num) => {
      dispatch(addNum(num));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
