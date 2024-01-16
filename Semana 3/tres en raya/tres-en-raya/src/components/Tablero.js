
import Cuadro from "./Cuadro";
import { useState } from "react";
function Tablero(){
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador]=useState("O")
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
    return(
        <div className="juego">
            <h1>Siguiente jugador: {jugador}</h1>
            <div className="tablero">            
            
            <Cuadro valor={cuadros[0]} funcion={() => click(0)}/>
            <Cuadro valor={cuadros[1]} funcion={() => click(1)}/>
            <Cuadro valor={cuadros[2]} funcion={() => click(2)}/>
            <Cuadro valor={cuadros[3]} funcion={() => click(3)}/>
            <Cuadro valor={cuadros[4]} funcion={() => click(4)}/>
            <Cuadro valor={cuadros[5]} funcion={() => click(5)}/>
            <Cuadro valor={cuadros[6]} funcion={() => click(6)}/>
            <Cuadro valor={cuadros[7]} funcion={() => click(7)}/>
            <Cuadro valor={cuadros[8]} funcion={() => click(8)}/>            
            </div>
            <div className="boton-reiniciar">                
            </div>

            
        </div>
    )
}
export default Tablero;