/// <reference types="vite/client" />

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// This file is a module, so we need to export something to make it work
export {};
