import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getAllUsers, createUser, deleteUser } from '../services/users'
import { allPostsOnly, deletePost } from '../services/posts'
import SignIn from '../AuthComponents/SignIn'
import SignUp from '../AuthComponents/SignUp'
import Posts from '../LandingPage/Posts'
import Post from '../Article/Post'

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

  getOnePost = async (id) => {
    const post = await getOnePostOnly(id)
    this.setState({post})
  }


  deletePost = async (id) => {
    await deletePost(id)
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }))
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
        <Switch>
        <Route exact path = {`/post/:id`} render={(props) => (
            <Post
            {...props}
            post={this.state.posts}
            currentUser={this.props.currentUser}
            deletePost={this.props.deletePost}
          />)} />
        </Switch>
        <Route exact path='/' render={() => (
          <Posts
            posts={this.state.posts}
            currentUser={this.props.currentUser}
          />
          )} />
      </main>
    )
  }
}
