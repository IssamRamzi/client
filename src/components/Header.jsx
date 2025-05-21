import React from 'react'
import "./styles/Header.css"


const Header = () => {
  return (
    <nav className='header section'>
        <div className="logo">
            <img className='img' src="https://cdn-images.dzcdn.net/images/cover/765d647cc828d82e2039f07a3db5e103/0x1900-000000-80-0-0.jpg" alt="" />
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