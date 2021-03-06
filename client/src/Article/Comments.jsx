import React from "react"
import './Comments.css'

const Comments = (props) => {
  
  return (
    <>
      <div className="comment-wrapper">
        <div className="comment-container">
          <div className="comment-user"> By {props.user.username}</div>
          <div className="comment-time">Posted on {props.updated_at}</div>
          <div className="comment-content">{props.content}</div>
        </div>
      </div>
    </>
  )
}

export default Comments