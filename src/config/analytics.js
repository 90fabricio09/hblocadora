// Configuração do Google Analytics e Google Tag Manager
// IMPORTANTE: Substitua os IDs abaixo pelos seus IDs reais

export const ANALYTICS_CONFIG = {
    // Google Tag Manager - ID fornecido pelo consultor
    GTM_ID: 'GTM-PLWQTDVF',
    
    // Google Analytics 4 será configurado via GTM pelo consultor
    // GA4_MEASUREMENT_ID: 'G-XXXXXXXXXX', // Será configurado no GTM
    
    // Configurações personalizadas para o negócio
    BUSINESS_CONFIG: {
        businessType: 'locadora_van',
        serviceArea: 'sao_paulo',
        businessName: 'HB Locadora',
        website: 'https://hblocadora.com.br'
    },
    
    // Eventos personalizados para conversões
    CONVERSION_EVENTS: {
        FORM_SUBMIT: 'form_submit_success',
        WHATSAPP_CONTACT: 'whatsapp_contact',
        PHONE_CALL: 'phone_click',
        EMAIL_CONTACT: 'email_click',
        QUOTE_REQUEST: 'quote_request'
    },
    
    // Categorias de eventos
    EVENT_CATEGORIES: {
        ENGAGEMENT: 'Engagement',
        NAVIGATION: 'Navigation',
        LEAD_GENERATION: 'Lead Generation',
        CONTACT: 'Contact',
        CONVERSION: 'Conversion',
        SOCIAL_MEDIA: 'Social Media',
        ERROR: 'Error'
    }
};

// Função para obter configuração completa do GA4
export const getGA4Config = () => ({
    page_title: document.title,
    page_location: window.location.href,
    custom_map: {
        'custom_parameter_1': 'business_type',
        'custom_parameter_2': 'service_area'
    },
    business_type: ANALYTICS_CONFIG.BUSINESS_CONFIG.businessType,
    service_area: ANALYTICS_CONFIG.BUSINESS_CONFIG.serviceArea
});

export default ANALYTICS_CONFIG;
