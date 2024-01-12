import React from "react";
function Evento(){
    return(                
            <div className="card-container">
                <div className="card-image">
                    <img src={require("../images/image1.png")} alt="Foto del evento"/>
                
                </div>
                <div className="text-container">
                    <h1 className="title">Py Pizza 03 - PyPuzzle</h1>            
                    <p className="date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                    <p className="place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>            
                    <p className="description">¡Hola Pythonista!
                    Participa en este Evento Presencial de la comunidad Python La Paz
                    ¿Cuánto conoces de Python?
                    Aprende a trabajar en equipo resolviendo increíbles acertijo
                    ¡Anímate a ser parte de esta actividad!</p>
                </div>
            </div>        
    )
}