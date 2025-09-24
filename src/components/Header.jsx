import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { trackEvent, trackConversion } from './Analytics';

const Header = () => {
    const location = useLocation();
    const isGalleryPage = location.pathname === '/galeria';
    
    // Função para lidar com navegação e scroll
    const handleNavigation = (section) => {
        // Tracking da navegação
        trackEvent('navigation_click', {
            category: 'Navigation',
            label: section,
            value: 1,
            businessType: 'locadora_van',
            serviceArea: 'sao_paulo'
        });
        
        if (isGalleryPage) {
            // Se estiver na galeria, navega para home e depois faz scroll
            if (section === 'home') {
                window.location.href = '/';
            } else {
                window.location.href = `/#${section}`;
            }
        } else {
            // Se estiver na home, apenas faz scroll para a seção
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    return (
        <>
            {/* Barra superior com informações de contato */}
            <div className="top-bar">
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="contact-info">
                            <a 
                                href="tel:+5511947081830" 
                                className="contact-link me-4"
                                onClick={() => {
                                    trackEvent('phone_click', {
                                        category: 'Contact',
                                        label: 'Phone Call',
                                        value: 1,
                                        businessType: 'locadora_van',
                                        serviceArea: 'sao_paulo'
                                    });
                                }}
                            >
                                <i className="bi bi-telephone-fill me-2"></i>
                                (11) 94708-1830
                            </a>
                            <a 
                                href="mailto:hblocadora@hotmail.com" 
                                className="contact-link"
                                onClick={() => {
                                    trackEvent('email_click', {
                                        category: 'Contact',
                                        label: 'Email Contact',
                                        value: 1,
                                        businessType: 'locadora_van',
                                        serviceArea: 'sao_paulo'
                                    });
                                }}
                            >
                                <i className="bi bi-envelope-fill me-2"></i>
                                hblocadora@hotmail.com
                            </a>
                        </div>
                        <div className="social-links">
                            <a 
                                href="https://www.instagram.com/hbfretamento" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="me-3"
                                onClick={() => {
                                    trackEvent('instagram_click', {
                                        category: 'Social Media',
                                        label: 'Instagram',
                                        value: 1,
                                        businessType: 'locadora_van',
                                        serviceArea: 'sao_paulo'
                                    });
                                }}
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a 
                                href="https://wa.me/5511947081830?text=Olá%20HB%20Locadora,%20estou%20em%20seu%20site..." 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={() => {
                                    trackEvent('whatsapp_header_click', {
                                        category: 'Lead Generation',
                                        label: 'WhatsApp Header',
                                        value: 1,
                                        businessType: 'locadora_van',
                                        serviceArea: 'sao_paulo'
                                    });
                                    trackConversion('whatsapp_header_contact', 1);
                                }}
                            >
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
            
            {/* Navbar principal */}
            <Navbar bg="dark" variant="dark" expand="lg" className="main-navbar">
                <Container>
                    <Navbar.Brand href="/" className="fw-bold titulo-header">
                        HB Locadora
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link 
                                onClick={() => handleNavigation('home')} 
                                className="nav-link-custom active"
                                style={{ cursor: 'pointer' }}
                            >
                                Início
                            </Nav.Link>
                            <span className="nav-separator">•</span>
                            <Nav.Link 
                                onClick={() => handleNavigation('sobre')} 
                                className="nav-link-custom"
                                style={{ cursor: 'pointer' }}
                            >
                                Sobre
                            </Nav.Link>
                            <span className="nav-separator">•</span>
                            <Nav.Link 
                                onClick={() => handleNavigation('servicos')} 
                                className="nav-link-custom"
                                style={{ cursor: 'pointer' }}
                            >
                                Serviços
                            </Nav.Link>
                            <span className="nav-separator">•</span>
                            <Nav.Link href="/galeria" className="nav-link-custom">Galeria</Nav.Link>
                            <span className="nav-separator">•</span>
                            <Nav.Link 
                                onClick={() => handleNavigation('contato')} 
                                className="nav-link-custom"
                                style={{ cursor: 'pointer' }}
                            >
                                Contato
                            </Nav.Link>
                            <Nav.Link 
                                href="https://wa.me/5511947081830?text=Olá%20HB%20Locadora,%20gostaria%20de%20solicitar%20um%20orçamento..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-contato"
                                onClick={() => {
                                    trackEvent('quote_button_click', {
                                        category: 'Lead Generation',
                                        label: 'Quote Button Header',
                                        value: 1,
                                        businessType: 'locadora_van',
                                        serviceArea: 'sao_paulo'
                                    });
                                    trackConversion('quote_request', 1);
                                }}
                            >
                                <i className="bi bi-car-front me-2"></i>
                                Orçamento
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
