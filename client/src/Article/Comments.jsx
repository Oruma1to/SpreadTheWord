import React, { Component } from 'react'
import { getAllComments } from "../services/comments"
import Comment from '../Article/Comment'

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  //All of my comments are now set to state here
    async componentDidMount() {
      const comments = await getAllComments();
      this.setState({ comments });
    }

  render() {
    const comments = this.state.comments
    const COMMENTS = comments.map((comment, index) =>
      <Comment id={id} pid={comment.post_id} key={index} content={comment.content} />
    )
    return (
      <div>
        {COMMENTS}
      </div>
    )
  }
}
