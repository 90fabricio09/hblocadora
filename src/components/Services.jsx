import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => {
    return (
        <section id="servicos" className="py-5 bg-white">
            <Container>
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="display-4 fw-bold text-dark mb-4">
                            Nossos Serviços
                        </h2>
                        <p className="lead text-muted">
                            Oferecemos soluções completas em transporte para atender todas as suas necessidades
                        </p>
                    </Col>
                </Row>

                <Row className="g-4">
                    <Col lg={4} md={6}>
                        <div className="service-card h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                            <div className="service-icon mb-4">
                                <i className="bi bi-car-front" style={{ fontSize: '3rem', color: '#ffca00' }}></i>
                            </div>
                            <h4 className="fw-bold text-dark mb-3">Transporte Executivo</h4>
                            <p className="text-muted mb-4">
                                Veículos novos e bem cuidados com motoristas profissionais para executivos e empresários.
                                Conforto, pontualidade e discrição garantidos.
                            </p>
                            <ul className="list-unstyled text-start">
                                <li className="mb-2">
                                    <i className="bi bi-check-circle me-2" style={{ color: '#ffca00' }}></i>
                                    Carros novos e bem cuidados
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle me-2" style={{ color: '#ffca00' }}></i>
                                    Motoristas uniformizados
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle me-2" style={{ color: '#ffca00' }}></i>
                                    Atendimento 24h
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="service-card h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                            <div className="service-icon mb-4">
                                <i className="bi bi-people" style={{ fontSize: '3rem', color: '#ffca00' }}></i>
                            </div>
                            <h4 className="fw-bold text-dark mb-3">Transporte de Passageiros</h4>
                            <p className="text-muted mb-4">
                                Soluções em transporte para grupos, eventos e viagens corporativas.
                                Frota diversificada para diferentes necessidades.
                            </p>
                            <ul className="list-unstyled text-start">
                                <li className="mb-2">
                                    <i className="bi bi-check-circle me-2" style={{ color: '#ffca00' }}></i>
                                    Vans e micro-ônibus
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle me-2" style={{ color: '#ffca00' }}></i>
                                    Atendimento 24h
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="service-card h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                            <div className="service-icon mb-4">
                                <i className="bi bi-airplane" style={{ fontSize: '3rem', color: '#ffca00' }}></i>
                            </div>
                            <h4 className="fw-bold text-dark mb-3">Transfer Aeroporto</h4>
                            <p className="text-muted mb-4">
                                Serviço de transfer para aeroportos com monitoramento de voos
                                e ajuste automático de horários.
                            </p>
                            <ul className="list-unstyled text-start">
                                <li className="mb-2">
                                    <i className="bi bi-check-circle me-2" style={{ color: '#ffca00' }}></i>
                                    Bagagem inclusa
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle me-2" style={{ color: '#ffca00' }}></i>
                                    Atendimento 24h
                                </li>
                            </ul>
                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default Services;
