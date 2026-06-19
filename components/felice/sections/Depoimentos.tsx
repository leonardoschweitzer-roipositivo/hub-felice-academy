/* ⚠️ Substitua pelos depoimentos reais dos seus clientes (com nome e cidade reais). */
type Depoimento = {
  inicial: string;
  texto: string;
  nome: string;
  meta: string;
};

const DEPOIMENTOS: Depoimento[] = [
  {
    inicial: 'M',
    texto:
      'Em duas semanas minha equipe parou de me perguntar tudo. Os POPs deixaram cada função clara e eu finalmente saí da operação.',
    nome: '[Nome do cliente]',
    meta: '[Clínica · Cidade/UF]',
  },
  {
    inicial: 'A',
    texto:
      'Os scripts de agendamento mudaram nossa taxa de conversão. Hoje muito mais contatos viram consulta de verdade.',
    nome: '[Nome do cliente]',
    meta: '[Clínica · Cidade/UF]',
  },
  {
    inicial: 'R',
    texto:
      'O calendário de marketing acabou com o "postar quando dá". Agora temos constância e o consultório virou referência na cidade.',
    nome: '[Nome do cliente]',
    meta: '[Clínica · Cidade/UF]',
  },
];

export function Depoimentos() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Quem já aplicou
          </span>
          <h2>
            Resultados de quem saiu <span className="gold-grad">do improviso</span>
          </h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            ⚠️ Substitua pelos depoimentos reais dos seus clientes (com nome e cidade reais).
          </p>
        </div>
        <div className="testi">
          {DEPOIMENTOS.map((d, i) => (
            <div key={d.inicial + i} className={`quote reveal${i > 0 ? ` d${i}` : ''}`}>
              <div className="stars">★★★★★</div>
              <p>&quot;{d.texto}&quot;</p>
              <div className="who">
                <div className="av">{d.inicial}</div>
                <div>
                  <b>{d.nome}</b>
                  <small>{d.meta}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
