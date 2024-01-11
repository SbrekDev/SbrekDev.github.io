import React, { Component } from 'react'
import '../stylesheets/Home.css'
import '../stylesheets/Discover.css'
import ObjectivesList from '../components/ObjectivesList'

export class Discover extends Component {
  render() {
    return (
      <>

          <div className="objectives-list">
            <h1>Mis Objetivos</h1>
            <ObjectivesList />
          </div>

      </>
    )
  }
}

export default Discover
