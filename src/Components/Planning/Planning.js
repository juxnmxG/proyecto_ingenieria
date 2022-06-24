import React from 'react'
import DragList from '../DragAndDrog/DragList'
import "./Planning.css"
function Planning({setIsOpen}) {
  return (
    <div className='planning'>
      <h1>
        Planning
      </h1>
      <div className=''>
        <DragList setIsOpen={setIsOpen}></DragList>
      </div>
    </div>
  )
}

export default Planning