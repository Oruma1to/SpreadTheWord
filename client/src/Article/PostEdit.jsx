import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getPost, updatePost } from '../services/posts'

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

  // handleSubmit = async (e) => {
  //   e.preventDefault()
  //   let { id } = this.props.match.params
  //   const updated = await updatePost(id, this.state.post)
  //   this.setState({ updated })
  // }


  render() {
    const { post, updated } = this.state
    const {history} = this.props

    if (updated) {
      return <Redirect to={`/posts/${this.props.match.params.id}`} />
    }
    return (
      <div className="product-edit">
        <img className="edit-product-image" src={post.img_url} alt={post.title} />
        <form
          onSubmit={(e) => {
            e.preventDefault()
            let { id } = this.props.match.params
            const updated = updatePost(id, this.state.post)
            history.push(`/posts/${post.id}`)
            this.setState({ updated })
          }}>
          <label htmlFor="img_url">
            <input
              className="edit-input-image-link"
              placeholder='Image Url'
              value={post.img_url}
              name='img_url'
              required
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="title">
            <input
              className="input-name"
              placeholder='Name'
              value={post.title}
              name='title'
              required
              autoFocus
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="content">
            <textarea
              className="textarea-content"
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
          <div>
            <button type='submit' className="save-button">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

export default PostEdit