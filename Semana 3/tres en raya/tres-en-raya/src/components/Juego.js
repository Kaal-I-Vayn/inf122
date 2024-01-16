import React from "react";
import TableroD from "./TableroD";
import { useState } from "react";

function Juego(){
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("O");
    const click = (i) => {
        console.log("Posicion: "+i);
        console.log("Turno: "+jugador);
        const cuadrosTemp=[...cuadros];

        
        if(cuadrosTemp[i]===null){
            cuadrosTemp[i]=jugador;
            setCuadros(cuadrosTemp);
            console.log(cuadrosTemp);
            setJugador(jugador==="X"? "O":"X")
            
        }
        else{                        
            console.log("no paso nada aqui")            
        }            
    };
    return <TableroD cuadros={cuadros} onclick={click}/>
}
export default Juego;