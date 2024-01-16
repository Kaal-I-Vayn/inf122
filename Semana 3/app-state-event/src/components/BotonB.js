import React from "react";

function BotonB({ texto, esBotonClick, funcionClick}){
    return(
        <button className={esBotonClick ? "boton-click" : "boton-reiniciar"} onClick={funcionClick}>
            {texto}
        </button>
    )
}
export default BotonB;