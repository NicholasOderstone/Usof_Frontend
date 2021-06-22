import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import {useLocation} from 'react-router-dom'
import MiniPost from './MiniPost'
import Spinner from '../ui/js/Spinner'
import '../css/Posts.css'
const Posts = () => {
    const [posts, setPosts] = useState([])
    const[query, setQuery] = useState(new URLSearchParams(useLocation().search))
    const[isLoading, setIsLoading] = useState(true)
    let searchValue
    if(query.has('search')) {
        searchValue = query.get('search')
    }
    
    useEffect(() => {
        const fetchPosts = async (value) => {
            setIsLoading(true)
            console.log(value)
            let res = []
            if (value) {
                res  = await axios.get(`http://localhost:5000/api/posts?title_like=${value}`)
            } else {
                res  = await axios.get(`http://localhost:5000/api/posts`)
            }
            console.log(res)
            setPosts(res.data)
            setIsLoading(false)
        }
        
        fetchPosts(searchValue)
        
    }, [query])
    return isLoading ?
    (
        <Spinner /> 
    ):(
        <div className="posts">
        {searchValue ? <span className="search-by">Search by tittle: {searchValue}</span>: <span className="search-by">All Posts</span>}

        {posts && posts.map((post) => (
            <MiniPost key={post.id} post={post}/>  
            ))
        }
        
        </div>
    )
}

export default Posts
