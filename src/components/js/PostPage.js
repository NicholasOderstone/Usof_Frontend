import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

import Post from './Post'
import Comment from './Comment'
import Spinner from '../ui/js/Spinner'
const PostPage = ({ post_id }) => {
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const[isPostLoading, setIsPostLoading] = useState(true)
    const[isCommentsLoading, setIsCommentsLoading] = useState(true)
    useEffect(() => {
        const fetchPost = async (post_id) => {
            setIsPostLoading(true)
            const res = await axios.get(`http://localhost:5000/api/posts/${post_id}`)
            console.log(res.data)
            setPost(res.data)
            setIsPostLoading(false)
        }

        const fetchComments = async (post_id) => {
            setIsCommentsLoading(true)
            const res = await axios.get(`http://localhost:5000/api/posts/${post_id}/comments`)
            console.log(res.data)
            setComments(res.data)
            setIsCommentsLoading(false)
        }

        fetchPost(post_id)
        fetchComments(post_id)
    }, [post_id])
    return (
        <div>
            {isPostLoading ? <Spinner /> : <Post post={post}/>}

            <h2>Comments</h2>

            {isCommentsLoading ? 
            <Spinner /> 
            : 
            <div className="comments">
                {comments && comments.map((comment) => (
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </div>}
            
        </div>
    )
}

export default PostPage
