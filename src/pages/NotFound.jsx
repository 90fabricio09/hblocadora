import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <>
            <Header />
            <main className="d-flex align-items-center" style={{ minHeight: '70vh' }}>
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={8}>
                            <div className="error-page">
                                <div className="error-icon mb-4">
                                    <i className="bi bi-exclamation-triangle text-warning" style={{ fontSize: '8rem' }}></i>
                                </div>
                                <h1 className="display-1 fw-bold text-dark mb-3">404</h1>
                                <h2 className="h3 mb-4">Página não encontrada</h2>
                                <p className="lead text-muted mb-4">
                                    A página que você está procurando não existe ou foi movida.
                                </p>
                                <div className="d-flex gap-3 justify-content-center">
                                    <Button as={Link} to="/" variant="primary" size="lg">
                                        <i className="bi bi-house me-2"></i>
                                        Voltar ao Início
                                    </Button>
                                    <Button variant="outline-primary" size="lg">
                                        <i className="bi bi-arrow-left me-2"></i>
                                        Voltar
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
};

export default NotFound;