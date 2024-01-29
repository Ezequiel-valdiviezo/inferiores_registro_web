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
      
      <div className="seccion2 row text-center">
        <div className='col-md-6'>
          <h2>Gintita</h2>
          <div className='mt-5'>
            <p>Somos un centro de capacitación y formación de jugadores. Los entrenamos y preparamos para salida a AFA y mejorar su rendimiento.</p>
            <p>Creado por Daniel Cabrera, director técnico y coaching deportivo, el 18 de octubre del 2020</p>
            <button>Contacto</button>
            <p className='text-danger'>*Los entrenamientos se realizan por la mañana</p>
          </div>
        </div>
        <div className='col-md-6'>
          <h2>Nuestra ubicación</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62444.380248832225!2d-58.50324655800285!3d-34.65903463895763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbd84981b36d%3A0x2b0d85df553a6d5a!2sClub%20Social%20Y%20Deportivo%20Pintita!5e0!3m2!1ses-419!2sar!4v1706491996812!5m2!1ses-419!2sar"
            width="85%"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>


    </div>

    </div>
  )
}

export default App
