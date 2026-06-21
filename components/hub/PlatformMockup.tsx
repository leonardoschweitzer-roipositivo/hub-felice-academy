/* ============================================================
   Mockup ilustrativo da PLATAFORMA DE CURSOS Felice — puro
   markup + CSS (sem imagem). Usado no hero do HUB, abaixo do CTA.
   Decorativo → aria-hidden. Estilos em hub.css (prefixo .pm-).
   ============================================================ */

const NAV = [
  { label: 'Início', active: true },
  { label: 'Cursos' },
  { label: 'Mentoria', live: true },
  { label: 'Materiais' },
  { label: 'Comunidade' },
];

const COURSES = [
  { titulo: 'Masterclass de Implantes', cat: 'Clínica', aulas: '7 aulas', tone: 'clinica' },
  { titulo: 'Zigomático do Zero ao Avançado', cat: 'Clínica', aulas: '4 aulas', tone: 'clinica' },
  { titulo: 'Sistema de Gestão F4', cat: 'Gestão', aulas: '5 aulas', tone: 'gestao' },
  { titulo: 'Financeiro Descomplicado', cat: 'Gestão', aulas: '3 aulas', tone: 'gestao' },
];

export function PlatformMockup() {
  return (
    <div className="pm-frame" aria-hidden="true">
      {/* Barra estilo janela */}
      <div className="pm-bar">
        <span className="pm-dot" />
        <span className="pm-dot" />
        <span className="pm-dot" />
        <span className="pm-bar-title">Felice · Plataforma</span>
      </div>

      <div className="pm-body">
        {/* Sidebar */}
        <aside className="pm-side">
          <div className="pm-brand">
            <span className="pm-brand-mark">F</span>
            <span className="pm-brand-name">
              Felice <small>ACADEMY</small>
            </span>
          </div>
          <nav className="pm-nav">
            {NAV.map((item) => (
              <span
                key={item.label}
                className={`pm-nav-item${item.active ? ' pm-nav-item--active' : ''}`}
              >
                {item.label}
                {item.live && <span className="pm-badge-live">AO VIVO</span>}
              </span>
            ))}
          </nav>
          <div className="pm-side-card">
            <span className="pm-side-card-title">Mentoria Felice</span>
            <span className="pm-side-card-sub">Hot seats e comunidade com o Dr. Sócrates.</span>
            <span className="pm-side-card-btn">Acessar mentoria</span>
          </div>
        </aside>

        {/* Conteúdo */}
        <main className="pm-main">
          {/* Topbar */}
          <div className="pm-topbar">
            <span className="pm-search">Buscar cursos, materiais, aulas…</span>
            <span className="pm-streak">🔥 6 dias</span>
            <span className="pm-avatar">HC</span>
          </div>

          {/* Saudação */}
          <div className="pm-greet">
            <span className="pm-eyebrow">Mentoria Felice</span>
            <span className="pm-greet-title">
              Olá, <span className="pm-gold">Helena</span> 👋
            </span>
            <span className="pm-greet-sub">
              Continue de onde parou e mantenha sua sequência de estudos.
            </span>
          </div>

          {/* Nível / XP */}
          <div className="pm-xp">
            <span className="pm-xp-label">🏆 Nível 7</span>
            <span className="pm-xp-track">
              <span className="pm-xp-fill" />
            </span>
            <span className="pm-xp-num">2480 / 3000 XP</span>
          </div>

          {/* Continuar assistindo */}
          <div className="pm-continue">
            <div className="pm-thumb pm-thumb--clinica">
              <span className="pm-play" />
            </div>
            <div className="pm-continue-body">
              <span className="pm-eyebrow">Continuar assistindo</span>
              <span className="pm-continue-title">Masterclass de Implantes</span>
              <span className="pm-continue-sub">
                Próxima aula: Planejamento digital guiado · 22:05
              </span>
              <span className="pm-continue-btn">Retomar ▶</span>
            </div>
          </div>

          {/* Recomendados */}
          <div className="pm-section-head">
            <span className="pm-section-title">Recomendados para você</span>
            <span className="pm-section-link">Ver todos →</span>
          </div>
          <div className="pm-courses">
            {COURSES.map((c) => (
              <div className="pm-course" key={c.titulo}>
                <div className={`pm-thumb pm-thumb--${c.tone}`}>
                  <span className="pm-play" />
                  <span className="pm-course-tag">{c.cat}</span>
                  <span className="pm-course-aulas">{c.aulas}</span>
                </div>
                <span className="pm-course-title">{c.titulo}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
