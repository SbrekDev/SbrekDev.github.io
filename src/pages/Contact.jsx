import React, { Component } from 'react'
import '../stylesheets/Home.css'
import '../stylesheets/Contact.css'

export class Contact extends Component {
  render() {
    return (
      <>
        <div className="container-contact">
            <form>
                <h1>Contácteme</h1>
                <input className="input-contact" type="text" placeHolder="Asunto"/>
                <textarea className="input-contact mensaje" placeHolder="Mensaje"></textarea>
                <div className="div-avisos"><label>Deseo recibir avisos y novedades</label><input type="checkbox"/></div>
                <button type="submit">Enviar</button>  

                
            </form>
        </div>

      </>
    )
  }
}

export default Contact
