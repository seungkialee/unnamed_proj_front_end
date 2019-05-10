import React, { Component } from "react";
import Registration from "./Components/Registration.js";
import Login from "./Components/Login.js";
import { connect } from "react-redux";

class App extends Component {
  togglePage = event => {
    this.props.dispatch({
      type: "LOGIN_TOGGLE"
    });
  };

  render() {
    if (this.props.registerComponent === true) {
      return (
        <div className="App">
          <button onClick={this.togglePage}>Login</button>
          <Registration />
        </div>
      );
    } else {
      return (
        <div className="App">
          <button onClick={this.togglePage}>Register</button>
          <Login />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log("mappedState", state);
  return {
    currentUser: state.currentUser,
    results: state.results,
    registerComponent: state.registerComponent
  };
};
export default connect(mapStateToProps)(App);
