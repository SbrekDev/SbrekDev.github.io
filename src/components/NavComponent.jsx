import React, { Component } from 'react'
import '../stylesheets/NavComponent.css'
import { NavLink } from 'react-router-dom'

export class NavComponent extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/gallery">Galeria</NavLink></li>
                <li><NavLink to="/discover">Objetivos</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
                <li className="login"><NavLink to="/login">Iniciar Sesión</NavLink></li>
            </ul>
        </nav>
      </>
    )
  }
}

export default NavComponent

