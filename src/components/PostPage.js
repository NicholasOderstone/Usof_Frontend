import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

import Post from './Post'
import Comment from './Comment'

const PostPage = ({ post_id }) => {
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const[isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        const fetchPost = async (post_id) => {
            const res = await axios.get(`http://localhost:5000/api/posts/${post_id}`)
            console.log(res.data)
            setPost(res.data)
        }

        const fetchComments = async (post_id) => {
            const res = await axios.get(`http://localhost:5000/api/posts/${post_id}/comments`)
            console.log(res.data)
            setComments(res.data)
        }

        fetchPost(post_id)
        fetchComments(post_id)
        setIsLoaded(true)
    }, [])
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

export default PostPage
