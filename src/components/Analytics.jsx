import { useEffect } from 'react';
import { ANALYTICS_CONFIG, getGA4Config } from '../config/analytics';

// Função para enviar eventos para o Google Analytics
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'Engagement',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      custom_parameter_1: parameters.businessType || 'locadora_van',
      custom_parameter_2: parameters.serviceArea || 'sao_paulo',
      ...parameters
    });
  }
  
  // Também enviar para o dataLayer do GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters
    });
  }
};

// Função para tracking de páginas
export const trackPageView = (pageName, pagePath) => {
  // Enviar para o dataLayer do GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_title: pageName,
      page_location: window.location.href,
      page_path: pagePath,
      business_type: ANALYTICS_CONFIG.BUSINESS_CONFIG.businessType,
      service_area: ANALYTICS_CONFIG.BUSINESS_CONFIG.serviceArea
    });
  }
};

// Função para tracking de conversões
export const trackConversion = (conversionType, value = 0) => {
  trackEvent('conversion', {
    category: 'Conversão',
    label: conversionType,
    value: value,
    businessType: 'locadora_van',
    serviceArea: 'sao_paulo'
  });
};

// Hook para tracking automático de scroll
export const useScrollTracking = (threshold = 0.5) => {
  useEffect(() => {
    let hasTracked = false;
    
    const handleScroll = () => {
      if (hasTracked) return;
      
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      if (scrollPercent >= threshold) {
        trackEvent('scroll', {
          category: 'Engagement',
          label: 'Scroll 50%',
          value: Math.round(scrollPercent * 100)
        });
        hasTracked = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
};

// Hook para tracking de tempo na página
export const useTimeTracking = (timeThreshold = 30) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      trackEvent('time_on_page', {
        category: 'Engagement',
        label: `${timeThreshold}s+`,
        value: timeThreshold
      });
    }, timeThreshold * 1000);
    
    return () => clearTimeout(timer);
  }, [timeThreshold]);
};

// Componente para tracking de cliques em botões
export const TrackedButton = ({ 
  children, 
  onClick, 
  eventName, 
  eventParameters = {},
  ...props 
}) => {
  const handleClick = (e) => {
    trackEvent(eventName || 'button_click', {
      category: 'Engagement',
      label: children?.toString() || 'Button',
      ...eventParameters
    });
    
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

// Componente para tracking de links
export const TrackedLink = ({ 
  children, 
  href, 
  eventName, 
  eventParameters = {},
  ...props 
}) => {
  const handleClick = () => {
    trackEvent(eventName || 'link_click', {
      category: 'Navigation',
      label: href,
      ...eventParameters
    });
  };
  
  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default {
  trackEvent,
  trackPageView,
  trackConversion,
  useScrollTracking,
  useTimeTracking,
  TrackedButton,
  TrackedLink
};
