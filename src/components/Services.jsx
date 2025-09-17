import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Import das imagens para os serviços
import transporteExecutivo from '../assets/images/carro1.jpg';
import transportePassageiros from '../assets/images/mini1.webp';
import transferAeroporto from '../assets/images/aeroporto.jpg';
import cityTour from '../assets/images/avpaulista.jpg';
import portos from '../assets/images/porto.jpg';
import eventos from '../assets/images/van14.png';
import receptivo from '../assets/images/aeroportos.jpg';

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
                            <div className="service-image mb-4">
                                <img 
                                    src={transporteExecutivo} 
                                    alt="Transporte Executivo" 
                                    className="service-img"
                                />
                            </div>
                            <h4 className="fw-bold text-dark mb-3">Transporte Executivo</h4>
                            <p className="text-muted">
                                Veículos novos e bem cuidados com motoristas profissionais para executivos e empresários.
                                Conforto, pontualidade e discrição garantidos.
                            </p>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="service-card h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                            <div className="service-image mb-4">
                                <img 
                                    src={transportePassageiros} 
                                    alt="Transporte de Passageiros" 
                                    className="service-img"
                                />
                            </div>
                            <h4 className="fw-bold text-dark mb-3">Transporte de Passageiros</h4>
                            <p className="text-muted">
                                Soluções em transporte para grupos, eventos e viagens corporativas.
                                Frota diversificada para diferentes necessidades.
                            </p>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="service-card h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                            <div className="service-image mb-4">
                                <img 
                                    src={transferAeroporto} 
                                    alt="Transfer Aeroporto" 
                                    className="service-img"
                                />
                            </div>
                            <h4 className="fw-bold text-dark mb-3">Transfer Aeroporto</h4>
                            <p className="text-muted">
                                Serviço de transfer para aeroportos com monitoramento de voos
                                e ajuste automático de horários.
                            </p>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="service-card h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                            <div className="service-image mb-4">
                                <img 
                                    src={cityTour} 
                                    alt="City Tour Em São Paulo" 
                                    className="service-img"
                                />
                            </div>
                            <h4 className="fw-bold text-dark mb-3">City Tour Em São Paulo</h4>
                            <p className="text-muted">
                                Conheça os principais pontos turísticos de São Paulo com conforto e segurança.
                                Passeios personalizados com guias especializados.
                            </p>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="service-card h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                            <div className="service-image mb-4">
                                <img 
                                    src={portos} 
                                    alt="Serviço De Embarque E Desembarque Em Portos De SP" 
                                    className="service-img"
                                />
                            </div>
                            <h4 className="fw-bold text-dark mb-3">Serviço De Embarque E Desembarque Em Portos De SP</h4>
                            <p className="text-muted">
                                Transporte especializado para cruzeiros e navios. 
                                Atendimento nos principais portos de São Paulo com pontualidade garantida.
                            </p>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="service-card h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                            <div className="service-image mb-4">
                                <img 
                                    src={eventos} 
                                    alt="Aluguel De Vans Para Feiras, Congressos, Eventos Corporativos Viagens E Excursões" 
                                    className="service-img"
                                />
                            </div>
                            <h4 className="fw-bold text-dark mb-3">Aluguel De Vans Para Feiras, Congressos, Eventos Corporativos Viagens E Excursões</h4>
                            <p className="text-muted">
                                Soluções completas em transporte para eventos corporativos, feiras, congressos e excursões.
                                Frota diversificada para atender grupos de todos os tamanhos.
                            </p>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className="service-card h-100 text-center p-4 bg-white rounded-3 shadow-sm">
                            <div className="service-image mb-4">
                                <img 
                                    src={receptivo} 
                                    alt="Receptivo Em Aeroportos E Hotéis De São Paulo" 
                                    className="service-img"
                                />
                            </div>
                            <h4 className="fw-bold text-dark mb-3">Receptivo Em Aeroportos E Hotéis De São Paulo</h4>
                            <p className="text-muted">
                                Serviço de receptivo profissional em aeroportos e hotéis de São Paulo.
                                Atendimento personalizado com placas de identificação e suporte completo.
                            </p>
                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default Services;
