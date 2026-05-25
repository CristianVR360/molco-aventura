import { useState } from 'react';
import logoFull from './assets/logos/full.png';
import logoLetters from './assets/logos/solo-letras.png';
import logoHero from './assets/logos/molco-aventura-sinfondo.png';

function App() {
  const [activeTab, setActiveTab] = useState('dia2');

  const itineraryData = {
    dia2: {
      title: 'Full Day Tours Valdivia',
      tagline: 'Aventura en la Ciudad de los Ríos',
      description: 'Tour guiado a la aventura de Valdivia en la ciudad de los Ríos. Incluye 1 salida Full Day a Valdivia, Niebla (visita Fuerte Niebla), Cervecería Kunstmann, Centro de Valdivia (Feria Fluvial de Valdivia, Centro de Valdivia), Río Valdivia.',
      image: 'https://images.unsplash.com/photo-1599818817757-d64e52514bc2?q=80&w=600&auto=format&fit=crop',
      highlights: [
        { num: 1, title: 'Fuerte de Niebla', desc: 'Visita guiada a las fortificaciones coloniales con vista al Océano Pacífico.' },
        { num: 2, title: 'Cervecería Kunstmann', desc: 'Degustación y almuerzo en la emblemática casa cervecera tradicional del sur.' },
        { num: 3, title: 'Feria Fluvial & Navegación', desc: 'Recorrido por la ribera del Río Valdivia observando los lobos marinos.' }
      ]
    },
    dia4: {
      title: 'Full Day Panguipulli - Pto. Fuy',
      tagline: 'La Ruta de los Siete Lagos',
      description: 'Tour guiado a la aventura por La Araucanía en la ciudad de los lagos. Incluye 1 salida Full Day hacia Panguipulli, Reserva Biológica Huilo Huilo, Puerto Fuy. Esta aventura incluye entrada a Parque Huilo Huilo (Pack Colibrí) y Barcaza Puerto Fuy – Puerto Pirehueico.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop',
      highlights: [
        { num: 1, title: 'Reserva Huilo Huilo (Pack Colibrí)', desc: 'Sendero interactivo entre caídas de agua y la selva patagónica húmeda.' },
        { num: 2, title: 'Puerto Fuy', desc: 'Puerto de montaña con hermosas vistas al imponente lago Pirehueico.' },
        { num: 3, title: 'Barcaza Pirehueico', desc: 'Cruzar en barcaza por el lago Pirehueico hacia Puerto Pirehueico en una travesía mágica.' }
      ]
    },
    dia5: {
      title: 'Full Day Deporte Náutico',
      tagline: 'Adrenalina en el Lago Villarrica',
      description: 'Salida en embarcación al lago Villarrica desde Playa Linda o Playa Molco en lancha para 6 personas, donde realizaremos actividades de entretención náutica en arrastrable (Saca Chu) para 2 personas, disfrutar de SUP por 2 horas y disfrutar de una forma diferente del lago.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop',
      highlights: [
        { num: 1, title: 'Paseo en Lancha Exclusiva', desc: 'Navegación en lancha para un grupo reducido de 6 aventureros.' },
        { num: 2, title: 'Arrastrable "Saca Chu"', desc: 'Diversión y adrenalina pura para 2 personas desafiando las olas del lago.' },
        { num: 3, title: 'Stand Up Paddle (SUP)', desc: '2 horas de navegación tranquila remando de pie a orillas del lago.' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-[#0f2537] font-sans antialiased selection:bg-sky-600 selection:text-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 transition-all shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logoLetters} 
              alt="Molco Aventura Logo" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="font-display font-extrabold text-sm text-sky-900 hover:text-sky-600 transition">Inicio</a>
            <a href="#conocenos" className="font-display font-extrabold text-sm text-sky-900 hover:text-sky-600 transition">Conócenos</a>
            <a href="#servicios" className="font-display font-extrabold text-sm text-sky-900 hover:text-sky-600 transition">Servicios</a>
            <a href="#itinerario" className="font-display font-extrabold text-sm text-sky-900 hover:text-sky-600 transition">Itinerario</a>
            <a href="#tarifas" className="font-display font-extrabold text-sm text-sky-900 hover:text-sky-600 transition">Tarifas</a>
            <a 
              href="https://wa.me/56986128398" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-display font-extrabold text-sm border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-5 py-2 rounded-full transition shadow-md"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="inicio" 
        className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
      >
        {/* Background Video Loop */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source 
            src="https://player.vimeo.com/external/435674703.sd.mp4?s=7f3a1ff34d5b94e33cf74d28cf1f8cd536e2f183&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Dark Forest Overlay */}
        <div className="absolute inset-0 bg-[#040e09]/75 z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="max-w-2xl">
            <span className="text-white uppercase font-display font-extrabold text-xs tracking-widest block mb-3 bg-sky-600 px-4 py-1.5 rounded-full max-w-max shadow-md">
              🌊 Naturaleza, Lagos & Volcanes
            </span>
            <img 
              src={logoHero} 
              alt="Molco Aventura" 
              className="max-w-[280px] sm:max-w-[420px] h-auto object-contain mb-6 drop-shadow-md brightness-110" 
            />
            <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#ff7a47] mb-6">
              Región de la Araucanía – Región de los Ríos
            </div>
            <p className="text-sky-100/90 text-lg font-semibold mb-8 leading-relaxed">
              Nace de un sueño familiar para conectarte con paisajes incomparables, majestuosos volcanes, lagos mágicos y bosques nativos de nuestro querido Chile.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/56986128398" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-[#ea580c] hover:bg-orange-600 text-white font-display font-extrabold px-8 py-4 rounded-full shadow-lg shadow-orange-600/30 hover:scale-[1.02] transition"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2.25c-5.306 0-9.695 4.384-9.695 9.696 0 1.954.586 3.778 1.597 5.31l-1.047 3.824 3.93-1.03a9.625 9.625 0 0 0 5.215 1.51c5.307 0 9.696-4.388 9.696-9.697 0-5.312-4.389-9.695-9.696-9.695zm5.666 13.729c-.244.686-1.21 1.249-1.66 1.3-1.2.137-2.735-.37-4.004-1.39-1.272-1.023-2.072-2.316-2.529-3.238-.456-.922-.446-1.572.01-2.03.354-.356.467-.442.627-.66.16-.217.12-.403.04-.59-.08-.186-.627-1.512-.86-2.068-.226-.54-.46-.467-.627-.476l-.534-.01c-.187 0-.494.07-.75.353-.258.283-.984.965-.984 2.353s1.008 2.73 1.15 2.923c.14.193 1.986 3.033 4.81 4.25.672.29 1.197.463 1.606.593.675.215 1.289.185 1.774.113.54-.08 1.66-.68 1.895-1.336.236-.656.236-1.22.166-1.336-.07-.116-.258-.186-.54-.326l-2.55-1.258c-.282-.14-.488-.113-.695.196l-.888 1.144c-.162.21-.326.236-.607.095-.28-.14-1.185-.436-2.257-1.393-.834-.744-1.397-1.662-1.56-1.943-.162-.28-.016-.432.124-.572.126-.126.28-.327.42-.49.14-.163.187-.28.28-.466.094-.186.047-.35-.023-.49-.07-.14-.627-1.512-.86-2.068z"/>
                </svg>
                Reserva tu Aventura
              </a>
              <a 
                href="#itinerario" 
                className="inline-flex items-center justify-center border-2 border-white text-white font-display font-extrabold px-8 py-4 rounded-full hover:bg-white hover:text-sky-950 transition shadow-md"
              >
                Ver Itinerarios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conócenos Section */}
      <section id="conocenos" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 uppercase font-display font-extrabold text-sm tracking-widest block mb-2">
            Nuestra Esencia
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-sky-950">
            Nuestra Historia y Ubicación
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-lg">
            <p className="text-sky-950 font-semibold border-l-4 border-sky-600 pl-4 py-2 italic bg-sky-50 rounded-r leading-relaxed">
              "Molco Aventura nace el año 2024 como un sueño y una idea para disfrutar, hoy 2026 iniciamos nuestras primeras experiencias como una empresa Tour Operador con experiencias vividas en estos años de viajes familiares, con experiencias en la hermosa Araucanía en la región de los Lagos y Región de Los Ríos más hermosos en su naturaleza, con sus imponentes volcanes, Lagos, Ríos e incomparable naturaleza nativa en nuestro querido Chile."
            </p>
            <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-md">
              <h3 className="text-xl font-display font-bold text-sky-700 mb-3 font-semibold">Ubicación Estratégica</h3>
              <p className="text-[#334e68] leading-relaxed">
                "Molco Aventura estará ubicado a 15 minutos de Villarrica y Pucón, donde podremos disfrutar de la naturaleza nativa, lagos, ríos, senderos, hermosas playas a orillas del lago Villarrica – Pucón, donde podrás disfrutar de una rica gastronomía, entretención y visitar hermosos paisajes en desde Pucón hasta Panguipulli en la ruta de los siete lagos."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl border border-sky-100 shadow-md">
              <h4 className="font-display font-bold text-sky-900 mb-3">Ciudades que Visitaremos</h4>
              <div className="flex flex-wrap gap-2">
                {['Villarrica', 'Pucón', 'Panguipulli', 'Valdivia'].map((city) => (
                  <span key={city} className="bg-sky-500 text-white border border-sky-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">{city}</span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-md">
              <h4 className="font-display font-bold text-emerald-900 mb-3">Atractivos Naturales (Bosques & Lagos)</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Lago Villarrica', 'Lago Caburgua', 'Reserva Biológica Huilo Huilo',
                  'Puerto Fuy', 'Puerto Pirehueico', 'Niebla', 'Río Valdivia'
                ].map((attract) => (
                  <span key={attract} className="bg-emerald-50 text-emerald-800 border border-emerald-200/50 px-3.5 py-1.5 rounded-full text-sm font-semibold">{attract}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map / Routes representation */}
        <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-lg mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-display font-bold text-sky-950 mb-4">Ruta Geográfica de Aventura</h3>
            <p className="text-[#334e68] leading-relaxed">
              Uniendo los puntos más hermosos del sur andino y fluvial. Desde nuestra base logística rodeada de bosques y a los pies del volcán, recorremos los lagos templados, los ríos navegables y la costa del Océano Pacífico.
            </p>
          </div>
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 flex items-center justify-center min-h-[250px] shadow-inner">
            <svg className="w-full h-full max-w-[400px]" viewBox="0 0 400 200">
              <path d="M 50,150 Q 150,50 250,160 T 350,80" fill="none" stroke="rgba(2, 132, 199, 0.1)" strokeWidth="6" strokeDasharray="10 5" />
              <path d="M 50,150 Q 150,50 250,160 T 350,80" fill="none" stroke="#0284c7" strokeWidth="3" />
              
              <circle cx="50" cy="150" r="8" fill="#ea580c" />
              <text x="50" y="130" fill="#0f2537" fontSize="11" textAnchor="middle" className="font-bold">Valdivia</text>
              
              <circle cx="150" cy="85" r="8" fill="#0284c7" />
              <text x="150" y="65" fill="#0f2537" fontSize="11" textAnchor="middle" className="font-bold">Panguipulli</text>
              
              <circle cx="260" cy="155" r="8" fill="#0284c7" />
              <text x="260" y="180" fill="#0f2537" fontSize="11" textAnchor="middle" className="font-bold">Huilo Huilo</text>

              <circle cx="340" cy="85" r="9" fill="#ea580c" />
              <text x="340" y="65" fill="#0f2537" fontSize="11" textAnchor="middle" className="font-bold">Base (Villarrica/Pucón)</text>
            </svg>
          </div>
        </div>

        {/* Galería dinámica */}
        <div className="mt-16">
          <h3 className="text-xl font-display font-bold text-sky-950 mb-6">Galería de Experiencias (Fotos y Videos)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Volcán Ruka Pillañ', url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop' },
              { title: 'Niebla y Ríos', url: 'https://images.unsplash.com/photo-1508873696983-2df519f0397e?q=80&w=600&auto=format&fit=crop' },
              { title: 'Reserva Huilo Huilo', url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop' },
              { title: 'Lagos y Deportes', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop' }
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
      <section id="servicios" className="py-24 bg-sky-50 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sky-600 uppercase font-display font-extrabold text-sm tracking-widest block mb-2">
              Pilares de Aventura
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-sky-950">
              Turismo en La Araucanía | Región de los Lagos – Región de Los Ríos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Camping, Refugio o Cabaña', desc: 'Diversas opciones de descanso en Camping Aldea Molco rodeado de verdes bosques nativos.', icon: '⛺', accent: 'border-emerald-200 text-emerald-700 bg-white hover:border-emerald-500 shadow-md' },
              { title: 'Tours Guiados Incluidos', desc: 'Viajes organizados full day a los principales centros de atracción fluvial y cordillerana.', icon: '🗺️', accent: 'border-sky-200 text-sky-700 bg-white hover:border-sky-500 shadow-md' },
              { title: 'Deportes Náuticos', desc: 'Navegación veloz y recreativa en lancha, SUP y arrastrables sobre el Lago Villarrica.', icon: '🚤', accent: 'border-cyan-200 text-cyan-700 bg-white hover:border-cyan-500 shadow-md' }
            ].map((p, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${p.accent} hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center`}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-display font-bold mb-2">{p.title}</h3>
                <p className="text-slate-700 font-medium">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-sky-100 bg-white shadow-xl">
            <div 
              className="min-h-[350px] bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="p-8 sm:p-12 flex flex-col justify-center bg-white">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-sky-700 mb-6">
                Camping Aldea Molco: Tu Refugio Base
              </h3>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                "Estadía 6 noches, desayuno campestre en hermosa naturaleza nativa, rodeado de verdes bosques a los pies del volcán Villarrica (en mapudungun Ruka Pillañ), espacios para disfrutar en cómodas carpas para 4 personas, refugios para 3 personas y cabañas para 5 personas, además de los servicios de cuidado personal (baños privados y duchas con agua caliente) y comodidades de su lugar de descanso."
              </p>
              <p className="text-slate-700 leading-relaxed border-t border-sky-100 pt-4 font-medium italic">
                "Disfrutar de baños relajantes en tinajas calientes en aguas termales que descienden desde el Ruka Pillañ y recorrer el sendero donde podrán disfrutar de un pozón natural que recorre Aldea Molco de sus aguas de deshielo natural."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerario Section */}
      <section id="itinerario" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 uppercase font-display font-extrabold text-sm tracking-widest block mb-2">
            Cronograma del Tour
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900">
            Itinerario Full Day (3 Días Incluidos)
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 bg-slate-100 p-1.5 rounded-full max-w-max mx-auto border border-slate-200 shadow-inner">
            <button 
              onClick={() => setActiveTab('dia2')} 
              className={`px-6 py-2.5 rounded-full font-display font-bold text-sm transition ${activeTab === 'dia2' ? 'bg-sky-600 text-white shadow-md' : 'text-sky-900 hover:text-sky-600'}`}
            >
              2do Día: Valdivia
            </button>
            <button 
              onClick={() => setActiveTab('dia4')} 
              className={`px-6 py-2.5 rounded-full font-display font-bold text-sm transition ${activeTab === 'dia4' ? 'bg-sky-600 text-white shadow-md' : 'text-sky-900 hover:text-sky-600'}`}
            >
              4to Día: Panguipulli - Pto. Fuy
            </button>
            <button 
              onClick={() => setActiveTab('dia5')} 
              className={`px-6 py-2.5 rounded-full font-display font-bold text-sm transition ${activeTab === 'dia5' ? 'bg-sky-600 text-white shadow-md' : 'text-sky-900 hover:text-sky-600'}`}
            >
              5to Día: Deporte Náutico
            </button>
          </div>

          {/* Active Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0f2537] mb-2">
                {itineraryData[activeTab].title}
              </h3>
              <div className="text-sm font-bold text-[#ea580c] tracking-wider uppercase mb-6">
                {itineraryData[activeTab].tagline}
              </div>
              <p className="text-slate-700 text-base sm:text-lg mb-8 leading-relaxed font-medium">
                "{itineraryData[activeTab].description}"
              </p>

              <div className="space-y-4">
                {itineraryData[activeTab].highlights.map((hl) => (
                  <div key={hl.num} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 text-[#ea580c] font-bold flex items-center justify-center shrink-0">
                      {hl.num}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sky-950">{hl.title}</h4>
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
      <section id="tarifas" className="py-24 bg-sky-50/50 border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#0284c7] uppercase font-display font-extrabold text-sm tracking-widest block mb-2">
              Elige tu Hospedaje
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-sky-950">
              Opciones de Hospedaje (6 Noches de Aventura)
            </h2>
            <p className="text-[#1e3a52] max-w-lg mx-auto mt-4 text-sm font-medium">
              Todos los paquetes incluyen desayuno campestre, tinajas termales y el programa de tours completos del itinerario de 3 días.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Card 1: Camping */}
            <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-md flex flex-col text-center relative hover:shadow-xl transition">
              <span className="text-xs uppercase tracking-widest text-[#ea580c] font-bold mb-2">Rústico y Cercano</span>
              <h3 className="text-2xl font-display font-bold text-sky-950 mb-2">Camping</h3>
              <p className="text-sm text-slate-600 min-h-[50px] mb-6 font-medium">
                Carpa para 4 personas, baño privado (saco de dormir es responsabilidad de cada persona).
              </p>
              
              <div className="border-y border-slate-100 py-6 mb-6">
                <span className="text-[#ea580c] font-display font-bold block text-base">Tarifas y disponibilidad personalizada</span>
              </div>

              <a 
                href="https://wa.me/56986128398?text=Hola,%20me%20interesa%20la%20opcion%20Camping" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-display font-bold shadow-md shadow-sky-600/10 transition block mb-4"
              >
                Reservar Camping
              </a>
              <span className="text-[10px] text-slate-500 bg-slate-100 py-1 px-3.5 rounded inline-block self-center">
                Valor referencial no confirmado
              </span>
            </div>

            {/* Card 2: Refugio */}
            <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-md flex flex-col text-center relative hover:shadow-xl transition">
              <span className="text-xs uppercase tracking-widest text-[#ea580c] font-bold mb-2">Cómodo & Natural</span>
              <h3 className="text-2xl font-display font-bold text-sky-950 mb-2">Refugio</h3>
              <p className="text-sm text-slate-600 min-h-[50px] mb-6 font-medium">
                Espacio para 3 personas equipado para tu descanso familiar patagónico.
              </p>
              
              <div className="border-y border-slate-100 py-6 mb-6">
                <span className="text-[#ea580c] font-display font-bold block text-base">Tarifas y disponibilidad personalizada</span>
              </div>

              <a 
                href="https://wa.me/56986128398?text=Hola,%20me%20interesa%20la%20opcion%20Refugio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-display font-bold shadow-md shadow-sky-600/10 transition block mb-4"
              >
                Reservar Refugio
              </a>
              <span className="text-[10px] text-slate-500 bg-slate-100 py-1 px-3.5 rounded inline-block self-center">
                Valor referencial no confirmado
              </span>
            </div>

            {/* Card 3: Cabaña (Destacada) */}
            <div className="bg-white rounded-2xl p-8 border-2 border-sky-600 flex flex-col text-center relative shadow-2xl transform md:scale-105">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-sky-600 text-white px-4 py-0.5 rounded-full text-xs font-display font-bold uppercase tracking-wider">
                Recomendada
              </div>
              <span className="text-xs uppercase tracking-widest text-[#ea580c] font-bold mb-2">Máximo Confort</span>
              <h3 className="text-2xl font-display font-bold text-sky-950 mb-2">Cabaña</h3>
              <p className="text-sm text-slate-600 min-h-[50px] mb-6 font-medium">
                Departamento familiar para 4 o 5 personas totalmente equipado con amenidades exclusivas.
              </p>
              
              <div className="border-y border-slate-100 py-6 mb-6">
                <span className="text-[#ea580c] font-display font-bold block text-base">Tarifas y disponibilidad personalizada</span>
              </div>

              <a 
                href="https://wa.me/56986128398?text=Hola,%20me%20interesa%20la%20opcion%20Cabana" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-display font-bold shadow-md shadow-orange-600/20 transition block mb-4"
              >
                Reservar Cabaña
              </a>
              <span className="text-[10px] text-sky-700 bg-sky-100 py-1 px-3.5 rounded inline-block self-center">
                Valor referencial no confirmado
              </span>
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
                  src={logoFull} 
                  alt="Molco Aventura Logo" 
                  className="max-h-20 w-auto object-contain rounded" 
                />
              </div>
              <p className="text-sm text-sky-200/80 leading-relaxed">
                Una experiencia de turismo familiar nacida en el sur de Chile en 2024 para conquistar tus sentidos en 2026. Conéctate con lo natural de forma segura y cercana.
              </p>
            </div>

            <div>
              <h3 className="font-display font-bold text-white text-lg mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-[#ea580c]">
                Canales Directos
              </h3>
              <ul className="space-y-4 text-sm text-sky-200/70">
                <li className="flex gap-3">
                  <span className="text-[#ea580c] font-bold">W:</span>
                  <a href="https://wa.me/56986128398" target="_blank" rel="noreferrer" className="hover:text-white transition">+56 9 8612 8398</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ea580c] font-bold">E:</span>
                  <a href="mailto:contacto@molcoaventura.cl" className="hover:text-white transition">contacto@contacto@molcoaventura.cl</a>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ea580c] font-bold">URL:</span>
                  <a href="http://www.molcoaventura.cl" target="_blank" rel="noreferrer" className="hover:text-white transition">www.molcoaventura.cl</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-white text-lg mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-[#ea580c]">
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

          <div className="border-t border-sky-900/60 pt-8 text-center text-xs text-sky-200/50">
            <p>&copy; {new Date().getFullYear()} Molco Aventura. Todos los derechos reservados. Diseñado para la naturaleza y aventura de Chile.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
