import React from 'react'

import "../css/signup.css"

function Login() {
  return (
    <div className="signup-page">
            <form className="signup-card" >
                <h2>Login</h2>
                <input type="email" name="email" placeholder="email" required />
                <input type="password" name="password" placeholder="password" required />
               
                <button type="submit">Login</button>
                
            </form>
        </div>
  )
}

export default Login