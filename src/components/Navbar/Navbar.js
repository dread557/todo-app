import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import './Navbar.scss'

function Navbar() {
    const { isLightTheme, toggleTheme } = useContext(ThemeContext)
    return (
        <div className='nav-container'>
            {isLightTheme ? (
                <nav className="navbar navbar-light">
                    <div className='nav-switch-grp'>
                        <h1>Todo</h1>
                        <img onClick={toggleTheme} src=".././assets/icon-moon.svg" alt="dark mode switch" />
                    </div>
                </nav>) : (
                <nav className="navbar navbar-dark">
                    <div className='nav-switch-grp'>
                        <h1>Todo</h1>
                        <img onClick={toggleTheme} src=".././assets/icon-sun.svg" alt="dark mode switch" />
                    </div>
                </nav>
            )}
        </div>

    )
}

export default Navbar
