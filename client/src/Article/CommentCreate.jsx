import React, { Component } from 'react'



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
      <div className="create-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postComment(this.state);
            history.push(`/posts/${this.props.match.params.id}`);
            this.setState({
              content: ""
            })
          }}>
          <h3>Leave a Comment</h3>
          <div className="content-label">
            <label
              htmlFor="content">Content:
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
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
