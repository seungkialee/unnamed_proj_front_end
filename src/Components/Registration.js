import React, { Component } from "react";
import { register } from "../Redux/actioncreator.js";
import { connect } from "react-redux";
import Reg_Form from "./Reg_Form";
import Errors from "./Errors";

class Registration extends Component {
  render() {
    if (this.props.result.hasOwnProperty("error")) {
      return (
        <div>
          <div className="errors">
            <Errors />
          </div>
          <Reg_Form />
        </div>
      );
    } else if (this.props.result.hasOwnProperty("user")) {
      return (
        <div>
          <span className="success-msg">Successfully Created Account</span>
          <Reg_Form />
        </div>
      );
    } else {
      return (
        <div>
          <Reg_Form />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  console.log("store state", state);
  return {
    currentUser: state.currentUser,
    result: state.result
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Registration);
