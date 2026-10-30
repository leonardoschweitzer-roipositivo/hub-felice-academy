import { Secao, Sub } from '../ui/Secao';
import { Validar } from '../ui/Selo';
import { ModeloFrame } from '../instagram/ModeloFrame';
import {
  ModeloAutoridade, ModeloCapa, ModeloDepoimento, ModeloFinal, ModeloFoto, ModeloMiolo,
  ModeloOferta, ModeloProva, ModeloReels, ModeloStoriesOferta, ModeloStoriesPergunta,
} from '../instagram/modelos';
import {
  CHECKLIST_IG, COMPOSICAO_IG, FORMATOS_IG, MIX_CONTEUDO, PASSOS_CANVA, ROTEIRO_REELS, TIPO_IG,
} from '../content';

export function Instagram() {
  return (
    <Secao
      id="instagram"
      n="10"
      titulo="Instagram"
      lead="O mesmo sistema do site, em formato de rede social. Siga as medidas, use os modelos como ponto de partida e passe pelo checklist antes de publicar."
    >
      <Sub>Formatos e área segura</Sub>
      <div className="ds-table-wrap">
        <table className="ds-table">
          <thead><tr><th>Formato</th><th>Tamanho</th><th>Proporção</th><th>Área segura</th></tr></thead>
          <tbody>
            {FORMATOS_IG.map((f) => (
              <tr key={f.t}><td><b>{f.t}</b></td><td>{f.tam}</td><td>{f.prop}</td><td>{f.seg}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="ds-mut">As medidas da área segura seguem a orientação atual do Instagram e podem mudar. Confira antes de uma campanha grande. <Validar /></p>

      <div className="ds-grid ds-grid--2">
        <div>
          <Sub>Tipografia em arte de 1080px</Sub>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <tbody>{TIPO_IG.map((t) => <tr key={t.t}><td><b>{t.t}</b></td><td>{t.v}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
        <div>
          <Sub>Composição</Sub>
          <ul className="ds-list">{COMPOSICAO_IG.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </div>

      <Sub>Modelos de feed</Sub>
      <p className="ds-mut">Marque &quot;Área segura&quot; para ver as margens. &quot;PNG com texto&quot; é a referência; &quot;PNG só fundo&quot; (sem texto, com logo e foto) é a base para subir no Canva.</p>
      <div className="ds-ig-grid">
        <ModeloFrame titulo="Frase de autoridade" altura={1350} arquivo="autoridade" seguro="feed"><ModeloAutoridade /></ModeloFrame>
        <ModeloFrame titulo="Foto do Dr. Sócrates + título" altura={1350} arquivo="foto-socrates" seguro="feed"><ModeloFoto /></ModeloFrame>
        <ModeloFrame titulo="Prova: Clínica Felice" altura={1350} arquivo="prova" seguro="feed"><ModeloProva /></ModeloFrame>
        <ModeloFrame titulo="Depoimento" altura={1350} arquivo="depoimento" seguro="feed"><ModeloDepoimento /></ModeloFrame>
        <ModeloFrame titulo="Oferta com preço público" altura={1350} arquivo="oferta" seguro="feed"><ModeloOferta /></ModeloFrame>
      </div>

      <Sub>Modelos de carrossel</Sub>
      <div className="ds-ig-grid">
        <ModeloFrame titulo="Capa" altura={1350} arquivo="carrossel-capa" seguro="feed"><ModeloCapa /></ModeloFrame>
        <ModeloFrame titulo="Miolo numerado" altura={1350} arquivo="carrossel-miolo" seguro="feed"><ModeloMiolo /></ModeloFrame>
        <ModeloFrame titulo="Chamada final" altura={1350} arquivo="carrossel-final" seguro="feed"><ModeloFinal /></ModeloFrame>
      </div>

      <Sub>Modelos de Stories e Reels</Sub>
      <div className="ds-ig-grid ds-ig-grid--vert">
        <ModeloFrame titulo="Stories: pergunta" altura={1920} arquivo="stories-pergunta" seguro="vertical"><ModeloStoriesPergunta /></ModeloFrame>
        <ModeloFrame titulo="Stories: oferta" altura={1920} arquivo="stories-oferta" seguro="vertical"><ModeloStoriesOferta /></ModeloFrame>
        <ModeloFrame titulo="Capa de Reels" altura={1920} arquivo="reels-capa" seguro="vertical"><ModeloReels /></ModeloFrame>
      </div>
      <p className="ds-mut">
        Os textos dos modelos usam só frases do site e números liberados. O modelo de oferta vale apenas com o produto realmente à venda; urgência só com prazo real.
      </p>

      <div className="ds-grid ds-grid--2">
        <div>
          <Sub>Mix de conteúdo</Sub>
          <div className="ds-prop">
            {MIX_CONTEUDO.map((m) => (
              <div key={m.t} style={{ flex: m.pct }}><span>{m.pct}% {m.t}</span></div>
            ))}
          </div>
          <p className="ds-mut">
            Adaptado do Kit F4. O material original é para clínicas falando com pacientes; aqui o público são dentistas.
          </p>
        </div>
        <div>
          <Sub>Roteiro de Reels</Sub>
          <div className="ds-prop">
            {ROTEIRO_REELS.map((r) => (
              <div key={r.t} style={{ flex: 1 }}><span>{r.t} · {r.s}</span></div>
            ))}
          </div>
          <p className="ds-mut">Legenda: gancho, desenvolvimento, um único CTA. Regra de hashtag: a definir pelo marketing.</p>
        </div>
      </div>

      <Sub>Passo a passo no Canva</Sub>
      <ol className="ds-steps ds-steps--lg">
        {PASSOS_CANVA.map((p) => <li key={p}>{p}</li>)}
      </ol>

      <Sub>Checklist antes de publicar</Sub>
      <ul className="ds-check">
        {CHECKLIST_IG.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </Secao>
  );
}
