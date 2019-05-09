import React, { Component } from "react";
import { register } from "../Redux/actioncreator.js";
import { connect } from "react-redux";
import "../CSS/Reg.css";
class Registration extends Component {
  // componentDidMount() {
  //   this.setState({ result: this.props.result });
  // }

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

  submitHandler = event => {
    event.preventDefault();
    this.props.register(
      this.state.username,
      this.state.email,
      this.state.phone,
      this.state.password
    );
  };

  render() {
    // if (this.props.result.hasOwnProperty("error")) {
    //   return <div>{console.log("ternary working")}</div>;
    // } else {
    return (
      <div>
        {console.log("after submit", this.props.result)}
        <form autoComplete="off" onSubmit={this.submitHandler}>
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
                name="email"
                placeholder="Email"
              />
            </li>
            <li>
              <input
                onChange={this.handleChange}
                name="phone"
                placeholder="Phone"
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
// }
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
