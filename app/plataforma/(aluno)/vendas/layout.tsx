import '@/styles/admin.css'; // reusa tabela, drawer, forms, status-badge, métricas
import '@/styles/vendas.css';
import { styleVars } from '@/components/plataforma/util';

/**
 * Layout do módulo Vendas (CRM). Define o acento coral do pilar Vendas
 * (--acc) para todas as telas herdarem (Kanban, badges, KPIs, inbox).
 */
export default function VendasLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="vendas-mod" style={styleVars({ '--acc': '#E8825A' })}>
      {children}
    </div>
  );
}
