import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ventajas from './components/Ventajas';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Ventajas />
        <Productos />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
