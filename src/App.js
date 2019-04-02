import React, { Component } from 'react';
import Registration from './Components/Registration.js'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {currentUser: state.currentUser}

}
export default connect(mapStateToProps)(App);
