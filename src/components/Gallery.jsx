import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Array de imagens da galeria
    const galleryImages = [
        {
            id: 1,
            src: '/src/assets/slide1.jpg',
            alt: 'Veículo HB Locadora 1',
            title: 'Van Executiva'
        },
        {
            id: 2,
            src: '/src/assets/slide2.jpg',
            alt: 'Veículo HB Locadora 2',
            title: 'Micro-ônibus'
        },
        {
            id: 3,
            src: '/src/assets/slide3.jpg',
            alt: 'Veículo HB Locadora 3',
            title: 'Ônibus Executivo'
        },
        {
            id: 4,
            src: '/src/assets/van4.webp',
            alt: 'Van HB Locadora',
            title: 'Van de Luxo'
        },
        {
            id: 5,
            src: '/src/assets/hblocadora.png',
            alt: 'Logo HB Locadora',
            title: 'Nossa Marca'
        },
        {
            id: 6,
            src: '/public/image.png',
            alt: 'Imagem adicional',
            title: 'Serviços Especiais'
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
