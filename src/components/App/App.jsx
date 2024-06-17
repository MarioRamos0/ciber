import { Routes, Route } from "react-router-dom"
import LogIn from "../LogIn/LogIn"
import Register from "../Register/Register"
import Home from "../Home/Home" 
import RegisterZapato from "../RegisterZapato/RegisterZapato"
import Users from "../Users/Users"

export default function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/zapatos" element={<Home />} />
        <Route path="/register-zapato" element={<RegisterZapato />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  )
}