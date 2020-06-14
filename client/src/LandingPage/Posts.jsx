import React from 'react'
import './Posts.css'

export default function Posts(props) {
  const { posts } = props
  return (
    <>                
      {
        posts.map(post => (
          <React.Fragment key={post.id}>
            <div className="post-wrapper">
              <div className="post-container">
                <img
                  src={post.img_url}
                  alt={post.user}
                  className="post-image" />
                <div className="post-user"> By {post.user.username}</div>
                <div className="post-time">Last Edited {post.updated_at}</div>
                <div className="post-title">{post.title}</div>
                <div className="post-content">{post.content}</div>
              </div>
            </div>
          </React.Fragment>
        ))}
    </>
  )
}
