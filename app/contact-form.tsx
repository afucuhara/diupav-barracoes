'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Olá, gostaria de solicitar um orçamento.',
      `Nome: ${data.get('nome') || ''}`,
      `Empresa: ${data.get('empresa') || 'Não informado'}`,
      `Cidade: ${data.get('cidade') || ''}`,
      `Interesse: ${data.get('interesse') || ''}`,
      `Mensagem: ${data.get('mensagem') || ''}`,
    ].join('\n');
    setSent(true);
    window.open(`https://wa.me/5541988375050?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label><span>Nome *</span><input name="nome" required autoComplete="name" placeholder="Seu nome" /></label>
        <label><span>Empresa</span><input name="empresa" autoComplete="organization" placeholder="Nome da empresa" /></label>
        <label><span>Telefone / WhatsApp *</span><input name="telefone" required autoComplete="tel" placeholder="(00) 00000-0000" /></label>
        <label><span>E-mail</span><input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com.br" /></label>
        <label><span>Cidade *</span><input name="cidade" required autoComplete="address-level2" placeholder="Sua cidade" /></label>
        <label><span>Tipo de projeto</span><select name="interesse" defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Barracão pré-moldado</option><option>Estrutura metálica</option><option>Fechamento</option><option>Piso</option><option>Mezanino</option><option>Proteção / guarda-corpo</option><option>Outro projeto</option></select></label>
      </div>
      <label className="field-wide"><span>Conte sobre seu projeto *</span><textarea name="mensagem" required rows={5} placeholder="Dimensões, finalidade, localização e outras informações importantes..." /></label>
      <label className="file-field"><span>Anexo de projeto ou imagem</span><input name="anexo" type="file" accept="image/*,.pdf" /><small>O arquivo poderá ser anexado na conversa do WhatsApp.</small></label>
      <button className="button button-primary" type="submit">Enviar solicitação <span aria-hidden="true">↗</span></button>
      {sent && <p className="form-note" role="status">Abrimos o WhatsApp com os dados preenchidos. Basta revisar e enviar.</p>}
    </form>
  );
}
