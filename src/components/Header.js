import React from 'react'
import PropTypes from 'prop-types'; 

const Header = (props) => {
  return (
    <header>
        <h1 style={{color:'yellow'}}>{props.title}</h1>
    </header>
  )
}

export default Header  