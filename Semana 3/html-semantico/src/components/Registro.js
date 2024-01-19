import Boton from "./Boton";
import React from "react";
export default function Registro(){
    const click =(x)=>{
        console.log(x);
    }
    return(
        <div className="container">
            <h1>Registro</h1>
            <div className="datos-container">
                <form>                
                <div className="datos-info">
                    <label>Nombres:</label>
                    <input placeholder="Tu nombre."></input>                
                    <label>Apellido:</label>
                    <input placeholder="Tu apellido."></input>       
                    <label>Contraseña:</label>
                    <input placeholder="Tu contraseña."></input>
                </div>    
                </form>
                <div className="boton-container">
                    <Boton                        
                        funClick={()=>click("Registrarse")}
                        text="Registrar"
                    />                    
                </div>
            </div>
        </div>
    )
}