import React from 'react'
import "./styles/Header.css"


const Header = () => {
  return (
    <nav className='header section'>
        <div className="logo">
            <h3 className="name green">Issam Ramzi</h3>
        </div>

        <ul className="nav-components">
            <li className='green link'>home</li>
            <li className='green link'>projects</li>
        </ul>
    </nav>
  )
}

export default Header