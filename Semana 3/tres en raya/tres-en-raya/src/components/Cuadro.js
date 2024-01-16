import React from 'react';


function Cuadro({ valor, funcion }) {
    return (
        <button className="cuadro" onClick={funcion}>
            {valor}
        </button>
    );
}

export default Cuadro;