import type { DocId, DocSection as DocSectionT } from './content/types';
import { ToolRenderer } from './ToolRenderer';

/** Uma seção do documento: âncora + título + prosa + ferramentas inline. */
export function DocSection({ section, docId }: { section: DocSectionT; docId: DocId }) {
  return (
    <section id={section.id} className="kit-section" aria-labelledby={`${section.id}-h`}>
      <h2 id={`${section.id}-h`}>{section.title}</h2>
      <div className="kit-section-body">{section.body}</div>

      {section.inlineTools?.map((tool, i) => (
        <div className="kit-tool kit-tool--inline" key={`${section.id}-tool-${i}`}>
          <ToolRenderer tool={tool} docId={docId} />
        </div>
      ))}
    </section>
  );
}
