import logo from './logo.svg';
import './App.css';
import './stylesheet/Boton.css'
import './stylesheet/Contador.css'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';
import BotonB from './components/BotonB';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks+1);
    
  };
  const reiniciar = () => {
    setNumClicks(0);
    
  };
  const summas3 = () =>{
    setNumClicks(nroClicks+3);
  };
  const restmenos3 = () =>{
    setNumClicks(nroClicks-3);
  };
  const summas1 = () =>{
    setNumClicks(nroClicks+1);
  };
  const restmenos1 = () =>{
    setNumClicks(nroClicks-1);
  };
  const [show, setShow] = useState(true);
  const mostrar = () =>{
    setShow 
    (!show)
  }
  
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <Contador nroClicks={nroClicks}/>
        <div className='contenedor-botones'>
          <div className='contenedor-numeros'>

          <Boton texto="-3" esBotonClick={true}
            funcionClick={restmenos3}
          />
          <Boton 
            texto="+3" esBotonClick={true}
            funcionClick={summas3}
          />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={restmenos1}
          />
          <Boton 
            texto="+1" esBotonClick={true}
            funcionClick={summas1}
          />
            
          </div>
          <Boton
            texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar}
          />
          
          <BotonB
            texto="Mostrar" esBotonClick={false}
            funcionClick={reiniciar}
          />

        </div>
      </div>
      
    </div>
  );
}

export default App;
