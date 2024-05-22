import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'  //----------This navlink help you to click on link and switch on next page

function Navbar() {
  return (
    <>
    <div id="navbar">
    <NavLink to='/'><h2>Home</h2></NavLink>
    <NavLink to='/AboutUs'><h2>AboutUs</h2></NavLink>
    <NavLink to='/ContactUs'><h2>ContactUs</h2></NavLink>
    </div>

    </>
  )
}

export default Navbar