import React, { Component } from 'react';

export default class App extends Component{
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        Hello React!!!!!!!!!!!!!!
      </div>
    );
  }
}
