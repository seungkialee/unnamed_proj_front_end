import React, { Component } from "react";
import Registration from "./Components/Registration.js";
import Login from "./Components/Login.js";
import { connect } from "react-redux";

class App extends Component {
  state = {
    registration: true
  };

  togglePage = event => {
    this.setState({ registration: !this.state.registration });
  };

  render() {
    if (this.state.registration === true) {
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
  return { currentUser: state.currentUser, results: state.results };
};
export default connect(mapStateToProps)(App);
