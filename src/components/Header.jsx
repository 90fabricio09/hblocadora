import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/" className="fw-bold titulo-header">
                    HB Locadora
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#home">Início</Nav.Link>
                        <Nav.Link href="#servicos">Serviços</Nav.Link>
                        <Nav.Link href="#sobre">Sobre</Nav.Link>
                        <Nav.Link href="#contato" className="btn-contato">
                            <i className="bi bi-telephone me-2"></i>
                            Contato
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
