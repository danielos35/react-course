import './App.css';
// Insertar imagenes 
import reloj from './imagenes/reloj.png'
import Boton from "./componentes/Boton";

function App() {
  const manejarClic = () => {
    console.log("Hola Mundo");
  };

  const reiniciarContador = () => {
    console.log("Reiniciar Contador");
  };
  return (
    <div className="App">
      <div className="contenedorPrincipal">
        <img src={reloj} alt="reloj" />

        <Boton text="Aumentar" botonClic={true} clic={manejarClic} />

        <Boton text="Reset" botonClic={false} clic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
