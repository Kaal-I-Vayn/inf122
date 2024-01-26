import React from 'react';
import style from './Cuadro.module.css'

function Cuadro({ valor, funcion }) {
    return (
        <button className={style["cuadro"]} onClick={funcion}>
            {valor}
        </button>
    );
}

export default Cuadro;