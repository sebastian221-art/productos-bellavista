import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const enlaces = {
    empresa: [
      { name: 'Nosotros', href: '#nosotros' },
      { name: 'Productos', href: '#productos' },
      { name: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  };

  const redes = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (href) => {
    if (href === '#') return;
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-marron-oscuro text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-verde rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-marron-claro rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <span className="text-3xl font-bold font-caveat text-amarillo">
                PANELA
              </span>
              <span className="text-2xl font-bold font-schoolbell text-verde -mt-2">
                BellaVista
              </span>
            </motion.div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Proveedor confiable de productos agrícolas colombianos para mercados 
              internacionales desde 2002.
            </p>

            <div className="flex items-center space-x-2 text-verde">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium">100% Natural & Orgánico</span>
            </div>
          </div>

          {/* Empresa Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amarillo font-caveat">
              Empresa
            </h4>
            <ul className="space-y-3">
              {enlaces.empresa.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-300 hover:text-verde transition-colors duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-verde rounded-full group-hover:w-3 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amarillo font-caveat">
              Legal
            </h4>
            <ul className="space-y-3">
              {enlaces.legal.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-verde transition-colors duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-verde rounded-full group-hover:w-3 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amarillo font-caveat">
              Contacto
            </h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <Phone className="w-5 h-5 text-verde flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+573212117662"
                  className="text-gray-300 hover:text-verde transition-colors text-sm"
                >
                  +57 321 2117662
                </a>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start space-x-3"
              >
                <Mail className="w-5 h-5 text-verde flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contactenos@panelabellavista.com"
                  className="text-gray-300 hover:text-verde transition-colors text-sm break-all"
                >
                  contactenos@panelabellavista.com
                </a>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start space-x-3"
              >
                <MapPin className="w-5 h-5 text-verde flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  San Gil, Santander<br />Colombia
                </span>
              </motion.li>
            </ul>

            {/* Social Media */}
            <div className="mt-6 flex space-x-4">
              {redes.map((red, index) => {
                const Icon = red.icon;
                return (
                  <motion.a
                    key={index}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-verde/20 hover:bg-verde rounded-full transition-all duration-300 group"
                    aria-label={red.label}
                  >
                    <Icon className="w-5 h-5 text-verde group-hover:text-white transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400"
            >
              © {currentYear} Panela BellaVista. Todos los derechos reservados.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-sm text-gray-400"
            >
              <span>Hecho con</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>en Colombia</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
