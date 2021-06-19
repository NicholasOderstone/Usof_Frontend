import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';

const Comment = ({comment}) => {

    const [author, setAuthor] = useState([])

    useEffect(() => {
        const fetchAuthor = async (user_id) => {
            const res = await axios.get(`http://localhost:5000/api/users/${user_id}`)
            setAuthor(res.data.name)
        }
        fetchAuthor(comment.user_id)
        
    }, [comment.user_id])

    return (
        <div className="comment">
            <div className="author">
                <h4><Link to={`http://localhost:5000/api/users/${comment.user_id}`}>{author}</Link></h4>
            </div>
            <div className="content">
                <p>comment.content</p>
            </div>
            
        </div>
    )
}

export default Comment
