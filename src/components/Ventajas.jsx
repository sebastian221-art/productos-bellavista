import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Leaf, TrendingUp, Shield, Users, Package } from 'lucide-react';

const Ventajas = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ventajas = [
    {
      icon: Award,
      title: 'Certificaciones Internacionales',
      description: 'Cumplimos con los más altos estándares de calidad reconocidos internacionalmente. Certificaciones ISO y BPM garantizan la excelencia de nuestros productos.',
      gradient: 'from-verde to-verde-oscuro',
    },
    {
      icon: TrendingUp,
      title: 'Capacidad de Suministro Constante',
      description: 'Infraestructura y logística robusta para asegurar entregas puntuales. Red de productores consolidada que garantiza volúmenes estables.',
      gradient: 'from-marron-medio to-marron-oscuro',
    },
    {
      icon: Leaf,
      title: 'Origen 100% Natural',
      description: 'Productos agrícolas auténticos del campo colombiano. Procesos tradicionales combinados con tecnología moderna para preservar calidad.',
      gradient: 'from-verde-oscuro to-verde',
    },
    {
      icon: Shield,
      title: 'Experiencia en Exportación',
      description: '20+ años llevando productos colombianos al mundo. Conocimiento profundo de regulaciones y estándares internacionales de comercio.',
      gradient: 'from-marron-claro to-marron-medio',
    },
    {
      icon: Users,
      title: 'Socios Estratégicos Confiables',
      description: 'Trabajamos con productores locales bajo esquemas de comercio justo. Relaciones de largo plazo que aseguran sostenibilidad y calidad.',
      gradient: 'from-verde to-marron-medio',
    },
    {
      icon: Package,
      title: 'Presentaciones Personalizadas',
      description: 'Adaptamos empaque y presentación a las necesidades de su marca. Flexibilidad en volúmenes y formatos para diferentes mercados.',
      gradient: 'from-marron-oscuro to-verde-oscuro',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-green opacity-5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-brown opacity-5 blur-3xl rounded-full" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-verde font-semibold text-sm uppercase tracking-wide mb-4"
          >
            Ventajas Competitivas
          </motion.span>
          
          <h2 className="heading-2 mb-6">
            ¿Por qué elegir a{' '}
            <span className="text-gradient">Panela BellaVista</span>?
          </h2>
          
          <p className="text-lg text-gray-600">
            Más de dos décadas de experiencia nos respaldan como uno de los exportadores 
            más confiables de productos agrícolas colombianos.
          </p>
        </motion.div>

        {/* Ventajas Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ventajas.map((ventaja, index) => {
            const Icon = ventaja.icon;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="glass hover:glass-dark p-8 rounded-2xl shadow-warm hover:shadow-warm-lg transition-all duration-300 h-full">
                  {/* Icon with gradient background */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${ventaja.gradient} opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity`} />
                    <div className={`relative p-4 bg-gradient-to-br ${ventaja.gradient} rounded-2xl text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-marron-oscuro mb-4 font-caveat">
                    {ventaja.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {ventaja.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-verde/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass inline-block px-8 py-4 rounded-2xl">
            <p className="text-marron-oscuro font-medium mb-4">
              ¿Listo para trabajar con un aliado confiable?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Solicitar Cotización
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ventajas;
