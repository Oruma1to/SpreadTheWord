import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { getAllUsers, createUser, deleteUser } from '../services/users'
import { createPost } from '../services/posts'
import PostCreate from '../Article/PostCreate'
import SignIn from '../AuthComponents/SignIn'
import SignUp from '../AuthComponents/SignUp'
import Posts from '../Article/Posts'
import PostDetail from '../Article/PostDetail'
import PostEdit from '../Article/PostEdit'
export default class Main extends Component {
  state = {
    users: [],
    posts: [],
    comments: []
  }

  componentDidMount() {
    this.getUsers()
  }

  createPost = async (postData) => {
    const newPost = await createPost(postData)
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
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
    const { user } = this.state
    console.log(this.props.currentUser)
    return (
      <main>
        <Switch>
          <Route path='/user/login' render={(props) => (<SignIn {...props} handleLoginSubmit={this.props.handleLoginSubmit} />)} />
          <Route path='/user/register' render={(props) => (<SignUp {...props} handleRegisterSubmit={this.props.handleRegisterSubmit} />)} />
          <Route exact path="/" render={() => <Posts />} />
          <Route exact path="/posts/:id" render={(props) => <PostDetail {...props} history={props.history} currentUser={this.props.currentUser}/>} />
          <Route path='/new/post' render={(props) => (<PostCreate {...props} createPost={createPost} />)} />
          <Route exact path="/posts/:id/edit" render={(props) => <PostEdit {...props} currentUser={this.props.currentUser} history={props.history}/> } />
        </Switch>
      </main>
    )
  }
}
