import React, { Component } from 'react'
import { getPost, deletePost } from '../services/posts'
import { Redirect, Link } from 'react-router-dom'
import { getAllComments } from "../services/comments"
import Comments from './Comments'
import './PostDetail.css'

export default class PostDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {
        title: '',
        img_url: '',
        content: '',
        user: {
          username: ''
        }
      },
      comments: []
      ,
      deleted: false
    }
  }

  async componentDidMount() {
    this.getPosts()
    this.getComments()
  }

  getPosts = async () => {
    let { id } = this.props.match.params
    const post = await getPost(id)
    this.setState({ post })
  }

  createPost = async (postData) => {
    const newPost = await this.createPost(postData)
    this.setState(prevState => ({
      posts: [...prevState.posts, newPost]
    }))
  }

  getComments = async () => {
    let { id } = this.props.match.params
    const comments = await getAllComments(id);
    this.setState({ comments });
  }

  deletedThisPost = async () => {
    console.log("deleting blog")
    const { post } = this.state
    if (this.props.currentUser || this.props.currentUser.admin === true) {
      await deletePost(post.id)
      this.setState({
        deleted: true
      })
    } else {
      alert("You do not have permissions to perform this action")
    }
  }

  render() {
    const comments = this.state.comments

    const COMMENTS = comments.map((comment, index) =>
      <Comments id={comment.id} pid={comment.post_id} key={index} content={comment.content} user={comment.user} updated_at={new Date (comment.updated_at).toLocaleString
        ()} />
    )
    const { post, deleted } = this.state
    if (deleted) {
      return <Redirect to={'/'} />
    }

    return (

      <div className="postDetail-container">
        <div className="postDetail-wrapper">
          <div className="postDetail-title">{post.title}</div>
          <div className="postDetail-author">By {post.user.username}</div>
          <img className="postDetail-image" src={post.img_url} alt={post.title} />
          <div className="postDetail-content">{post.content}</div>
          <div className="postDetail-btns">
            {
              this.props.currentUser && this.props.currentUser.id === post.user_id | this.props.currentUser.admin === true &&
              (<>
                <Link to={`/posts/${post.id}/edit`}><button className="postDetail-edit" >Edit</button></Link>
                <button className="postDetail-delete" onClick={this.deletedThisPost}>Delete</button>
              </>
              )
            }
          </div>
        </div>
        <div className="postDetail-commentContainer">
          <div className="postDetail-commentSection">COMMENTS</div>


          {this.props.currentUser
            ?
            <Link className="lac-button" to={`/posts/${post.id}/comment`} ><button className="lac">Leave a comment!</button></Link>
            :
            <><p className="lac-message"><Link className="lac-signup" to="/user/register">Sign Up</Link> to leave a comment!</p></>
          }
            </div>
          

          <div className="postDetail-comments">{COMMENTS}</div>

      </div>
    )
  }
}
