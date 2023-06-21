import React from 'react'

const Mailing = () => {
    return (
        <div className="mailing-container">
            <h2>SUSCRIBITE</h2>
            <hr className='dividers' />
            <h3>Dejanos tu correo para recibir promociones y novedades.
                Podés desuscribirte en cualquier momento
            </h3>
            <div className="input-group mb-3 mailing-form">
                <input type="text" className="form-control" placeholder="ejemplo@mail.com" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Enviar</button>
            </div>
        </div>
    )
}

export default Mailing