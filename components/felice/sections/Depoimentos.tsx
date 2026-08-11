/* ⚠️⚠️ DEPOIMENTOS FICTÍCIOS — NOMES E CLÍNICAS INVENTADOS ⚠️⚠️
   Provisórios, a pedido do Leo (11/08/2026), só para a seção não ficar com
   "[Nome do cliente]" no ar. Nenhum destes clientes existe.

   TROCAR PELOS REAIS antes de escalar tráfego: depoimento inventado com
   nome e clínica, sem aviso de que é ilustrativo, é publicidade enganosa
   (CDC art. 37 / CONAR). Ao trocar, use nome e cidade reais e guarde a
   autorização de uso de imagem/depoimento de cada cliente. */
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
    nome: 'Dra. Mariana Alencar',
    meta: 'Clínica Sorriso Vivo · Fortaleza/CE',
  },
  {
    inicial: 'A',
    texto:
      'Os scripts de agendamento mudaram nossa taxa de conversão. Hoje muito mais contatos viram consulta de verdade.',
    nome: 'Dr. André Furtado',
    meta: 'Odonto Integrada · Juazeiro do Norte/CE',
  },
  {
    inicial: 'R',
    texto:
      'O calendário de marketing acabou com o "postar quando dá". Agora temos constância e o consultório virou referência na cidade.',
    nome: 'Dra. Renata Pontes',
    meta: 'Espaço Odontológico Pontes · Sobral/CE',
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
            Donos de clínica que trocaram o improviso por um sistema — e viram a equipe rodar sem
            depender deles para cada decisão.
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
