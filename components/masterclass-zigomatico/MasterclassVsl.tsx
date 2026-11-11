'use client';

import Image from 'next/image';
import { useState } from 'react';

/* ============================================================
   VSL do hero com fachada: até o toque, só a miniatura do vídeo (a
   mesma capa que o Panda mostra) + botão de play. O iframe do Panda —
   e todo o JavaScript do player — só carrega quando a pessoa pede, já
   com autoplay. O wrapper .mc-video mantém o 16:9, então a troca não
   mexe no layout.
   A miniatura é cópia local da capa do Panda (thumbnail.jpg do vídeo):
   se trocar a capa lá, troque o arquivo aqui também.
   ============================================================ */

const THUMB = '/images/vsl-masterclass-zigomatico.jpg';

type Props = {
  src: string;
  iframeId: string;
  title: string;
};

export function MasterclassVsl({ src, iframeId, title }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    const url = `${src}${src.includes('?') ? '&' : '?'}autoplay=true`;
    return (
      <iframe
        id={iframeId}
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className="mc-video-facade"
      onClick={() => setPlaying(true)}
      aria-label={`Assistir ao vídeo: ${title}`}
    >
      <Image
        src={THUMB}
        alt=""
        fill
        priority
        sizes="(max-width: 800px) 100vw, 760px"
        quality={60}
        className="mc-video-thumb"
      />
      <span className="mc-video-play" aria-hidden="true">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
