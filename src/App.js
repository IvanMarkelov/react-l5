import React, { Component } from "react";
import "./App.css";
import CustomBtn, {logProps} from "./CustomBtn";

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref.current);
    setTimeout(() => {
      this.ref.current.changeSendingStatus()
    }, 2000);
  }

  render() {
    return (
      <div className="wrapper">
        <CustomBtn ref={this.ref}>SENDING...</CustomBtn>
      </div>
    )
  }
}

//Text value Refs
// class App extends Component {
//   state = { value: "" };

//   handleSubmit = (e) => {
//     console.log(this.refs);
//     let temp;
//     this.refs.textInput.value > this.refs.textInput2.value
//       ? (temp = this.refs.textInput.value)
//       : (temp = this.refs.textInput2.value);
//     e.preventDefault();
//     this.setState({
//       value: temp,
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input type="text" ref="textInput" />
//         <input type="text" ref="textInput2" />
//         <button>Submit</button>
//         {this.state.value && <h2>Вы отправили: {this.state.value}</h2>}
//       </form>
//     );
//   }
// }

//Functional ref
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       value: 0,
//     };

//     this.setTextInputRef = (element) => (this.textInput = element);
//   }

//   focusTextInput = () => {
//     if (this.textInput) this.textInput.focus();
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.setTextInputRef} />
//         <button onClick={this.focusTextInput}>Focus</button>
//       </div>
//     );
//   }
// }

//CreateRef
// class App extends Component {
//   constructor() {
//     super();

//     this.inputRef = React.createRef();
//   }

//   focusTextInput = () => {
//     if (this.inputRef) this.inputRef.current.focus();
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputRef} />
//         <button onClick={this.focusTextInput}>Click</button>
//       </div>
//     );
//   }
// }

// export default class Parent extends Component {
//   constructor() {
//     super();

//     this.inputRef = React.createRef();
//   }

//   focusInput = () => this.inputRef.current.focusInput();

//   render() {
//     return (
//       <div>
//         <CustomTextInput ref={this.inputRef} />
//         <button onClick={this.focusInput}>Focus</button>
//       </div>
//     );
//   }
// }

// class CustomTextInput extends Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//   }

//   focusInput = () => this.inputRef.current.focus();

//   render() {
//     return <input type="text" ref={this.inputRef} />;
//   }
//}
