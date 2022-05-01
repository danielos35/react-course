import React from "react";


function Boton({text:texto,botonClic:esBotonClic, click:manejarClic}){
    return(
        <Boton
            className= { esBotonClic?'clic':'reset' }
            onCLick = {manejarClic}
        >
            {texto}
        </Boton>


    );

}


export default Boton