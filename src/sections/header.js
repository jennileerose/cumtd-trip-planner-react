import React from 'react'
import logo from '../images/mock-logo.png'

const Header = () => {
    return (
        <header role="banner" className="header-styling">
            <img className="logo-placement flex-item" alt="Mock logo with bus, map marker, disability, location and information icons" src={logo}/>
            <h2 className="header-text flex-item">Accessible CUMTD Trip Planner</h2>
        </header>
    )
}

export default Header