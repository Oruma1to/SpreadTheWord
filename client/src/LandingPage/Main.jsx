import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { getAllUsers, createUser, deleteUser } from '../services/users'
import { allPostsOnly } from '../services/posts'
import SignIn from '../AuthComponents/SignIn'
import SignUp from '../AuthComponents/SignUp'

export default class Main extends Component {
  state = {
    users: [],
    posts: [],
    comments: []
  }

  componentDidMount() {
    this.getUsers()
    this.getPosts()
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

  // ============================
  // ========== Posts ===========
  // ============================
  getPosts = async () => {
    const posts = await allPostsOnly()
    this.setState({ posts })
  }

  render() {
    return (
      <main>
        <Route path='/user/login' render={(props) => (
          <SignIn
            {...props}
            handleLoginSubmit={this.props.handleLoginSubmit}
          />
        )} />
        <Route path='/user/register' render={(props) => (
          <SignUp
            {...props}
            handleRegisterSubmit={this.props.handleRegisterSubmit}
          />
        )} />
      </main>
    )
  }
}
