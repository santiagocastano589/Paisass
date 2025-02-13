import React from 'react'
import { FaCircle } from "react-icons/fa";
import './Footer.css';

export const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="footer-content">

                    <div className="footer-content-about">
                        <h4>Paisass</h4>
                        <div className="circle">
                            <FaCircle />
                        </div>
                        <p>Aplicativo basado en el mejoramiento deportivo, competitivo y recreativo por medio de torneos que serán generados y administrados a través de esta página.</p>
                        {/* <p>Contactar: santiagocastano589@gmail.com</p> */}
                        <p className="footer_copyright">&copy; Santiago Castaño.</p>
                    </div>

                </div>
            </div>
        </footer>
    </>
  )
}
