
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Buscador = ({ busqueda, setBusqueda }) => {
    const handleBuscar = (e) => {
        setBusqueda(e.target.value);
    };

    return (
        <Form.Control
            className='mb-3 buscadorStyle'
            type="text"
            placeholder="Busca un Colaborador"
            value={busqueda}
            onChange={handleBuscar}
        />
    );
};

export default Buscador;
