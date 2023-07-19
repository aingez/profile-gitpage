// Navbar Reference:https://github.com/ecole-du-web/Responsive-React-Navbar

import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">

        <li className="items">
          <Link to="/profile-gitpage">Home</Link>
        </li>

        <li className="items">
          <Link to="/exp">Experience</Link>
        </li>

        <li className="items">
          <Link to="/cert">Cert&License</Link>
        </li>

        <li className="items">
          <Link to="/me">whoami</Link>
        </li>

        <li className="items">
          <Link to="/resume">resume</Link>
        </li>

        <li className="items">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      )
    }

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}
