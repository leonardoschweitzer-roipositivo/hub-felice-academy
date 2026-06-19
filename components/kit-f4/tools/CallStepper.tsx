'use client';

import { useState } from 'react';
import { CALL_PHASES } from '../content/toolsData';

/** Stepper das 5 fases da chamada perfeita (CRC). */
export function CallStepper() {
  const [step, setStep] = useState(0);
  const phase = CALL_PHASES[step];

  return (
    <div className="kit-stepper">
      <ol className="kit-stepper-track">
        {CALL_PHASES.map((p, i) => (
          <li key={p.nome}>
            <button
              type="button"
              className={`kit-stepper-dot${i === step ? ' is-active' : ''}${i < step ? ' is-done' : ''}`}
              onClick={() => setStep(i)}
              aria-current={i === step ? 'step' : undefined}
            >
              <span className="kit-stepper-num">{i + 1}</span>
              <span className="kit-stepper-label">{p.nome}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="kit-stepper-panel">
        <h4>
          {step + 1}. {phase.nome}
        </h4>
        <p className="kit-stepper-goal">{phase.objetivo}</p>
        <div className="kit-stepper-script">
          {phase.script.map((line, i) => (
            <p key={i}>“{line}”</p>
          ))}
        </div>
        <div className="kit-stepper-nav">
          <button type="button" className="btn btn-ghost" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>
            ← Anterior
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={step === CALL_PHASES.length - 1}
            onClick={() => setStep((s) => Math.min(CALL_PHASES.length - 1, s + 1))}
          >
            Próxima fase →
          </button>
        </div>
      </div>
    </div>
  );
}
