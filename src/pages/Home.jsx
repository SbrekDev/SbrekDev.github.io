import React, { Component } from 'react'
import '../stylesheets/Home.css'

export class Home extends Component {
  render() {
    return (
      <>
           <div className='home-container'>
              <div className='presentation-title-font'></div>
              <div className='shadow'>  
                <video className='starLoop' src="src/assets/images/starloop.mp4" autoPlay muted loop></video>
              </div>
                <div className="presentation">
                  <h1>Observa el Cielo</h1>
                  <h5>y todo su esplendor.</h5>
                </div>
              <div className='presentation-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum tempora! Magnam neque, aliquam rerum necessitatibus adipisci placeat vel asperiores consequuntur quod. Reprehenderit earum hic autem vitae suscipit corrupti veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod. Reprehenderit earum hic autem vitae suscipit corrupti veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum tempora! vel asperiores consequuntur quod. Reprehenderit vitae suscipit corrupti veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum tempora! Magnam neque, aliquam rerum necessitatibus adipisci placeat vel asperiores consequuntur quod. Reprehenderit earum hic autem vitae suscipit corrupti veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod. Reprehenderit earum hic autem vitae suscipit corrupti veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum tempora! vel asperiores consequuntur quod. Reprehenderit vitae suscipit corrupti veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum tempora! Magnam neque, aliquam rerum necessitatibus adipisci placeat vel asperiores consequuntur quod. Reprehenderit earum hic autem vitae suscipit corrupti veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod. Reprehenderit earum hic autem vitae suscipit corrupti veniam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, earum tempora! vel asperiores consequuntur quod. Reprehenderit vitae suscipit corrupti veniam?</p>
              </div>
          </div>
      </>
    )
  }
}

export default Home
