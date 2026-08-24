import type { Metadata } from 'next';
import { ContactForm } from '../contact-form';
import { PageHero, SiteFooter } from '../components';

export const metadata: Metadata = { title: 'Contato e Orçamento | DiuPav Barracões', description: 'Solicite um orçamento para seu projeto pré-moldado ou metálico em Contenda, Lapa e região.' };

export default function ContactPage() {
  return <main>
    <PageHero active="contato" eyebrow="Fale com a nossa equipe" title="Solicite seu orçamento" text="Conte o que você precisa construir, adaptar ou desenvolver. Vamos conhecer seu projeto e indicar o próximo passo." />
    <section className="contact-layout">
      <aside className="contact-aside"><div className="section-kicker">Atendimento direto</div><h2>Vamos conversar sobre o seu projeto?</h2><p>Envie as informações do seu projeto pelo formulário ou fale diretamente com nossa equipe.</p><div className="contact-list"><a href="https://wa.me/5541988375050" target="_blank" rel="noreferrer"><span>Antonio C. Diurkowski</span><strong>(41) 98837-5050 ↗</strong></a><a href="https://wa.me/5541992021680" target="_blank" rel="noreferrer"><span>Ingrid Pacheco</span><strong>(41) 99202-1680 ↗</strong></a><a href="mailto:diupav@diupav.com.br"><span>E-mail</span><strong>diupav@diupav.com.br ↗</strong></a><div><span>Endereço</span><strong>Rua Oito, Distrito Mato Branco<br />Contenda/PR · CEP 83730-000</strong></div></div></aside>
      <div className="form-wrap"><div className="form-heading"><span>ORÇAMENTO</span><strong>Preencha os campos abaixo</strong></div><ContactForm /></div>
    </section>
    <section className="contact-close"><strong>DIUPAV</strong><p>Soluções pré-moldadas e metálicas para construir com segurança, qualidade e confiança.</p></section>
    <SiteFooter />
  </main>;
}
