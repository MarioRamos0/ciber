import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
    const [fullName, setFullName] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: fullName,
            marca: brand,
            cantidad: quantity,
          }),
        });
        if (response.ok) {
          setSubmitted(true);
          // Optionally, clear the form fields
          setName('');
          setBrand('');
          setQuantity('');
        } else {
          console.error('Error registering shoe:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
      console.log('Datos del formulario:', { fullName, idNumber, email, password });
    };
  
    return (
        <div className="client-register-form">
            <form onSubmit={handleSubmit}>
                <h2 className="client-register-form-title">Registro de cliente</h2>
                <div className="client-register-form-group">
                  <label htmlFor="fullName" className="client-register-form-label">Nombre completo:</label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                    className="client-register-form-input"
                  />
                </div>
                <div className="client-register-form-group">
                  <label htmlFor="email" className="client-register-form-label">Correo electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="client-register-form-input"
                  />
                </div>
                <div className="client-register-form-group">
                  <label htmlFor="password" className="client-register-form-label">Contraseña:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="client-register-form-input"
                  />
                </div>
                <button type="submit" className="client-register-form-button">Registrar cliente</button>
        </form>
      <Link to="/">Volver</Link>
      </div>
    );
}

export default Register;
