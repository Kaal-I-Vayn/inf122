import React from 'react';
import '../styles/Galeria.css'
export default function Galeria(){
    return(
        <div className='galeria'>
            <div className='contenedor-image'>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
                <img src={require(`../images/imagen1.png`)}/>
            </div>
            
        </div>
    )
}