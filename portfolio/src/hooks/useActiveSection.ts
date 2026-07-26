import { useEffect, useState } from 'react';

const SECTION_IDS = ['hero', 'about', 'trajectory', 'projects', 'certifications', 'contact'];

/**
 * Returns the id of the section currently visible in the viewport.
 * Uses IntersectionObserver to track visibility of each section.
 */
export const useActiveSection = (ids: string[] = SECTION_IDS): string => {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibleEntries: IntersectionObserverEntry[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const existingIndex = visibleEntries.findIndex(
            (e) => e.target === entry.target,
          );
          if (entry.isIntersecting) {
            if (existingIndex === -1) {
              visibleEntries.push(entry);
            } else {
              visibleEntries[existingIndex] = entry;
            }
          } else if (existingIndex !== -1) {
            visibleEntries.splice(existingIndex, 1);
          }
        }

        if (visibleEntries.length > 0) {
          // Pick the entry with the highest intersection ratio
          const top = visibleEntries.reduce((best, current) =>
            current.intersectionRatio > best.intersectionRatio ? current : best,
          );
          const id = (top.target as HTMLElement).id;
          if (id) setActiveId(id);
        }
      },
      {
        // Trigger when section is in the middle 50% of the viewport
        rootMargin: '-30% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
