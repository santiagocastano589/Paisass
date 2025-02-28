import React from 'react'
import Logo from '../../../assets/icon.png';
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <nav className="nav">
                    <div className="menu-toggle">
                        <i className="fas fa-bars"></i>
                        <i className="fas fa-times"></i>
                    </div>
                    <img src={Logo} alt="Loguito" className='loguito' />
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to={"/registro"} className='value nav-link active' >Registro</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a href="registro.html" className="nav-link ">Registro Jugador</a>
                        </li>
                        <li className="nav-item">
                            <a href="arbitro.html" className="nav-link ">Registro Arbitro</a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}
