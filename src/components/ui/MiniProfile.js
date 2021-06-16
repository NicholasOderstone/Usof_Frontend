import React from 'react'
import {Link} from 'react-router-dom'
const MiniProfile = ({login, role, picture}) => {
    return (
        <section className="mini-profile">
            <div className="mini-profile-user-info">
                <p>{login}</p>
                <p>{role}</p>
            </div>
            <Link to="/profile"><img src={picture} alt="profile"></img></Link>
        </section>
    )
}

export default MiniProfile
