import React from "react";
import "../styles/contador.css";

function Contador({ numeroClicls }) {
  console.log(numeroClicls);
  return <div className="contador">{numeroClicls}</div>;
}

export default Contador;
