import React, { Component } from 'react'

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, email, password } = this.state
    const { handleRegisterSubmit } = this.props
    
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        handleRegisterSubmit(this.state)
      }}>
        <h3>Sign Up!</h3>
        <label htmlFor="email">email:
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          />
        </label>
        <label htmlFor="username">username:
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
          />
          </label>
        <br />
        <label htmlFor="password">password:
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          />
        </label>
        <br />
        <Link to="/user/Register" />
        <button>Submit</button>
      </form>
    )
  }
}
