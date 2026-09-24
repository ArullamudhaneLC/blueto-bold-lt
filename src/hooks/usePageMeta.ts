import { useEffect } from 'react';

const SITE = 'Blueto Tech';
const DEFAULT_TITLE = `${SITE} — the company behind FlipRoles`;
// index.html's description is the site-wide default; captured once so routes can restore it.
const DEFAULT_DESCRIPTION =
  document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';

// Sets the tab title and meta description for the current route.
export const usePageMeta = (title?: string, description?: string) => {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : DEFAULT_TITLE;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description ?? DEFAULT_DESCRIPTION);
  }, [title, description]);
};
