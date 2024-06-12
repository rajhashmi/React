import React, { Component } from "react";
import FRInput from "./FRInput";

class FRInputParent extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  clickMe = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickMe}>Focus Button</button>
      </div>
    );
  }
}

export default FRInputParent;
