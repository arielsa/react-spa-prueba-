//import logo from './logo.svg';
import './App.css';

import Menu from './Menu';
import Artista from './Artista'


function App() {
  return (
    <>
      <Menu />
      <div className="container pt-5">
        <h2>inicio</h2>
        <p>bienvenido a mi pagina de artistas favoritos :D</p>
        <Artista 
        img="img/cerati.jpg"
        nombre="Gustavo Cerati" 
        descripcion="el cantante de soda. Un musico muy completo"/>

        <Artista 
        img="./img/indio.jpg"
        nombre="el Indio Solari" 
        descripcion="el cantante de Patricio rey y sus redonditos de ricota"/>

        <Artista 
        img="./img/cliff.jpg"
        nombre="Cliff Burton" 
        descripcion="El bajista de Metallica. El mejor bajista del trashs"/>     
        
      </div>
    </>
  );
}

export default App;
