import React, { Component } from 'react'
import { getPost, deletePost } from '../services/posts'
import {Redirect, Link} from 'react-router-dom'

export default class PostDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        title: '',
        img_url: '',
        content: ''
      },
      deleted: false
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const post = await getPost(id)
    this.setState({ post })
  }

  deletedThisPost = async () => {
    console.log("deleting blog")
    const { post } = this.state
    if (this.props.user) {
      await deletePost(post.id)
      this.setState({
        deleted: true
      })
    } else {
      alert("You do not have permissions to perform this action")
    }
  }

  render() {
    const { post, deleted } = this.state
    if (deleted) {
      return <Redirect to={'/posts'} />
    }
    return (
        <div>
          <div className="post-detail">
            <img className="post-detail-image" src={post.img_url} alt={post.title} />
            <div className="detail">
              <div className="title">{post.title}</div>
              <div className="content">{post.content}</div>
              <div className="button-container">
                <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
                <button className="delete-button" onClick={this.deletedThisPost}>Delete</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
