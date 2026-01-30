import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Globe, TrendingUp, Leaf } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animated counter
  const [stats, setStats] = useState([
    { value: 0, target: 20, label: 'Años de experiencia', icon: Award },
    { value: 0, target: 10, label: 'Países de exportación', icon: Globe },
    { value: 0, target: 15, label: 'Marcas atendidas', icon: TrendingUp },
    { value: 0, target: 1500, label: 'Familias alimentadas', icon: Leaf, suffix: '+' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: stat.value < stat.target ? stat.value + Math.ceil(stat.target / 50) : stat.target
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute top-10 right-10 w-72 h-72 bg-verde/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-marron-claro/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating decorative elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-verde rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ opacity }}
        className="container-custom relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full"
            >
              <Leaf className="w-5 h-5 text-verde" />
              <span className="text-sm font-medium text-marron-oscuro">
                🌿 Productos Agrícolas de Origen
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="heading-1"
            >
              Proveedor confiable de{' '}
              <span className="text-gradient">
                productos agrícolas
              </span>
              {' '}para mercados internacionales
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Panela, piloncillo, café y otros productos de origen agrícola, con capacidad de 
              suministro constante, estándares de calidad y experiencia en exportación.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contacto')}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>Solicitar información comercial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#productos')}
                className="btn-outline flex items-center justify-center space-x-2"
              >
                <span>Ver productos</span>
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {['Certificación ISO', 'Exportación Global', 'Calidad Premium'].map((badge, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-verde rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-marron-medio">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="glass hover:glass-dark p-6 rounded-2xl shadow-warm hover-lift cursor-default"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-verde/10 rounded-full">
                      <Icon className="w-6 h-6 text-verde" />
                    </div>
                    <div className="text-4xl font-bold text-gradient-warm font-caveat">
                      {stat.value}{stat.suffix || ''}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => scrollToSection('#productos')}
        >
          <span className="text-sm text-gray-600">Desliza para explorar</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-verde rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
