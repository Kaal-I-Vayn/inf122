import Boton from "./Boton";
import React from "react";
export default function Perfil(){
    const click =(x)=>{
        console.log(x);
    }
    return(
        <div className="container">
            <h1>Perfil</h1>
            <div className="datos-container">
                <form>                
                <div className="datos-info">
                    <label>Nombre:</label>
                    <input placeholder="Tu nombre."></input>                
                    <label>Apellido:</label>
                    <input placeholder="Tu apellido."></input>       
                    <label>Contraseña:</label>
                    <input placeholder="Tu contraseña."></input>
                </div>    
                </form>
                <div className="boton-container">
                    <Boton                        
                        funClick={()=>click("Perfil")}
                        text="Editar"
                    />                    
                </div>
            </div>
        </div>
    )
}