//import logo from './logo.svg';
import './App.css';

import InicioPagina from './paginas/InicioPagina';
import ContactoPagina from './paginas/ContactoPagina';
import ArtistaPagina from './paginas/ArtistaPagina';

import Menu from './componentes/Menu';


import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <>      
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<InicioPagina/>}/>
          
            <Route path="/contacto" element={<ContactoPagina/>}/>
            <Route path="/artista"  element={<ArtistaPagina/>}/>
          
          
        </Routes>
      </Router>

    </>
  );
}

export default App;
