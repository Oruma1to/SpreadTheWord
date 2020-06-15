import React from "react"
import './Post.css'


const Post = (props) => {
  console.log(props)
  return (
      <div className="post-wrapper">
          <div><img
            src={props.img_url}
            alt={props.user}
          className="post-image" />
        </div>
          {/* <div className="post-user"> By {props.user.username}</div>
          <div className="post-time">Last Edited {props.updated_at}</div> */}
          <div className="post-title">{props.title}</div>
          {/* <div className="post-content">{props.content}</div> */}
        </div>
  )
}

export default Post