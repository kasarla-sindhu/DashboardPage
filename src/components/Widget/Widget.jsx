import React from 'react'
import './Widget.css'


const Widget = (props) => {
  const {item}=props
  const {id,name,text}=item
  return (
    <>
      <li className='widget-con' key={id}>
        <h1>{name}</h1>
        <p>{text}</p>
      </li>
      
    </>
  )
}

export default Widget