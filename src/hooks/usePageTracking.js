import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, useScrollTracking, useTimeTracking } from '../components/Analytics';

// Hook personalizado para tracking automático de páginas
export const usePageTracking = () => {
    const location = useLocation();
    
    useEffect(() => {
        // Tracking automático de visualização de página
        const pageName = location.pathname === '/' ? 'Home' : 
                       location.pathname === '/galeria' ? 'Galeria' : 
                       'Outras Páginas';
        
        trackPageView(pageName, location.pathname);
        
        // Tracking de eventos específicos por página
        if (location.pathname === '/') {
            trackPageView('Home - HB Locadora', '/');
        } else if (location.pathname === '/galeria') {
            trackPageView('Galeria - Frota de Veículos', '/galeria');
        }
        
    }, [location]);
    
    // Hooks para tracking de engajamento
    useScrollTracking(0.5); // Tracking quando usuário rola 50% da página
    useTimeTracking(30); // Tracking quando usuário fica 30+ segundos na página
};

export default usePageTracking;
