import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
      <h3>hello app!</h3>
       {this.props.children}
      </div>
    );
  }
}
