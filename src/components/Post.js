import React from 'react'

const Post = ({post}) => {
    return (
        <div className="post">
            
            <div className="title">
                <h1>{post.title}</h1>
            </div>

            <div className="rating">
                <p>Rating: {post.rating}</p>
            </div>
            <br/>

            <div className="content">
                <p>{post.content}</p>
            </div>
            <br/>

            <div className="author">
                <h4>{post.author}</h4>
            </div>
            
        </div>
    )
}

export default Post
