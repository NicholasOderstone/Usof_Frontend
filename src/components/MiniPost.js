import React from 'react'

const MiniPost = ({ post }) => {
    return (
        <div className="mini-post">
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
        </div>
    )
}

export default MiniPost
