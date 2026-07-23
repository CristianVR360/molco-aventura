import { useState, useEffect } from 'react';

// Local Photo Imports
import fotoDeporteLago from './assets/fotos/deporte lago.jpg.jpeg';
import fotoHuiloHuilo from './assets/fotos/huilo-huilo.jpg.jpeg';
import fotoMotoAgua from './assets/fotos/moto-de-agua.jpg.jpeg';
import fotoNiebla from './assets/fotos/niebla.jpg.jpeg';
import fotoPuertoFuy from './assets/fotos/puerto fuy.jpg.jpeg';
import fotoValdivia from './assets/fotos/valdivia.jpg.jpeg';
import fotoVolcanVillarrica from './assets/fotos/volcan-villarrica.jpg.jpeg';
import fotoTermas from './assets/fotos/termas-huife.jpg';

// Helper Components
import ScrollReveal from './components/ScrollReveal';
import CookieConsent from './components/CookieConsent';

// New Logos Imports
import logoHorizontalColor from './assets/logos/SVG/logo horizontal fc.svg';
import logoHorizontalWhite from './assets/logos/SVG/Logo horizontal blanco.svg';

// Reusable Custom Premium SVG Icons (Phosphor/Heroicons inspired)
const IconTent = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 20L12 4l9.75 16H2.25z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M7.5 20l4.5-8 4.5 8" />
  </svg>
);

const IconMap = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.832V8.056a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const IconBoat = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16H3a1 1 0 00-.894 1.447l2 4A1 1 0 005 22h14a1 1 0 00.894-.553l2-4A1 1 0 0021 16z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v14M12 5l7 6H12" />
  </svg>
);

