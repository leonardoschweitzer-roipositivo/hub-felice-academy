import { CtaConsultoria } from '../sections/obrigado/Cta';

/**
 * Âncora de preço + CTA + nota de escassez da consultoria gratuita.
 *
 * Era o rodapé da `ConsultoriaCtaSection`; virou componente para o índice do
 * Kit poder repetir o bloco logo abaixo do vídeo sem duplicar a copy — o
 * "R$ 500/hora" e a promessa de vagas precisam mudar nos dois lugares juntos.
 *
 * As classes `.cta-consult-*` são escopadas só por `.felice` em
 * consultoria-cta.css, então o bloco funciona fora da `.cta-consult`.
 */
export function ConsultoriaOferta({ className }: { className?: string }) {
  return (
    <div className={['cta-consult-foot', className].filter(Boolean).join(' ')}>
      <div className="cta-consult-price">
        <span className="old">
          R$ 500<small>/hora</small>
        </span>
        <span className="sep">→</span>
        <span className="now">Gratuito nesta semana</span>
      </div>
      <CtaConsultoria size="lg" />
      <p className="cta-consult-note">Vagas limitadas liberadas pelo Dr. Sócrates só nesta semana.</p>
    </div>
  );
}
