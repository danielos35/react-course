import React from "react";


function Boton({ text: texto, botonClic: esBotonClic, clic: manejarClic }) {
  return (
    <button className={esBotonClic ? "clic" : "reset"} onClick={manejarClic}>
      {texto}
    </button>
  );
}


export default Boton