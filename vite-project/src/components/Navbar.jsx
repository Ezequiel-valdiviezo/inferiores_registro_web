import React from "react";
import Pintita from '../assets/logopng.png'
import Instagram from '../assets/instagram1.png'
import Facebook from '../assets/facebook1.png'
import Youtube from '../assets/youtube1.png'

function Navbar(){
    

    return(
        <>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <a class="navbar-brand" href="#">
                        <img src={Pintita} alt="Bootstrap" width="100"/>
                    </a>
                    <div className="vertical-line"></div>
                    <p className="gintitaTitulo"><span id="somos">Somos</span><br />Gintita</p>
                </div>

                <div class="d-flex justify-content-center flex-grow-1">
                <button class="navbar-toggler lineas" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-lg-0 mx-auto d-flex align-items-center">
                        <li class="nav-item">
                            <a class="nav-link active text-white fw-bold" aria-current="page" href="#inicio">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fw-bold" aria-current="page" href="#nosotros">Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fw-bold" href="#novedades">Novedades</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fw-bold" href="#contacto" aria-disabled="true">Contacto</a>
                        </li>
                        </ul>
                    </div>
                </div>

                <div class="d-flex align-items-center ">
                    {/* <p className="seguinos">Seguínos</p> */}
                    <img className="redSocial" src={Instagram} alt="instagram" width={45} />
                    <img className="redSocial" src={Facebook} alt="instagram" width={45} />
                    <img className="redSocial" src={Youtube} alt="instagram" width={45} />
                </div>
            </div>
        </nav>

        </>
    )
}

export default Navbar