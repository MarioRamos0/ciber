import { useState} from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './LogIn.css'

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to authenticate user
    // For now, just set the token to a test value
    // Validate user input
    //if (// Validation logic here) {
    //  return ; // Prevent further processing if validation fails
    //}

    // Send data to server (optional)
    // ...

    // Change route using useNavigate or useHistory
    navigate('/zapatos'); // Replace 'new-route' with your desired route path

  };

  return (
    <>
      <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" >Correo electrónico:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type="submit" value="Iniciar sesión" />
      </form>
      <Link to="/register" className='Registrarse'>Registrarse</Link>
    </div>
    </>
    
  );
}

export default LogIn;
