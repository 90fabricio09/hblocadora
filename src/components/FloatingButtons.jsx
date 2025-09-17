import React from 'react';

const FloatingButtons = () => {
    return (
        <div className="floating-buttons">
            <a
                href="https://www.instagram.com/hbfretamento"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn instagram-btn"
                title="Siga-nos no Instagram"
            >
                <i className="bi bi-instagram"></i>
            </a>
            <a
                href="https://wa.me/5511947081830?text=Olá%20HB%20Locadora,%20estou%20em%20seu%20site..."
                target="_blank"
                rel="noopener noreferrer"
                className="floating-btn whatsapp-btn"
                title="Fale conosco no WhatsApp"
            >
                <i className="bi bi-whatsapp"></i>
            </a>
        </div>
    );
};

export default FloatingButtons;

