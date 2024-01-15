import React from "react";
function EventoB(props){
    return(                
            <div className="card-container">
                <img className="card-image" src={require( `../images/${props.image}.png`)} alt="Foto del evento"/>
                <div className="text-container">
                    <h1 className="card-title">{props.title}</h1>            
                    <p className="card-date">{props.dateLiteral}</p>
                    <p className="card-place">{props.placeLiteral}</p>            
                    <p className="card-description">{props.decription}</p>
                </div>
                <div className="icon-container">
                    <img className="icon-image" src=""/>
                </div>
            </div>        
    )
}

export default EventoB;