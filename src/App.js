import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <div className="App">
        <div id="counter">{this.state.data}</div>
        <button onClick={this.setNewNumber}>Increment</button>

        <Content myNumber>{this.state.myNumber}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log("component will mount");
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component will recieve props");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(newProps, newState) {
    console.log("Comp will update");
  }
  componentDidUpdate(newProps, newState) {
    console.log("Comp did update");
  }
  componentWillUnmount() {
    console.log("Compon will unmount");
  }
  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
export default App;
