import { useState, useEffect } from 'react';
import logoFull from './assets/logos/full.png';
import logoLetters from './assets/logos/solo-letras.png';
import logoHero from './assets/logos/molco-aventura-sinfondo.png';

// Local Photo Imports
import fotoDeporteLago from './assets/fotos/deporte lago.jpg.jpeg';
import fotoHuiloHuilo from './assets/fotos/huilo-huilo.jpg.jpeg';
import fotoMotoAgua from './assets/fotos/moto-de-agua.jpg.jpeg';
import fotoNiebla from './assets/fotos/niebla.jpg.jpeg';
import fotoPuertoFuy from './assets/fotos/puerto fuy.jpg.jpeg';
import fotoValdivia from './assets/fotos/valdivia.jpg.jpeg';
import fotoVolcanVillarrica from './assets/fotos/volcan-villarrica.jpg.jpeg';
import fotoTermas from './assets/fotos/termas.jpg';
import fotoCamping from './assets/fotos/camping.jpg';

function App() {
  useEffect(() => {
    const body = document.body;
    body.classList.remove('theme-b');
    body.classList.add('theme-a');
  }, []);

  const logoHeader = '/switch/switchA-1.png';
  const logoMainHero = '/switch/switchA-2.png';
  const logoFooter = '/switch/switchA-2.png';

  const [activeTab, setActiveTab] = useState('dia2');

  const slides = [
    {
      image: fotoVolcanVillarrica,
      tag: '🌋 Volcán Villarrica',
      title: 'MAJESTUOSO VOLCÁN VILLARRICA',
      subtitle: 'Estadía de 6 noches a los pies de la imponente Ruka Pillañ con tinajas de aguas calientes de deshielo natural.',
    },
    {
      image: fotoCamping,
      tag: '⛺ Camping Aldea Molco',
      title: 'CAMPING ALDEA MOLCO',
      subtitle: 'Disfruta de una estadía de 6 noches rodeado de verdes bosques nativos, tinajas calientes y pozón natural.',
    },
    {
      image: fotoHuiloHuilo,
      tag: '🌿 Reserva Huilo Huilo',
      title: 'MAGIA SALVAJE EN HUILO HUILO',
      subtitle: 'Recorre senderos únicos y cruza el lago Pirehueico en barcaza en la ruta de los siete lagos.',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const itineraryData = {
    dia2: {
      title: '2do día, Full Day Tours Valdivia',
      tagline: 'Aventura en la Ciudad de los Ríos',
      description: 'Tour guiado a la aventura de Valdivia en la ciudad de los Ríos Incluye 1 salida Full Day a Valdivia, Niebla (visita Fuerte Niebla), Cervecería Kunstmann, Centro de Valdivia (Feria Fluvial de Valdivia, Centro de Valdivia), Rio Valdivia.',
      image: fotoValdivia,
      highlights: [
        { num: 1, title: 'Fuerte de Niebla', desc: 'Visita guiada a las fortificaciones coloniales con vista al Océano Pacífico.' },
        { num: 2, title: 'Cervecería Kunstmann', desc: 'Degustación y almuerzo en la emblemática casa cervecera tradicional del sur.' },
        { num: 3, title: 'Feria Fluvial & Navegación', desc: 'Recorrido por la ribera del Río Valdivia observando los lobos marinos.' }
      ]
    },
    dia4: {
      title: '4to día, Full Day Tours Panguipulli - Pto. Fuy',
      tagline: 'La Ruta de los Siete Lagos',
      description: 'Tour guiado a la aventura por La Araucanía en la ciudad de los lagos incluye 1 salida Full Day hacia Panguipulli, Reserva Biológica Huilo Huilo, Puerto Fuy, esta aventura incluye entrada a Parque Huilo Huilo (Pack Colibrí) y Barcaza Puerto Fuy – Puerto Pirehueico).',
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
      description: 'Salida en embarcación al lago Villarrica desde Playa Linda o Playa Molco en lancha para 6 personas, donde realizaremos actividades de entretención náutica en arrastrable (Saca Chu) para 2 personas, disfrutar de SUP por 2 horas y disfrutar de una forma diferente del lago.',
      image: fotoDeporteLago,
      highlights: [
        { num: 1, title: 'Paseo en Lancha Exclusiva', desc: 'Navegación en lancha para un grupo reducido de 6 aventureros.' },
        { num: 2, title: 'Arrastrable "Saca Chu"', desc: 'Diversión y adrenalina pura para 2 personas desafiando las olas del lago.' },
        { num: 3, title: 'Stand Up Paddle (SUP)', desc: '2 horas de navegación tranquila remando de pie a orillas del lago.' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#0f2537] font-sans antialiased selection:bg-primary selection:text-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-primary-medium/30 transition-all shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logoHeader}
              alt="Molco Aventura Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="font-display font-extrabold text-sm text-primary-dark hover:text-primary transition">Inicio</a>
              <a href="#conocenos" className="font-display font-extrabold text-sm text-primary-dark hover:text-primary transition">Conócenos</a>
              <a href="#servicios" className="font-display font-extrabold text-sm text-primary-dark hover:text-primary transition">Servicios</a>
              <a href="#itinerario" className="font-display font-extrabold text-sm text-primary-dark hover:text-primary transition">Itinerario</a>
              <a href="#tarifas" className="font-display font-extrabold text-sm text-primary-dark hover:text-primary transition">Tarifas</a>
              <a href="#actividades" className="font-display font-extrabold text-sm text-primary-dark hover:text-primary transition">Actividades</a>
              <a
                href="https://wa.me/56929471838"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-extrabold text-sm border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-full transition shadow-md"
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
        className="relative h-[85vh] sm:h-[90vh] flex items-center overflow-hidden"
      >
        {/* Slides Background */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${idx === currentSlide ? 'scale-105' : 'scale-100'
                }`}
            />
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 mt-12 flex justify-start">
          <div className="max-w-2xl bg-[#0f2537]/50 backdrop-blur-md border border-white/10 p-8 sm:p-12 rounded-3xl shadow-2xl">
            {/* Slide Text Content with dynamic key to trigger animation on change */}
            <div key={currentSlide} className="animate-fade-in-up duration-500">
              <span className="inline-flex items-center gap-1.5 text-white uppercase font-display font-extrabold text-xs tracking-widest mb-4 bg-primary px-4 py-1.5 rounded-full max-w-max shadow-md">
                {slides[currentSlide].tag}
              </span>

              <img
                src={logoMainHero}
                alt="Molco Aventura"
                className="max-w-[280px] sm:max-w-[460px] w-full h-auto object-contain mb-6 drop-shadow-md brightness-110"
              />

              <h1 className="text-3xl sm:text-5xl font-display font-black text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>

              <p className="text-white/95 text-base sm:text-lg font-semibold mb-8 leading-relaxed drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/56929471838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-secondary hover:bg-secondary-hover text-white font-display font-extrabold px-8 py-4 rounded-full shadow-lg shadow-secondary/30 hover:scale-[1.02] transition"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2.25c-5.306 0-9.695 4.384-9.695 9.696 0 1.954.586 3.778 1.597 5.31l-1.047 3.824 3.93-1.03a9.625 9.625 0 0 0 5.215 1.51c5.307 0 9.696-4.388 9.696-9.697 0-5.312-4.389-9.695-9.696-9.695zm5.666 13.729c-.244.686-1.21 1.249-1.66 1.3-1.2.137-2.735-.37-4.004-1.39-1.272-1.023-2.072-2.316-2.529-3.238-.456-.922-.446-1.572.01-2.03.354-.356.467-.442.627-.66.16-.217.12-.403.04-.59-.08-.186-.627-1.512-.86-2.068-.226-.54-.46-.467-.627-.476l-.534-.01c-.187 0-.494.07-.75.353-.258.283-.984.965-.984 2.353s1.008 2.73 1.15 2.923c.14.193 1.986 3.033 4.81 4.25.672.29 1.197.463 1.606.593.675.215 1.289.185 1.774.113.54-.08 1.66-.68 1.895-1.336.236-.656.236-1.22.166-1.336-.07-.116-.258-.186-.54-.326l-2.55-1.258c-.282-.14-.488-.113-.695.196l-.888 1.144c-.162.21-.326.236-.607.095-.28-.14-1.185-.436-2.257-1.393-.834-.744-1.397-1.662-1.56-1.943-.162-.28-.016-.432.124-.572.126-.126.28-.327.42-.49.14-.163.187-.28.28-.466.094-.186.047-.35-.023-.49-.07-.14-.627-1.512-.86-2.068z" />
                </svg>
                Reserva tu Aventura
              </a>
              <a
                href="#itinerario"
                className="inline-flex items-center justify-center border-2 border-white text-white font-display font-extrabold px-8 py-4 rounded-full hover:bg-white hover:text-primary-dark transition shadow-md"
              >
                Ver Itinerarios
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:scale-105 transition cursor-pointer"
          aria-label="Diapositiva anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 hover:scale-105 transition cursor-pointer"
          aria-label="Diapositiva siguiente"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentSlide ? 'bg-secondary w-8' : 'bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Ir a la diapositiva ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Conócenos Section */}
      <section id="conocenos" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary-dark">
            Nuestra Historia y Ubicación
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-lg">
            <p className="text-primary-dark font-semibold border-l-4 border-primary pl-4 py-2 italic bg-primary-light rounded-r leading-relaxed">
              "Molco Aventura nace el año 2024 como un sueño y una idea para disfrutar, hoy 2026 iniciamos nuestras primeras experiencias como una empresa Tour Operador con experiencias vividas en estos años de viajes familiares, con experiencias en la hermosa Araucanía en la región de los Lagos y Región de Los Ríos, con los lugares más hermosos de su naturaleza, con sus imponentes volcanes, Lagos, Ríos e incomparable naturaleza nativa en nuestro querido Chile."
            </p>
            <div className="bg-white p-8 rounded-2xl border border-primary-medium/20 shadow-md">
              <h3 className="text-xl font-display font-bold text-primary mb-3 font-semibold">Ubicación Estratégica</h3>
              <p className="text-[#334e68] leading-relaxed">
                "Molco Aventura estará ubicado a 15 minutos de Villarrica y Pucón, donde podremos disfrutar de la naturaleza nativa, lagos, ríos, senderos, hermosas playas a orillas del lago Villarrica – Pucón, capital del Turismo Aventura donde podrás disfrutar de una rica gastronomía, entretención y visitar hermosos paisajes desde Villarrica, Pucón hasta Panguipulli en la ruta de los siete lagos."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl border border-primary-medium/20 shadow-md">
              <h4 className="font-display font-bold text-primary-dark mb-3">Ciudades que Visitaremos</h4>
              <div className="flex flex-wrap gap-2">
                {['Villarrica', 'Pucón', 'Panguipulli', 'Valdivia'].map((city) => (
                  <span key={city} className="bg-primary text-white border border-primary-hover px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">{city}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-secondary-light shadow-md">
              <h4 className="font-display font-bold text-secondary-dark mb-3">Atractivos Naturales (Bosques & Lagos)</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Lago Villarrica', 'Lago Caburgua', 'Reserva Biológica Huilo Huilo',
                  'Puerto Fuy', 'Puerto Pirehueico', 'Niebla', 'Río Valdivia'
                ].map((attract) => (
                  <span key={attract} className="bg-secondary-light text-secondary-dark border border-secondary/20 px-3.5 py-1.5 rounded-full text-sm font-semibold">{attract}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map / Routes representation */}
        <div className="bg-white rounded-3xl p-8 border border-primary-medium/20 shadow-lg mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-display font-bold text-primary-dark mb-4">Ruta Geográfica de Aventura</h3>
            <p className="text-[#334e68] leading-relaxed">
              Uniendo los puntos más hermosos del sur andino y fluvial. Desde nuestra base logística rodeada de bosques y a los pies del volcán, recorremos los lagos templados, los ríos navegables y la costa del Océano Pacífico.
            </p>
          </div>
          <div className="bg-primary-light border border-primary-medium/20 rounded-2xl p-4 flex items-center justify-center min-h-[250px] shadow-inner">
            <svg className="w-full h-full max-w-[400px]" viewBox="0 0 400 200">
              <path d="M 50,150 Q 150,50 250,160 T 350,80" fill="none" stroke="var(--primary)" strokeWidth="6" strokeDasharray="10 5" style={{ strokeOpacity: 0.15 }} />
              <path d="M 50,150 Q 150,50 250,160 T 350,80" fill="none" stroke="var(--primary)" strokeWidth="3" />

              <circle cx="50" cy="150" r="8" fill="var(--secondary)" />
              <text x="50" y="130" fill="var(--primary-dark)" fontSize="11" textAnchor="middle" className="font-bold">Valdivia</text>

              <circle cx="150" cy="85" r="8" fill="var(--primary)" />
              <text x="150" y="65" fill="var(--primary-dark)" fontSize="11" textAnchor="middle" className="font-bold">Panguipulli</text>

              <circle cx="260" cy="155" r="8" fill="var(--primary)" />
              <text x="260" y="180" fill="var(--primary-dark)" fontSize="11" textAnchor="middle" className="font-bold">Huilo Huilo</text>

              <circle cx="340" cy="85" r="9" fill="var(--secondary)" />
              <text x="340" y="65" fill="var(--primary-dark)" fontSize="11" textAnchor="middle" className="font-bold">Base (Villarrica/Pucón)</text>
            </svg>
          </div>
        </div>

        {/* Galería dinámica */}
        <div className="mt-16">
          <h3 className="text-xl font-display font-bold text-primary-dark mb-6">Galería de Experiencias (Fotos y Videos)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Volcán Ruka Pillañ', url: fotoVolcanVillarrica },
              { title: 'Niebla y Ríos', url: fotoNiebla },
              { title: 'Reserva Huilo Huilo', url: fotoHuiloHuilo },
              { title: 'Lagos y Deportes', url: fotoMotoAgua }
            ].map((img, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl transition">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2537]/85 via-transparent to-transparent flex items-end p-4">
                  <span className="font-display font-bold text-white text-sm">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 bg-primary-light border-y border-primary-medium/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary-dark">
              Turismo en La Araucanía | Región de los Lagos – Región de Los Ríos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Camping o Refugio o Cabaña', desc: 'Diversas opciones de descanso en Camping Aldea Molco rodeado de verdes bosques nativos.', icon: '⛺', accent: 'border-secondary-light text-secondary bg-white hover:border-secondary shadow-md' },
              { title: 'Tours incluidos', desc: 'Viajes organizados full day a los principales centros de atracción fluvial y cordillerana.', icon: '🗺️', accent: 'border-primary-medium/50 text-primary bg-white hover:border-primary shadow-md' },
              { title: 'Deportes Náuticos', desc: 'Navegación veloz y recreativa en lancha, SUP y arrastrables sobre el Lago Villarrica.', icon: '🚤', accent: 'border-primary-medium/50 text-primary bg-white hover:border-primary shadow-md' }
            ].map((p, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${p.accent} hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left`}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-display font-bold mb-2">{p.title}</h3>
                <p className="text-slate-700 font-medium">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-primary-medium/20 bg-white shadow-xl">
            <div
              className="min-h-[350px] bg-cover bg-center"
              style={{ backgroundImage: `url(${fotoCamping})` }}
            />
            <div className="p-8 sm:p-12 flex flex-col justify-center bg-white">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-6">
                Camping Aldea Molco
              </h3>
              <p className="text-slate-700 leading-relaxed font-medium">
                Estadía 6 noches, desayuno campestre en hermosa naturaleza nativa, rodeado de verdes bosques a los pies del volcán Villarrica (en mapudungun Ruka Pillañ), espacios para disfrutar en cómodas carpas para 4 personas, refugios para 3 personas o cabañas para 5 personas según su elección, contamos con servicios de cuidado personal (baños privados, duchas con agua caliente) y con excelentes comodidades en su lugar de descanso. Podrás disfrutar de baños relajantes en tinajas calientes de aguas termales de deshielos que descienden desde el majestuoso volcán y además podrán recorrer el sendero donde disfrutarán de un pozón natural al interior de Aldea Molco con su riachuelo natural que cruza el Camping Aldea Molco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerario Section */}
      <section id="itinerario" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <span className="text-primary uppercase font-display font-extrabold text-sm tracking-widest block mb-2">
            Cronograma del Tour
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900">
            Itinerario Full Day (3 Días Incluidos)
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary-medium/20 shadow-xl">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-start gap-2 mb-10 bg-slate-100 p-1.5 rounded-full max-w-max mr-auto border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('dia2')}
              className={`px-6 py-2.5 rounded-full font-display font-bold text-sm transition ${activeTab === 'dia2' ? 'bg-primary text-white shadow-md' : 'text-primary-dark hover:text-primary'}`}
            >
              2do día, Full Day Tours Valdivia
            </button>
            <button
              onClick={() => setActiveTab('dia4')}
              className={`px-6 py-2.5 rounded-full font-display font-bold text-sm transition ${activeTab === 'dia4' ? 'bg-primary text-white shadow-md' : 'text-primary-dark hover:text-primary'}`}
            >
              4to día, Full Day Tours Panguipulli - Pto. Fuy
            </button>
            <button
              onClick={() => setActiveTab('dia5')}
              className={`px-6 py-2.5 rounded-full font-display font-bold text-sm transition ${activeTab === 'dia5' ? 'bg-primary text-white shadow-md' : 'text-primary-dark hover:text-primary'}`}
            >
              5to día, Full Day Deporte Náutico
            </button>
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0f2537] mb-2">
                {itineraryData[activeTab].title}
              </h3>
              <div className="text-sm font-bold text-secondary tracking-wider uppercase mb-6">
                {itineraryData[activeTab].tagline}
              </div>
              <p className="text-slate-700 text-base sm:text-lg mb-8 leading-relaxed font-medium">
                "{itineraryData[activeTab].description}"
              </p>

              <div className="space-y-4">
                {itineraryData[activeTab].highlights.map((hl) => (
                  <div key={hl.num} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center shrink-0">
                      {hl.num}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-primary-dark">{hl.title}</h4>
                      <p className="text-sm text-slate-600 font-medium">{hl.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 h-[350px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src={itineraryData[activeTab].image}
                alt={itineraryData[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores / Tarifas Section */}
      <section id="tarifas" className="py-24 bg-primary-light/50 border-t border-primary-medium/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <span className="text-primary uppercase font-display font-extrabold text-sm tracking-widest block mb-2">
              Opciones de Hospedaje
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary-dark">
              Elige tu Hospedaje (6 Noches de Aventura)
            </h2>
            <p className="text-[#1e3a52] max-w-lg mr-auto mt-4 text-sm font-medium">
              Todos los paquetes incluyen desayuno campestre, tinajas termales y el programa de tours completos del itinerario de 3 días.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Card 1: Camping */}
            <div className="bg-white rounded-2xl p-8 border border-primary-medium/20 shadow-md flex flex-col text-left relative hover:shadow-xl transition">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2">Rústico y Cercano</span>
              <h3 className="text-2xl font-display font-bold text-primary-dark mb-2">Camping 6 noches</h3>
              <p className="text-sm text-slate-600 min-h-[50px] mb-4 font-medium">
                Camping: Carpa para 4 personas, baño privado, (saco de dormir es responsabilidad de cada persona).
              </p>

              <div className="border-y border-slate-100 py-6 mb-6 flex flex-col items-start">
                <span className="text-secondary font-display font-black text-xl tracking-wide uppercase">Consultar Precios</span>
                <span className="text-slate-500 text-xs mt-1 font-semibold">Tarifas personalizadas según temporada</span>
              </div>

              <a
                href="https://wa.me/56929471838?text=Hola,%20me%20interesa%20consultar%20precios%20y%20disponibilidad%20para%20la%20opcion%20Camping%206%20noches"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-display font-bold shadow-md shadow-primary/10 transition block text-center"
              >
                Consultar Tarifas
              </a>
            </div>

            {/* Card 2: Refugio */}
            <div className="bg-white rounded-2xl p-8 border border-primary-medium/20 shadow-md flex flex-col text-left relative hover:shadow-xl transition">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2">Cómodo & Natural</span>
              <h3 className="text-2xl font-display font-bold text-primary-dark mb-2">Refugio 6 noches</h3>
              <p className="text-sm text-slate-600 min-h-[50px] mb-4 font-medium">
                Refugio: Espacio para 3 personas equipado.
              </p>

              <div className="border-y border-slate-100 py-6 mb-6 flex flex-col items-start">
                <span className="text-secondary font-display font-black text-xl tracking-wide uppercase">Consultar Precios</span>
                <span className="text-slate-500 text-xs mt-1 font-semibold">Tarifas personalizadas según temporada</span>
              </div>

              <a
                href="https://wa.me/56929471838?text=Hola,%20me%20interesa%20consultar%20precios%20y%20disponibilidad%20para%20la%20opcion%20Refugio%206%20noches"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-primary hover:bg-primary-hover text-white rounded-full font-display font-bold shadow-md shadow-primary/10 transition block text-center"
              >
                Consultar Tarifas
              </a>
            </div>

            {/* Card 3: Cabaña (Destacada) */}
            <div className="bg-white rounded-2xl p-8 border-2 border-primary flex flex-col text-left relative shadow-2xl transform md:scale-105">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-0.5 rounded-full text-xs font-display font-bold uppercase tracking-wider">
                Recomendada
              </div>
              <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2">Máximo Confort</span>
              <h3 className="text-2xl font-display font-bold text-primary-dark mb-2">Cabaña 6 noches</h3>
              <p className="text-sm text-slate-600 min-h-[50px] mb-4 font-medium">
                Cabaña: Departamento para 4 o 5 personas equipado.
              </p>

              <div className="border-y border-slate-100 py-6 mb-6 flex flex-col items-start">
                <span className="text-secondary font-display font-black text-xl tracking-wide uppercase">Consultar Precios</span>
                <span className="text-slate-500 text-xs mt-1 font-semibold">Tarifas personalizadas según temporada</span>
              </div>

              <a
                href="https://wa.me/56929471838?text=Hola,%20me%20interesa%20consultar%20precios%20y%20disponibilidad%20para%20la%20opcion%20Cabana%206%20noches"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-secondary hover:bg-secondary-hover text-white rounded-full font-display font-bold shadow-md shadow-secondary/20 transition block text-center"
              >
                Consultar Tarifas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Actividades de Turismo Aventura Section */}
      <section id="actividades" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-primary-medium/20">
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary-dark">
            Actividades de Turismo Aventura
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mr-auto font-medium">
            Completa tu viaje con las mejores experiencias y tours adicionales en el sur de Chile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Termas */}
          <div className="bg-white rounded-2xl overflow-hidden border border-primary-medium/20 shadow-md hover:shadow-xl transition duration-300 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src={fotoTermas}
                alt="Termas en el Sur de Chile"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2 block">Relajación & Bienestar</span>
                <h3 className="text-xl font-display font-bold text-primary-dark mb-3">Termas</h3>
                <p className="text-sm text-slate-600 mb-4 font-medium">
                  Parque Termal Botánico – Termas Huife – Termas Pucón Indómito. Disfruta de la calidez de las termas naturales en entornos boscosos únicos.
                </p>
              </div>
              <a
                href="https://wa.me/56929471838?text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20las%20Termas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover font-display font-bold text-sm inline-flex items-center gap-1 group mt-4"
              >
                Consultar Actividad
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Rafting */}
          <div className="bg-white rounded-2xl overflow-hidden border border-primary-medium/20 shadow-md hover:shadow-xl transition duration-300 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800&auto=format&fit=crop"
                alt="Rafting en Río Trancura"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2 block">Adrenalina en el Río</span>
                <h3 className="text-xl font-display font-bold text-primary-dark mb-3">Rafting</h3>
                <p className="text-sm text-slate-600 mb-4 font-medium">
                  Trancura Alto – Trancura Bajo. Desafía la corriente de uno de los ríos más emblemáticos de la zona con guías expertos de seguridad.
                </p>
              </div>
              <a
                href="https://wa.me/56929471838?text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20el%20Rafting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover font-display font-bold text-sm inline-flex items-center gap-1 group mt-4"
              >
                Consultar Actividad
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: Centros de Esquí */}
          <div className="bg-white rounded-2xl overflow-hidden border border-primary-medium/20 shadow-md hover:shadow-xl transition duration-300 flex flex-col">
            <div className="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=800&auto=format&fit=crop"
                alt="Centros de Esquí en Chile"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2 block">Nieve & Cordillera</span>
                <h3 className="text-xl font-display font-bold text-primary-dark mb-3">Centros de Esqui en Chile</h3>
                <p className="text-sm text-slate-600 mb-4 font-medium">
                  Pillan – Corralco – Nevados de Chillan – Valle Nevado – Farellones – El Colorado & La Parva. Disfruta de la nieve y los mejores deportes invernales.
                </p>
              </div>
              <a
                href="https://wa.me/56929471838?text=Hola,%20me%20gustaria%20saber%20mas%20sobre%20los%20Centros%20de%20Esqui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover font-display font-bold text-sm inline-flex items-center gap-1 group mt-4"
              >
                Consultar Actividad
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contacto" className="bg-[#0f2537] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="mb-6 bg-white/10 p-3 rounded-lg max-w-max border border-white/5">
                <img
                  src={logoFooter}
                  alt="Molco Aventura Logo"
                  className="max-h-20 w-auto object-contain rounded"
                />
              </div>
              <p className="text-sm text-sky-200/80 leading-relaxed">
                Una experiencia de turismo familiar nacida en el sur de Chile en 2024 para conquistar tus sentidos en 2026. Conéctate con lo natural de forma segura y cercana.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-white text-lg mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
                Canales Directos
              </h3>
              <ul className="space-y-4 text-sm text-sky-200/70">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">W:</span>
                  <a href="https://wa.me/56929471838" target="_blank" rel="noreferrer" className="hover:text-white transition">+56 9 2947 1838</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">E:</span>
                  <a href="mailto:contacto@molcoaventura.cl" className="hover:text-white transition">contacto@molcoaventura.cl</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">URL:</span>
                  <a href="http://www.molcoaventura.cl" target="_blank" rel="noreferrer" className="hover:text-white transition">www.molcoaventura.cl</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-white text-lg mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-secondary">
                Ubicaciones
              </h3>
              <ul className="space-y-4 text-sm text-sky-200/70">
                <li>
                  <strong className="text-white block mb-1">Oficina Comercial:</strong>
                  Nueva Providencia 1881, Oficina 1618, Providencia, Región Metropolitana de Santiago.
                </li>
                <li>
                  <strong className="text-white block mb-1">Camping Aldea Molco:</strong>
                  Camino Villarrica – Pucón Km 12. Molco Alto Km 3,7 s/n, Comuna de Villarrica, Región de La Araucanía.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-medium/20 pt-8 text-left text-xs text-sky-200/50">
            <p>&copy; {new Date().getFullYear()} Molco Aventura. Todos los derechos reservados. Diseñado para la naturaleza y aventura de Chile.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
