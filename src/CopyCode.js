import "./App.css";
import React from "react";


class Copy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // this.handleClick = this.handleClick.bind(this); //normal handle function
  }
  handleClick= () =>{  // if u use arrow function no need to use bind below
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>Value: {this.state.count}</h1>
        <button
          onClick={this.handleClick} // if u use arrow function here then u have to diclare () after funtion
          id="title"
          style={{ backgroundColor: "dodgerblue", color: "#fff" }}>
          Register
        </button>
      </div>
    );
  }
}

export default Copy;
