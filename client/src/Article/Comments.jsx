import React, { Component } from 'react'
import { getComment } from "../services/comments"
import Comment from '../Article/Comment'

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  //Specific comments are now set to state here
  async componentDidMount() {
    let { post_id } = this.props.match.params
    const comment = await getComment(post_id)
    this.setState({ comment })
  }


  render() {
    const comments = this.state.comments
    const COMMENTS = comments.map((comment, index) =>
      <Comment id={comment.id} pid={comment.post_id} key={index} content={comment.content} />
    )
    return (
      <div>
        {COMMENTS}
      </div>
    )
  }
}
