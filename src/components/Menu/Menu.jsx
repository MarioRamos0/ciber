import './Menu.css'
import { Link } from 'react-router-dom';

export default function Menu(props) {
    if (props.tipo === "admin") {
      return (
        <div className="Menu">
          <h1>Admin</h1>
          <ul>
            <li>
              <Link className="buttons" to="/register-zapato">Registrar zapato</Link>
            </li>
            <li>
              <Link className="buttons"  to="/zapatos">Ver zapatos</Link>
            </li>
            <li>
              <Link className="buttons"  to="/users">Ver usuarios</Link>
            </li>
      </ul>
        </div>
      );
    } else if (props.tipo === "user"){
      return (
        <div className="Menu">
          <h1>User</h1>
          <ul>
            <li>
              <Link className="buttons"  to="/zapatos">Ver zapatos</Link>
            </li>
         </ul>
        </div>
      );
    }
  }


  