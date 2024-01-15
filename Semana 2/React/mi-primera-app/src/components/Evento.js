import React from "react";
function Evento(){
    return(                
            <div className="card-container">
                
                    <img className="card-image" src={require("../images/image1.png")} alt="Foto del evento"/>                
                
                <div className="text-container">
                    <h1 className="card-title">Py Pizza 03 - PyPuzzle</h1>            
                    <p className="card-date">09 de Diciembre de 2023 - 13:30 GMT-4</p>
                    <p className="card-place">Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia</p>            
                    <p className="card-description">¡Hola Pythonista!
                    Participa en este Evento Presencial de la comunidad Python La Paz
                    ¿Cuánto conoces de Python?
                    Aprende a trabajar en equipo resolviendo increíbles acertijo
                    ¡Anímate a ser parte de esta actividad!</p>
                    <div className="icon-container">                
                        <figure> <img className="icon-image" src={require("../icons/facebook.png")} alt="Icono"/> </figure>
                        <figure> <img className="icon-image" src={require("../icons/youtube.png")} alt="Icono"/> </figure>
                        <figure> <img className="icon-image" src={require("../icons/twitter.png")} alt="Icono"/> </figure>
                    </div>
                </div>                
            </div>        
    )
}

export default Evento;