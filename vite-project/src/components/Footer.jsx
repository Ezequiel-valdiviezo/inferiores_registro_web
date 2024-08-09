import React from "react";
import Logo from '../assets/logo.jpeg'

function Footer(){

    return(
        <footer className="bg-black d-flex flex-column justify-content-center align-items-center pt-5">
            <div>
                <img width={125} src={Logo} alt="Logo Gintita" 
                className=""/>
            </div>
            <div>
                <p className="text-white py-4">Sitio Oficial del Club Gintita. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;