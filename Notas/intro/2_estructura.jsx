// Elementos pueden ser anidados

const { element } = require("prop-types");

// Renderizar 
    // En el html se tiene un contenador llamado<div id="root">
    ReactDom.render(
        element,
        document.getElementById('root')
    )

// Hay self closing task, elementos que no tienen cierre
    // <img/>


// Incluir JS en JSX