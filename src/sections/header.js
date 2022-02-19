import React from 'react'

export const Header = () => {
    return (
        <header role="banner" class="header-styling">
            <img class="logo-placement flex-item" alt="Mock logo with bus, map marker, disability, location and information icons" src={logo}/>
            <h2 class="header-text flex-item">Accessible CUMTD Trip Planner</h2>
        </header>
    )
}