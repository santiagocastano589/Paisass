import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Card } from '../../Card/Card'
import { Main } from '../../Layouts/Main/Main'
import './Inicio.css'





export const Inicio = () => {
  return (
    <>
        <Header/>
        <section className="hero" id="hero">
            <div className="container">
                <h2 className="h2-sub">
                    <span className="fil">B</span>ienvenidos a
                </h2>
                <h1 className="head">PAISASS</h1>
                <div className="he-des">
                <h5>Aqui Encontraras Una Gran Variedad De Torneos Deportivos</h5>
                </div>
            </div>
        </section>
        <Main>
          <Card/>
        </Main>

    </>
  )
}
