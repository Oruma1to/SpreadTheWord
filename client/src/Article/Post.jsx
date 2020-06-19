import React from "react"
import './Post.css'
import {Link} from 'react-router-dom'


const Post = (props) => {

  return (
    <Link className="post-link" to={`/posts/${props.id}`}>
      <div className="post-wrapper">

        <div><img
          src={props.img_url}
          alt={props.user}
          className="post-image" />
        </div>
        <div className="post-title">{props.title} <br/>By {props.user}</div>
        <div className="post-user"> </div>
      </div>
    </Link>
  )
}

export default Post