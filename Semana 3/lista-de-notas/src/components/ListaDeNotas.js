import React, {useState} from 'react'
import Nota from './Nota';

function Lista(){
    const [notas,setNotas]=useState([]);
    const addNota=()=>{
        console.log("Agregar Nota")
        setNotas(notas,"Esto es otra nota")
    };
    const onDelete = () =>{
        console.log("Eliminar")
    };
    const onEdit = () =>{
        console.log("Editar")
    };

    return(
        <div className='contenedor-principal'>            
                <input
                    className="input"
                    type="text"
                    value=""
                >                    
                </input>
                <button onClick={addNota}>Agregar Nota</button>        
                {notas.map((nota => (

                <Nota                    
                    nota={nota}  
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
                )))

                }  
        </div>
    );
};
export default Lista;