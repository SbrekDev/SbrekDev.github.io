import React, { Component } from 'react'
import '../stylesheets/CreateAccount.css'
import { NavLink } from 'react-router-dom'

export class CreateAccount extends Component {
  render() {
    return (
      <>
          <div className="container-createAccount">
              <form>
                  <h1>Crear cuenta</h1>
                  <input className="input-createAccount" type="text" placeHolder="Ingrese su Nombre"/>
                  <input className="input-createAccount" type="text" placeHolder="Ingrese su Apellido"/>
                  <input className="input-createAccount" type="text" placeHolder="Ingrese su Fecha de nacimiento" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')}/>
                  <input className="input-createAccount" type="text" placeHolder="Ingrese su Nacionalidad"/>
                  <input className="input-createAccount" type="email" placeHolder="Ingrese su Email"/>
                  <input className="input-createAccount" type="password" placeHolder="Ingrese su contraseña"/>
                  <input className="input-createAccount" type="password" placeHolder="Repita su contraseña"/>
                  <div className="div-recuerdame"><label>Acepto los Términos</label><input type="checkbox"/></div>
                  <button type="submit">Registrarse</button>  
                  <NavLink to="/login">Iniciar Sesión</NavLink>
                  
              </form>
          </div>
      </>
    )
  }
}

export default CreateAccount
