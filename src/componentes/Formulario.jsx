import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alerta from './Alerta';

import {useState} from 'react'


const Formulario = ({onAgregar,messageAlert, setMensaje}) => {

 
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [edad, setEdad] = useState('')
    const [cargo, setCargo] = useState('')
    const [telefono, setTelefono] = useState('')

    const [errorVacio, setErrorVacio] = useState(false)
    const [correcto, setCorrecto] = useState(false)
    
    const generarIdUnico = () => {
        return Math.floor(Math.random() * 100);
    }

    const agregarFormulario = (e) => {
        e.preventDefault()
        const nuevoColaborador = {
            id:generarIdUnico(),
            nombre,
            correo,
            edad,
            cargo,
            telefono
        };
        setErrorVacio(false);
        setCorrecto(false);
        
        if(
            nombre === '' || 
            correo === '' || 
            edad === '' || 
            cargo === '' || 
            telefono === ''
        ){
            setErrorVacio(true)
            setCorrecto(false)
            setMensaje('Completa todos los campos!')
            return
        }
        onAgregar(nuevoColaborador)
        setMensaje('Colaborador agregado!')
        setCorrecto(true)
        setErrorVacio(false)
       
        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');
      
    }

    return (
    
            <div className="container">
                <Form 
                    className='formStyle'
                    onSubmit={agregarFormulario}>
                      <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="name" 
                        placeholder="Nombre del colaborador"
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort"  
                        type="email" 
                        placeholder="Email del colaborador" 
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="number" 
                        placeholder="Edad del colaborador" 
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="text" 
                        placeholder="Cargo del colaborador"
                        value={cargo} 
                        onChange={(e) => setCargo(e.target.value)}/>
                </Form.Group>

                <Form.Group 
                    className="mb-3">
                    <Form.Control 
                        className="inputShort" 
                        type="number" 
                        placeholder="Teléfono del colaborador" 
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}/>
                </Form.Group>

                    <Button 
                        className='estiloBoton' 
                        type="submit">
                        Agregar colaborador
                    </Button>
                    {errorVacio ? <Alerta 
                        colorAlert = 'danger'
                        iconAlerta = '/assets/imgs/iconError.svg'
                        messageAlert= {messageAlert}/> : null}
                    {correcto ? <Alerta 
                        colorAlert = 'success'
                        iconAlerta = '/assets/imgs/iconCheck.svg'
                        messageAlert = {messageAlert}/> : null}
                </Form>
            </div>
    
    )
}

export default Formulario