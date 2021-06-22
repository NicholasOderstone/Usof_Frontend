import React from 'react'
import spinner from '../../../img/spinner.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ width: '100px', margin: 'auto', display: 'block', position: "relative", top: "100px"}}
      alt='Loading'
    />
  )
}

export default Spinner