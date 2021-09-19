import React, { Component } from "react";
import "./App.css";

const MyContext = React.createContext();

class App extends Component {
  static contextType = MyContext;
  //static contextType = React.createContext("Default Value");
  render() {
    console.log(this.context);
    const value = this.context;
    //console.log(value);
    return <div className="App">{value}</div>;
  }
}

export default App;
