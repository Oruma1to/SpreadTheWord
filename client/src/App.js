import React, { Component } from 'react'
import Main from './LandingPage/Main'
import Header from './HeaderComponents/Header'
import { loginUser, registerUser } from './services/auth'

export default class App extends Component {
  state = {
    currentUser: null
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  }

  handleRegisterSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  }
  render() {
    return (
      <div>
        <Header />
        <Main
                  handleLoginSubmit={this.handleLoginSubmit}
                  handleRegisterSubmit={this.handleRegisterSubmit}
                  currentUser={this.state.currentUser}/>
      </div>
    )
  }
}
