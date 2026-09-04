import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

// SVG Logos Imports
import logoPrincipalSvg from '../assets/logos/SVG/Logo principal fc.svg';
import logoHorizontalFcSvg from '../assets/logos/SVG/logo horizontal fc.svg';
import logoHorizontalBlancoSvg from '../assets/logos/SVG/Logo horizontal blanco.svg';
import faviconSvg from '../assets/logos/SVG/favicon.svg';

// PNG Logos Imports
import logoPrincipalPng from '../assets/logos/PNG/Logo principal fc.png';
import logoHorizontalFcPng from '../assets/logos/PNG/logo horizontal fc.png';
import logoHorizontalBlancoPng from '../assets/logos/PNG/Logo horizontal blanco.png';
import faviconPng from '../assets/logos/PNG/favicon.png';

export default function BrandKit({ onGoHome }) {
  const [copiedColor, setCopiedColor] = useState(null);

  const downloadAsset = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      // Fallback
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(label);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const logoAssets = [
    {
      id: 'principal-fc',
      title: 'Logo Principal (Full Color)',
      tagline: 'Versión Oficial Vertical',
      description: 'El emblema principal de Molco Aventura. Diseñado para cartelería, portadas, material impreso y piezas donde el isotipo y el logotipo tienen protagonismo central.',
      svgSrc: logoPrincipalSvg,
      pngSrc: logoPrincipalPng,
      svgFileName: 'molco-aventura-logo-principal.svg',
      pngFileName: 'molco-aventura-logo-principal.png',
      darkBg: false,
      badgeColor: 'bg-primary/10 text-primary border-primary/20',
      specs: 'Fondo transparente • Vector & Bitmap 300 DPI',
      usage: 'Recomendado sobre fondos blancos, claros o neutros.'
    },
    {
      id: 'horizontal-fc',
      title: 'Logo Horizontal (Full Color)',
      tagline: 'Versión Cabeceras & Banners',
      description: 'Adaptación apaisada ideal para barras de navegación web, encabezados de documentos, firmas de correo y aplicaciones con altura reducida.',
      svgSrc: logoHorizontalFcSvg,
      pngSrc: logoHorizontalFcPng,
      svgFileName: 'molco-aventura-logo-horizontal-color.svg',
      pngFileName: 'molco-aventura-logo-horizontal-color.png',
      darkBg: false,
      badgeColor: 'bg-primary/10 text-primary border-primary/20',
      specs: 'Fondo transparente • Proporción panorámica',
      usage: 'Uso preferente en navegación digital y papelería horizontal.'
    },
    {
      id: 'horizontal-blanco',
      title: 'Logo Horizontal (Blanco / Negativo)',
      tagline: 'Versión Fondos Oscuros & Fotos',
      description: 'Versión monocromática en blanco puro optimizada para colocarse sobre fotografías de aventura, videos de fondo o fondos oscuros asegurando máxima legibilidad.',
      svgSrc: logoHorizontalBlancoSvg,
      pngSrc: logoHorizontalBlancoPng,
      svgFileName: 'molco-aventura-logo-horizontal-blanco.svg',
      pngFileName: 'molco-aventura-logo-horizontal-blanco.png',
      darkBg: true,
      badgeColor: 'bg-secondary/15 text-secondary-dark border-secondary/20',
      specs: 'Fondo transparente • Monocromo blanco',
      usage: 'Obligatorio sobre fotografías con contraste o fondos oscuros.'
    },
    {
      id: 'favicon-simbolo',
      title: 'Isotipo / Símbolo & Favicon',
      tagline: 'Ícono de Marca',
      description: 'El símbolo distintivo con la iconografía del volcán, río y bosque nativo. Utilizado para favicons de navegadores, avatares de redes sociales y sellos gráficos.',
      svgSrc: faviconSvg,
      pngSrc: faviconPng,
      svgFileName: 'molco-aventura-isotipo-favicon.svg',
      pngFileName: 'molco-aventura-isotipo-favicon.png',
      darkBg: false,
      badgeColor: 'bg-primary/10 text-primary border-primary/20',
      specs: 'Fondo transparente • Relación 1:1',
      usage: 'Ideal para perfiles de Instagram/Facebook, apps y favicons.'
    }
  ];

  const brandColors = [
    { name: 'Azul Cordillera / Lago', hex: '#114C5F', role: 'Color Primario Principal', lightText: true },
    { name: 'Verde Bosque Nativo', hex: '#9EA925', role: 'Color Secundario / Acentos', lightText: true },
    { name: 'Noche Austral', hex: '#07212B', role: 'Fondos Oscuros & Tipografía', lightText: true },
    { name: 'Celeste Deshielo', hex: '#B6CCD4', role: 'Bordes & Detalles Medios', lightText: false },
    { name: 'Brisa de Montaña', hex: '#F1F6F8', role: 'Fondos Claros & Paneles', lightText: false },
    { name: 'Blanco Puro', hex: '#FFFFFF', role: 'Contraste & Fondo', lightText: false, border: true }
  ];

  return (
    <div className="min-h-screen bg-bg-site text-text-main font-sans antialiased selection:bg-primary selection:text-white relative">
      {/* Noise overlay texture */}
      <div className="noise-overlay" />

      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-card-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onGoHome ? onGoHome('/') : (window.location.href = '/')}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <img 
                src={logoHorizontalFcSvg} 
                alt="Molco Aventura Logo" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="hidden sm:inline-block pl-3 border-l border-card-border text-xs uppercase tracking-widest font-display font-extrabold text-text-muted">
                Brand Kit
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onGoHome ? onGoHome('/') : (window.location.href = '/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm bg-primary-light text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Volver al Inicio
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-primary-light/70 via-bg-site to-bg-site border-b border-card-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-primary uppercase font-display font-extrabold text-xs tracking-widest mb-3 bg-white px-3.5 py-1.5 rounded-full border border-primary/10 shadow-sm">
              🎨 Recursos Oficiales de Marca
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-primary-dark tracking-tight leading-tight mb-6">
              Kit de Identidad & Descarga de Logos
            </h1>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
              Bienvenido al repositorio oficial de recursos visuales de <strong>Molco Aventura</strong>. Aquí puedes descargar todas las versiones oficiales de nuestro logotipo en formato vectorial escalable (SVG) y alta resolución (PNG) con fondo transparente.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-text-muted bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-card-border shadow-sm">
              <span className="flex items-center gap-1.5 text-primary">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Archivos Vectoriales SVG (Escalables sin pérdida)
              </span>
              <span className="flex items-center gap-1.5 text-secondary-dark">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                PNG en Alta Definición con Transparencia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Logos Descargables */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary uppercase font-display font-extrabold text-xs tracking-wider block mb-2">
            Catálogo de Versiones
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary-dark tracking-tight">
            Logos Disponibles para Descarga
          </h2>
          <p className="text-text-muted max-w-xl mx-auto mt-3 text-sm">
            Selecciona el formato que necesitas según el tipo de soporte o fondo donde lo vayas a utilizar.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {logoAssets.map((asset, index) => (
            <ScrollReveal 
              key={asset.id} 
              delay={index * 100}
              className="bg-white rounded-3xl border border-card-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Preview Box */}
                <div 
                  className={`p-10 flex items-center justify-center min-h-[260px] relative overflow-hidden transition-all duration-300 ${
                    asset.darkBg 
                      ? 'bg-[#07212B]' 
                      : 'bg-[#f7fafb] border-b border-card-border'
                  }`}
                  style={{
                    backgroundImage: asset.darkBg 
                      ? 'radial-gradient(circle at center, #114c5f 0%, #07212b 100%)' 
                      : 'radial-gradient(#114c5f 0.75px, transparent 0.75px)',
                    backgroundSize: asset.darkBg ? 'cover' : '16px 16px',
                  }}
                >
                  <img 
                    src={asset.svgSrc} 
                    alt={asset.title} 
                    className="max-h-32 max-w-[85%] object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <span className={`absolute top-4 right-4 text-[11px] font-display font-extrabold px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${
                    asset.darkBg 
                      ? 'bg-white/10 text-white border-white/20' 
                      : 'bg-white text-text-muted border-card-border'
                  }`}>
                    {asset.darkBg ? '🌙 Fondo Oscuro' : '☀️ Fondo Claro'}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-secondary-dark">
                      {asset.tagline}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${asset.badgeColor}`}>
                      {asset.specs}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-extrabold text-primary-dark mb-3">
                    {asset.title}
                  </h3>
                  
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {asset.description}
                  </p>

                  <div className="bg-primary-light/50 border border-primary-medium/20 rounded-xl p-3 text-xs text-text-muted mb-6 flex items-start gap-2">
                    <span className="text-primary font-bold">💡 Uso:</span>
                    <span>{asset.usage}</span>
                  </div>
                </div>
              </div>

              {/* Download Buttons Area */}
              <div className="px-8 pb-8 pt-2 border-t border-slate-100 bg-slate-50/50 flex flex-wrap sm:flex-nowrap gap-3">
                <button
                  onClick={() => downloadAsset(asset.svgSrc, asset.svgFileName)}
                  className="w-full sm:w-1/2 py-3 px-4 bg-primary hover:bg-primary-hover active:scale-98 text-white rounded-xl font-display font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  title="Descargar versión SVG Vectorial"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.832V16.5M7.5 12L12 16.5m0 0L16.5 12M12 16.5V3" />
                  </svg>
                  Descargar .SVG (Vector)
                </button>

                <button
                  onClick={() => downloadAsset(asset.pngSrc, asset.pngFileName)}
                  className="w-full sm:w-1/2 py-3 px-4 bg-white hover:bg-primary-light text-primary border-2 border-primary/20 hover:border-primary active:scale-98 rounded-xl font-display font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                  title="Descargar versión PNG Alta Resolución"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.832V16.5M7.5 12L12 16.5m0 0L16.5 12M12 16.5V3" />
                  </svg>
                  Descargar .PNG (Alta Res)
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Paleta de Colores Oficiales */}
      <section className="py-20 bg-primary-light/40 border-t border-primary-medium/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-primary uppercase font-display font-extrabold text-xs tracking-wider block mb-2">
              Código Cromático
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-primary-dark tracking-tight">
              Paleta de Colores Corporativos
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mt-3 text-sm">
              Haz clic en cualquier color para copiar automáticamente su código HEX al portapapeles.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {brandColors.map((color, index) => (
              <ScrollReveal
                key={color.hex}
                delay={index * 60}
                className={`group bg-white rounded-2xl p-4 border ${color.border ? 'border-card-border shadow-sm' : 'border-card-border'} shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer`}
                onClick={() => copyToClipboard(color.hex, color.name)}
              >
                <div>
                  <div 
                    className="w-full h-24 rounded-xl mb-4 shadow-inner flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: color.hex, border: color.border ? '1px solid #e2e8f0' : 'none' }}
                  >
                    {copiedColor === color.name ? (
                      <span className="bg-black/75 text-white text-[10px] font-bold px-2 py-1 rounded-md animate-fade-in-up">
                        ¡Copiado!
                      </span>
                    ) : (
                      <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-md transition-opacity">
                        Copiar
                      </span>
                    )}
                  </div>
                  <h4 className="font-display font-extrabold text-xs text-primary-dark mb-1 leading-tight">{color.name}</h4>
                  <p className="text-[11px] text-text-muted mb-3 leading-snug">{color.role}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <code className="text-xs font-mono font-bold text-primary">{color.hex}</code>
                  <svg className="w-3.5 h-3.5 text-text-muted group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tipografía Oficial */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <ScrollReveal className="bg-white rounded-3xl p-8 border border-card-border shadow-md">
            <span className="text-xs uppercase tracking-widest font-extrabold text-primary mb-2 block">
              Tipografía Principal (Display)
            </span>
            <h3 className="text-3xl font-display font-extrabold text-primary-dark mb-4">
              Outfit
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Familia geométrica moderna, cálida y limpia. Se utiliza para encabezados principales, títulos de sección, botones y llamadas a la acción que transmiten dinamismo y profesionalismo.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-display space-y-2">
              <p className="text-xl font-extrabold text-primary-dark">Aa Bb Cc Dd Ee Ff Gg 0123456789</p>
              <p className="text-sm text-text-muted font-bold">MOLCO AVENTURA • TURISMO EN EL SUR DE CHILE</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="bg-white rounded-3xl p-8 border border-card-border shadow-md" delay={100}>
            <span className="text-xs uppercase tracking-widest font-extrabold text-secondary-dark mb-2 block">
              Tipografía de Lectura (Cuerpo)
            </span>
            <h3 className="text-3xl font-sans font-extrabold text-primary-dark mb-4">
              Inter
            </h3>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              Diseñada específicamente para pantallas. Aporta una óptima legibilidad en párrafos informativos, descripciones de tours, especificaciones de precios y notas legales.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-sans space-y-2">
              <p className="text-xl font-bold text-primary-dark">Aa Bb Cc Dd Ee Ff Gg 0123456789</p>
              <p className="text-sm text-text-muted font-normal">Experiencias guiadas por la Araucanía andina y la ruta de los ríos.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Brand */}
      <footer className="bg-[#05171e] text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-sky-200/50">
          <div className="flex items-center gap-4">
            <img src={logoHorizontalBlancoSvg} alt="Molco Aventura" className="h-8 w-auto object-contain brightness-110" />
            <span>Guía de Marca & Recursos Oficiales</span>
          </div>
          <button
            onClick={() => onGoHome ? onGoHome('/') : (window.location.href = '/')}
            className="hover:text-white transition cursor-pointer underline underline-offset-4"
          >
            ← Volver a www.molcoaventura.cl
          </button>
        </div>
      </footer>
    </div>
  );
}
