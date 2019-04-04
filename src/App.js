import React, { Component } from "react";
import Registration from "./Components/Registration.js";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mappedState", state);
  return { currentUser: state.currentUser, results: state.results };
};
export default connect(mapStateToProps)(App);
