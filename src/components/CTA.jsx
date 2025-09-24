import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { trackEvent } from './Analytics';

const CTA = () => {
    return (
        <section className="py-5 bg-white">
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="cta-section p-5 bg-primary rounded-3 text-white">
                            <h3 className="fw-bold mb-3">
                                Conheça os nossos veículos
                            </h3>
                            <p className="mb-4 lead">
                                Conheça nossa frota moderna e diversificada, pronta para atender
                                todas as suas necessidades de transporte com conforto e segurança.
                            </p>
                            <a
                                href="/galeria"
                                rel="noopener noreferrer"
                                className="btn-frota"
                                onClick={() => {
                                    trackEvent('cta_fleet_click', {
                                        category: 'Navigation',
                                        label: 'View Fleet CTA',
                                        value: 1,
                                        businessType: 'locadora_van',
                                        serviceArea: 'sao_paulo'
                                    });
                                }}
                            >
                                <i className="bi bi-images me-2"></i>
                                Veja a nossa frota
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