const IconWhatsApp = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.012 2.25c-5.306 0-9.695 4.384-9.695 9.696 0 1.954.586 3.778 1.597 5.31l-1.047 3.824 3.93-1.03a9.625 9.625 0 0 0 5.215 1.51c5.307 0 9.696-4.388 9.696-9.697 0-5.312-4.389-9.695-9.696-9.695zm5.666 13.729c-.244.686-1.21 1.249-1.66 1.3-1.2.137-2.735-.37-4.004-1.39-1.272-1.023-2.072-2.316-2.529-3.238-.456-.922-.446-1.572.01-2.03.354-.356.467-.442.627-.66.16-.217.12-.403.04-.59-.08-.186-.627-1.512-.86-2.068-.226-.54-.46-.467-.627-.476l-.534-.01c-.187 0-.494.07-.75.353-.258.283-.984.965-.984 2.353s1.008 2.73 1.15 2.923c.14.193 1.986 3.033 4.81 4.25.672.29 1.197.463 1.606.593.675.215 1.289.185 1.774.113.54-.08 1.66-.68 1.895-1.336.236-.656.236-1.22.166-1.336-.07-.116-.258-.186-.54-.326l-2.55-1.258c-.282-.14-.488-.113-.695.196l-.888 1.144c-.162.21-.326.236-.607.095-.28-.14-1.185-.436-2.257-1.393-.834-.744-1.397-1.662-1.56-1.943-.162-.28-.016-.432.124-.572.126-.126.28-.327.42-.49.14-.163.187-.28.28-.466.094-.186.047-.35-.023-.49-.07-.14-.627-1.512-.86-2.068z" />
  </svg>
);

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'theme-b' ? 'theme-b' : 'theme-a';
  });

  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState('dia2');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const body = document.body;
    if (theme === 'theme-b') {
      body.classList.remove('theme-a');
      body.classList.add('theme-b');
    } else {
      body.classList.remove('theme-b');
      body.classList.add('theme-a');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Scroll handler for floating header & back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoHeader = scrolled ? logoHorizontalColor : logoHorizontalWhite;
  const logoFooter = logoHorizontalWhite;

  const slides = [
    {
      image: fotoVolcanVillarrica,
      tag: '🌋 Volcán Villarrica',
      title: 'MAJESTUOSO VOLCÁN VILLARRICA',
      subtitle: 'Estadía de 6 noches a los pies de la imponente Ruka Pillañ con tinajas de aguas calientes de deshielo natural.',
    },
    {
      image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop',
      tag: '⛺ Camping Aldea Molco',
      title: 'CAMPING ALDEA MOLCO',
      subtitle: 'Disfruta de una estadía de 6 noches rodeado de verdes bosques nativos, tinajas calientes y pozón natural.',
    },
    {
      image: fotoHuiloHuilo,
      tag: '🌿 Reserva Huilo Huilo',
      title: 'MÁGICA AVENTURA EN HUILO HUILO',
      subtitle: 'Recorre senderos únicos y cruza el lago Pirehueico en barcaza en la ruta de los siete lagos.',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const itineraryData = {
    dia2: {
      title: '2do día, Full Day Tours Valdivia',
      tagline: 'Aventura en la Ciudad de los Ríos',
      description: 'Tour guiado a la aventura de Valdivia en la ciudad de los Ríos. Incluye 1 salida Full Day a Valdivia, Niebla (visita Fuerte Niebla), Cervecería Kunstmann, Centro de Valdivia (Feria Fluvial, centro histórico) y navegación por el Río Valdivia.',
      image: fotoValdivia,
      highlights: [
        { num: 1, title: 'Fuerte de Niebla', desc: 'Visita guiada a las fortificaciones coloniales con vista al Océano Pacífico.' },
        { num: 2, title: 'Cervecería Kunstmann', desc: 'Degustación y almuerzo en la emblemática casa cervecera tradicional del sur.' },
        { num: 3, title: 'Feria Fluvial & Navegación', desc: 'Recorrido por la ribera del Río Valdivia observando la fauna marina local.' }
      ]
    },
    dia4: {
      title: '4to día, Full Day Tours Panguipulli - Pto. Fuy',
      tagline: 'La Ruta de los Siete Lagos',
      description: 'Tour guiado por la Araucanía andina en la ciudad de los lagos. Incluye 1 salida Full Day hacia Panguipulli, Reserva Biológica Huilo Huilo, Puerto Fuy, con entrada a Parque Huilo Huilo (Pack Colibrí) y cruce en Barcaza por el Lago Pirehueico.',
      image: fotoPuertoFuy,
      highlights: [
        { num: 1, title: 'Reserva Huilo Huilo (Pack Colibrí)', desc: 'Sendero interactivo entre caídas de agua y la selva patagónica húmeda.' },
        { num: 2, title: 'Puerto Fuy', desc: 'Puerto de montaña con hermosas vistas al imponente lago Pirehueico.' },
        { num: 3, title: 'Barcaza Pirehueico', desc: 'Cruzar en barcaza por el lago Pirehueico hacia Puerto Pirehueico en una travesía mágica.' }
      ]
    },
    dia5: {
      title: '5to día, Full Day Deporte Náutico',
      tagline: 'Adrenalina en el Lago Villarrica',
      description: 'Salida en embarcación al lago Villarrica desde Playa Linda o Playa Molco en lancha para 6 personas, donde realizaremos actividades de entretención náutica en arrastrable para 2 personas, y disfrutaremos de Stand Up Paddle (SUP) por 2 horas.',
      image: fotoDeporteLago,
      highlights: [
        { num: 1, title: 'Paseo en Lancha Exclusiva', desc: 'Navegación en lancha para un grupo reducido de 6 aventureros.' },
        { num: 2, title: 'Arrastrable "Saca Chu"', desc: 'Diversión y adrenalina pura para 2 personas desafiando las olas del lago.' },
        { num: 3, title: 'Stand Up Paddle (SUP)', desc: '2 horas de navegación tranquila remando de pie a orillas del lago.' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-bg-site text-text-main font-sans antialiased selection:bg-primary selection:text-white relative">
      {/* Noise overlay texture */}
      <div className="noise-overlay" />

      {/* Header / Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'h-16 bg-bg-site/90 backdrop-blur-xl border-b border-card-border shadow-lg shadow-primary/5' 
          : 'h-20 bg-gradient-to-b from-black/70 via-black/30 to-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="#inicio" className="block focus:outline-none">
              <img 
                src={logoHeader} 
                alt="Molco Aventura Logo" 
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-9' : 'h-10 sm:h-11'}`} 
              />
            </a>
          </div>
          <div className="flex items-center gap-6">
            {/* Story-driven Custom Identity Selector */}
            <div className={`flex items-center rounded-full p-1 shadow-inner relative z-10 transition-colors duration-300 ${
              scrolled 
                ? 'bg-primary-light/60 border border-primary-medium/20' 
                : 'bg-black/30 border border-white/20 backdrop-blur-md'
            }`}>
              <button 
                onClick={() => setTheme('theme-a')} 
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-extrabold transition-all duration-300 cursor-pointer ${
                  theme === 'theme-a' 
                    ? 'bg-primary text-white shadow-md scale-105' 
                    : scrolled ? 'text-text-muted hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
                title="Identidad A: Volcán & Bosque"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l10 18H2L12 3z M12 3v6 M9 9h6" />
                </svg>
                <span className="hidden md:inline">Volcán & Bosque</span>
                <span className="inline md:hidden">A</span>
              </button>
              <button 
                onClick={() => setTheme('theme-b')} 
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-extrabold transition-all duration-300 cursor-pointer ${
                  theme === 'theme-b' 
                    ? 'bg-primary text-white shadow-md scale-105' 
                    : scrolled ? 'text-text-muted hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
                title="Identidad B: Lagos & Ríos"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c.895 0 1.79.342 2.47 1.026a3.49 3.49 0 004.938 0 3.49 3.49 0 014.938 0 3.49 3.49 0 004.938 0 3.49 3.49 0 012.47-1.026" />
                </svg>
                <span className="hidden md:inline">Lagos & Ríos</span>
                <span className="inline md:hidden">B</span>
              </button>
            </div>
            
            <nav className="hidden lg:flex items-center gap-6">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Conócenos', href: '#conocenos' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Itinerario', href: '#itinerario' },
                { name: 'Tarifas', href: '#tarifas' },
                { name: 'Actividades', href: '#actividades' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-display font-bold text-sm hover-underline-expand transition-colors py-1 ${
                    scrolled 
                      ? 'text-text-main hover:text-primary' 
                      : 'text-white hover:text-secondary-light drop-shadow-sm'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="https://wa.me/56929471838" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`font-display font-extrabold text-sm px-5 py-2 rounded-full transition shadow-md active:scale-[0.98] active:translate-y-[1.5px] ${
                  scrolled 
                    ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white' 
                    : 'border-2 border-white text-white hover:bg-white hover:text-primary-dark backdrop-blur-sm'
                }`}
              >
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="relative min-h-[100dvh] pt-20 pb-16 flex items-center overflow-hidden"
      >
        {/* Slides Background */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                idx === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Dynamic Gradient Scrim Overlays - Keeps image center/right vivid while securing text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10 pointer-events-none" />

        {/* Hero Content - Clean Editorial Overlay Without Heavy Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 my-auto">
          <div className="max-w-xl text-left" key={currentSlide}>
            <div className="animate-fade-in-up duration-500">
              {/* 1. Tag Eyebrow */}
              <span className="inline-flex items-center gap-2 text-secondary-light uppercase font-display font-extrabold text-[11px] sm:text-xs tracking-widest mb-4 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                {slides[currentSlide].tag}
              </span>
              
              {/* 2. Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.08] tracking-tight drop-shadow-xl mb-4">
                {slides[currentSlide].title}
              </h1>
              
              {/* 3. Subtitle */}
              <p className="text-white/85 text-sm sm:text-base font-normal leading-relaxed max-w-lg mb-8 drop-shadow">
                {slides[currentSlide].subtitle}
              </p>

              {/* 4. Sleek Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href="https://wa.me/56929471838" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-hover text-white font-display font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg shadow-secondary/30 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  <IconWhatsApp className="w-4 h-4 mr-2" />
                  Reserva tu Aventura
                </a>
                <a 
                  href="#itinerario" 
                  className="inline-flex items-center justify-center border border-white/40 hover:border-white text-white font-display font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full hover:bg-white/10 active:scale-95 transition-all duration-300 backdrop-blur-sm"
                >
                  Ver Itinerarios
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Bottom Navigation & Progress Dock */}
        <div className="absolute bottom-6 left-4 right-4 sm:left-8 sm:right-8 z-30 max-w-7xl mx-auto flex items-center justify-between gap-4 pointer-events-none">
          {/* Slide Indicator Dots & Labels */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full pointer-events-auto shadow-lg">
            {slides.map((slide, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-display font-extrabold transition-all duration-300 cursor-pointer ${
                  idx === currentSlide 
                    ? 'bg-secondary text-white shadow-sm scale-105' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              >
                <span>0{idx + 1}</span>
                {idx === currentSlide && (
                  <span className="hidden md:inline text-[10px] uppercase tracking-wider truncate max-w-[130px]">
                    {slide.tag.split(' ')[1] || slide.tag}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button 
              onClick={prevSlide}
              className="p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-secondary text-white backdrop-blur-md border border-white/20 hover:border-white/40 active:scale-95 transition-all shadow-lg cursor-pointer"
              aria-label="Diapositiva anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-secondary text-white backdrop-blur-md border border-white/20 hover:border-white/40 active:scale-95 transition-all shadow-lg cursor-pointer"
              aria-label="Diapositiva siguiente"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Conócenos Section */}
      <section id="conocenos" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20">
          <span className="text-primary uppercase font-display font-extrabold text-sm tracking-wider block mb-2">
            Quiénes Somos
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-primary-dark tracking-tight leading-none">
            Nuestra Historia y Ubicación
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ScrollReveal className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg" delay={100}>
            <p className="text-primary-dark font-medium border-l-4 border-primary pl-5 py-3 italic bg-primary-light/60 rounded-r-2xl leading-relaxed max-w-2xl">
              Molco Aventura nace el año 2024 como un sueño y una idea para disfrutar. Hoy 2026 iniciamos nuestras primeras experiencias como una empresa Tour Operador con vivencias recolectadas en estos años de viajes familiares. Exploramos la hermosa Araucanía, la Región de los Lagos y la Región de Los Ríos, conectando con volcanes majestuosos, lagos prístinos, ríos navegables e incomparable bosque nativo en nuestro querido Chile.
            </p>
            <div className="bg-white/60 border border-card-border p-8 rounded-3xl shadow-sm">
              <h3 className="text-xl font-display font-extrabold text-primary mb-3">Ubicación Estratégica</h3>
              <p className="text-text-muted leading-relaxed max-w-2xl">
                Molco Aventura está ubicado a sólo 15 minutos de Villarrica y Pucón. Desde nuestra base, podrás sumergirte en bosques milenarios, playas a orillas del Lago Villarrica y senderos de montaña. Pucón, capital del Turismo Aventura en el sur de Chile, te ofrece además gastronomía premium, entretención y una conectividad privilegiada con toda la ruta de los siete lagos.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5 flex flex-col gap-6" delay={200}>
            <div className="bg-white/60 border border-card-border p-6 rounded-2xl shadow-sm">
              <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-primary-dark mb-4">Ciudades de Destino</h4>
              <div className="flex flex-wrap gap-2">
                {['Villarrica', 'Pucón', 'Panguipulli', 'Valdivia'].map((city) => (
                  <span 
                    key={city} 
                    className="bg-primary text-white border border-primary/10 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm hover:scale-105 hover:bg-primary-hover transition duration-300"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/60 border border-card-border p-6 rounded-2xl shadow-sm">
              <h4 className="font-display font-extrabold text-sm uppercase tracking-wider text-secondary-dark mb-4">Atractivos Naturales</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Lago Villarrica', 'Lago Caburgua', 'Reserva Huilo Huilo',
                  'Puerto Fuy', 'Puerto Pirehueico', 'Niebla', 'Río Valdivia'
                ].map((attract) => (
                  <span 
                    key={attract} 
                    className="bg-secondary-light text-secondary-dark border border-secondary/20 px-3.5 py-1.5 rounded-full text-xs font-bold hover:scale-105 hover:bg-secondary/15 transition duration-300"
                  >
                    {attract}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Map / Routes representation with dot-grid pattern and coordinates */}
        <ScrollReveal className="bg-white/80 border border-card-border shadow-[0_15px_45px_-10px_rgba(17,76,95,0.06)] rounded-3xl p-8 sm:p-10 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-display font-extrabold text-primary-dark mb-4">Ruta Geográfica de Aventura</h3>
            <p className="text-text-muted leading-relaxed max-w-xl">
              Uniendo los puntos más hermosos del sur andino y fluvial. Desde nuestra base logística rodeada de bosques y a los pies del volcán, recorremos los lagos templados, los ríos navegables y la costa del Océano Pacífico.
            </p>
          </div>
          <div className="bg-primary-light/50 border border-primary-medium/20 rounded-2xl p-4 flex items-center justify-center min-h-[250px] shadow-inner relative overflow-hidden">
            <svg className="w-full h-full max-w-[400px] relative z-10" viewBox="0 0 400 200">
              <defs>
                <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="var(--primary)" opacity="0.1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotGrid)" rx="16" />
              
              <path d="M 50,150 Q 150,50 250,160 T 350,80" fill="none" stroke="var(--primary)" strokeWidth="6" strokeDasharray="10 5" style={{ strokeOpacity: 0.12 }} />
              <path d="M 50,150 Q 150,50 250,160 T 350,80" fill="none" stroke="var(--primary)" strokeWidth="2.5" />
              
              {/* Valdivia */}
              <g className="cursor-pointer group">
                <circle cx="50" cy="150" r="12" fill="var(--secondary)" opacity="0.2" className="animate-ping" style={{ animationDuration: '3s' }} />
                <circle cx="50" cy="150" r="6" fill="var(--secondary)" stroke="white" strokeWidth="1.5" />
                <text x="50" y="132" fill="var(--primary-dark)" fontSize="10" textAnchor="middle" className="font-display font-bold">Valdivia</text>
              </g>
              
              {/* Panguipulli */}
              <g className="cursor-pointer group">
                <circle cx="150" cy="85" r="12" fill="var(--primary)" opacity="0.2" className="animate-ping" style={{ animationDuration: '4s' }} />
                <circle cx="150" cy="85" r="6" fill="var(--primary)" stroke="white" strokeWidth="1.5" />
                <text x="150" y="67" fill="var(--primary-dark)" fontSize="10" textAnchor="middle" className="font-display font-bold">Panguipulli</text>
              </g>
              
              {/* Huilo Huilo */}
              <g className="cursor-pointer group">
                <circle cx="260" cy="155" r="12" fill="var(--primary)" opacity="0.2" className="animate-ping" style={{ animationDuration: '3.5s' }} />
                <circle cx="260" cy="155" r="6" fill="var(--primary)" stroke="white" strokeWidth="1.5" />
                <text x="260" y="176" fill="var(--primary-dark)" fontSize="10" textAnchor="middle" className="font-display font-bold">Huilo Huilo</text>
              </g>

              {/* Base */}
              <g className="cursor-pointer group">
                <circle cx="340" cy="85" r="16" fill="var(--secondary)" opacity="0.25" className="animate-pulse" />
                <circle cx="340" cy="85" r="8" fill="var(--secondary)" stroke="white" strokeWidth="2" />
                <text x="340" y="65" fill="var(--primary-dark)" fontSize="10" textAnchor="middle" className="font-display font-extrabold">Base Molco</text>
              </g>
            </svg>
          </div>
        </ScrollReveal>

        {/* Dynamic Gallery with staggered heights */}
        <div className="mt-24 md:pb-12">
          <ScrollReveal className="mb-8">
            <h3 className="text-xl font-display font-extrabold text-primary-dark">Galería de Experiencias</h3>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Volcán Ruka Pillañ', url: fotoVolcanVillarrica },
              { title: 'Niebla y Ríos', url: fotoNiebla },
              { title: 'Reserva Huilo Huilo', url: fotoHuiloHuilo },
              { title: 'Lagos y Deportes', url: fotoMotoAgua }
            ].map((img, i) => (
              <ScrollReveal 
                key={i} 
                delay={i * 70} 
                className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${
                  i % 2 === 1 ? 'md:translate-y-6' : ''
                }`}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/20 to-transparent flex items-end p-5 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-display font-bold text-white text-xs sm:text-sm tracking-wide">{img.title}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-28 bg-primary-light/50 border-y border-primary-medium/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-20">
            <span className="text-primary uppercase font-display font-extrabold text-sm tracking-wider block mb-2">
              Nuestras Ofertas
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-primary-dark tracking-tight leading-none">
              Turismo en La Araucanía & Los Ríos
            </h2>
          </ScrollReveal>

          {/* Staggered Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
            {[
              { 
                title: 'Hospedaje de Aventura', 
                desc: 'Diversas opciones de descanso en Camping Aldea Molco, rodeado de verdes bosques nativos y pozones naturales.', 
                icon: <IconTent className="w-10 h-10 text-secondary stroke-[1.5]" />,
                style: 'border-secondary/20 shadow-lg shadow-secondary/5 hover:border-secondary hover:scale-[1.02]' 
              },
              { 
                title: 'Tours Guiados', 
                desc: 'Viajes organizados full day a los principales atractivos fluviales y cordilleranos de la zona.', 
                icon: <IconMap className="w-10 h-10 text-primary stroke-[1.5]" />,
                style: 'border-primary/20 shadow-lg shadow-primary/5 hover:border-primary hover:scale-[1.02]' 
              },
              { 
                title: 'Deportes Náuticos', 
                desc: 'Navegación veloz y recreativa en lancha privada, SUP y divertidos arrastrables en el Lago Villarrica.', 
                icon: <IconBoat className="w-10 h-10 text-primary stroke-[1.5]" />,
                style: 'border-primary/20 shadow-lg shadow-primary/5 hover:border-primary hover:scale-[1.02]' 
              }
            ].map((p, i) => (
              <ScrollReveal 
                key={i} 
                delay={i * 120} 
                className={`p-8 bg-white/70 backdrop-blur-md rounded-3xl border ${p.style} transition-all duration-500 flex flex-col justify-between h-full`}
              >
                <div>
                  <div className="p-3.5 bg-white rounded-2xl w-max shadow-sm border border-card-border mb-6">
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-display font-extrabold mb-3 text-primary-dark">{p.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-medium">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Featured Service Layout */}
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-primary-medium/20 bg-white shadow-xl shadow-primary/5">
            <div 
              className="lg:col-span-6 min-h-[350px] bg-cover bg-center relative group"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop')` }}
            >
              <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/10 transition-colors duration-500" />
            </div>
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center bg-white relative">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2">Destacado</span>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-primary mb-6">
                Camping Aldea Molco
              </h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed font-medium mb-6">
                Disfruta de una estadía de 6 noches con desayuno campestre en plena naturaleza nativa, rodeado de verdes bosques a los pies del volcán Villarrica (Ruka Pillañ). Ofrecemos cómodas carpas equipadas para 4 personas, refugios rústicos para 3 personas o cabañas familiares para 5 personas. 
              </p>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed font-medium">
                Contamos con servicios higiénicos de primer nivel (baños privados y duchas calientes). Relájate en tinajas de aguas termales naturales que descienden de la cordillera, y explora nuestro riachuelo y pozón natural oculto dentro del bosque de la Aldea.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Itinerario Section */}
      <section id="itinerario" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary uppercase font-display font-extrabold text-sm tracking-wider block mb-2">
            Cronograma del Tour
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-primary-dark tracking-tight leading-none">
            Itinerario Full Day (3 Días)
          </h2>
        </ScrollReveal>

        <ScrollReveal className="bg-white/80 border border-card-border rounded-3xl p-6 sm:p-10 shadow-xl shadow-primary/5">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-12 bg-primary-light/60 p-1.5 rounded-full max-w-max mx-auto border border-primary-medium/20 shadow-inner">
            <button 
              onClick={() => setActiveTab('dia2')} 
              className={`px-5 py-2.5 rounded-full font-display font-extrabold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'dia2' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-primary-dark hover:text-primary hover:bg-primary-light/30'
              }`}
            >
              Día 2: Tours Valdivia
            </button>
            <button 
              onClick={() => setActiveTab('dia4')} 
              className={`px-5 py-2.5 rounded-full font-display font-extrabold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'dia4' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-primary-dark hover:text-primary hover:bg-primary-light/30'
              }`}
            >
              Día 4: Panguipulli - Pto. Fuy
            </button>
            <button 
              onClick={() => setActiveTab('dia5')} 
              className={`px-5 py-2.5 rounded-full font-display font-extrabold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'dia5' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-primary-dark hover:text-primary hover:bg-primary-light/30'
              }`}
            >
              Día 5: Deporte Náutico
            </button>
          </div>

          {/* Active Tab Content with dynamic transition key */}
          <div key={activeTab} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fade-in-up">
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0f2537] mb-2 leading-tight">
                {itineraryData[activeTab].title}
              </h3>
              <div className="text-xs font-bold text-secondary tracking-wider uppercase mb-6">
                {itineraryData[activeTab].tagline}
              </div>
              <p className="text-text-muted text-sm sm:text-base mb-8 leading-relaxed font-medium">
                {itineraryData[activeTab].description}
              </p>

              {/* Interactive Timeline Path */}
              <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-primary-medium/30">
                {itineraryData[activeTab].highlights.map((hl) => (
                  <div key={hl.num} className="flex gap-5 items-start relative z-10 group">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-secondary text-secondary font-display font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      {hl.num}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-primary-dark group-hover:text-primary transition-colors">{hl.title}</h4>
                      <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">{hl.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 h-[320px] rounded-2xl overflow-hidden shadow-lg border border-card-border relative group">
              <img 
                src={itineraryData[activeTab].image} 
                alt={itineraryData[activeTab].title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-dark/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Valores / Tarifas Section */}
      <section id="tarifas" className="py-28 bg-primary-light/50 border-t border-primary-medium/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-primary uppercase font-display font-extrabold text-sm tracking-wider block mb-2">
              Opciones de Hospedaje
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-primary-dark tracking-tight leading-none">
              Elige tu Hospedaje (6 Noches)
            </h2>
            <p className="text-text-muted max-w-lg mx-auto mt-4 text-xs sm:text-sm font-medium">
              Todos los paquetes incluyen desayuno campestre, acceso a tinajas calientes y el programa de tours guiados del itinerario de 3 días.
            </p>
          </ScrollReveal>

          {/* Pricing Grid with bottom-aligned CTAs and heights matching */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Camping */}
            <ScrollReveal className="bg-white/80 border border-card-border rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full relative" delay={100}>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-secondary font-extrabold mb-2 block">Rústico & Natural</span>
                <h3 className="text-2xl font-display font-extrabold text-primary-dark mb-4">Camping 6 noches</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  Carpas premium para 4 personas con acceso a baño privado completo (el saco de dormir es de responsabilidad de cada pasajero). Conéctate directo con la naturaleza nativa.
                </p>
              </div>
              <div>
                <div className="border-y border-slate-100/80 py-4 mb-6 flex flex-col gap-2 text-left">
                  <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Valor Adulto</span>
                  <span className="text-primary font-display font-extrabold tracking-tight tabular-nums">$659.000</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Niño/a (hasta 14 años)</span>
                  <span className="text-primary font-display font-extrabold tracking-tight tabular-nums">$359.000</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Niño/a (hasta 7 años)</span>
                  <span className="text-primary font-display font-extrabold tracking-tight tabular-nums">$299.000</span>
                </div>
              </div>

              <a 
                href="https://wa.me/56929471838?text=Hola,%20me%20gustaria%20reservar%20la%20opcion%20Camping%206%20noches" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-display font-extrabold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] active:translate-y-[0.5px] transition-all text-center block"
                >
                  Más información
                </a>
              </div>
            </ScrollReveal>

            {/* Card 2: Refugio */}
            <ScrollReveal className="bg-white/80 border border-card-border rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full relative" delay={200}>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-secondary font-extrabold mb-2 block">Acogedor & Boscoso</span>
                <h3 className="text-2xl font-display font-extrabold text-primary-dark mb-4">Refugio 6 noches</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  Refugio rústico y acogedor, completamente equipado para 3 personas. La combinación perfecta entre aventura al aire libre y comodidad campestre.
                </p>
              </div>
              <div>
                <div className="border-y border-slate-100/80 py-4 mb-6 flex flex-col gap-2 text-left">
                  <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Valor Adulto</span>
                  <span className="text-primary font-display font-extrabold tracking-tight tabular-nums">$799.000</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Niño/a (hasta 14 años)</span>
                  <span className="text-primary font-display font-extrabold tracking-tight tabular-nums">$459.000</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Niño/a (hasta 7 años)</span>
                  <span className="text-primary font-display font-extrabold tracking-tight tabular-nums">$399.000</span>
                </div>
              </div>

              <a 
                href="https://wa.me/56929471838?text=Hola,%20me%20gustaria%20reservar%20la%20opcion%20Refugio%206%20noches" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-display font-extrabold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] active:translate-y-[0.5px] transition-all text-center block"
                >
                  Más información
                </a>
              </div>
            </ScrollReveal>

            {/* Card 3: Cabaña (Destacada con escala y glow) */}
            <ScrollReveal className="bg-white border-2 border-secondary rounded-3xl p-8 shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between h-full relative transform md:scale-105 z-10" delay={300}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-5 py-1 rounded-full text-[10px] font-display font-extrabold uppercase tracking-wider shadow-md border border-white/10">
                Popular
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-secondary font-extrabold mb-2 block">Máximo Confort</span>
                <h3 className="text-2xl font-display font-extrabold text-primary-dark mb-4">Cabaña 6 noches</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-6">
                  Departamento tipo cabaña familiar para 4 o 5 personas, completamente equipado. Disfruta de la intimidad y la máxima comodidad a pasos del riachuelo y senderos.
                </p>
              </div>
              <div>
                <div className="border-y border-slate-100/80 py-4 mb-6 flex flex-col gap-2 text-left">
                  <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Valor Adulto</span>
                  <span className="text-primary font-display font-extrabold tracking-tight tabular-nums">$949.000</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Niño/a (hasta 14 años)</span>
                  <span className="text-primary font-display font-extrabold tracking-tight tabular-nums">$559.000</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-muted font-medium">Niño/a (hasta 7 años)</span>
                  <span className="text-primary font-display font-extrabold tracking-tight tabular-nums">$399.000</span>
                </div>
              </div>

              <a 
                href="https://wa.me/56929471838?text=Hola,%20me%20gustaria%20reservar%20la%20opcion%20Cabana%206%20noches" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-4 bg-secondary hover:bg-secondary-hover text-white rounded-full font-display font-extrabold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] active:translate-y-[0.5px] transition-all text-center block"
                >
                  Más información
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Actividades de Turismo Aventura Section */}
      <section id="actividades" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-primary-medium/10">
        <ScrollReveal className="text-center mb-20">
          <span className="text-primary uppercase font-display font-extrabold text-sm tracking-wider block mb-2">
            Aventuras Opcionales
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-primary-dark tracking-tight leading-none">
            Actividades Adicionales
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Completa tu viaje con las mejores experiencias y tours complementarios disponibles en el sur de Chile.
          </p>
        </ScrollReveal>

        {/* Actividades Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Termas del Sur',
              tag: 'Relajación & Bienestar',
              desc: 'Termas Huife, Pucón Indómito o Parque Termal Botánico. Disfruta de la relajante calidez de las termas naturales en entornos boscosos únicos de la cordillera.',
              image: fotoTermas,
              link: 'https://wa.me/56929471838?text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20las%20Termas'
            },
            {
              title: 'Rafting Extremo',
              tag: 'Adrenalina en el Río',
              desc: 'Trancura Alto o Bajo. Desafía la vertiginosa corriente de uno de los ríos más emblemáticos de la Araucanía con guías certificados y equipamiento completo.',
              image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800&auto=format&fit=crop',
              link: 'https://wa.me/56929471838?text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20el%20Rafting'
            },
            {
              title: 'Centros de Esquí',
              tag: 'Nieve & Cordillera',
              desc: 'Pillán, Corralco, Nevados de Chillán o Valle Nevado en la Región Metropolitana. Visita las mejores pistas cordilleranas en invierno y disfruta de deportes de nieve y vistas panorámicas de ensueño.',
              image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop',
              link: 'https://wa.me/56929471838?text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20los%20Centros%20de%20Esqui'
            }
          ].map((act, i) => (
            <ScrollReveal 
              key={i} 
              delay={i * 120} 
              className="bg-white/80 border border-card-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full group"
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                <img 
                  src={act.image} 
                  alt={act.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-dark/15 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-extrabold mb-1.5 block">{act.tag}</span>
                  <h3 className="text-xl font-display font-extrabold text-primary-dark mb-3 leading-tight">{act.title}</h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">{act.desc}</p>
                </div>
                <a 
                  href={act.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary-hover font-display font-extrabold text-xs sm:text-sm inline-flex items-center gap-1 group mt-2 transition-colors cursor-pointer"
                >
                  Consultar Actividad
                  <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contacto" className="bg-[#05171e] text-white pt-24 pb-12 relative border-t border-white/5">
        {/* Subtle mesh background inside footer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary-dark),transparent_60%)] opacity-35 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="mb-6 bg-white/5 p-3 rounded-2xl max-w-max border border-white/5 shadow-inner">
                <img 
                  src={logoFooter} 
                  alt="Molco Aventura Logo" 
                  className="max-h-16 w-auto object-contain brightness-110" 
                />
              </div>
              <p className="text-sm text-sky-200/60 leading-relaxed max-w-sm">
                Una experiencia de turismo familiar nacida en el sur de Chile en 2024 para conquistar tus sentidos en 2026. Conéctate con lo natural de forma segura y auténtica.
              </p>
            </div>

            <div>
              <h3 className="font-display font-extrabold text-white text-base uppercase tracking-wider mb-6 relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-8 after:h-[2px] after:bg-secondary">
                Contacto Directo
              </h3>
              <ul className="space-y-4 text-sm text-sky-200/70">
                <li className="flex gap-2">
                  <span className="text-secondary font-bold select-none">W:</span>
                  <a href="https://wa.me/56929471838" target="_blank" rel="noreferrer" className="hover:text-white hover:underline transition-all">+56 9 2947 1838</a>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold select-none">E:</span>
                  <a href="mailto:contacto@molcoaventura.cl" className="hover:text-white hover:underline transition-all">contacto@molcoaventura.cl</a>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary font-bold select-none">U:</span>
                  <a href="http://www.molcoaventura.cl" target="_blank" rel="noreferrer" className="hover:text-white hover:underline transition-all">www.molcoaventura.cl</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-extrabold text-white text-base uppercase tracking-wider mb-6 relative after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-8 after:h-[2px] after:bg-secondary">
                Nuestras Ubicaciones
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-sky-200/70">
                <li>
                  <strong className="text-white block mb-1">Oficina Comercial:</strong>
                  Nueva Providencia 1881, Oficina 1618, Providencia, Región Metropolitana de Santiago.
                </li>
                <li>
                  <strong className="text-white block mb-1">Camping Aldea Molco:</strong>
                  Camino Villarrica – Pucón Km 12. Molco Alto Km 3.7 s/n, Villarrica, Región de La Araucanía.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sky-200/40">
            <p>&copy; {new Date().getFullYear()} Molco Aventura. Todos los derechos reservados. Diseñado para los amantes del sur de Chile.</p>
            <div className="flex gap-6">
              <a href="#terminos" className="hover:text-white transition">Términos de Servicio</a>
              <a href="#privacidad" className="hover:text-white transition">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Reusable Floating Back to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Volver arriba"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}

      {/* Reusable Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default App;
