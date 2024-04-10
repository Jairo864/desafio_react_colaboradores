import { useState } from 'react'
import { BaseColaboradores } from './BaseColaboradores'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './index.css';
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import Buscador from './componentes/Buscador';

function App() {
  const [datos, setDatos] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('')
  const [busqueda, setBusqueda] = useState('')

  const agregarColaborador = (nuevoColaborador) => {
    setDatos([...datos, nuevoColaborador])
  }
  
  const buscar = (busqueda) => {
    setBusqueda(busqueda)
  }

  const datosFiltrados = datos.filter(colaborador =>
    colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
     <h1>Lista de Colaboradores</h1>
      <Buscador 
          busqueda={busqueda}
          setBusqueda = {buscar}/>
      <div className="container-fluid">
        <div className='row'>
          <div className='col-md-8 col-lg-9 col-xl-9'>
            <div className='tabla'>
              <Listado 
                className = "col-md-9"
                datos = {busqueda ? datosFiltrados : datos} />
            </div>
          </div>
          <div className='cold-md-4 col-lg-3 col-lx-3'>
            <div>
              <h3>Agregar Colaborador</h3>                 
              <Formulario 
                onAgregar = {agregarColaborador} 
                messageAlert = {mensaje}
                setMensaje = {setMensaje}/>
            </div>
            </div>
        </div>
      </div>
          
    </>
  )
}

export default App
