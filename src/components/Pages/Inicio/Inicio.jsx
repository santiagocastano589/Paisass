import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Card } from '../../Card/Card'
import { Main } from '../../Layouts/Main/Main'
import { Footer } from '../../Layouts/Footer/Footer'
import { Hero } from '../../Hero/Hero'
import './Inicio.css'









export const Inicio = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Main>
          <Card/>
        </Main>
        <Footer/>

    </>
  )
}
