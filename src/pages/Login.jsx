import React, { Component } from 'react'
import '../stylesheets/Login.css'
import { NavLink } from 'react-router-dom'
export class Login extends Component {
  render() {
    return (
      <>
          <div className="container-login">
              <form>
                  <h1>Iniciar Sesion</h1>
                  <input className="input-login" type="email" placeholder="Ingrese su Email"/>
                  <input className="input-login" type="password" placeHolder="Ingrese su contraseña"/>
                  <div className="div-recuerdame"><label>Permanecer conectado</label><input type="checkbox"/></div>
                  <button type="submit">Ingresar</button>  
                  <NavLink to="/forgot">¿Olvidó su contraseña?</NavLink>
                  <NavLink to="/createAccount">Crear Cuenta</NavLink>
                  
              </form>
          </div>
      </>
    )
  }
}

export default Login
