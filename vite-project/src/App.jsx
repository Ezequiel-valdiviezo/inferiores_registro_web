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
            <div className='d-flex flex-wrap px-5 justify-content-between'>
              <div>
                <img src={Entrenar} alt="Bootstrap" width={350}/>
              </div>
              <div>
                <img src={Disfrutar} alt="Bootstrap" width={350}/>
              </div>
              <div>
                <img src={Transformar} alt="Bootstrap" width={350}/>
              </div>
            </div>
            <div className='d-flex flex-wrap px-5 justify-content-between mt-5'>
              <div>
                <img src={Motivar} alt="Bootstrap" width={350}/>
              </div>
              <div>
                <img src={Alcanzar} alt="Bootstrap" width={350}/>
              </div>
              <div>
                <img src={Evolucionar} alt="Bootstrap" width={350}/>
              </div>
            </div>
          </div>

        <div className="seccion4 text-center mt-5 pt-5 mb-5">
          <iframe width="80%" height="450" src="https://www.youtube.com/embed/0T7TsrUGB9k?si=LYbnzNGhmLpZdU53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        </div>

  
      

      <div className="seccion3 text-white text-center pt-3 pb-3 mt-5 mb-5">
        <h2 className='fs-4'>Coordinador</h2>
        <p className='mt-3 fs-3 dc'>Daniel Cabrera</p>
        <button >Contacto</button>
      </div>

      <Novedades/>

      <div className='text-center'>
          <h2 className='tituloh2 mt-5'>Nuestra ubicación</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62444.380248832225!2d-58.50324655800285!3d-34.65903463895763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbd84981b36d%3A0x2b0d85df553a6d5a!2sClub%20Social%20Y%20Deportivo%20Pintita!5e0!3m2!1ses-419!2sar!4v1706491996812!5m2!1ses-419!2sar"
            width={500}
            height="280"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />
            </div>

      <div className="seccion5 py-5 d-flex flex-column justify-content-center align-items-center">
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
