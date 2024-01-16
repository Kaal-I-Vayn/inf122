import React from "react";
import Cuadro from "./Cuadro";
import { useState } from "react";

function TableroD({cuadros, onclick}){
    function RenderizarCuadro(i){            
        return(            
            <Cuadro 
                valor={cuadros[i]}
                funcion={() => onclick(i)}
            />
        )
    }

    return(
        <div className="juego">
            <div className="tablero">
                {RenderizarCuadro(0)}
                {RenderizarCuadro(1)}
                {RenderizarCuadro(2)}
                {RenderizarCuadro(3)}
                {RenderizarCuadro(4)}
                {RenderizarCuadro(5)}
                {RenderizarCuadro(6)}
                {RenderizarCuadro(7)}
                {RenderizarCuadro(8)}
            </div>
        </div>
    );
    
}


export default TableroD;
