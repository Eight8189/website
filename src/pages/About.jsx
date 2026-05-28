import React from "react";
import Header from "../Header";
import Footer from "../Footer";

export default function About() {
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
            Sobre Nós
          </div>
          <h1 className="max-w-4xl text-[44px] font-semibold leading-[0.94] tracking-[-0.065em] md:text-[65px] md:leading-[0.92]">
            Conheça a Eight e nossa história
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
            Somos uma empresa focada em criar soluções digitais inovadoras que transformam negócios através de estratégia, tecnologia e criação.
          </p>
        </div>
      </section>

      {/* Content Section 1 */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Nossa Missão
              </h2>
              <p className="mt-6 text-lg leading-8 text-black/55">
                Conteúdo sobre a missão será preenchido aqui. Este é um espaço dedicado a explicar os valores e objetivos fundamentais da empresa.
              </p>
            </div>
            <div className="rounded-[34px] bg-[#F3F4F6] p-8 md:p-12">
              <p className="text-lg leading-8 text-black/60">
                Informações complementares sobre a missão e visão podem ser adicionadas neste bloco estruturado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 */}
      <section className="bg-[#F3F4F6] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 premium-cut bg-white p-8 md:p-12">
              <p className="text-lg leading-8 text-black/60">
                Aqui você pode adicionar histórias, estatísticas ou informações sobre o desenvolvimento e crescimento da empresa.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Nossa História
              </h2>
              <p className="mt-6 text-lg leading-8 text-black/55">
                Conteúdo sobre a história será preenchido aqui. Descreva como a empresa começou, os marcos importantes e conquistas ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 3 */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Nossos Valores
          </h2>
          <p className="mt-2 text-lg text-black/55">
            Os princípios que guiam nossas decisões e ações
          </p>
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Inovação", description: "Buscamos constantemente novas soluções e abordagens para resolver desafios." },
              { title: "Excelência", description: "Comprometidos com a qualidade em tudo que fazemos e oferecemos." },
              { title: "Transparência", description: "Comunicação clara e honesta com todos os nossos stakeholders." }
            ].map((value) => (
              <div key={value.title} className="premium-cut border border-black/10 bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-lg text-black/55">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
