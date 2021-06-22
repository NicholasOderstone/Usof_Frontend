import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';
import '../css/Post.css'
import {ReactComponent as ReactLikeLogo} from '../../img/like.svg'
import {ReactComponent as ReactLikePressedLogo} from '../../img/like-pressed.svg'
const Post = ({post}) => {
    const [author, setAuthor] = useState([])
    const[rating, setRating] = useState(0)
    const[userRating, setUserRating] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    useEffect(() => {
        const fetchAuthor = async (user_id) => {
            const res = await axios.get(`http://localhost:5000/api/users/${user_id}`)
            setAuthor(res.data.name) 
            setUserRating(res.data.rating)
        }
        fetchAuthor(post.user_id)
        setRating(post.rating)
    }, [post.user_id])

    const LikeClick = () => {
        if (isLiked) {
            setRating(rating - 1)
        }
        else {
            setRating(rating + 1)
        }
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="post-header">
                <div className="title">
                    <h1>{post.title}</h1>
                </div>

                <div className="rating">
                    <button className="like" onClick={LikeClick}>
                        {isLiked ? <ReactLikePressedLogo /> : <ReactLikeLogo />}
                        
                        <span>{rating}</span>
                    </button>
                    
                </div>
            </div>
            
            <div className="categories"> 
                { post.categories && post.categories.map((category) => (
                    <Link  key={category.id} className="category" to={`../categories/${category.id}`}>{category.title}</Link>
                ))}
            </div>
            
            

            <div className="content">
                <p>{post.content}</p>
            </div>

            <div className="post-footer">
                

                <div className="user-info">
                    <Link to={`../users/${post.user_id}`}>{author}</Link>
                    <span>Rating: {userRating}</span>
                </div>

                <div className="date">
                    <span>{post.created_at}</span>
                </div>
            </div>
            
        </div>
    )
}

export default Post
