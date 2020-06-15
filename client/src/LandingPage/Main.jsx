import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getAllUsers, createUser, deleteUser } from '../services/users'
import SignIn from '../AuthComponents/SignIn'
import SignUp from '../AuthComponents/SignUp'
import Posts from '../Article/Posts'
import PostDetail from '../Article/PostDetail'

export default class Main extends Component {
  state = {
    users: [],
    posts: [],
    comments: []
  }

  componentDidMount() {
    this.getUsers()
  }

  // ============================
  // ========== Users ===========
  // ============================
  getUsers = async () => {
    const users = await getAllUsers()
    this.setState({ users })
  }

  postUser = async (userData) => {
    const newUser = await createUser(userData)
    this.setState(prevState => ({
      users: [...prevState.users, newUser]
    }))
  }

  deleteUser = async (id) => {
    await deleteUser(id)
    this.setState(prevState => ({
      users: prevState.users.filter(user => user.id !== id)
    }))
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path='/user/login' render={(props) => (<SignIn {...props} handleLoginSubmit={this.props.handleLoginSubmit} />)} />
          <Route path='/user/register' render={(props) => (<SignUp {...props} handleRegisterSubmit={this.props.handleRegisterSubmit} />)} />
          <Route exact path="/posts" render={() => <Posts />} />
          <Route exact path="/posts/:id" render={(props) => <PostDetail {...props} history={props.history} />} />
        </Switch>
      </main>
    )
  }
}
