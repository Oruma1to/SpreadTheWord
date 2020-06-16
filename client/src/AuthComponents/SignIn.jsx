import React, { Component } from 'react';
import './SignIn.css'
import {Link} from 'react-router-dom'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <div className="signin-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginSubmit(this.state);
            history.push('/');
            this.setState({
              username: "",
              password: ""
            })
          }}>
          <h3 className="form-title">Sign In</h3>
          <div className="signin-label">
            <label htmlFor="username">
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
          <div className="signin-label">
            <label htmlFor="password">
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
          <br />
          <button className="signin-btn">Sign In</button>
          <div className="regPrompt">Don't Have an account?<Link to="/user/register" className="signUp-link">Sign Up!</Link></div>
        </form>
      </div>
    )
  }
}
