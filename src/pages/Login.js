

import "../css/signup.css"
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };
  return (
    <div className="signup-page">
            <form className="signup-card" >
                <h2>Login</h2>
                <input type="email" name="email" placeholder="email" required />
                <input type="password" name="password" placeholder="password" required />
               
                <button type="submit" onClick={handleLogin}>Login</button>
                 <p className='mt-1 '>New User? <Link to={'/signup'} style={{ textDecoration: 'none' }}>Signup</Link></p>
            </form>
        </div>
  )
}

export default Login