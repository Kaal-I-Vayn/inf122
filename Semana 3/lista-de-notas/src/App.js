import './App.css';

import Lista from './components/ListaDeNotas';
import useState from 'react';
function App() {
  
  const [notas,setNotas] = useState(Array(2))
  return (
    <div className="App">
      <Lista />
    </div>
  );
}

export default App;
