import React from 'react'
import {Link} from 'react-router-dom'
const MiniProfile = ({login, role, picture}) => {
    return (
        <div className="user-info">
            <div className="user-info-text">
                <span>{login}</span>
                <span>{role}</span>
            </div>
            <div>
                <Link to="/profile"><img src={picture} alt="profile"></img></Link>
            </div>
            
        </div>
    )
}

export default MiniProfile
