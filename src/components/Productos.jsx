import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Package, CheckCircle, Truck, Star } from 'lucide-react';

const Productos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('todos');

  const productos = [
    {
      id: 1,
      categoria: 'panela',
      nombre: 'Panela Cuadrada',
      descripcion: 'Panela artesanal en presentación cuadrada tradicional. Ideal para comercialización mayorista y distribución al detalle.',
      presentaciones: ['450g', '1kg', '2kg'],
      caracteristicas: ['100% Natural', 'Sin aditivos', 'Alto poder endulzante', 'Origen Santander'],
      gradient: 'from-marron-claro to-marron-medio',
      badge: 'Más vendido'
    },
    {
      id: 2,
      categoria: 'panela',
      nombre: 'Panela Redonda',
      descripcion: 'Presentación tradicional en forma circular. Perfecta para mercados que prefieren el formato redondo clásico.',
      presentaciones: ['500g', '1kg', '2.5kg'],
      caracteristicas: ['Tradicional', 'Caña de azúcar pura', 'Larga durabilidad', 'Empaque al vacío'],
      gradient: 'from-marron-medio to-marron-oscuro',
      badge: 'Premium'
    },
    {
      id: 3,
      categoria: 'piloncillo',
      nombre: 'Piloncillo / Panela Cónica',
      descripcion: 'Formato cónico tradicional muy demandado en mercados mexicanos y centroamericanos.',
      presentaciones: ['250g', '500g', '1kg'],
      caracteristicas: ['Formato cónico', 'Exportación especializada', 'Calidad premium', 'Certificado orgánico'],
      gradient: 'from-verde to-verde-oscuro',
      badge: 'Export'
    },
    {
      id: 4,
      categoria: 'panela',
      nombre: 'Panela Granulada',
      descripcion: 'Panela en formato granulado para uso industrial y gastronómico profesional.',
      presentaciones: ['500g', '1kg', '5kg', '25kg'],
      caracteristicas: ['Uso industrial', 'Fácil dosificación', 'Disolución rápida', 'Bulk disponible'],
      gradient: 'from-verde-oscuro to-marron-oscuro',
      badge: 'Industrial'
    },
    {
      id: 5,
      categoria: 'cafe',
      nombre: 'Café Colombiano',
      descripcion: 'Café de origen colombiano de las mejores regiones cafeteras. Disponible en diferentes tipos de tueste.',
      presentaciones: ['250g', '500g', '1kg'],
      caracteristicas: ['Origen único', 'Diferentes tuestes', 'Fair Trade', 'Trazabilidad completa'],
      gradient: 'from-marron-oscuro to-marron-claro',
      badge: 'Nuevo'
    },
    {
      id: 6,
      categoria: 'panela',
      nombre: 'Panela Líquida',
      descripcion: 'Panela en formato líquido lista para uso inmediato. Ideal para industria de bebidas y repostería.',
      presentaciones: ['250ml', '500ml', '1L', '5L'],
      caracteristicas: ['Lista para usar', 'Larga vida útil', 'Consistencia uniforme', 'Formato industrial'],
      gradient: 'from-amarillo to-marron-claro',
      badge: 'Innovación'
    },
  ];

  const categorias = [
    { id: 'todos', label: 'Todos los productos' },
    { id: 'panela', label: 'Panela' },
    { id: 'piloncillo', label: 'Piloncillo' },
    { id: 'cafe', label: 'Café' },
  ];

  const productosFiltrados = activeTab === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === activeTab);

  return (
    <section id="productos" className="section-padding bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-verde/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-marron-claro/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-verde font-semibold text-sm uppercase tracking-wide mb-4"
          >
            Nuestro Portafolio
          </motion.span>
          
          <h2 className="heading-2 mb-6">
            Productos de{' '}
            <span className="text-gradient">Calidad Premium</span>
          </h2>
          
          <p className="text-lg text-gray-600">
            Contamos con presentaciones sólidas, granuladas y líquidas. Cada una pensada para 
            responder a las exigencias del mercado internacional.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categorias.map((categoria) => (
            <motion.button
              key={categoria.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(categoria.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === categoria.id
                  ? 'bg-verde text-white shadow-lg'
                  : 'glass text-marron-oscuro hover:glass-dark'
              }`}
            >
              {categoria.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {productosFiltrados.map((producto, index) => (
            <motion.div
              key={producto.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass hover:glass-dark rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 h-full">
                
                {/* Badge */}
                {producto.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 bg-gradient-to-r ${producto.gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                      {producto.badge}
                    </div>
                  </div>
                )}

                {/* Product Image Placeholder with Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${producto.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                  <Package className="w-20 h-20 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Animated overlay on hover */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-marron-oscuro font-caveat">
                    {producto.nombre}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {producto.descripcion}
                  </p>

                  {/* Presentaciones */}
                  <div>
                    <p className="text-xs font-semibold text-marron-medio mb-2 uppercase tracking-wide">
                      Presentaciones disponibles:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {producto.presentaciones.map((presentacion, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-crema-oscuro text-marron-oscuro text-xs font-medium rounded-full"
                        >
                          {presentacion}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Características */}
                  <div className="space-y-2">
                    {producto.caracteristicas.map((caracteristica, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-verde flex-shrink-0" />
                        <span className="text-xs text-gray-600">{caracteristica}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const element = document.querySelector('#contacto');
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="w-full py-3 bg-verde hover:bg-verde-oscuro text-white font-semibold rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Solicitar información</span>
                    <Truck className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass inline-block px-8 py-6 rounded-2xl max-w-2xl">
            <Star className="w-8 h-8 text-amarillo mx-auto mb-4" />
            <p className="text-marron-oscuro font-medium mb-2">
              ¿Necesitas una presentación personalizada o maquila bajo tu marca?
            </p>
            <p className="text-sm text-gray-600">
              Ofrecemos soluciones flexibles adaptadas a las necesidades específicas de tu negocio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Productos;
