import type { Metadata } from 'next';
import Image from 'next/image';
import { BudgetCta, PageHero, Reveal, SiteFooter } from '../components';

export const metadata: Metadata = {
  title: 'Obras Realizadas | DiuPav Barracões',
  description: 'Conheça alguns projetos concluídos pela DiuPav Barracões em estruturas pré-moldadas e metálicas.',
};

const projects = [
  { title: 'Residência e área integrada', category: 'Estrutura pré-moldada', slug: 'projeto-residencial' },
  { title: 'Barracão industrial', category: 'Estrutura metálica e fechamento', slug: 'barracao-industrial' },
  { title: 'Cobertura comercial', category: 'Estrutura pré-moldada e cobertura', slug: 'cobertura-comercial' },
  { title: 'Estrutura para área coberta', category: 'Projeto sob medida', slug: 'area-coberta' },
];

export default function WorksPage() {
  return <main id="main-content" tabIndex={-1}>
    <PageHero active="obras" eyebrow="Projetos concluídos" title="Obras que mostram a força de cada estrutura" text="Uma seleção de projetos realizados pela DiuPav Barracões, com soluções construídas para atender diferentes necessidades." />
    <div className="works-projects">
      {projects.map((project, projectIndex) => <Reveal key={project.title} variant={projectIndex % 2 === 0 ? 'left' : 'right'}>
        <section className="works-project" aria-labelledby={`work-${project.slug}`}>
          <div className="works-project-heading">
            <div><span>{project.category}</span><h2 id={`work-${project.slug}`}>{project.title}</h2></div>
            <p>Registros fotográficos de uma obra executada pela DiuPav Barracões.</p>
          </div>
          <div className="works-gallery">
            {Array.from({ length: 6 }, (_, index) => <figure className={`works-photo ${index === 0 ? 'featured' : ''} ${projectIndex === 0 && index === 0 ? 'watermarked' : ''}`} key={index}>
              <Image src={`/images/obras/${project.slug}-${String(index + 1).padStart(2, '0')}.webp`} alt={`${project.title} — imagem ${index + 1} da obra`} fill sizes="(max-width: 650px) 50vw, (max-width: 980px) 33vw, 30vw" loading="lazy" unoptimized />
            </figure>)}
          </div>
        </section>
      </Reveal>)}
    </div>
    <BudgetCta />
    <SiteFooter />
  </main>;
}
