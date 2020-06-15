import React from "react"
import './Posts.css'
import {Link} from 'react-router-dom'

const Post = (props) => {
  console.log(props)
  return (
    <><Link></Link>
      <div className="post-wrapper">
        <div className="post-container">
          <img
            src={props.img_url}
            alt={props.user}
            className="post-image" />
          <div className="post-user"> By {props.user.username}</div>
          <div className="post-time">Last Edited {props.updated_at}</div>
          <div className="post-title">{props.title}</div>
          <div className="post-content">{props.content}</div>
        </div>
      </div>
    </>
  )
}

export default Post