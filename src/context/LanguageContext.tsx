import { useState, ReactNode } from 'react';
import { LanguageContext, Language } from './languageContextDefinition';

const translations = {
  es: {
    // Header
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Desarrollador Full Stack',
    'hero.subtitle': 'Creando experiencias web modernas y funcionales con tecnologías de vanguardia',
    
    // About Me
    'about.title': 'Sobre mí',
    'about.subtitle': 'Desarrollador Web Full Stack',
    'about.description1': 'Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Me especializo en tecnologías modernas de desarrollo web, con un enfoque en soluciones elegantes a problemas complejos.',
    'about.description2': 'Mi experiencia abarca todo el stack tecnológico, desde el diseño de interfaces hasta la implementación de bases de datos y APIs. Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan seguir creciendo profesionalmente.',
    'about.technologies': 'Tecnologías',
    
    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Una selección de mis proyectos recientes que demuestran mis habilidades y experiencia.',
    'projects.repo': 'Repo',
    'projects.demo': 'Demo',
    
    // Project descriptions
    'project.weatherapp.title': 'Clima App',
    'project.weatherapp.description': 'Aplicación de clima en tiempo real con visualización de datos.',
    'project.gonzalomeza.title': 'Gonzalo Meza',
    'project.gonzalomeza.description': 'Landing page para Gonzalo Meza, entrenador personal.',
    'project.ignaciofantinato.title': 'Ignacio Fantinato',
    'project.ignaciofantinato.description': 'Landing page para Ignacio Fantinato, nutricionista.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Interesado en trabajar juntos? ¡Contáctame a través del formulario o por redes sociales!',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.info': 'Información de contacto',
    'contact.social': 'Redes sociales',
    'contact.quote': '"La programación no es solo escribir código, es diseñar el futuro"',
    
    // Form validation
    'form.nameRequired': 'El nombre es requerido',
    'form.emailRequired': 'El email es requerido',
    'form.emailInvalid': 'Por favor ingrese un email válido',
    'form.messageRequired': 'El mensaje es requerido',
    'form.messageMinLength': 'El mensaje debe tener al menos 10 caracteres',
    'form.success': '¡Mensaje enviado con éxito! Te responderé lo antes posible.',
    'form.error': 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    
    // Placeholders
    'placeholder.name': 'Tu nombre',
    'placeholder.email': 'tu.email@ejemplo.com',
    'placeholder.message': 'Tu mensaje...',
    
    // Footer
    'footer.professional': 'Desarrollador Full Stack',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Technology categories
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.devops': 'DevOps',
  },
  en: {
    // Header
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'Creating modern and functional web experiences with cutting-edge technologies',
    
    // About Me
    'about.title': 'About Me',
    'about.subtitle': 'Full Stack Web Developer',
    'about.description1': 'I am a web developer passionate about creating attractive and functional digital experiences. I specialize in modern web development technologies, with a focus on elegant solutions to complex problems.',
    'about.description2': 'My experience spans the entire technology stack, from interface design to database and API implementation. I love learning new technologies and facing challenges that allow me to continue growing professionally.',
    'about.technologies': 'Technologies',
    
    // Projects
    'projects.title': 'Projects',
    'projects.subtitle': 'A selection of my recent projects that demonstrate my skills and experience.',
    'projects.repo': 'Repo',
    'projects.demo': 'Demo',
    
    // Project descriptions
    'project.weatherapp.title': 'Weather App',
    'project.weatherapp.description': 'Real-time weather application with data visualization.',
    'project.gonzalomeza.title': 'Gonzalo Meza',
    'project.gonzalomeza.description': 'Landing page for Gonzalo Meza, personal trainer.',
    'project.ignaciofantinato.title': 'Ignacio Fantinato',
    'project.ignaciofantinato.description': 'Landing page for Ignacio Fantinato, nutritionist.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Interested in working together? Contact me through the form or social media!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.info': 'Contact information',
    'contact.social': 'Social media',
    'contact.quote': '"Programming is not just about writing code — it\'s about designing the future."',
    
    // Form validation
    'form.nameRequired': 'Name is required',
    'form.emailRequired': 'Email is required',
    'form.emailInvalid': 'Please enter a valid email',
    'form.messageRequired': 'Message is required',
    'form.messageMinLength': 'Message must be at least 10 characters',
    'form.success': 'Message sent successfully! I will respond as soon as possible.',
    'form.error': 'There was an error sending the message. Please try again.',
    
    // Placeholders
    'placeholder.name': 'Your name',
    'placeholder.email': 'your.email@example.com',
    'placeholder.message': 'Your message...',
    
    // Footer
    'footer.professional': 'Full Stack Developer',
    'footer.rights': 'All rights reserved.',
    
    // Technology categories
    'tech.frontend': 'Frontend',
    'tech.backend': 'Backend',
    'tech.devops': 'DevOps',
  }
};


function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'es';
  });

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider };