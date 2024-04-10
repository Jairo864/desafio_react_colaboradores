import Alert from 'react-bootstrap/Alert';

const Alerta = ({colorAlert,messageAlert, iconAlerta}) => {
    return(
        <>
            <Alert variant = {colorAlert} className='textAlert'> <img className='cuadroAlerta' src={iconAlerta} alt="" /> {messageAlert} </Alert>
        </>
    )
}

export default Alerta