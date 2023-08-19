import React, {useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import UserContext from './auth/UserContext'
import "./Nav.css"

const Nav = ({logout}) => {
    const {currentUser} = useContext(UserContext)

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
                <Link to="/" onClick={logout}>
                    LogOut {currentUser.username}
                </Link>
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