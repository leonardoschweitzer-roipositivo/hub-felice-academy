'use client';

import dynamic from 'next/dynamic';
import type { DocId, ToolRef } from './content/types';

/* Ferramentas carregadas sob demanda (client-only). Mantém o bundle
   inicial leve e evita SSR em componentes que tocam window/localStorage. */
const RoleSelector = dynamic(() => import('./tools/RoleSelector').then((m) => m.RoleSelector));
const EcosystemDiagram = dynamic(() => import('./tools/EcosystemDiagram').then((m) => m.EcosystemDiagram));
const ResponsibilityMatrix = dynamic(() => import('./tools/ResponsibilityMatrix').then((m) => m.ResponsibilityMatrix));
const Checklist = dynamic(() => import('./tools/Checklist').then((m) => m.Checklist));
const PopGenerator = dynamic(() => import('./tools/PopGenerator').then((m) => m.PopGenerator));
const ScriptBlock = dynamic(() => import('./tools/ScriptBlock').then((m) => m.ScriptBlock));
const DecisionTree = dynamic(() => import('./tools/DecisionTree').then((m) => m.DecisionTree));
const FaqMatrix = dynamic(() => import('./tools/FaqMatrix').then((m) => m.FaqMatrix));
const CallStepper = dynamic(() => import('./tools/CallStepper').then((m) => m.CallStepper));
const FiveMinTimer = dynamic(() => import('./tools/FiveMinTimer').then((m) => m.FiveMinTimer));
const ObjectionBank = dynamic(() => import('./tools/ObjectionBank').then((m) => m.ObjectionBank));
const EditorialCalendar = dynamic(() => import('./tools/EditorialCalendar').then((m) => m.EditorialCalendar));
const Funnel5N = dynamic(() => import('./tools/Funnel5N').then((m) => m.Funnel5N));
const Calculator404020 = dynamic(() => import('./tools/Calculator404020').then((m) => m.Calculator404020));
const ProductionChecklist = dynamic(() => import('./tools/ProductionChecklist').then((m) => m.ProductionChecklist));
const RagChat = dynamic(() => import('./tools/ai/RagChat').then((m) => m.RagChat));
const RolePlaySimulator = dynamic(() => import('./tools/ai/RolePlaySimulator').then((m) => m.RolePlaySimulator));

export function ToolRenderer({ tool, docId }: { tool: ToolRef; docId: DocId }) {
  switch (tool.kind) {
    case 'roleSelector':
      return <RoleSelector />;
    case 'ecosystem':
      return <EcosystemDiagram />;
    case 'responsibilityMatrix':
      return <ResponsibilityMatrix />;
    case 'checklist':
      return <Checklist id={tool.id} title={tool.title} items={tool.items} />;
    case 'popGenerator':
      return <PopGenerator />;
    case 'scriptBlock':
      return <ScriptBlock id={tool.id} title={tool.title} lines={tool.lines} />;
    case 'decisionTree':
      return <DecisionTree treeId={tool.treeId} />;
    case 'faqMatrix':
      return <FaqMatrix />;
    case 'callStepper':
      return <CallStepper />;
    case 'fiveMinTimer':
      return <FiveMinTimer />;
    case 'objectionBank':
      return <ObjectionBank />;
    case 'editorialCalendar':
      return <EditorialCalendar />;
    case 'funnel5n':
      return <Funnel5N />;
    case 'calc404020':
      return <Calculator404020 />;
    case 'productionChecklist':
      return <ProductionChecklist />;
    case 'ragChat':
      return <RagChat docId={docId} />;
    case 'rolePlay':
      return <RolePlaySimulator mode={tool.mode} docId={docId} />;
    default:
      return null;
  }
}
