import React, { Component } from 'react'


export default class PostCreate extends Component {
  state = {
      title: "",
      img_url: "",
      content: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
  }

  render() {
    const { title, img_url, content } = this.state;
    const { createPost, history } = this.props;



    
    return (
      <div className="create-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createPost(this.state);
            history.push('/');
            this.setState({
              title: "",
              img_url: "",
              content: ""
            })
          }}>
          <h3>Create Post</h3>
          <div className="title-label">
            <label
              htmlFor="title">Title:
        <input
                id="title"
                type="text"
                name="title"
                value={title}
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br />
          <div className="img_url-label">
            <label
              htmlFor="img_url">Image Url:
        <input
                id="img_url"
                type="text"
                name="img_url"
                value={img_url}
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <br />
          <div className="content-label">
            <label
              htmlFor="content">Content:
        <textarea
                id="content"
                type="text"
                rows={10}
                cols={78}
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
