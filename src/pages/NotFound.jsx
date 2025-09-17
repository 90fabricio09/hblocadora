import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <>
            <main className="not-found-page">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col lg={8}>
                            <div className="error-content">
                                <div className="error-icon mb-4">
                                    <i className="bi bi-car-front-fill"></i>
                                </div>
                                <h1 className="error-number">404</h1>
                                <h2 className="error-title">Página não encontrada</h2>
                                <p className="error-description">
                                    Ops! Parece que você tomou uma rota errada. Nossa frota não conseguiu 
                                    encontrar o destino que você está procurando.
                                </p>
                                <div className="error-actions">
                                    <Button as={Link} to="/" className="btn-home">
                                        <i className="bi bi-house-fill me-2"></i>
                                        Voltar ao Início
                                    </Button>
                                </div>
                                <div className="error-suggestions mt-5">
                                    <h5 className="mb-3">Que tal explorar nossas páginas?</h5>
                                    <div className="suggestion-links">
                                        <Link to="/" className="suggestion-link">
                                            <i className="bi bi-house me-2"></i>
                                            Início
                                        </Link>
                                        <Link to="/#servicos" className="suggestion-link">
                                            <i className="bi bi-gear me-2"></i>
                                            Serviços
                                        </Link>
                                        <Link to="/#sobre" className="suggestion-link">
                                            <i className="bi bi-info-circle me-2"></i>
                                            Sobre
                                        </Link>
                                        <Link to="/galeria" className="suggestion-link">
                                            <i className="bi bi-images me-2"></i>
                                            Frota
                                        </Link>
                                        <Link to="/#contato" className="suggestion-link">
                                            <i className="bi bi-telephone me-2"></i>
                                            Contato
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default NotFound;