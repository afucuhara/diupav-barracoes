import { BudgetCta, SiteFooter, SiteHeader } from './components';
import { services, whatsappUrl } from './site-data';

const differentials = [
  'Experiência e comprometimento', 'Soluções sob encomenda', 'Atendimento personalizado',
  'Produtos pré-moldados e metálicos', 'Qualidade em cada etapa', 'Responsabilidade social e ambiental',
];

export default function Home() {
  return (
    <main>
      <SiteHeader active="inicio" />
      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span /> Construção inteligente. Estrutura forte.</div>
          <h1>Estruturas que dão <em>segurança</em> aos seus projetos</h1>
          <p>Barracões pré-moldados, estruturas metálicas e soluções sob encomenda para construir com resistência, qualidade e confiança.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Solicite seu orçamento <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#solucoes">Conheça nossas soluções <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Reconhecimento regional">
        <div className="proof-number">05</div>
        <div className="proof-copy"><strong>anos consecutivos</strong><span>de reconhecimento regional</span></div>
        <p>Destaque do ano em Contenda/PR e Lapa/PR nas categorias de pré-moldados e estrutura metálica.</p>
        <div className="proof-badge" aria-hidden="true">✦</div>
      </section>

      <section className="intro" id="solucoes">
        <div><div className="section-kicker">Nossas soluções</div><h2>Soluções completas para sua construção.</h2></div>
        <p>Cada projeto possui necessidades específicas. Desenvolvemos soluções pré-moldadas e metálicas sob encomenda, com qualidade, responsabilidade e eficiência do primeiro contato à entrega.</p>
      </section>

      <section className="services-grid" aria-label="Serviços em destaque">
        {services.slice(0, 6).map((service) => (
          <article className="service-card" key={service.number} style={{ backgroundImage: `linear-gradient(180deg, rgba(8,24,70,.08), rgba(8,24,70,.94)), url('${service.image}')` }}>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <a href="/servicos">Saiba mais <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </section>
      <div className="section-action"><a className="text-link" href="/servicos">Ver todos os produtos e serviços <span>↗</span></a></div>

      <section className="made-to-order">
        <div className="order-copy"><div className="section-kicker">Engenharia aplicada</div><h2>Seu projeto.<br />Nossa estrutura.</h2><p>Do barracão à estrutura metálica, dos fechamentos aos componentes complementares: produzimos cada solução pensando na realidade da sua operação.</p><a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar sobre meu projeto <span>↗</span></a></div>
        <div className="order-art" aria-hidden="true"><span>SOB</span><strong>MEDIDA</strong></div>
      </section>

      <section className="differentials" id="empresa">
        <div className="differentials-head"><div className="section-kicker">Por que a DiuPav</div><h2>Compromisso que sustenta grandes ideias.</h2></div>
        <div className="difference-list">
          {differentials.map((item) => <div key={item}><strong>{item}</strong><i aria-hidden="true">+</i></div>)}
        </div>
      </section>

      <section className="about-band">
        <div className="about-number"><strong>5</strong><span>anos de<br />reconhecimento</span></div>
        <div className="about-copy"><div className="section-kicker">Experiência para construir resultados</div><h2>Uma empresa movida por desafios.</h2><p>Profissionais experientes, comprometidos e motivados a gerar resultados positivos e oferecer soluções que agreguem valor aos clientes, parceiros e à comunidade.</p><a className="text-link" href="/sobre">Conheça a DiuPav Barracões <span>↗</span></a></div>
      </section>

      <BudgetCta />
      <SiteFooter />
    </main>
  );
}
