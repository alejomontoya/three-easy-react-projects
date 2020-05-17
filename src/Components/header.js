import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Counter</Link>
                        </li>
                        <li>
                            <Link to="/change-background">Change background</Link>
                        </li>
                        <li>
                            <Link to="/letter-counter">Letter Counter</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}