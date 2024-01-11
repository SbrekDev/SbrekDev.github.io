import React, { Component } from 'react'
import '../stylesheets/Forgot.css'
import { NavLink } from 'react-router-dom'

export class Forgot extends Component {
  render() {
    return (
      <>
          <div class="container-forgot">
              <form>
                  <h1>Recuperar Cuenta</h1>
                  <input className="input-forgot" type="email" placeholder="Ingrese su Email"/>
                  <p>Se enviará un correo de recuperación a su Email</p>
                  <button type="submit">Enviar</button>  
                  <NavLink to="/login">Iniciar Sesión</NavLink>
                  
              </form>
          </div>
      </>
    )
  }
}

export default Forgot
