import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';

const Contacto = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form data:', data);
      setSubmitStatus('success');
      setIsSubmitting(false);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+57 321 2117662',
      link: 'tel:+573212117662',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contactenos@panelabellavista.com',
      link: 'mailto:contactenos@panelabellavista.com',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'San Gil, Santander, Colombia',
      link: 'https://maps.google.com/?q=San+Gil+Santander+Colombia',
    },
  ];

  return (
    <>
      <section id="contacto" className="section-padding bg-gradient-warm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-verde/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-marron-claro/10 rounded-full blur-3xl" />

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
              Contacto Comercial
            </motion.span>
            
            <h2 className="heading-2 mb-6">
              Escribe un <span className="text-gradient">Mensaje</span>
            </h2>
            
            <p className="text-lg text-gray-600">
              ¿Listo para importar productos de calidad? Contáctanos y uno de nuestros 
              asesores comerciales te responderá en menos de 24 horas.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass p-8 md:p-10 rounded-3xl shadow-warm"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold text-marron-oscuro mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    {...register('nombre', {
                      required: 'El nombre es requerido',
                      minLength: {
                        value: 3,
                        message: 'El nombre debe tener al menos 3 caracteres'
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      errors.nombre
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-crema-oscuro focus:border-verde'
                    } focus:outline-none bg-white`}
                    placeholder="Juan Pérez"
                  />
                  {errors.nombre && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-500 flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.nombre.message}</span>
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-marron-oscuro mb-2">
                    Email corporativo *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'El email es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido'
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-crema-oscuro focus:border-verde'
                    } focus:outline-none bg-white`}
                    placeholder="juan@empresa.com"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-500 flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email.message}</span>
                    </motion.p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-semibold text-marron-oscuro mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    {...register('telefono', {
                      required: 'El teléfono es requerido',
                      pattern: {
                        value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                        message: 'Teléfono inválido'
                      }
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      errors.telefono
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-crema-oscuro focus:border-verde'
                    } focus:outline-none bg-white`}
                    placeholder="+1 234 567 8900"
                  />
                  {errors.telefono && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-500 flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.telefono.message}</span>
                    </motion.p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-sm font-semibold text-marron-oscuro mb-2">
                    Empresa / Organización *
                  </label>
                  <input
                    type="text"
                    {...register('empresa', {
                      required: 'El nombre de la empresa es requerido'
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      errors.empresa
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-crema-oscuro focus:border-verde'
                    } focus:outline-none bg-white`}
                    placeholder="Nombre de su empresa"
                  />
                  {errors.empresa && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-500 flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.empresa.message}</span>
                    </motion.p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-semibold text-marron-oscuro mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    {...register('mensaje', {
                      required: 'El mensaje es requerido',
                      minLength: {
                        value: 20,
                        message: 'El mensaje debe tener al menos 20 caracteres'
                      }
                    })}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                      errors.mensaje
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-crema-oscuro focus:border-verde'
                    } focus:outline-none bg-white`}
                    placeholder="Cuéntanos sobre tu proyecto y necesidades de importación..."
                  />
                  {errors.mensaje && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-500 flex items-center space-x-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.mensaje.message}</span>
                    </motion.p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-verde/10 border-2 border-verde rounded-xl flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-verde flex-shrink-0" />
                    <p className="text-sm text-verde font-medium">
                      ¡Mensaje enviado con éxito! Te contactaremos pronto.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="glass hover:glass-dark p-6 rounded-2xl shadow-warm hover-lift flex items-center space-x-4 group"
                    >
                      <div className="p-3 bg-verde/10 rounded-full group-hover:bg-verde group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-verde group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{info.title}</p>
                        <p className="font-semibold text-marron-oscuro">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="glass p-4 rounded-2xl shadow-warm overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-verde/20 to-marron-claro/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-verde mx-auto mb-4" />
                    <p className="text-marron-oscuro font-semibold">San Gil, Santander</p>
                    <p className="text-sm text-gray-600">Colombia</p>
                  </div>
                </div>
              </motion.div>

              {/* Additional CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="glass-dark p-6 rounded-2xl text-center"
              >
                <h4 className="font-bold text-marron-oscuro mb-2">¿Prefieres hablar directo?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Contáctanos por WhatsApp para una respuesta inmediata
                </p>
                <motion.a
                  href="https://wa.me/573212117662"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Abrir WhatsApp</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/573212117662"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl no-print"
      >
        <MessageCircle className="w-6 h-6" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
        />
      </motion.a>
    </>
  );
};

export default Contacto;
