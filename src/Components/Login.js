import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: null,
    email: null,
    phone: null,
    password: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  loginHandler = event => {
    event.preventDefault();
    this.props.register(
      this.state.username,
      this.state.email,
      this.state.phone,
      this.state.password
    );
  };

  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.loginHandler}>
          <ul>
            <li>
              <input
                onChange={this.handleChange}
                name="username"
                placeholder="Username"
              />
            </li>
            <li>
              <input
                onChange={this.handleChange}
                name="password"
                placeholder="Password"
                type="password"
              />
            </li>
            <input type="submit" />
          </ul>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log("store state", state);
//   return {
//     currentUser: state.currentUser,
//     result: state.result
//   };
// };

export default Login;
