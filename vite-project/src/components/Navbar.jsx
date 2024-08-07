import React from "react";
import Pintita from '../assets/logopng.png'
import Instagram from '../assets/insta.webp'
import Facebook from '../assets/facebook.png'
import Youtube from '../assets/youtube.png'

function Navbar(){
    

    return(
        <>
        <header>
            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center mx-5 pt-2">
                    <a class="navbar-brand" href="#">
                        <img src={Pintita} alt="Bootstrap" width="100"/>
                    </a>
                    <div className="vertical-line"></div>
                    <p className="gintitaTitulo"> <span id="somos">Somos</span> <br /> Gintita </p>
                </div>
                <div className="d-flex align-items-center mx-5 pt-2">
                    <p>Seguínos</p>
                    <img src={Instagram} alt="instagram" width={45} />
                    <img src={Facebook} alt="instagram" width={40} />
                    <img src={Youtube} alt="instagram" width={50} />
                </div>
            </div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                    {/* <a class="navbar-brand" href="#">
                        <img src={Pintita} alt="Bootstrap" width="120"/>
                        </a> */}
                <button class="navbar-toggler lineas" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto d-flex align-items-center">
                    <li class="nav-item">
                    <a class="nav-link active text-white fw-bold" aria-current="page" href="#inicio">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active text-white fw-bold" aria-current="page" href="#nosotros">Nosotros</a>
                    </li>
                    {/* <a class="navbar-brand" href="#">
                        <img src={Pintita} alt="Bootstrap" width="120"/>
                        </a> */}
                    <li class="nav-item">
                    <a class="nav-link active text-white fw-bold" href="#novedades">Novedades</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active text-white fw-bold" href="#contacto" aria-disabled="true">Contacto</a>
                    </li>
                </ul>
                {/* <a>
                    <button class="boton" type="submit">Admin</button>
                    </a> */}
                </div>
            </div>
        </nav>
        </header>
        </>
    )
}

export default Navbar