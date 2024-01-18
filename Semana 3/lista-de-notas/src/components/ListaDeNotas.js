import React, {useState} from 'react';
import Nota from './Nota';

function Lista(){
    const [notas,setNotas]=useState([]);
    const [nuevaNota,setNuevaNota]=useState('');
    
    const addNota = () =>{
        console.log("Agregar Nota")
        if(nuevaNota.trim() === '') return(console.log("retorno por estar vacio"));
        setNotas([...notas,{id:Date.now(), texto: nuevaNota}]);
        setNuevaNota('');
    };

    const eliminarNota = (id) =>{
        console.log("Eliminar")
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));

    };
    const editarNota = (id,nuevoTexto) =>{
        console.log("Editar")
        setNotas((prevNotas) =>
            prevNotas.map((nota)=>(nota.id === id ? { ...nota,texto:nuevoTexto}: nota))

        );
    };

    return(
        <div className='contenedor-principal'>            
                <input
                    className="input"
                    type="text"
                    value={nuevaNota}
                    onChange={(e)=>setNuevaNota(e.target.value)}                    
                />                    
                
                <button className='boton' onClick={addNota}>Agregar Nota</button>
                {notas.map((nota) => (

                <Nota            
                    key={nota.id}
                    nota={nota}
                    onDelete={eliminarNota}
                    onEdit={editarNota}
                />
                ))

                }  
        </div>
    );
};
export default Lista;