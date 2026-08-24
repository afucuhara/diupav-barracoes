'use client';

import { useEffect, useState } from 'react';
import { BudgetCta, Reveal, SiteFooter, SiteHeader } from './components';
import { services, whatsappUrl } from './site-data';

const differentials = [
  'Experiência e comprometimento', 'Soluções sob encomenda', 'Atendimento personalizado',
  'Produtos pré-moldados e metálicos', 'Qualidade em cada etapa', 'Responsabilidade social e ambiental',
];

export default function Home() {
  const heroSlides = ['/images/hero-industrial-generated.png', '/images/estrutura-metalica.jpg', '/images/hero-barracao.jpg'];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % heroSlides.length), 7000);
    return () => window.clearInterval(timer);
  }, [heroSlides.length]);
  return (
    <main>
      <SiteHeader active="inicio" />
      <section className="hero" id="inicio" style={{ backgroundImage: `linear-gradient(90deg, rgba(6,11,27,.92) 0%, rgba(10,24,70,.78) 46%, rgba(0,33,250,.14) 100%), url('${heroSlides[slide]}')` }}>
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow">Construção inteligente. Estrutura forte.</div>
          <h1>Estruturas que dão <em>segurança</em> aos seus projetos</h1>
          <p>Barracões pré-moldados, estruturas metálicas e soluções sob encomenda para construir com resistência, qualidade e confiança.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="whatsapp-icon" aria-hidden="true">✆</span> Solicite seu orçamento</a>
            <a className="button button-secondary" href="#solucoes"><span className="segment-icon" aria-hidden="true">⌂</span> Conheça nossas soluções</a>
          </div>
        </div>
        <div className="hero-dots" aria-label="Imagens da hero">
          {heroSlides.map((image, index) => <button type="button" className={index === slide ? 'active' : ''} key={image} onClick={() => setSlide(index)} aria-label={`Exibir imagem ${index + 1}`} />)}
        </div>
      </section>

      <Reveal variant="left"><section className="proof-strip" aria-label="Reconhecimento regional">
        <div className="proof-number">05</div>
        <div className="proof-copy"><strong>anos consecutivos</strong><span>de reconhecimento regional</span></div>
        <p>Destaque do ano em Contenda/PR e Lapa/PR nas categorias de pré-moldados e estrutura metálica.</p>
      </section></Reveal>

      <Reveal><section className="intro" id="solucoes">
        <div><div className="section-kicker">Nossas soluções</div><h2>Soluções completas para sua construção.</h2></div>
        <p>Cada projeto possui necessidades específicas. Desenvolvemos soluções pré-moldadas e metálicas sob encomenda, com qualidade, responsabilidade e eficiência do primeiro contato à entrega.</p>
      </section></Reveal>

      <Reveal variant="scale"><section className="services-grid" aria-label="Serviços em destaque">
        {services.map((service) => (
          <article className="service-card" key={service.number} style={{ backgroundImage: `linear-gradient(180deg, rgba(8,24,70,.08), rgba(8,24,70,.94)), url('${service.image}')` }}>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <a href="/servicos">Saiba mais <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </section></Reveal>
      <div className="section-action"><a className="text-link" href="/servicos">Ver todos os produtos e serviços <span>↗</span></a></div>

      <Reveal variant="right"><section className="made-to-order">
        <div className="order-copy"><div className="section-kicker">Engenharia aplicada</div><h2>Seu projeto.<br />Nossa estrutura.</h2><p>Do barracão à estrutura metálica, dos fechamentos aos componentes complementares: produzimos cada solução pensando na realidade da sua operação.</p><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><span className="whatsapp-icon" aria-hidden="true">✆</span> Conversar sobre meu projeto</a></div>
        <div className="order-art" aria-hidden="true" />
      </section></Reveal>

      <Reveal><section className="differentials" id="empresa">
        <div className="differentials-head"><div className="section-kicker">Por que a DiuPav</div><h2>Compromisso que sustenta grandes ideias.</h2></div>
        <div className="difference-list">
          {differentials.map((item) => <div key={item}><strong>{item}</strong><i aria-hidden="true">+</i></div>)}
        </div>
      </section></Reveal>

      <BudgetCta />
      <SiteFooter />
    </main>
  );
}
