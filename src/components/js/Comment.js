import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';
import {ReactComponent as ReactLikeLogo} from '../../img/like.svg'
import {ReactComponent as ReactLikePressedLogo} from '../../img/like-pressed.svg'

import '../css/Comment.css'
const Comment = ({comment}) => {

    const [author, setAuthor] = useState([])
    const[userRating, setUserRating] = useState(0)

    const[rating, setRating] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    useEffect(() => {
        const fetchAuthor = async (user_id) => {
            const res = await axios.get(`http://localhost:5000/api/users/${user_id}`)
            setAuthor(res.data.name)
            setUserRating(res.data.rating)
        }
        fetchAuthor(comment.user_id)
        setRating(comment.rating)
    }, [comment.user_id])

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
        <div className="comment">
            <div className="comment-header">
            <div className="user-info">
                <Link to={`http://localhost:5000/api/users/${comment.user_id}`}>{author}</Link>
                <span>Rating: {userRating}</span>
            </div>
            <div className="rating">
                    <button className="like" onClick={LikeClick}>
                        {isLiked ? <ReactLikePressedLogo /> : <ReactLikeLogo />}
                        
                        <span>{rating}</span>
                    </button>
                    
                </div>
            </div>
            
            <div className="content">
                <p>{comment.content}</p>
            </div>
            
            <div className="date">
                    <span>{comment.created_at}</span>
                </div>
        </div>
    )
}

export default Comment
