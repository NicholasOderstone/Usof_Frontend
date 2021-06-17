import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'
import Search from './Search'
import LoginRegister from './LoginRegister'
import MiniProfile from '../MiniProfile'
const Header = ({ isLogedin}) => {
    return (
        <nav>
            <div>
            <Link to='/'><img className="logo"
                src={logo} 
                alt="logo"
                style={{width: "70px", height: "70px"}}
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
