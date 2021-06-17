import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

import Post from './Post'
import Comment from './Comment'

const PostsPage = () => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const res = await axios.get(`http://localhost:5000/posts`)
    }
    return (
        <div>
            <Post post={post}/>
            <h2>Comments</h2>
            <div className="comments">
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </div>
        </div>
    )
}

export default PostsPage
