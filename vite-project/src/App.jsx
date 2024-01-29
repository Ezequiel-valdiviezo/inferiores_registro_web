import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Novedades from './components/Novedades'
import pintita from './assets/pintita.jpg'

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

      {/* <div className="seccion3">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={pintita} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={pintita} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={pintita} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}

      <div className="seccion4 text-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0T7TsrUGB9k?si=LYbnzNGhmLpZdU53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
      </div>

      <Novedades />


      <Footer />
    </div>

    </div>
  )
}

export default App
