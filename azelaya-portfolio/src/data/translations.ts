// File: data/translations.ts
import { navTranslations } from './translations/nav';
import { heroTranslations } from './translations/hero';
import { aboutTranslations } from './translations/about';
import { trajectoryTranslations } from './translations/trajectory';
import { projectsTranslations } from './translations/projects';
import { certificationsTranslations } from './translations/certifications';
import { contactTranslations } from './translations/contact';

export const translations = {
  en: {
    nav: navTranslations.en,
    hero: heroTranslations.en,
    about: aboutTranslations.en,
    trajectory: trajectoryTranslations.en,
    projects: projectsTranslations.en,
    certifications: certificationsTranslations.en,
    contact: contactTranslations.en
  },
  es: {
    nav: navTranslations.es,
    hero: heroTranslations.es,
    about: aboutTranslations.es,
    trajectory: trajectoryTranslations.es,
    projects: projectsTranslations.es,
    certifications: certificationsTranslations.es,
    contact: contactTranslations.es
  }
};
