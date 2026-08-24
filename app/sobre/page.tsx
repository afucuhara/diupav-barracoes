import type { Metadata } from 'next';
import { BudgetCta, PageHero, SiteFooter } from '../components';

export const metadata: Metadata = { title: 'Sobre a DiuPav | Experiência, compromisso e qualidade', description: 'Conheça a atuação, missão, visão e os valores da DiuPav Barracões em Contenda e Lapa, Paraná.' };

export default function AboutPage() {
  return <main>
    <PageHero active="sobre" eyebrow="Sobre a DiuPav" title="Experiência, compromisso e qualidade em cada estrutura" text="Profissionais preparados para superar desafios, gerar resultados positivos e entregar soluções que valorizam cada projeto." />
    <section className="content-split">
      <div><div className="section-kicker">Nossa atuação</div><h2>Construímos relações tão sólidas quanto nossas estruturas.</h2></div>
      <div className="rich-copy"><p>A DiuPav Barracões atua com soluções pré-moldadas e metálicas para aplicações comerciais, industriais, rurais e empresariais.</p><p>Trabalhamos com fabricação sob encomenda e valorizamos a proximidade com cada cliente para compreender suas necessidades e desenvolver uma solução adequada, economicamente sustentável e responsável.</p></div>
    </section>
    <section className="principles-grid" aria-label="Missão, visão e valores">
      <article><h3>Missão</h3><p>Fabricar bens de capital sob encomenda de maneira economicamente sustentável, com responsabilidade social e ambiental, atendemos às necessidades do mercado com soluções inovadoras e incorporando valor à empresa, colaboradores e clientes.</p></article>
      <article><h3>Visão</h3><p>Ser uma empresa de referência nos mercados em que atua, por meio da qualidade de seus produtos, serviços e relacionamento.</p></article>
      <article><h3>Valores</h3><p>Ética nas transações;</p><p>Responsabilidade social com a adoção de posturas, comportamentos e ações que promovam o bem-estar dos nossos colaboradores e do público externo; Responsabilidade ambiental com atitudes que levam em conta o crescimento econômico ajustado à preservação do meio ambiente</p></article>
    </section>
    <BudgetCta /><SiteFooter />
  </main>;
}
