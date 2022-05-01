import './App.css';
import Testimonio from './componentes/testimonio'

function App() {
  return (
    <div className="App">
      <h1 className='titulo' >COMPONENTES</h1>
      <Testimonio
        nombreElemento='Componente1'/>

      <Testimonio 
        nombreElemento = 'Componente 2'/>
      
      <Testimonio 
        nombreElemento = 'Componente 3'/>
    
    </div>
  );
}

export default App;
