import React from "react";
import {Link,Outlet} from 'react-router-dom';

export default function Navbar(){
    return(
        
        <nav >
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/Registro">Registro</Link>
                </li>
                <li>
                    <Link to="/Perfil">Perfil</Link>
                </li>
                <li>
                    <Link to="/Galeria">Galeria</Link>
                </li>
            </ul>
        </nav>
    )
}