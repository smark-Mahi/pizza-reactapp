import React from 'react'

function MenuItem(props) {
  return (
    <div className='menuItem'>
    <div style={{backgroundImage:`url(${props.data.image})`}}></div>
    <h3>{props.data.name}</h3>
    <p>${props.data.price}</p>
      
    </div>
  )
}

export default MenuItem
