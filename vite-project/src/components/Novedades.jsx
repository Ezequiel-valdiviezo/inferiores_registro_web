import React from "react";
import Pintita from '../assets/pintita.jpg'

function Novedades(){

    return(
        <div className="text-center" id="novedades">
        <h2>Novedades</h2>
        <div className="d-flex flex-wrap p-5">
            <div className="col-12 col-lg-6 ">
                <div className="card m-2">
                    <div className="d-flex">
                        <div>
                            <img width={250} src={Pintita} alt="" />
                        </div>
                        <div>
                            <h3>Noticias</h3>
                            <p>Prueba de jugador categorías 2002</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 ">
                <div className="card m-2">
                    <div className="d-flex">
                        <div>
                            <img width={250} src={Pintita} alt="" />
                        </div>
                        <div>
                            <h3>Noticias</h3>
                            <p>Prueba de jugador categorías 2002</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 ">
                <div className="card m-2">
                    <div className="d-flex">
                        <div>
                            <img width={250} src={Pintita} alt="" />
                        </div>
                        <div>
                            <h3>Noticias</h3>
                            <p>Prueba de jugador categorías 2002</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-6 ">
                <div className="card m-2">
                    <div className="d-flex">
                        <div>
                            <img width={250} src={Pintita} alt="" />
                        </div>
                        <div>
                            <h3>Noticias</h3>
                            <p>Prueba de jugador categorías 2002</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </div>
    )
}

export default Novedades;