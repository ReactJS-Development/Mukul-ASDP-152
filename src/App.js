import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {firstname: "Mukul", lastname: "Sharma"}
  }

  onClickHandler = () => {
    this.setState({firstname: this.refs.firstname.value, lastname: this.refs.lastname.value});
  }

  render() {
    return (
      <div>
        Enter firstname: <input type="text" ref="firstname"></input><br/><br/>
        Enter lastname: <input type="text" ref="lastname"></input><br/><br/>
        <button onClick={this.onClickHandler}>Click Me</button><br/><br/>
        Hii {this.state.firstname} {this.state.lastname}!!
      </div>
    );
  }
}

export default App;
