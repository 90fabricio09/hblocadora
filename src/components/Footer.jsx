import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="text-light py-5 mt-5" style={{ backgroundColor: '#2a2a2a' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="mb-3">
                            <img 
                                src="/hblocadora.png" 
                                alt="HB Locadora" 
                                style={{ height: '80px' }}
                            />
                        </div>
                        <p className="text-white">
                            Transporte de passageiros e executivo com conforto, segurança e pontualidade. 
                            Sua viagem é nossa prioridade.
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5 className="mb-3 text-white">Contato</h5>
                        <p className="text-white">
                            <i className="bi bi-telephone me-2"></i>
                            <a href="tel:+5511947081830" className="text-white text-decoration-none">
                                (11) 94708-1830
                            </a>
                        </p>
                        <p className="text-white">
                            <i className="bi bi-envelope me-2"></i>
                            <a href="mailto:hblocadora@hotmail.com" className="text-white text-decoration-none">
                                hblocadora@hotmail.com
                            </a>
                        </p>
                        <p className="text-white">
                            <i className="bi bi-geo-alt me-2"></i>
                            <a 
                                href="https://maps.app.goo.gl/ENxyjCdi7xuZnPRC6" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-white text-decoration-none"
                            >
                                R. Batista Cepelos, 28 - Vila Mariana<br />
                                São Paulo - SP, 04109-120
                            </a>
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5 className="mb-3 text-white">Localização</h5>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8010616457777!2d-46.63687552479453!3d-23.575587378790033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce599ef8771b69%3A0xb7ab51ef55012de8!2sHB%20Locadora!5e0!3m2!1spt-BR!2sbr!4v1758113595070!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização HB Locadora"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
                <hr className="my-4" />
                <Row>
                    <Col className="text-center text-white">
                        <p>&copy; 2025 HB Locadora. Todos os direitos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
