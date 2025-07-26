

import Sidebar from "../components/Sidebar";
import View from "../components/View";
import "../css/signup.css"
import { Link, useNavigate } from 'react-router-dom'

function Login() {
 const navigate = useNavigate();
 const handleLogin=()=>{
   navigate('/', { replace: true });
 }
 
  return (
    <div className="signup-page">
      <form  className="signup-card" >
        <h2>Login</h2>
        <input type="email" name="email" placeholder="email" required />
        <input type="password" name="password" placeholder="password" required />

        <button type="submit" onClick={handleLogin} >Login</button>
        <p className='mt-1 '>New User? <Link to={'/signup'} style={{ textDecoration: 'none' }}  >Signup</Link></p>
      </form>
    </div>
  )
}

export default Login