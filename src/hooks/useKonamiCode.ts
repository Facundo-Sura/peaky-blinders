'use client';

import { useEffect, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA',
];

export const useKonamiCode = (callback: () => void) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { code } = event;
      const key = event.key;
      
      if (!KONAMI_CODE.includes(code) && !['b', 'a', 'B', 'A'].includes(key)) {
        return;
      }

      const pressedKey = code.startsWith('Key') ? code : key;
      
      const lastPressedIndex = (window as any).__konamiIndex || 0;
      const nextExpectedKey = KONAMI_CODE[lastPressedIndex];
      const currentKey = code.startsWith('Key') ? code : (key.length === 1 ? `Key${key.toUpperCase()}` : key);

      if (
        (nextExpectedKey === 'KeyB' && (pressedKey === 'b' || pressedKey === 'B' || currentKey === 'KeyB')) ||
        (nextExpectedKey === 'KeyA' && (pressedKey === 'a' || pressedKey === 'A' || currentKey === 'KeyA')) ||
        nextExpectedKey === currentKey ||
        nextExpectedKey === code
      ) {
        (window as any).__konamiIndex = lastPressedIndex + 1;

        if ((window as any).__konamiIndex === KONAMI_CODE.length) {
          callback();
          (window as any).__konamiIndex = 0;
        }
      } else {
        (window as any).__konamiIndex = 0;
      }
    },
    [callback]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};
