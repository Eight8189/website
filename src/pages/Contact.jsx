import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-[#111111]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700;800&display=swap');
        .premium-cut { border-radius: 34px; }
        .marquee-track { display: flex; width: max-content; animation: marquee 38s linear infinite; will-change: transform; }
        @keyframes marquee { from { transform: translate3d(0, 0, 0); } to { transform: translate3d(-50%, 0, 0); } }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-5 pb-16 pt-20 md:px-6 md:pb-24 md:pt-28">
        <div className="absolute right-[8%] top-20 h-56 w-56 rounded-full bg-[#F4E9FF] blur-3xl" />
        <div className="absolute left-[4%] bottom-4 h-64 w-64 rounded-full bg-[#E5E7EB] blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-4 inline-flex items-center rounded-full bg-[#101010] px-4 py-2 text-xs font-semibold uppercase text-white">
            Contato
          </div>
          <h1 className="max-w-4xl text-[44px] font-semibold leading-[0.94] tracking-[-0.065em] md:text-[65px] md:leading-[0.92]">
            Entre em contato conosco
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
            Estamos aqui para ouvir suas dúvidas, desafios e ideias. Fale conosco e vamos trabalhar juntos no seu sucesso.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-[34px] border border-black/10 bg-white p-8">
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p className="mt-3 text-lg text-black/55">
                Envie uma mensagem pelo WhatsApp e receba uma resposta rápida do nosso time.
              </p>
              <a
                href="https://wa.me/5511957835531"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]"
              >
                Conversar
              </a>
            </div>

            <div className="rounded-[34px] border border-black/10 bg-white p-8">
              <h3 className="text-xl font-semibold">E-mail</h3>
              <p className="mt-3 text-lg text-black/55">
                Envie um e-mail com suas informações e dúvidas para o nosso endereço.
              </p>
              <a
                href="mailto:oi@eight.net.br"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]"
              >
                Enviar e-mail
              </a>
            </div>

            <div className="rounded-[34px] border border-black/10 bg-white p-8">
              <h3 className="text-xl font-semibold">Formulário</h3>
              <p className="mt-3 text-lg text-black/55">
                Preencha o formulário abaixo e entraremos em contato em breve.
              </p>
              <button
                type="button"
                onClick={() => document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" })}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]"
              >
                Ir para formulário
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-[#F3F4F6] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl text-center mb-4">
            Envie uma mensagem
          </h2>
          <p className="text-lg text-black/55 text-center mb-12">
            Preencha o formulário abaixo e descreva seu projeto ou dúvida. Retornaremos em breve.
          </p>
          
          <form className="space-y-6 premium-cut bg-white p-8 md:p-12">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                placeholder="Seu nome completo"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base text-black placeholder:text-black/40 outline-none transition-colors focus:border-[#1ca1f1] focus:ring-2 focus:ring-[#1ca1f1]/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base text-black placeholder:text-black/40 outline-none transition-colors focus:border-[#1ca1f1] focus:ring-2 focus:ring-[#1ca1f1]/20"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="(11) 99999-9999"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base text-black placeholder:text-black/40 outline-none transition-colors focus:border-[#1ca1f1] focus:ring-2 focus:ring-[#1ca1f1]/20"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                placeholder="Nome da sua empresa"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base text-black placeholder:text-black/40 outline-none transition-colors focus:border-[#1ca1f1] focus:ring-2 focus:ring-[#1ca1f1]/20"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                placeholder="Conte-nos sobre seu projeto ou dúvida..."
                rows="6"
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-base text-black placeholder:text-black/40 outline-none transition-colors focus:border-[#1ca1f1] focus:ring-2 focus:ring-[#1ca1f1]/20 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#1ca1f1] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#0d8dd8]"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
