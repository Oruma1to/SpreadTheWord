import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SignIn extends Component {
  state = {
    username: "",
    password: ""

  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  
  render() {
    const { username, password } = this.state
    const { handleLoginSubmit } = this.props

    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        handleLoginSubmit(this.state)
      }}>
        <h3>Login</h3>
        <label htmlFor="username">Username:
        <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label htmlFor="password">Password:
        <input 
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
        />
        </label>
        <br />
        <Link to="/user/register">Register</Link>
        <button>Submit</button>
      </form>
    )
  }
}
