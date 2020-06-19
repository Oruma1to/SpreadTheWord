import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getPost, updatePost } from '../services/posts'
import './PostEdit.css'

class PostEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        title: '',
        img_url: '',
        content: ''
      },
      updated: false
    }
  }

  async componentDidMount() {
    let { id } = this.props.match.params
    const post = await getPost(id)
    this.setState({ post })
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      post: {
        ...this.state.post,
        [name]: value
      }
    })
  }

  render() {
    const { post, updated } = this.state
    const { history } = this.props

    if (updated) {
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
    }
    return (
      <>
        <main className="postEdit-container">
          <img className="postEdit-image" src={post.img_url} alt={post.title} />
          <form className="postEdit-form"
            onSubmit={(e) => {
              e.preventDefault()
              let { id } = this.props.match.params
              const updated = updatePost(id, this.state.post)
              history.push(`/posts/${post.id}`)
              this.setState({ updated })
            }}>
            <p className="postEdit-formTitle">Image Url</p>
            <label htmlFor="img_url">
              <input
                className="postEdit-input"
                placeholder='Image Url'
                value={post.img_url}
                name='img_url'
                required
                onChange={this.handleChange}
              />
            </label>
            <br />
            <p className="postEdit-formTitle">Post Title</p>
            <label htmlFor="title">
              <input
                className="postEdit-input"
                placeholder='Name'
                value={post.title}
                name='title'
                required
                autoFocus
                onChange={this.handleChange}
              />
            </label>
            <br />
            <p className="postEdit-formTitle">Content</p>
            <label htmlFor="content">
              <textarea
                className="postEdit-input"
                rows={10}
                cols={78}
                placeholder='Content'
                value={post.content}
                name='content'
                required
                onChange={this.handleChange}
              />
            </label>
            <br />
            <div className="buttonDiv">
              <button type='submit' className="postEdit-save">Save</button>
            </div>
          </form>
        </main>
      </>
    )
  }
}

export default PostEdit