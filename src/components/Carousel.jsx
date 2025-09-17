import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide1 from '../assets/slide1.jpg';
import Slide2 from '../assets/slide2.jpg';
import Slide3 from '../assets/slide3.png';

const HeroCarousel = () => {
    return (
        <Carousel fade className="hero-carousel" id="home">
            <Carousel.Item>
                <div 
                    className="carousel-slide d-flex align-items-center justify-content-center"
                    style={{
                        height: '600px',
                        backgroundImage: `url(${Slide1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative'
                    }}
                >
                    <div 
                        className="carousel-overlay"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1
                        }}
                    ></div>
                    <div className="text-center text-white" style={{ position: 'relative', zIndex: 2 }}>
                        <div className="mb-4">
                            <img 
                                src="/hblocadora.png" 
                                alt="HB Locadora" 
                                style={{ height: '150px', marginBottom: '30px' }}
                            />
                        </div>
                        <p className="lead mb-4">
                            Transporte de passageiros e executivo com conforto, segurança e pontualidade. 
                            Sua viagem é nossa prioridade.
                        </p>
                               <a 
                                   href="https://wa.me/5511947081830?text=Olá%20HB%20Locadora,%20estou%20em%20seu%20site..."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="btn-frota"
                               >
                                   <i className="bi bi-telephone me-2"></i>
                                   Solicitar Viagem
                               </a>
                    </div>
                </div>
            </Carousel.Item>
            
            <Carousel.Item>
                <div 
                    className="carousel-slide d-flex align-items-center justify-content-center"
                    style={{
                        height: '600px',
                        backgroundImage: `url(${Slide2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative'
                    }}
                >
                    <div 
                        className="carousel-overlay"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1
                        }}
                    ></div>
                    <div className="text-center text-white" style={{ position: 'relative', zIndex: 2 }}>
                        <h1 className="display-4 fw-bold mb-4">
                            <i className="bi bi-clock me-3"></i>
                            Atendimento 24h
                        </h1>
                        <p className="lead mb-4">
                            Transporte executivo 24 horas com veículos de luxo e motoristas 
                            altamente qualificados para sua comodidade.
                        </p>
                               <a 
                                   href="https://wa.me/5511947081830?text=Olá%20HB%20Locadora,%20estou%20em%20seu%20site..."
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="btn-frota"
                               >
                                   <i className="bi bi-whatsapp me-2"></i>
                                   WhatsApp
                               </a>
                    </div>
                </div>
            </Carousel.Item>
            
            <Carousel.Item>
                <div 
                    className="carousel-slide d-flex align-items-center justify-content-center"
                    style={{
                        height: '600px',
                        backgroundImage: `url(${Slide3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        position: 'relative'
                    }}
                >
                    <div 
                        className="carousel-overlay"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1
                        }}
                    ></div>
                    <div className="text-center text-white" style={{ position: 'relative', zIndex: 2 }}>
                        <h1 className="display-4 fw-bold mb-4">
                            <i className="bi bi-award me-3"></i>
                            Frota Moderna
                        </h1>
                        <p className="lead mb-4">
                            Frota moderna e diversificada para atender desde viagens corporativas 
                            até eventos especiais com excelência.
                        </p>
                               <a 
                                   href="/galeria"
                                   rel="noopener noreferrer"
                                   className="btn-frota"
                               >
                                   <i className="bi bi-info-circle me-2"></i>
                                   Nossa Frota
                               </a>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeroCarousel;
