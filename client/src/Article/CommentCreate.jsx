import React, { Component } from 'react'
import './CommentCreate.css'



export default class CommentCreate extends Component {
state = {
        content: ''
  }


  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value
    })
  }

  render() {
    const { content } = this.state;
    const { currentUser, postComment, history } = this.props;
    console.log(this.props.match.params.id)
    return (
      <div className="commentCreate-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postComment(this.state);
            history.push(`/posts/${this.props.match.params.id}`);
            this.setState({
              content: ""
            })
          }}>
          <p className="commentCreate-title">Leave a Comment</p>
          <div className="commentCreate-label">
            <label
              htmlFor="content">
        <textarea
                id="content"
                type="text"
                rows={10}
                cols={78}
                placeholder='Say Something'
                name="content"
                value={content}
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button className="commentCreate-submit">Submit</button>
        </form>
      </div>
    )
  }
}
