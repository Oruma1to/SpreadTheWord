import React, { Component } from 'react'
import Header from './HeaderComponents/Header'
import SignIn from './AuthComponents/SignIn'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignIn />
        <h1>hello World</h1>
      </div>
    )
  }
}
