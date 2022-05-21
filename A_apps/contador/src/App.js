import './App.css';
// Insertar imagenes 
import reloj from './imagenes/reloj.png'
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";

// hooks
import { useState } from "react";

function App() {
  // Elemento a actualizar.
  // Función que lo actualiza.

  const [numeroClicls, setnumeroClics] = useState(0);

  const manejarClic = () => {
    setnumeroClics(numeroClicls + 1);
  };

  const reiniciarContador = () => {
    setnumeroClics(0);
  };
  return (
    <div className="App">
      <div className="contenedorPrincipal">
        <img src={reloj} alt="reloj" />

        <Contador numeroClicls={numeroClicls}></Contador>
        <Boton text="Aumentar" botonClic={true} clic={manejarClic} />

        <Boton text="Reset" botonClic={false} clic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
