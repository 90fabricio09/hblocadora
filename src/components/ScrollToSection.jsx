import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        // Verifica se há um hash na URL
        if (location.hash) {
            // Remove o # do hash
            const sectionId = location.hash.substring(1);
            
            // Aguarda um pouco para garantir que a página carregou
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    }, [location]);

    return null; // Este componente não renderiza nada
};

export default ScrollToSection;
