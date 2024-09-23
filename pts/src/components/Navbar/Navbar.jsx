import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
<nav className="header">
<div className="logo">
     <a href="">Cooking by Mama</a>
    </div>
    <div   className="navbar">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Search</a>
        <a href="/">Contact</a>
    </div>
</nav>
  )
}

export default Navbar