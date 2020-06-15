import React from "react"
import './Posts.css'

const Comment = (props) => {
  console.log(props)
  return (
    <>
      <div className="comment-wrapper">
        <div className="comment-container">
          <div className="comment-user"> By {props.user.username}</div>
          <div className="comment-time">Last Edited {props.updated_at}</div>
          <div className="comment-content">{props.content}</div>
        </div>
      </div>
    </>
  )
}

export default Comment