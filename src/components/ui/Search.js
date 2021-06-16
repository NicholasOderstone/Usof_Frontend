import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    // getQuery(q)
  }

  return (

      <form className='search'>
        <input
          type='text'
          className='search-term'
          placeholder='Search'
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />

        <button type='submit' className='searchButton'>
        </button>
      </form>
    
  )
}

export default Search