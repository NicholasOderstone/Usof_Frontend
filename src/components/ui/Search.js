import React, { useState } from 'react'
import {ReactComponent as ReactLogo} from '../../img/search.svg'
import './Search.css'
const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    // getQuery(q)
  }

  return (
    <div className="wrap">
    <div className="search">
      <div className="select_search_type">
      <select name="search_type" id="search_type" className="searchSelect">
          <option selected value="1">Posts</option>
          <option value="2">Users</option>
          <option value="3">Categories</option>
      </select>
      </div>
      
        <input type="text" className="searchTerm" placeholder="Search" />
        <button type="submit" className="searchButton">
          <ReactLogo />
      </button>
    </div>
    </div>
  )
}

export default Search