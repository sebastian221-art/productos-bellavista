import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Zap, Globe2, MapPin, TrendingUp } from 'lucide-react';

const Nosotros = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const valores = [
    {
      icon: Heart,
      title: 'Calidez',
      description: 'Tratamos a nuestros aliados comerciales con la amabilidad y el carisma que nos caracteriza.',
      color: 'text-rojo-tradicion',
      bgColor: 'bg-rojo-tradicion/10',
    },
    {
      icon: Target,
      title: 'Tradición',
      description: 'Respetamos y preservamos las prácticas artesanales que hacen única nuestra panela.',
      color: 'text-marron-medio',
      bgColor: 'bg-marron-medio/10',
    },
    {
      icon: Zap,
      title: 'Dinamismo',
      description: 'Nos adaptamos rápidamente a las necesidades del mercado con modernismo y movimiento.',
      color: 'text-amarillo',
      bgColor: 'bg-amarillo/10',
    },
    {
      icon: Globe2,
      title: 'Visión Global',
      description: 'Proyectamos el campo colombiano hacia mercados internacionales con estándares de clase mundial.',
      color: 'text-verde',
      bgColor: 'bg-verde/10',
    },
  ];

  const timeline = [
    {
      year: '2002',
      title: 'Fundación',
      description: 'Nace Panela BellaVista en el corazón de Santander, Colombia.',
    },
    {
      year: '2008',
      title: 'Primera Exportación',
      description: 'Realizamos nuestra primera exportación a Estados Unidos, marcando el inicio de nuestra expansión internacional.',
    },
    {
      year: '2015',
      title: 'Certificaciones ISO',
      description: 'Obtenemos certificaciones internacionales de calidad ISO 9001 y BPM.',
    },
    {
      year: '2020',
      title: 'Expansión a 10 Países',
      description: 'Consolidamos presencia en 10 países de América, Europa y Asia.',
    },
    {
      year: '2026',
      title: 'Innovación y Sostenibilidad',
      description: 'Lideramos prácticas sostenibles y desarrollamos nuevas presentaciones innovadoras.',
    },
  ];

  const mercados = [
    { region: 'Norteamérica', paises: ['Estados Unidos', 'Canadá'], icon: '🇺🇸' },
    { region: 'Europa', paises: ['España', 'Italia', 'Francia'], icon: '🇪🇺' },
    { region: 'Asia', paises: ['Japón', 'Corea del Sur'], icon: '🌏' },
    { region: 'Latinoamérica', paises: ['México', 'Chile', 'Argentina'], icon: '🌎' },
  ];

  return (
    <section id="nosotros" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1QzNEMkUiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-verde font-semibold text-sm uppercase tracking-wide mb-4"
          >
            Nuestra Historia
          </motion.span>
          
          <h2 className="heading-2 mb-6">
            <span className="text-gradient">BellaVista</span> es bienestar en su forma más pura
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Nuestra panela nace en el corazón del campo colombiano y conserva toda la energía, 
            vitaminas y minerales propios de la caña de azúcar. Endulza la vida de manera natural, 
            saludable y auténtica, con un sabor real que conecta con los sentidos y genera confianza.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass p-8 md:p-12 rounded-3xl shadow-warm mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-3 mb-4">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                En BellaVista trabajamos con una visión clara: <strong>ser líderes en innovación, 
                producción y comercialización de productos derivados del jugo de caña</strong> —tanto 
                en Colombia como en mercados internacionales.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aportamos soluciones para marcas, distribuidores y empresas que buscan un aliado 
                confiable, sostenible y con trazabilidad real.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-dark p-6 rounded-2xl text-center">
                <TrendingUp className="w-10 h-10 text-verde mx-auto mb-3" />
                <div className="text-3xl font-bold text-marron-oscuro font-caveat">20+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="glass-dark p-6 rounded-2xl text-center">
                <Globe2 className="w-10 h-10 text-marron-medio mx-auto mb-3" />
                <div className="text-3xl font-bold text-marron-oscuro font-caveat">10+</div>
                <div className="text-sm text-gray-600">Países de exportación</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Valores Corporativos */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="heading-3 text-center mb-12"
          >
            Nuestros <span className="text-gradient">Valores</span>
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass hover:glass-dark p-6 rounded-2xl shadow-warm hover-lift text-center"
                >
                  <div className={`inline-flex p-4 ${valor.bgColor} rounded-full mb-4`}>
                    <Icon className={`w-8 h-8 ${valor.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-marron-oscuro mb-3 font-caveat">
                    {valor.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {valor.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="heading-3 text-center mb-12"
          >
            Nuestra <span className="text-gradient">Trayectoria</span>
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-verde via-marron-medio to-verde hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="glass p-6 rounded-2xl inline-block">
                      <div className="text-3xl font-bold text-verde mb-2 font-caveat">
                        {item.year}
                      </div>
                      <h4 className="text-xl font-bold text-marron-oscuro mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-6 h-6 bg-verde rounded-full border-4 border-white shadow-lg z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mercados de Exportación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="glass p-8 md:p-12 rounded-3xl shadow-warm"
        >
          <h3 className="heading-3 text-center mb-8">
            Presencia <span className="text-gradient">Global</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mercados.map((mercado, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-crema rounded-xl"
              >
                <div className="text-5xl mb-4">{mercado.icon}</div>
                <h4 className="font-bold text-marron-oscuro mb-3">{mercado.region}</h4>
                <div className="space-y-2">
                  {mercado.paises.map((pais, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4 text-verde" />
                      <span className="text-sm text-gray-600">{pais}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Nosotros;
