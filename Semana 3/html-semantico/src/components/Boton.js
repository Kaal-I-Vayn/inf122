import React from 'react'
export default function Boton({funClick,text}){
    return(
        <button onClick={funClick}>
            {text}
        </button>
    )
};