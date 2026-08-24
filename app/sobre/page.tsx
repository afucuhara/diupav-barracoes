import type { Metadata } from 'next';
import { BudgetCta, PageHero, SiteFooter } from '../components';
import { values } from '../site-data';

export const metadata: Metadata = { title: 'Sobre a DiuPav | Experiência, compromisso e qualidade', description: 'Conheça a atuação, missão, visão e os valores da DiuPav Barracões em Contenda e Lapa, Paraná.' };

export default function AboutPage() {
  return <main>
    <PageHero active="sobre" eyebrow="Sobre a DiuPav" title="Experiência, compromisso e qualidade em cada estrutura" text="Profissionais preparados para superar desafios, gerar resultados positivos e entregar soluções que valorizam cada projeto." />
    <section className="content-split">
      <div><div className="section-kicker">Nossa atuação</div><h2>Construímos relações tão sólidas quanto nossas estruturas.</h2></div>
      <div className="rich-copy"><p>A DiuPav Barracões atua com soluções pré-moldadas e metálicas para aplicações comerciais, industriais, rurais e empresariais.</p><p>Trabalhamos com fabricação sob encomenda e valorizamos a proximidade com cada cliente para compreender suas necessidades e desenvolver uma solução adequada, economicamente sustentável e responsável.</p></div>
    </section>
    <section className="mission-grid">
      <article><h3>Missão</h3><p>Fabricar bens de capital sob encomenda de maneira economicamente sustentável, com responsabilidade social e ambiental, atendendo às necessidades do mercado com soluções inovadoras e incorporando valor à empresa, aos colaboradores e aos clientes.</p></article>
      <article><h3>Visão</h3><p>Ser uma empresa de referência nos mercados em que atua por meio da qualidade de seus produtos, serviços e relacionamento.</p></article>
    </section>
    <section className="values-section">
      <div className="section-kicker">O que nos orienta</div><h2>Valores presentes em cada projeto.</h2>
      <div className="values-grid">{values.map((value) => <article key={value.title}><h3>{value.title}</h3><p>{value.text}</p></article>)}</div>
    </section>
    <section className="recognition-block"><div className="recognition-five">5</div><div><div className="section-kicker light-kicker">Reconhecimento regional</div><h2>Confiança construída ano após ano.</h2><p>A DiuPav Barracões recebe há cinco anos consecutivos a premiação de destaque do ano em Contenda/PR e Lapa/PR nas categorias de pré-moldados e estrutura metálica.</p></div></section>
    <BudgetCta /><SiteFooter />
  </main>;
}
