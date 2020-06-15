import React from "react"
import './Posts.css'
import { Route } from 'react-router-dom'
import Comments from './Comments'

const Post = (props) => {
  console.log(props)
  return (
    <>
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
        <Route exact path="/posts/:id" render={() => <Comments />} />
      </div>
    </>
  )
}

export default Post