import React, { Component } from 'react'
import './PostCreate.css'


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
      <div className="postCreate-container">
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
          <h3 className="postCreate-descrip">Create Post</h3>
          <div className="postCreate-title">
            <label
              htmlFor="title">
              <p className='postCreate-formTitle'>Post Title</p>
        <input
                className="postCreate-formlbl"
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
          <div className="postCreate-imgUrl">
            <label
              htmlFor="img_url">
              <p className='postCreate-formTitle'>Post Image Url</p>
        <input
                className="postCreate-formlbl"
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
          <div className="postCreate-content">
            <label
              htmlFor="content">
              <p className='postCreate-formTitle'>Content</p>
              <textarea
                className="postCreate-formlbl"
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
          <button className="postCreate-submit">Submit</button>
        </form>
      </div>
    )
  }
}
