import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">Brand</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Soluções Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-gray-900 transition-colors">Soluções</button>
                <AnimatePresence>
                  {isSolutionsDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-[#191919] rounded-2xl shadow-lg overflow-hidden"
                    >
                      <Link to="/connect-plus" className="block px-4 py-3 text-white hover:opacity-80 transition-opacity">Connect+</Link>
                      <Link to="/agentes-ia" className="block px-4 py-3 text-white hover:opacity-80 transition-opacity">Agentes IA</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/servicos" className="text-gray-700 hover:text-gray-900 transition-colors">Serviços</Link>
              <Link to="/sobre-nos" className="text-gray-700 hover:text-gray-900 transition-colors">Sobre Nós</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-2">
                <div className="relative">
                  <button
                    onClick={() => setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)}
                    className="w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2"
                  >
                    Soluções
                  </button>
                  {isSolutionsDropdownOpen && (
                    <div className="pl-4 space-y-1">
                      <Link to="/connect-plus" className="block text-gray-600 hover:text-gray-900 py-1">Connect+</Link>
                      <Link to="/agentes-ia" className="block text-gray-600 hover:text-gray-900 py-1">Agentes IA</Link>
                    </div>
                  )}
                </div>
                <Link to="/servicos" className="block text-gray-700 hover:text-gray-900 py-2">Serviços</Link>
                <Link to="/sobre-nos" className="block text-gray-700 hover:text-gray-900 py-2">Sobre Nós</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section (exemplo do código original) */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Soluções Inteligentes</h1>
          <p className="text-xl text-gray-600 mb-8">Transforme seu negócio com tecnologia de ponta.</p>
          <Link to="/fale-conosco" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Fale conosco <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Outras seções (mantidas do original) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inovação</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <CheckCircle2 className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suporte</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;