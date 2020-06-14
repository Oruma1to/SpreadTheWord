import React from 'react'

export default function Posts(props) {
  const { posts } = props

  return (
    <>
      <hr />
      <h3>Articles</h3>
      {
        posts.map(post => (
          <React.Fragment key={post.id}>
            <div className="post-wrapper">
              <div className="post-container">
                <img
                  src={post.img_url}
                  alt={post.user}
                  className="post-image" />
                <div className="post-user">{post.user.username}</div>
                <div className="post-title">{post.title}</div>
                <div className="post-content">{post.content}</div>
              </div>
            </div>
          </React.Fragment>
        ))}
    </>
  )
}
