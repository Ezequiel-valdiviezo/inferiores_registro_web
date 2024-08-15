import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Novedades from './components/Novedades'
import Flecha from './assets/flecha.png'
import Instagram from './assets/instagram1.png'
import Facebook from './assets/facebook1.png'
import Youtube from './assets/youtube1.png'
import Pintita from './assets/logopng.png'
import Entrenar from './assets/entrenar.jpg'
import Disfrutar from './assets/disfrutar.jpg'
import Transformar from './assets/transformar.jpg'
import Motivar from './assets/motivar.jpg'
import Evolucionar from './assets/evolucionar.jpg'
import Alcanzar from './assets/alcanzar.jpg'


function App() {

  return (
    <div className='fondo'>

    <div className="containerMio bg-white">

      <Navbar />

      <div className="seccion1" id='inicio'>
        <div className="d-flex flex-column align-items-center justify-content-center contenido">
          <p className='text-white text-center font-size-5 fw-bold fs-1 gintitaProyecto'>Gintita un proyecto hecho realidad</p>
          <img src={Pintita} alt="Bootstrap" width="130"/>
        </div>
      </div>
      
      <div className="seccion2 text-center" id='nosotros'>
          {/* <h2 className='tituloh2'>Gintita</h2> */}
          <div className='mt-5 px-5'>
            <p className='fs-5'>Somos un centro de capacitación y formación de jugadores. Los entrenamos y preparamos para salida a AFA y mejorar su rendimiento.</p>
            <p className='fs-5'>Creado el 18 de octubre del 2020, por Daniel Cabrera, director técnico y coaching deportivo.</p>
            <button>Contacto</button>
            <p className='text-danger mt-2'>*Los entrenamientos se realizan por la mañana</p>
          </div>
      </div>

          <div className='text-center m-auto'>
            <h2 className='tituloh2 my-5'>Nuestros conceptos</h2>
            <div className='container'>
  <div className='row'>
    <div className='col-12 col-md-6 col-lg-4 mb-4'>
      <div className='conceptosImg'>
        <img src={Entrenar} alt="Entrenar" className='img-fluid' />
      </div>
    </div>
    <div className='col-12 col-md-6 col-lg-4 mb-4'>
      <div className='conceptosImg'>
        <img src={Disfrutar} alt="Disfrutar" className='img-fluid' />
      </div>
    </div>
    <div className='col-12 col-md-6 col-lg-4 mb-4'>
      <div className='conceptosImg'>
        <img src={Transformar} alt="Transformar" className='img-fluid' />
      </div>
    </div>
  </div>
  <div className='row mt-4'>
    <div className='col-12 col-md-6 col-lg-4 mb-4'>
      <div className='conceptosImg'>
        <img src={Motivar} alt="Motivar" className='img-fluid' />
      </div>
    </div>
    <div className='col-12 col-md-6 col-lg-4 mb-4'>
      <div className='conceptosImg'>
        <img src={Alcanzar} alt="Alcanzar" className='img-fluid' />
      </div>
    </div>
    <div className='col-12 col-md-6 col-lg-4 mb-4'>
      <div className='conceptosImg'>
        <img src={Evolucionar} alt="Evolucionar" className='img-fluid' />
      </div>
    </div>
  </div>
</div>

          </div>

        <div className="seccion4 text-center mt-5 pt-5 mb-5">
          <iframe width="80%" height="450" src="https://www.youtube.com/embed/0T7TsrUGB9k?si=LYbnzNGhmLpZdU53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        </div>

        <div className='row flex-wrap px-5 mt-5 entrenamiento m-auto'>
            <h2 className='tituloh2 text-center'>Entrenamiento</h2>
        <div className='text-center col-md-6 m-auto'>
          <ul className="list-unstyled text-start entrenamientoLista mx-auto">
            <li className='my-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-3 bi bi-clock-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
            </svg>
              Lunes a viernes de 8:30 a 10:30
            </li>
            <li className='my-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-3 bi bi-cloud-drizzle-fill" viewBox="0 0 16 16">
            <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973"/>
          </svg>
              Se suspende por lluvia
            </li>
            <li className='my-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-3 bi bi-cone" viewBox="0 0 16 16">
            <path d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125z"/>
          </svg>
              Predio los Japoneses
            </li>
            <li className='my-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mx-3 bi bi-telephone-plus-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5"/>
          </svg>
              Contacto: 11 2151-5151
            </li>
          </ul>
        </div>
        <div className='text-center col-md-6'>
            {/* <h2 className='tituloh2 mt-5'>Nuestra ubicación</h2> */}
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62444.380248832225!2d-58.50324655800285!3d-34.65903463895763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbd84981b36d%3A0x2b0d85df553a6d5a!2sClub%20Social%20Y%20Deportivo%20Pintita!5e0!3m2!1ses-419!2sar!4v1706491996812!5m2!1ses-419!2sar"
              width={350}
              height="280"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              />
        </div>
      </div>
      

      <div className="seccion3 text-white text-center py-5 my-5">
        <h2 className='fs-4'>Coordinador</h2>
        <p className='fs-3 dc'>Daniel Cabrera</p>
        <button >Contacto</button>
      </div>

      <Novedades/>

      <div className="seccion5 py-5 d-flex flex-column justify-content-center align-items-center mt-5">
        <div>
          <p id='somosgintita'>#SOMOSGINTITA</p>
        </div>
        <div class="d-flex align-items-center ">
          {/* <p className="seguinos">Seguínos</p> */}
          <a href="">
            <img className="redSocial mx-2" src={Instagram} alt="instagram" width={50} />
          </a>
          <a href="">
            <img className="redSocial mx-2" src={Facebook} alt="instagram" width={50} />
          </a>
          <a href="">
             <img className="redSocial mx-2" src={Youtube} alt="instagram" width={50} />
          </a>
        </div>
      </div>

      <Footer />
    </div>

    </div>
  )
}

export default App
