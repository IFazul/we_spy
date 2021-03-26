import React from 'react';
import './style.scss';

const Register = ({activate,setActivate}) => {

    const active = () => {
        setActivate(!activate)
    }

    return (
        <div onClick={active} className="base-container">
            <div className="content">
                <form className="form">
                    <h1 className="header">Register</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="footer">
                    <button type='submit' className="btn">
                        Register
                    </button>
                </div>
                </form>
            </div>

        </div>
    )
}

export default Register;