import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as ReactLogo} from '../../../img/search.svg'
import '../css/Search.css'

const Search = () => {
  const [text, setText] = useState('')
  const [type, setType] = useState('posts')

  const onTextChange = (q) => {
    setText(q)
  }
  
  const onTypeChange = (q) => {
    setType(q)
  }

  return (
   
    <div  className="wrap">
      <div className="search"> 
        <div className="select_search_type">

          <select name="search_type"  id="search_type" className="searchSelect" 
            value={type} onChange={(e) => onTypeChange(e.target.value)}>

            <option value="posts">Posts</option>
            <option value="users">Users</option>
            <option value="categories">Categories</option>
          </select>

        </div>
       
        <input type="text" className="searchTerm" placeholder="Search" value={text}
          onChange={(e) => onTextChange(e.target.value)}/>

          <a className="searchButton" href={`/${type}?search=${text}`}><ReactLogo /></a>
      </div>
    </div>
      
    
  )
}

export default Search