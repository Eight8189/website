import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setSubmenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white font-bricolage text-base"
      >
        <span>Menu</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-64 bg-white rounded-[34px] shadow-lg overflow-hidden"
          >
            <div className="py-2">
              {/* Soluções */}
              <div className="relative">
                <button
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-gray-100 font-bricolage text-base"
                >
                  <span>Soluções</span>
                  <svg className={`w-4 h-4 transition-transform ${submenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {submenuOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-gray-50">
                        <a href="#connect" className="block px-10 py-2 text-gray-600 hover:text-blue-600 font-bricolage text-sm">Connect+</a>
                        <a href="#agentes" className="block px-10 py-2 text-gray-600 hover:text-blue-600 font-bricolage text-sm">Agentes IA</a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="border-t border-gray-200 my-1"></div>
              <a href="#servicos" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 font-bricolage text-base">Serviços</a>
              <div className="border-t border-gray-200 my-1"></div>
              <a href="#sobre" className="block px-6 py-3 text-gray-700 hover:bg-gray-100 font-bricolage text-base">Sobre Nós</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1ca1f1] to-[#1F7A4D] font-bricolage">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <div className="text-white text-2xl font-bold">Logo</div>
        <MenuDropdown />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 text-white">
        <div className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Transforme seu negócio com IA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg mb-8"
          >
            Soluções inteligentes para otimizar processos e impulsionar resultados.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#1F7A4D] font-semibold py-3 px-8 rounded-full shadow-lg"
          >
            Comece agora
          </motion.button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="/hero-image.svg" alt="Hero" className="w-full" />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Sobre Nós
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Somos uma empresa focada em inovação, utilizando inteligência artificial para criar soluções personalizadas.
          </motion.p>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Nossos Produtos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Connect+', 'Agentes IA', 'Analytics'].map((prod, idx) => (
              <motion.div
                key={prod}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <img src={`/product-${idx + 1}.svg`} alt={prod} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{prod}</h3>
                <p className="text-gray-600">Descrição breve do produto.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 mb-8"
          >
            Resultados
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['+40% eficiência', 'Redução de custos', 'Satisfação do cliente'].map((res, idx) => (
              <motion.div
                key={res}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6"
              >
                <div className="text-5xl font-bold text-[#1ca1f1] mb-2">{idx + 1}</div>
                <p className="text-lg text-gray-700">{res}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Pronto para transformar seu negócio?
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#1F7A4D] font-semibold py-3 px-10 rounded-full shadow-lg"
          >
            Fale conosco
          </motion.button>
        </div>
      </section>

      <footer className="text-white text-center py-6">
        © 2025 Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Home;