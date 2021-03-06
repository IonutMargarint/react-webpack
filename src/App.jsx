import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import HelloWorld from './components/hello-world';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <HelloWorld title="Hello, beautiful World!" />;
  }
}

export default hot(module)(App);
