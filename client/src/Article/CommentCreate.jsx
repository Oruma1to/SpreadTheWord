import React, { Component } from 'react'
import './CommentCreate.css'



export default class CommentCreate extends Component {
state = {
        content: ''
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { content } = this.state
    const { createComment, history } = this.props;
    return (
      <div className="commentCreate-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createComment(this.state, this.props.match.params.id);
            history.push(`/posts/${this.props.match.params.id}`);
            this.setState({
              content: ''
            })
          }}>
          <p className="commentCreate-title">Leave a Comment</p>
          <div className="commentCreate-label">
            <label
              htmlFor="content">
              <textarea
                className="commentCreate-input"
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
