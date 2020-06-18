import React, { Component } from 'react'
import { getAllPosts } from "../services/posts"
import './Posts.css'
import Post from './Post'


export default class Posts extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  
  //All of my posts are now set to state here
  async componentDidMount() {
    const posts = await getAllPosts();
    this.setState({ posts });
  }

  render() {
    const posts = this.state.posts
    const POSTS = posts.map((post, index) =>
      <Post id={post.id} title={post.title} user={post.user.username} img_url={post.img_url} key={index} content={post.content} />
    )
    return (
      <div>
        <div className="main-container">
          <div className="main-wrapper">
          <img className="main-intro-image" src="https://lumen5.com/learn/wp-content/uploads/2019/05/Become-a-Better-Content-Creator-with-These-13-Tools.jpg" alt="youtube and twitch" />
            <h2 className="main-content">Welcome to Spread the Word! The platform dedicated to providing up and coming youtube and twitch content creators with the resources needed to gain some momentum on their respective platforms! All of our articles are sourced from the content communities themselves, with the help of some of the most famous content creators on the planet!</h2>
          </div>
          <p className="latest-posts">LATEST POSTS</p>
        </div>

        <div className="flexbox">
            {POSTS}
          </div>
      </div>
    )
  }
}
