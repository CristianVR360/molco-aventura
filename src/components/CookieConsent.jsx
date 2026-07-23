import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after a slight delay
    const consent = localStorage.getItem('molco-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('molco-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('molco-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 animate-fade-in-up">
      <div className="glass-panel p-6 rounded-2xl shadow-xl flex flex-col gap-4 border border-primary/10">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-primary/10 rounded-xl text-primary shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm text-text-main">
              Uso de Cookies
            </h4>
            <p className="text-xs text-text-muted mt-1 leading-relaxed">
              Utilizamos cookies propias y de terceros para analizar nuestro tráfico y mejorar tu experiencia en nuestra plataforma de turismo aventura.
            </p>
          </div>
        </div>
        <div className="flex gap-2 justify-end text-xs">
          <button 
            onClick={handleDecline} 
            className="px-4 py-2 hover:bg-black/5 rounded-full font-medium transition cursor-pointer text-text-muted"
          >
            Rechazar
          </button>
          <button 
            onClick={handleAccept} 
            className="px-5 py-2 bg-primary hover:bg-primary-hover text-white rounded-full font-bold shadow-md shadow-primary/10 transition cursor-pointer"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
