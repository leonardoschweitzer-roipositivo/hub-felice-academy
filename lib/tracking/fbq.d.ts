// Tipagem global do Pixel do Meta (fbq), disponível após o base code carregar.
export {};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}
