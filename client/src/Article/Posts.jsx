import React, { Component } from 'react'
import { getAllPosts } from "../services/posts"

import Post from './Post'


export default class Posts2 extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
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
        {POSTS}
      </div>
    )
  }
}
