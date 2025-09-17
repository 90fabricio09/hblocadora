import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
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
                        <h5 className="mb-3 text-white">Serviços</h5>
                        <ul className="list-unstyled">
                            <li className="text-white"><i className="bi bi-chevron-right me-2"></i>Transporte Executivo</li>
                            <li className="text-white"><i className="bi bi-chevron-right me-2"></i>Transporte de Passageiros</li>
                            <li className="text-white"><i className="bi bi-chevron-right me-2"></i>Transfer Aeroporto</li>
                        </ul>
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
