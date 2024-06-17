import './Users.css'
import { useState , useEffect} from 'react';
import Menu from '../Menu/Menu';

export default function Users(props) {
    const userType = 'admin'; // Replace with actual user type
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await fetch("http://localhost:3000/users");
            const jsonData = await response.json();
            setUsers(jsonData);

        } catch (err) {
          console.error("Database error: ", err);
          throw new Error("Failed to fecth users data");
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return(
        <div>
            <Menu tipo={userType} />
            <div className="Usuarios">
                <h1>Usuarios</h1>
                <ul>
                  {users.map(user => (
                    <li key={user.id_user}>
                      <span>{user.nombre_completo}</span>
                      <span>{user.cedula}</span>
                      <span>{user.correo}</span>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
    )
}