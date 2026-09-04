import React from 'react';
import logoHorizontalColor from '../assets/logos/SVG/logo horizontal fc.svg';

const NotFound = ({ onGoHome }) => {
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onGoHome) {
      onGoHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-bg-site text-text-main flex flex-col justify-between font-sans antialiased relative overflow-hidden">
      {/* Noise overlay texture */}
      <div className="noise-overlay" />

      {/* Top Header Bar */}
      <header className="w-full py-6 px-6 sm:px-12 flex justify-between items-center relative z-20 border-b border-card-border bg-white/70 backdrop-blur-md">
        <a href="/" onClick={handleHomeClick} className="block focus:outline-none">
          <img 
            src={logoHorizontalColor} 
            alt="Molco Aventura Logo" 
            className="h-9 sm:h-10 w-auto object-contain" 
          />
        </a>
        <a 
          href="https://wa.me/56929471838" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-display font-extrabold text-xs sm:text-sm px-5 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition shadow-sm"
        >
          Contacto Directo
        </a>
      </header>

      {/* Main 404 Hero Content */}
      <main className="max-w-4xl mx-auto px-4 py-16 sm:py-24 text-center relative z-10 my-auto">
        <div className="inline-flex items-center gap-2 text-secondary-dark uppercase font-display font-extrabold text-xs tracking-widest mb-6 bg-secondary-light/80 border border-secondary/20 px-4 py-1.5 rounded-full shadow-sm">
          <span>🌋 Error 404 — Ruta Desconocida</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-primary-dark leading-tight tracking-tight mb-6">
          ¡Te has desviado del sendero!
        </h1>

        <p className="text-text-muted text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          La página que buscas no existe o ha sido movida. Pero no te preocupes, el mapa del sur de Chile está lleno de caminos por explorar.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/"
            onClick={handleHomeClick}
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-display font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Volver a la Aventura (Inicio)
          </a>

          <a
            href="https://wa.me/56929471838?text=Hola,%20necesito%20asistencia%20en%20el%20sitio%20web%20de%20Molco%20Aventura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-hover text-white font-display font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-secondary/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            Consultar por WhatsApp
          </a>
        </div>

        {/* Quick Links Card */}
        <div className="mt-16 bg-white/70 border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm max-w-2xl mx-auto">
          <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary-dark mb-4">
            Enlaces Rápidos
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Servicios', href: '/#servicios' },
              { name: 'Tarifas & Hospedaje', href: '/#tarifas' },
              { name: 'Actividades', href: '/#actividades' },
              { name: 'Descargar Logos / Marca', href: '/marca' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (onGoHome) onGoHome(link.href.replace('/', ''));
                  else window.location.href = link.href;
                }}
                className="bg-primary-light/60 hover:bg-primary/10 text-primary-dark border border-primary/20 px-4 py-2 rounded-full text-xs font-bold transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="py-6 px-4 text-center text-xs text-text-muted border-t border-card-border bg-white/50 relative z-20">
        <p>&copy; {new Date().getFullYear()} Molco Aventura. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default NotFound;
