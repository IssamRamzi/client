import React from 'react'
import "./styles/Main.css"


const Main = () => {
  return (
    <div className='main section'>
        <h3 className='green'>Heyyoo :3</h3>
        <p className='desc'>Hey there! I'm <span className='light'>Issam</span>, a developer with a passion for C++, Graphics Programming, and so much more.</p>

        <p className='list-title green'>● Skills</p>
        <div className="skills">
            <ul>
                <p className='light'>Languages : </p>

                <li className='white'>> C++</li>
                <li className='white'>> Java</li>
                <li className='white'>> Python</li>
                <li className='white'>> Javascript</li>
                <li className='white'>> ...</li>
            </ul>


            <ul>
                <p className='light'>Technologies : </p>

                <li className='white'>> Linux</li>
                <li className='white'>> OpenGL</li>
                <li className='white'>> JavaFX</li>
                <li className='white'>> React</li>
                <li className='white'>> ...</li>
            </ul>
        </div>

        <p className='list-title green'>● Current Projects</p>
        <div className="current-projects">
            <p className='white'>> <a href="https://github.com/IssamRamzi/Crock" target='_blank' className='light'>Crock Engine : </a>A game engine built with OpenGL.</p>
            <p className='white'>> <a href="https://github.com/IssamRamzi/AutomateSimulation" className='light'>Simulmata : </a>An automata simulation built with Raylib.</p>

        </div>

        <div className="contact">
            <p className='list-title green'>● Contact</p>
            <p className='white'>Feel free to reach me out : </p>
            <p className='white'>Discord : <a href="" className='light'>Kefelle</a></p>
            <p className='white'>Github : <a href="" className='light'>IssamRamzi</a></p>
            <p className='white'>Linkedin : <a href="" className='light'>IssamRamzi</a></p>
        </div>



    </div>
  )
}

export default Main