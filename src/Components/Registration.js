import React, {Component} from "react"
import {register} from '../Redux/actioncreator.js'
import {connect} from 'react-redux'
class Registration extends Component {
  state = {
    username: null,
    email: null,
    phone: null,
    password: null
  }

  handleChange = event => {
     this.setState({
       [event.target.name]: event.target.value
     })
     console.log(this.state)
   };

   submitHandler = event => {
     event.preventDefault()
     // const userData = {
     //      username: this.state.username,
     //      email: this.state.email,
     //      phone: this.state.phone,
     //      password: this.state.password
     //    }
     this.props.register(this.state.username, this.state.email, this.state.phone, this.state.password)
   }

  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.submitHandler}>
        <ul>
          <li>
            <input onChange={this.handleChange} name="username" placeholder="Username" />
          </li>
          <li>
            <input onChange={this.handleChange} name="email" placeholder="Email" />
          </li>
          <li>
            <input onChange={this.handleChange} name="phone" placeholder="Phone" />
          </li>
          <li>
            <input onChange={this.handleChange} name="password" placeholder="Password" type="password"/>
          </li>
          <input type="submit"/>
        </ul>
      </form>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.currentUser}
};


export default connect(mapStateToProps,{register})(Registration)
