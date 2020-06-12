import React, { Component } from 'react'
import Main from './LandingPage/Main'
import Header from './HeaderComponents/Header'



export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
