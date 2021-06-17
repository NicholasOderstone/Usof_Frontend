import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
import LoginRegister from './LoginRegister'
import MiniProfile from '../MiniProfile'
import logo from '../../img/logo.png'
import './Header.css'
const Header = ({ isLogedin}) => {
    return (
        <nav>
            <div className="logo">
            <Link to='/'><img className="logo"
                src={logo} 
                alt="logo"
                /></Link>
            </div>
            <Search />
            <ul>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
            
            {isLogedin ? <MiniProfile /> : <LoginRegister />}
            
        </nav>
    )
}

export default Header
