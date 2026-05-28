import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between">
      {/* LOGO (Ajuste o texto ou remova se já tiver uma imagem) */}
      <Link to="/" className="text-xl font-bold text-black">
        Logo
      </Link>

      {/* LINKS DO MENU (Todos corrigidos e apontando para as páginas certas) */}
      <nav className="hidden md:flex items-center gap-6 rounded-full border border-black/10 bg-white px-5 py-3 text-base text-black/60">
        <Link to="/solucoes" className="font-bold transition-colors duration-300 hover:text-black">
          Soluções
        </Link>
        <Link to="/servicos" className="font-bold transition-colors duration-300 hover:text-black">
          Serviços
        </Link>
        <Link to="/sobre" className="font-bold transition-colors duration-300 hover:text-black">
          Sobre Nós
        </Link>
        <Link to="/contato" className="font-bold transition-colors duration-300 hover:text-black">
          Contato
        </Link>
      </nav>
    </header>
  );
}
