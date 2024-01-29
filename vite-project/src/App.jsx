import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='fondo'>

    <div className="container-xl bg-white">

      <Navbar />

      <div className="seccion1">
        <p className='text-white d-flex align-items-center justify-content-center vh-100 font-size-5 fw-bold fs-1'>Gintita un proyecto hecho realidad</p>
      </div>
      
      <div className="seccion2 flex">
        <div>
          <h2>Gintita</h2>
        </div>
        <div>
          <h2>Nuestra ubicación</h2>
        </div>
      </div>


    </div>

    </div>
  )
}

export default App
