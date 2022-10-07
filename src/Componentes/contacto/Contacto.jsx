import React from 'react'
import Perfil2  from "../../img/trabajo.png";

const Contacto = () => {
  return (
    <section className="contacto" id="id_contacto">
    <div className="container">
      <div className="titulo-queremos-escucharte">
        <h2 data-text="¡Queremos escucharte!">¡Queremos escucharte!</h2>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <div className="formulario">
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="Nombre" aria-label="First name"></input>
            </div>
            <div className="mb-3">
              <input type="text" class="form-control" placeholder="Apellido" aria-label="Last name"></input>
            </div>
            <div className="mb-3">    
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"></input>
            </div>   
            <div className="mb-3">
              <input type="text" class="form-control" id="telefono" placeholder="Teléfono" aria-label="Teléfono"></input>
            </div>
            <div className="mb-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Tu consulta" rows="3"></textarea>
            </div>
            
            <button type="button" class="btn btn-dark">Enviar</button>
          </div>
        </div>
        
        <div class="col-12 col-sm-6">
          <div className="mapa">
          <img src={ Perfil2 } alt="Logotipo" width="150" height="150" />
          </div>
          <div className="datos">
            <p>Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán, Argentina</p>
            <p>Telefono: 381-6694570</p>
            <p>E-mail: d.i.n.a.c.@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}


export default Contacto