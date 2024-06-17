import './RegisterZapato.css'
import React, { useState } from 'react';
import Menu from '../Menu/Menu';

export default function RegisterZapato(props) {
    const userType = 'admin'; // Replace with actual user type
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000/register-zapato', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: name,
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
    };
  
    if (submitted) {
      return (
        <div className="shoe-registration-success">
          <h2>Shoe registered successfully!</h2>
        </div>
      );
    }
    return(
        <div>
            <Menu tipo={userType} className="shoe-registration-form" />
            <div className='formZapato'>
                <h1>Registrar Zapato</h1>
                <form onSubmit={handleSubmit} >
                        <div className="form-group">
                          <label htmlFor="name">Nombre:</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="brand">Marca:</label>
                          <input
                            type="text"
                            id="brand"
                            name="brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="quantity">Cantidad disponible:</label>
                          <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                          />
                        </div>

                        <button type="submit" className="submit-button">Register Shoe</button>
                </form>
            </div>
        </div>
    )
}