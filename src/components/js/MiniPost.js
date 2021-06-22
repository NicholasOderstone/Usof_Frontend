import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Posts.css'
import {ReactComponent as ReactLikeLogo} from '../../img/like.svg'
const MiniPost = ({ post }) => {
    return (
        <div className="mini-post">
                <Link className="mini-post-header" to={`/post/${post.id}`}>
                    <div className="title">
                        <span>{post.title}</span>
                    </div>
                    <div className="rating">
                    <ReactLikeLogo />
                    <span>{post.rating}</span>
                    </div>
                </Link>
                <div className="categories"> 
                { post.categories && post.categories.map((category) => (
                    <Link  key={category.id} className="category" to={`../categories/${category.id}`}>{category.title}</Link>
                ))}
            </div>
            <div className="content fade">
                {post.content}
            </div>
            
            <div className="date">
                <span>{post.created_at}</span>
            </div>

        </div>
    )
}

export default MiniPost
