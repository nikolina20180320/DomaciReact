import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border navbar-dark sticky-top bg-dark">

            <div className="navbar-collapse collapse">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-auto">
                        <NavLink className='nav-link' to='/'>Overview</NavLink>
                    </li>
                    <li className="nav-item mx-auto">
                        <NavLink className='nav-link' to='/forecast'>Forecast</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
