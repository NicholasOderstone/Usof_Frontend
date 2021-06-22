import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
import LoginRegister from './LoginRegister'
import MiniProfile from '../../js/MiniProfile'
import logo from '../../../img/logo.png'
import '../css/Header.css'
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
                    <a href="/posts">Posts</a>
                </li>
                <li>
                    <a href="/categories">Categories</a>
                </li>
                <li>
                    <a href="/users">Users</a>
                </li>
            </ul>
            
            {isLogedin ? <MiniProfile /> : <LoginRegister />}
            
        </nav>
    )
}

export default Header
