import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getAllUsers, createUser, deleteUser } from '../services/users'
import { createPost } from '../services/posts'
import { createComment } from '../services/comments'
import PostCreate from '../Article/PostCreate'
import SignIn from '../AuthComponents/SignIn'
import SignUp from '../AuthComponents/SignUp'
import Posts from '../Article/Posts'
import PostDetail from '../Article/PostDetail'
import PostEdit from '../Article/PostEdit'
import CommentCreate from '../Article/CommentCreate'
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

/////////////////////////////////////////////////////////

  createComment = async (commentData, postId) => {
    const newComment = await createComment(commentData, postId)
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment]
    }))
  }

/////////////////////////////////////////////////////////
  
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
          <Route exact path="/" render={(props) => <Posts {...props} currentUser={this.props.currentUser}/>} />
          <Route exact path="/posts/:id" render={(props) => <PostDetail {...props} history={props.history} currentUser={this.props.currentUser} />} />
          <Route path='/new/post' render={(props) => (<PostCreate {...props} createPost={createPost} />)} />
          <Route exact path="/posts/:id/edit" render={(props) => <PostEdit {...props} currentUser={this.props.currentUser} history={props.history} />} />
          <Route path='/posts/:id/comment' render={(props) => (<CommentCreate {...props} currentUser={this.props.currentUser} createComment={createComment} />)} />
        </Switch>
      </main>
    )
  }
}
