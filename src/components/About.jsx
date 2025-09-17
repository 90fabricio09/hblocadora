import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImage from '../assets/van4.webp';

const About = () => {
    return (
        <section id="sobre" className="py-5 about-section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="pe-lg-4">
                            <h2 className="display-5 fw-bold text-dark mb-4">
                                Sobre a HB Locadora
                            </h2>
                            <p className="lead text-muted mb-4">
                                Com mais de 10 anos de experiência no mercado, a HB Locadora 
                                é referência em transporte de passageiros e executivo.
                            </p>
                            <p className="text-muted mb-4">
                                Nossa empresa nasceu com o objetivo de oferecer transporte seguro, 
                                confortável e pontual para empresas, executivos e eventos especiais. 
                                Contamos com uma frota moderna e motoristas altamente qualificados 
                                para garantir a melhor experiência em suas viagens.
                            </p>
                            
                            <Row className="g-3">
                                <Col sm={6}>
                                    <div className="d-flex align-items-center">
                                        <div className="bg-primary text-white rounded-circle p-2 me-3">
                                            <i className="bi bi-people-fill"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-0 fw-bold">+10.000</h6>
                                            <small className="text-muted">Viagens Realizadas</small>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="d-flex align-items-center">
                                        <div className="bg-success text-white rounded-circle p-2 me-3">
                                            <i className="bi bi-award-fill"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-0 fw-bold">10+</h6>
                                            <small className="text-muted">Anos de Experiência</small>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="d-flex align-items-center">
                                        <div className="bg-warning text-white rounded-circle p-2 me-3">
                                            <i className="bi bi-clock-fill"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-0 fw-bold">24h</h6>
                                            <small className="text-muted">Atendimento</small>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="d-flex align-items-center">
                                        <div className="bg-info text-white rounded-circle p-2 me-3">
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-0 fw-bold">100%</h6>
                                            <small className="text-muted">Satisfação do Cliente</small>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="text-center">
                            <div 
                                className="about-image rounded-3 shadow"
                                style={{
                                    height: '400px',
                                    backgroundImage: `url(${AboutImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    position: 'relative'
                                }}
                            >
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
