import './App.css';
// Insertar imagenes 
import reloj from './imagenes/reloj.png'

function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <img
          src={reloj}
          alt='reloj' />

      </div>
    </div>
  );
}

export default App;
