import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const NavLinkcss = ({isActive})=>{
        return{
            color: isActive ? "green" : "red",
            fontsize: isActive ? "10px" : "20px",

        }
    }

  return (
    <div>
        <h1>
            <NavLink style = {NavLinkcss} to='/'>Home</NavLink>
            
            <NavLink style = {NavLinkcss} to ='/About'>About</NavLink>
            <NavLink style = {NavLinkcss} to='/Contact'>Contact</NavLink>
        </h1>
    </div>
  )
}

export default Navbar