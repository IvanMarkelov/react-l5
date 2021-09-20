import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text1: "",
      text2: "",
      textarea: "",
      select: "",
      select2: [],
      checkbox: false,
      radio: "",
    };
  }

  ref1 = React.createRef();

  changeInput = (e) => {
    console.log(e.target);
    let { name, value, type, selectedOptions, checked } = e.target;

    if (type === "select-multiple") {
      value = [...selectedOptions].map((o) => o.value);
    }

    if (type === "checkbox") {
      value = checked;
    }

    this.setState({ [name]: value });
  };

  render() {
    const { text1, text2, textarea, select, select2, checkbox, radio } =
      this.state;
    return (
      <div>
        <div className="controlledElements">
          <h1>Контролируемые элементы</h1>
          <form>
            {/* //htmlFor - для привязки лейбла по айди */}
            <input name="text1" onChange={this.changeInput} value={text1} />
            <input name="text2" onChange={this.changeInput} value={text2} />
            <textarea
              name="textarea"
              onChange={this.changeInput}
              value={textarea}
            />
            <select name="select" onChange={this.changeInput} value={select}>
              <option value="1">Значение 1</option>
              <option value="2">Значение 2</option>
              <option value="3">Значение 3</option>
              <option value="4">Значение 4</option>
            </select>
            <select
              multiple={true}
              name="select2"
              onChange={this.changeInput}
              value={select2}
            >
              <option value="1">Значение 1</option>
              <option value="2">Значение 2</option>
              <option value="3">Значение 3</option>
              <option value="4">Значение 4</option>
            </select>
            <input
              name="checkbox"
              type="checkbox"
              checked={checkbox}
              onChange={this.changeInput}
            />
            <input
              name="radio"
              type="radio"
              value="1"
              checked={radio === "1"}
              onChange={this.changeInput}
            />
            <input
              name="radio"
              type="radio"
              value="2"
              checked={radio === "2"}
              onChange={this.changeInput}
            />
          </form>
        </div>
        <div className="uncontrolledElements">
          <h1>Неконтролируемые элементы</h1>
          <form onSubmit={this.sendUncontrolled}>
            <input defaultValue="test" ref={this.ref1} />
            <button onClick={this.sendUncontrolled}>Отправить</button>
          </form>
        </div>
      </div>
    );
  }

  sendUncontrolled = (e) => {
    e.preventDefault();
    console.log(this.ref1.current.value);
    this.ref1.current.focus();
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }
}

export default App;
