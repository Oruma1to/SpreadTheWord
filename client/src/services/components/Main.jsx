import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SignIn from '../../AuthComponents/SignIn'

export default class Main extends Component {

  render() {
    return (
      <main>
        <Route path='/user/login' render={() => {
            <SignIn handleLoginSubmit={this.props.handleLoginSubmit}/>
          }} />
        <Route path='/user/register' render={() => {
          <SignIn handleLoginSubmit={this.props.handleLoginSubmit} />
        }} />
      </main>
    )
  }
}
