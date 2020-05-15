import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Counter from './Counter';
import {Provider} from 'react-redux';
import {store} from './store';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Counter />
      </div>
    );
  }
}

render(<Provider store={store}><App /> </Provider>, document.getElementById('root'));
