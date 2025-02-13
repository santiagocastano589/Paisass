import './App.css'
import { Inicio } from './components/Pages/Inicio/Inicio'

import { Routes, Route } from 'react-router-dom';
import { RegistroUsuarios } from './components/Pages/RegistroUsuarios/RegistroUsuarios';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/registro' element={<RegistroUsuarios/>} />
      </Routes>
    </>
  )
}

export default App
