import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div style={{width: "100%"}}>
        <nav>
            <div>
                logo
            </div>
            <div>
                <ul className='list'>
                    <li>Home</li>
                    <li>Planning</li>
                    <li>Dayli</li>
                    <li>Increment</li>
                    <li>Review</li>
                    <li>retrospective</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header