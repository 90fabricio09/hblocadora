import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Array de imagens da galeria
    const galleryImages = [
        // Vans
        {
            id: 1,
            src: '/src/assets/images/van1.webp',
            alt: 'Van HB Locadora 1',
            title: 'Van'
        },
        {
            id: 2,
            src: '/src/assets/images/van2.webp',
            alt: 'Van HB Locadora 2',
            title: 'Van'
        },
        {
            id: 3,
            src: '/src/assets/images/van3.webp',
            alt: 'Van HB Locadora 3',
            title: 'Van'
        },
        {
            id: 4,
            src: '/src/assets/images/van4.webp',
            alt: 'Van HB Locadora 4',
            title: 'Van'
        },
        {
            id: 5,
            src: '/src/assets/images/van5.webp',
            alt: 'Van HB Locadora 5',
            title: 'Van'
        },
        {
            id: 6,
            src: '/src/assets/images/van6.webp',
            alt: 'Van HB Locadora 6',
            title: 'Van'
        },
        {
            id: 7,
            src: '/src/assets/images/van7.webp',
            alt: 'Van HB Locadora 7',
            title: 'Van'
        },
        {
            id: 8,
            src: '/src/assets/images/van8.webp',
            alt: 'Van HB Locadora 8',
            title: 'Van'
        },
        {
            id: 9,
            src: '/src/assets/images/van9.webp',
            alt: 'Van HB Locadora 9',
            title: 'Van'
        },
        {
            id: 10,
            src: '/src/assets/images/van10.webp',
            alt: 'Van HB Locadora 10',
            title: 'Van'
        },
        {
            id: 11,
            src: '/src/assets/images/van11.webp',
            alt: 'Van HB Locadora 11',
            title: 'Van'
        },
        {
            id: 12,
            src: '/src/assets/images/van12.jpg',
            alt: 'Van HB Locadora 12',
            title: 'Van'
        },
        {
            id: 13,
            src: '/src/assets/images/van13.jpg',
            alt: 'Van HB Locadora 13',
            title: 'Van'
        },
        {
            id: 14,
            src: '/src/assets/images/vanf.webp',
            alt: 'Van HB Locadora F',
            title: 'Van'
        },
        // Mini Vans
        {
            id: 15,
            src: '/src/assets/images/mini1.webp',
            alt: 'Mini Van HB Locadora 1',
            title: 'Mini Van'
        },
        {
            id: 16,
            src: '/src/assets/images/mini2.webp',
            alt: 'Mini Van HB Locadora 2',
            title: 'Mini Van'
        },
        // Carros
        {
            id: 17,
            src: '/src/assets/images/carro1.jpg',
            alt: 'Carro HB Locadora 1',
            title: 'Carro'
        },
        {
            id: 18,
            src: '/src/assets/images/carro2.jpg',
            alt: 'Carro HB Locadora 2',
            title: 'Carro'
        },
        {
            id: 19,
            src: '/src/assets/images/carro3.webp',
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
