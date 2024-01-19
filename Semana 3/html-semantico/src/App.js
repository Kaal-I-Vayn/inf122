import './App.css';
import Registro from './components/Registro';
import Login from './components/Login';
import Perfil from './components/Perfil';
import Navbar from './components/Navbar';
import Galeria from './components/Galeria';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Navbar/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/Perfil" element={<Perfil/>}/>
            <Route path="/Galeria" element={<Galeria/>}/>
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
