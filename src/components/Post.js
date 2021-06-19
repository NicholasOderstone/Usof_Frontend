import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';
const Post = ({post}) => {
    const [author, setAuthor] = useState([])
    useEffect(() => {
        const fetchAuthor = async (user_id) => {
            const res = await axios.get(`http://localhost:5000/api/users/${user_id}`)
            setAuthor(res.data.name) 
        }
        fetchAuthor(post.user_id)
        
    }, [post.user_id])
    return (
        <div className="post">
            <div className="title">
                <h1>{post.title}</h1>
            </div>

            <div className="categories">
                <ul> 
                {post.categories.map((category) => (
                    <li key={category.id}>
                        <span><Link to={`http://localhost:5000/api/categories/${category.id}`}>{category.title}</Link></span>
                    </li>
                ))}
                </ul>
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
                <h4><Link to={`http://localhost:5000/api/users/${post.user_id}`}>{author}</Link></h4>
                
            </div>
            
        </div>
    )
}

export default Post
