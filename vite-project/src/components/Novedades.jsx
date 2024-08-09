import React from "react";
import Pintita from '../assets/pintita.jpg'

function Novedades(){

    return(
        <div className="text-center" id="novedades">
        <h2 className='tituloh2'>Novedades</h2>

        <div className="d-flex flex-wrap justify-content-center">
            <div className="card mx-2 my-2" style={{ width: '18rem' }}>
                <img src={Pintita} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Noticias</h5>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
            <div className="card mx-2 my-2" style={{ width: '18rem' }}>
                <img src={Pintita} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Noticias Noticias Noticias Noticias Noticias Noticias NoticiasNoticias</h5>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
            <div className="card mx-2 my-2" style={{ width: '18rem' }}>
                <img src={Pintita} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Noticias</h5>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
            <div className="card mx-2 my-2" style={{ width: '18rem' }}>
                <img src={Pintita} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Noticias</h5>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
            <div className="card mx-2 my-2" style={{ width: '18rem' }}>
                <img src={Pintita} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Noticias</h5>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
            <div className="card mx-2 my-2" style={{ width: '18rem' }}>
                <img src={Pintita} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Noticias</h5>
                    <a href="#" className="btn btn-primary">Leer más</a>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Novedades;