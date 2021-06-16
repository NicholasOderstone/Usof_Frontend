import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
import MiniProfile from './MiniProfile'
import logo from '../../img/logo.png'
const Header = () => {
    return (
        <header className="header">
            <Link to='/'><img className="logo"
                src={logo} 
                alt="logo"
                style={{width: "100px", height: "100px"}}
                > 
            </img></Link>
            <Search/>
            <MiniProfile login="Login" role="Role" picture="https://img.icons8.com/wired/64/000000/circled-user.png"/>
        </header>
    )
}

export default Header
