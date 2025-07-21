
import React from 'react'
import "../css/signup.css"
function Signup() {
    return (
        <div className="signup-page">
            <form className="signup-card" >
                <h2>Create Account</h2>
                <input name="username" placeholder="username" required />
                <input type="email" name="email" placeholder="email" required />
                <input type="password" name="password" placeholder="password" required />
                <input type="password" name="confirm" placeholder="confirm password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup