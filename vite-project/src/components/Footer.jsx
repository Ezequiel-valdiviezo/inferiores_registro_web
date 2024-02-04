import React from "react";
import Logo from '../assets/logo.jpeg'
import Instagram from '../assets/insta.webp'
import Facebook from '../assets/facebook.png'
import Youtube from '../assets/youtube.png'

function Footer(){

    return(
        <footer className="bg-black d-flex justify-content-between align-items-center p-4">
            <div>
                <img width='70%' src={Logo} alt="Logo Gintita" 
                className=""/>
            </div>
            <div className="text-white">
                <h2 id="contacto">Contacto</h2>
                <p>+54 9 11 5445 5454</p>
                <p>danielcabrera@gmail.com</p>
            </div>
            <div className="text-white">
                <h2>Redes Sociales</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <img src={Instagram} alt="instagram" width={45} />
                    <img src={Facebook} alt="instagram" width={40} />
                    <img src={Youtube} alt="instagram" width={50} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;