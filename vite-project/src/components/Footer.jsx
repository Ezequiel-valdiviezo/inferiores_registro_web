import React from "react";
import Logo from '../assets/logo.jpeg'

function Footer(){

    return(
        <footer className="bg-black d-flex justify-content-between align-items-center p-4">
            <div>
                <img width='70%' src={Logo} alt="Logo Gintita" 
                className=""/>
            </div>
            <div className="text-white">
                <h2>Contacto</h2>
                <p>+54 9 11 5445 5454</p>
                <p>danielcabrera@gmail.com</p>
            </div>
            <div className="text-white">
                <h2>Redes Sociales</h2>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Youtube</p>
            </div>
        </footer>
    )
}

export default Footer;