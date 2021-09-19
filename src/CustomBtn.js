import React, { Component } from "react";

class CustomBtn extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  changeSendingStatus = () => (this.ref.current.innerText = "SENT");

  render() {
    return (
      <div>
        <button ref={this.ref}>{this.props.children}</button>
      </div>
    );
  }
}

function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidMount(prevProps) {
      console.log("old Props: ", prevProps);
      console.log("new Props: ", this.props);
    }

    render() {
        const {forwardedRef, ...rest} = this.props;
      return <WrappedComponent ref={forwardedRef}{...rest} />;
    }
  }
  return React.forwardRef((props, ref) => {
      return <LogProps {...props} forwardedRef={ref} />
  });
}

export default logProps(CustomBtn);
