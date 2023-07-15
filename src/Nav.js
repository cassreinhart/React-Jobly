import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='Nav'>
        {currentUser ? (
            <nav className='Nav'>
                <NavLink exact to="/">
                    Jobly
                </NavLink>
                <NavLink exact to="/companies">
                    Companies
                </NavLink>
                <NavLink exact to="/jobs">
                    Jobs
                </NavLink>
                <NavLink exact to="/profile">
                    Profile
                </NavLink>
                <NavLink exact to="/logout">
                    LogOut
                </NavLink>
            </nav>
        ) : (
            <nav>
                <NavLink exact to="/">
                    Jobly
                </NavLink>
                <NavLink exact to ='/login'>
                    Login
                </NavLink>
                <NavLink exact to="/signup">
                    Signup
                </NavLink>
            </nav>
        )}
        
    
    </div>
  )
}

export default Nav