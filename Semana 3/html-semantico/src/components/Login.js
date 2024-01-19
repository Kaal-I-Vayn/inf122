import Boton from "./Boton";
import React from "react";
import '../styles/Login.css';
export default function Login(){
    const click = (x) =>{
        console.log(x)
    }
    return(
        <div className="container">
            <h1>Login</h1>
            <div className="datos-container">
                <form>
                <div className="datos-info">
                    <label>Usuario:</label>
                    <input placeholder="Tu usuario."></input>                
                    <label>Contraseña:</label>
                    <input placeholder="Tu contraseña."></input>
                </div>    
                </form>
                <div className="boton-container">
                    <Boton
                        funClick={()=>click("Registro")}
                        text="Registrar"
                    />
                    <Boton
                        funClick={()=>click("Login")}
                        text="Ingresar"
                    />
                </div>
            </div>
        </div>
    )
}