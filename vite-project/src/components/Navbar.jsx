import React from "react";
import Pintita from '../assets/logopng.png'

function Navbar(){
    

    return(
        <>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={Pintita} alt="Bootstrap" width="70"/>
                </a>
                <button class="navbar-toggler lineas" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#inicio">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#nosotros">Nosotros</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active text-white" href="#novedades">Novedades</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active text-white" href="#contacto" aria-disabled="true">Contacto</a>
                    </li>
                </ul>
                <a>
                    <button class="boton" type="submit">Admin</button>
                </a>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar