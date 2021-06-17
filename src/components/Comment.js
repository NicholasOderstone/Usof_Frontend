import React from 'react'

const Comment = ({comment}) => {
    return (
        <div className="comment">
            <div className="author">
                <h4>comment.author</h4>
            </div>
            <div className="content">
                <p>comment.content</p>
            </div>
            
        </div>
    )
}

export default Comment
