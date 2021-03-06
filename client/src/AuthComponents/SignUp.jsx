import React, { Component } from 'react';
import './SignUp.css'
import {Link} from 'react-router-dom'

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { username, email, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;
    return (
      <div className="signup-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegisterSubmit(this.state);
            history.push('/');
            this.setState({
              username: "",
              email: "",
              password: ""
            })
          }}>
          <h3 className="form-title">Register</h3>
          <div className="signup-label">
            <label
              htmlFor="username">
            <input
              className="input-lbl"
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.handleChange}
            />
            </label>
          </div>
          <br />
          <div className="signup-label">
          <label
            htmlFor="email">
            <input
              className="input-lbl"
              id="email"
              type="text"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={this.handleChange}
            />
            </label>
          </div>
          <br />
          <div className="signup-label">
          <label
            htmlFor="password">
            <input
              className="input-lbl"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            </label>
          </div>
          <div>
            <button className="signup-btn">Sign Up</button>
          </div>
        </form>
        <div className="loginPrompt">Already have an account?<Link to="/user/login" className="signIn-link">Sign In!</Link></div>
      </div>
    )
  }
}
