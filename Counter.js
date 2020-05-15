import React, { Component } from 'react';
import { render } from 'react-dom';

import {connect} from 'react-redux';
import { INCREMENT, DECREMENT } from './actions';
 

class Counter extends Component {
 constructor(props){
   super(props);
   this.state = {
     counter : 0
   }
 }

handleIncrement = () => {
    this.props.dispatch({type : INCREMENT });
}

handleDecrement = () => {
  this.props.dispatch({type : DECREMENT });
}

  render() {
    return (
      <div className="container">
      <button onClick={this.handleDecrement}  >-</button>
      <span>{this.props.counter}</span>
      <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    counter : state.counter
  };
}

export default connect(mapStateToProps)(Counter);