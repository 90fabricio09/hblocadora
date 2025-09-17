import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import das imagens
import van1 from '../assets/images/van1.webp';
import van2 from '../assets/images/van2.webp';
import van3 from '../assets/images/van3.webp';
import van4 from '../assets/images/van4.webp';
import van5 from '../assets/images/van5.webp';
import van6 from '../assets/images/van6.webp';
import van7 from '../assets/images/van7.webp';
import van8 from '../assets/images/van8.webp';
import van9 from '../assets/images/van9.webp';
import van10 from '../assets/images/van10.webp';
import van11 from '../assets/images/van11.webp';
import van12 from '../assets/images/van12.jpg';
import van13 from '../assets/images/van13.jpg';
import vanf from '../assets/images/vanf.webp';
import mini1 from '../assets/images/mini1.webp';
import mini2 from '../assets/images/mini2.webp';
import carro1 from '../assets/images/carro1.jpg';
import carro2 from '../assets/images/carro2.jpg';
import carro3 from '../assets/images/carro3.webp';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Array de imagens da galeria
    const galleryImages = [
        // Vans
        {
            id: 1,
            src: van1,
            alt: 'Van HB Locadora 1',
            title: 'Van'
        },
        {
            id: 2,
            src: van2,
            alt: 'Van HB Locadora 2',
            title: 'Van'
        },
        {
            id: 3,
            src: van3,
            alt: 'Van HB Locadora 3',
            title: 'Van'
        },
        {
            id: 4,
            src: van4,
            alt: 'Van HB Locadora 4',
            title: 'Van'
        },
        {
            id: 5,
            src: van5,
            alt: 'Van HB Locadora 5',
            title: 'Van'
        },
        {
            id: 6,
            src: van6,
            alt: 'Van HB Locadora 6',
            title: 'Van'
        },
        {
            id: 7,
            src: van7,
            alt: 'Van HB Locadora 7',
            title: 'Van'
        },
        {
            id: 8,
            src: van8,
            alt: 'Van HB Locadora 8',
            title: 'Van'
        },
        {
            id: 9,
            src: van9,
            alt: 'Van HB Locadora 9',
            title: 'Van'
        },
        {
            id: 10,
            src: van10,
            alt: 'Van HB Locadora 10',
            title: 'Van'
        },
        {
            id: 11,
            src: van11,
            alt: 'Van HB Locadora 11',
            title: 'Van'
        },
        {
            id: 12,
            src: van12,
            alt: 'Van HB Locadora 12',
            title: 'Van'
        },
        {
            id: 13,
            src: van13,
            alt: 'Van HB Locadora 13',
            title: 'Van'
        },
        {
            id: 14,
            src: vanf,
            alt: 'Van HB Locadora F',
            title: 'Van'
        },
        // Mini Vans
        {
            id: 15,
            src: mini1,
            alt: 'Mini Van HB Locadora 1',
            title: 'Mini Van'
        },
        {
            id: 16,
            src: mini2,
            alt: 'Mini Van HB Locadora 2',
            title: 'Mini Van'
        },
        // Carros
        {
            id: 17,
            src: carro1,
            alt: 'Carro HB Locadora 1',
            title: 'Carro'
        },
        {
            id: 18,
            src: carro2,
            alt: 'Carro HB Locadora 2',
            title: 'Carro'
        },
        {
            id: 19,
            src: carro3,
            alt: 'Carro HB Locadora 3',
            title: 'Carro'
        }
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="galeria" className="py-5">
            <Container>
                <Row>
                    <Col>
                        <div className="text-center mb-5">
                            <h2 className="display-4 fw-bold text-dark mb-3">
                                Nossa <span className="text-warning">Frota</span>
                            </h2>
                            <p className="lead text-muted">
                                Conheça nossos veículos modernos e confortáveis para todas as suas necessidades
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="g-4">
                    {galleryImages.map((image) => (
                        <Col key={image.id} xs={12} sm={6} md={4} lg={4}>
                            <div 
                                className="gallery-item"
                                onClick={() => openModal(image)}
                            >
                                <div className="gallery-image-container">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="gallery-image"
                                        loading="lazy"
                                    />
                                    <div className="gallery-overlay">
                                        <div className="gallery-content">
                                            <h5 className="gallery-title">{image.title}</h5>
                                            <i className="bi bi-zoom-in gallery-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Modal para visualização ampliada */}
            {selectedImage && (
                <div className="gallery-modal" onClick={closeModal}>
                    <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="gallery-modal-close"
                            onClick={closeModal}
                            aria-label="Fechar modal"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="gallery-modal-image"
                        />
                        <div className="gallery-modal-info">
                            <h4>{selectedImage.title}</h4>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
