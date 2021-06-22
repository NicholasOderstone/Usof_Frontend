import React from 'react'
import {Link} from 'react-router-dom'
const LoginRegister = () => {
    return (
        <div className="login-register">
            <div className="btn" id="login">
                <Link to="/login">Login</Link>
            </div>
            <div className="btn" id="register">
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default LoginRegister
