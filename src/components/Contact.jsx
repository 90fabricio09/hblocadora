import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import ContactImage from '../assets/contact-us-animate.svg';
import { trackEvent, trackConversion } from './Analytics';

const Contact = () => {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Tracking do início do envio do formulário
        trackEvent('form_submit_start', {
            category: 'Lead Generation',
            label: 'Contact Form',
            businessType: 'locadora_van',
            serviceArea: 'sao_paulo'
        });

        emailjs.sendForm(
            'service_n9fzocm', // Substitua pelo seu Service ID
            'template_ut4vb8o', // Substitua pelo seu Template ID
            form.current,
            'sjcRQ7raDojf1fG2G' // Substitua pela sua Public Key
        )
        .then((result) => {
            // Tracking de conversão bem-sucedida
            trackConversion('form_submit_success', 1);
            trackEvent('form_submit_success', {
                category: 'Conversion',
                label: 'Contact Form Success',
                value: 1,
                businessType: 'locadora_van',
                serviceArea: 'sao_paulo'
            });
            
            setAlertMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            setAlertVariant('success');
            setShowAlert(true);
            form.current.reset();
        }, (error) => {
            // Tracking de erro no formulário
            trackEvent('form_submit_error', {
                category: 'Error',
                label: 'Contact Form Error',
                value: 0,
                businessType: 'locadora_van',
                serviceArea: 'sao_paulo'
            });
            
            setAlertMessage(`Erro ao enviar mensagem: ${error.text}. Por favor, use o botão do WhatsApp abaixo ou tente novamente.`);
            setAlertVariant('danger');
            setShowAlert(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    return (
        <section id="contato" className="py-5 bg-white">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <img
                            src={ContactImage}
                            alt="Entre em contato conosco"
                            className="contact-image"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                            }}
                        />
                    </Col>
                    <Col lg={6}>
                        <div className="ps-lg-4">
                            <h2 className="display-5 fw-bold text-dark mb-4">
                                Solicite seu Orçamento
                            </h2>
                            <p className="lead text-muted mb-4">
                                Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                            </p>

                            {showAlert && (
                                <Alert variant={alertVariant} dismissible onClose={() => setShowAlert(false)}>
                                    {alertMessage}
                                </Alert>
                            )}

                            <Form ref={form} onSubmit={sendEmail}>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-semibold">Nome Completo *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="user_name"
                                                placeholder="Seu nome completo"
                                                required
                                                className="border-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-semibold">Telefone *</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="user_phone"
                                                placeholder="(11) 99999-9999"
                                                required
                                                className="border-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label className="fw-semibold">E-mail *</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="user_email"
                                                placeholder="seu@email.com"
                                                required
                                                className="border-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label className="fw-semibold">Tipo de Serviço</Form.Label>
                                            <Form.Select name="service_type" className="border-2">
                                                <option value="">Selecione o serviço</option>
                                                <option value="transporte-executivo">Transporte Executivo</option>
                                                <option value="transporte-passageiros">Transporte de Passageiros</option>
                                                <option value="viagem-corporativa">Viagem Corporativa</option>
                                                <option value="evento-especial">Evento Especial</option>
                                                <option value="outros">Outros</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label className="fw-semibold">Mensagem *</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={4}
                                                name="message"
                                                placeholder="Descreva sua necessidade, origem, destino, data e horário..."
                                                required
                                                className="border-2"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            className="w-100 btn-custom"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-send me-2"></i>
                                                    Enviar Solicitação
                                                </>
                                            )}
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>

                            <div className="mt-4 text-center">
                                <p className="text-muted mb-2">
                                    <i className="bi bi-whatsapp me-2"></i>
                                    Ou entre em contato pelo WhatsApp:
                                </p>
                                <a
                                    href="https://wa.me/5511947081830?text=Olá%20HB%20Locadora,%20gostaria%20de%20solicitar%20um%20orçamento..."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-frota"
                                    onClick={() => {
                                        trackEvent('whatsapp_click', {
                                            category: 'Lead Generation',
                                            label: 'WhatsApp Contact',
                                            value: 1,
                                            businessType: 'locadora_van',
                                            serviceArea: 'sao_paulo'
                                        });
                                        trackConversion('whatsapp_contact', 1);
                                    }}
                                >
                                    <i className="bi bi-whatsapp me-2"></i>
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
