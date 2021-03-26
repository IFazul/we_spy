import React from 'react';
import './style.scss';

const Login = ({activate, setActivate}) => {
    const active = () => {
        setActivate(!activate)
    }
    return (
        <div onClick={active} className="base-container">
            <div className="content">
                <form className="form">
                    <h1 className="header">Login</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="Password" />
                    </div>
                    <div className="footer">
                        <button type='submit' className="btn">
                            Login
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default Login;