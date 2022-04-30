// 1. Paso # 1 importar React 
import React from "react";

import "../styles/testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <div className="textoTestimonio">
        <h1>{props.nombreElemento}</h1>
        <p>{props.sub}</p>
      </div>
    </div>
  );
}


export default Testimonio