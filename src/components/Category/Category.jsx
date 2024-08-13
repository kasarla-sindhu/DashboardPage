import './Category.css'
import React from 'react'
import Widget from '../Widget/Widget'
import { FiPlus } from "react-icons/fi";

const Category = (props) => {
    const {details}=props
    const {name,id,widgets}=details
    
    
  return (
    <div className='category-container' key={id}>
        <h1>{name}</h1>
        <ul className='widgets-list'>
            {widgets.map((eachwidget)=> <Widget item={eachwidget} key={eachwidget.id} />)}
            <li className='add-widget-con'>
              <button>
                <FiPlus className='icon'/>
                <p>Add Widget</p>
              </button>
            </li>
        </ul>
    </div>
  )
}

export default Category