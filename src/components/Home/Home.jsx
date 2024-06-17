import './Home.css'
import Menu from '../Menu/Menu';
import { useState, useEffect } from 'react';

export default  function Home() {
    //get y ver el tipo de usuario
    //si es admin muestra un Menu u otro
    const userType = 'admin'; // Replace with actual user type
    const [zapatos, setZapatos] = useState([]);

    const getZapatos = async () => {
        try {
            const response = await fetch("http://localhost:3000/zapatos");
            const jsonData = await response.json();
            setZapatos(jsonData);

        } catch (err) {
          console.error("Database error: ", err);
          throw new Error("Failed to fecth shoes data");
        }
    }

    useEffect(() => {
        getZapatos();
    }, []);

    return (
        <>
            <Menu tipo={userType} />
            <div className="Zapatos">
                <h1>Zapatos</h1>
                <ul>
                  {zapatos.map(zapato => (
                    <li key={zapato.id_zapato}>
                      <span>{zapato.nombre}</span>
                      <span>{zapato.marca}</span>
                      <span>Cantidad: {zapato.cantidad}</span>
                    </li>
                  ))}
                </ul>
            </div>
        </>
    );
}