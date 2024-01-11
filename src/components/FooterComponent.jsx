import React, { Component } from 'react'
import '../stylesheets/FooterComponent.css'


export class FooterComponent extends Component {
  render() {
    return (
      <>
         <script src="https://kit.fontawesome.com/6309380796.js" crossOrigin="anonymous"></script>
        <div className="footer">
            <footer>
                <div className="social"><a href="https://www.instagram.com/gonzaakerbs" target="_blank"><i className="fa-brands fa-instagram"></i></a><a href="https://discord.gg/jE8mfWE" target="_blank"><i className="fa-brands fa-discord"></i></a><a href="https://twitter.com/GonzaaaKerbs" target="_blank"><i className="fa-brands fa-x-twitter"></i></a><a href="https://www.linkedin.com/in/gonzalo-kerbs" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></div>
                <p className="copyright">Gonzalo Kerbs © 2023</p>
            </footer>
        </div>
      </>
    )
  }
}

export default FooterComponent
