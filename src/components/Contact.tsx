import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = t('form.nameRequired');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('form.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.emailInvalid');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('form.messageRequired');
    } else if (formData.message.length < 10) {
      newErrors.message = t('form.messageMinLength');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        console.error('Error sending email:', error);
        setIsSubmitting(false);
        setSubmitStatus('error');
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-900/90 backdrop-blur-sm"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <h2 
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white animate-on-scroll opacity-0"
        >
          {t('contact.title')}
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-on-scroll opacity-0" style={{transitionDelay: '200ms'}}>
          {t('contact.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll opacity-0" style={{transitionDelay: '300ms'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-100`}
                  placeholder={t('placeholder.name')}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-100`}
                  placeholder={t('placeholder.email')}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-100`}
                  placeholder={t('placeholder.message')}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-900 text-green-300 rounded-md">
                  {t('form.success')}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-900 text-red-300 rounded-md">
                  {t('form.error')}
                </div>
              )}
            </form>
          </div>
          
          <div className="animate-on-scroll opacity-0" style={{transitionDelay: '400ms'}}>
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-white">
                {t('contact.info')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-500 mr-3" />
                  <a
                    href="mailto:santiagojuarez86799@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    santiagojuarez86799@gmail.com
                  </a>
                </div>
                
                <div className="pt-6">
                  <h4 className="text-lg font-medium mb-4 text-white">
                    {t('contact.social')}
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/in/santiagojuarezdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-blue-900 hover:text-blue-400 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="https://github.com/santiagojuarez86"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 p-3 rounded-full text-gray-300 hover:bg-blue-900 hover:text-blue-400 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="pt-8">
                  <p className="text-gray-400 italic">
                    {t('contact.quote')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;