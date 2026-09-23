import { useLayoutEffect } from 'react';

/**
 * Stitch puts layout-bearing classes (`flex flex-col min-h-screen`, the dimmed
 * backdrop on the bottom-sheet screen, …) on <body>, and they differ per screen.
 * Applying them to the real <body> keeps each screen identical to its export.
 */
export function useBodyClass(className: string) {
  useLayoutEffect(() => {
    const previous = document.body.className;
    document.body.className = className;
    return () => {
      document.body.className = previous;
    };
  }, [className]);
}
