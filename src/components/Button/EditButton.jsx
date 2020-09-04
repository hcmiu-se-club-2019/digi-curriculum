import React, { Component } from "react";

import "./button.css";

class EditButton extends Component {
  render() {
    return (
      <button className="button-tool">
        <span className="button-tool-text">{this.props.name}</span>
        <span>
          <img src={this.props.icon} alt="" className="button-tool-icon" />
        </span>
      </button>
    );
  }
}

export default EditButton;
