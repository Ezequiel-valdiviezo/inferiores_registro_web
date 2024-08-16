import React, { useState } from "react";
import Pintita from '../assets/pintita.jpg';

function Novedades() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: "", description: "" });

    const novedadesArray = [
        { title: "Noticia 1", description: "Descripción de la noticia 1" },
        { title: "Noticia 2", description: "Descripción de la noticia 2" },
        { title: "Noticia 3", description: "Descripción de la noticia 3" },
        { title: "Noticia 4", description: "Descripción de la noticia 4" },
        { title: "Noticia 5", description: "Descripción de la noticia 5" },
        { title: "Noticia 6", description: "Descripción de la noticia 6" },
        { title: "Noticia 7", description: "Descripción de la noticia 7" },
        { title: "Noticia 8", description: "Descripción de la noticia 8" },
        { title: "Noticia 9", description: "Descripción de la noticia 9" }
    ];

    const handleShowModal = (title, description) => {
        setModalContent({ title, description });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="text-center" id="novedades">
            <h2 className='tituloh2'>Novedades</h2>

            <div className="d-flex flex-wrap justify-content-center">
                {novedadesArray.map((novedad, index) => (
                    <div className="card mx-2 my-2" style={{ width: '18rem' }} key={index}>
                        <img src={Pintita} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{novedad.title}</h5>
                            <button
                                className="btn btn-primary"
                                onClick={() => handleShowModal(novedad.title, novedad.description)}
                            >
                                Leer más
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalContent.title}</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <img src={Pintita} alt="" />
                            <div className="modal-body">
                                <p>{modalContent.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Novedades;
