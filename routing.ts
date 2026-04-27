import { Language } from './translations';

export const getRouteLanguage = (pathname: string): Language => {
  return pathname.startsWith('/ru') ? 'RU' : 'UZ';
};

export const getLocalizedHomePath = (language: Language): string => {
  return language === 'RU' ? '/ru/' : '/uz/';
};

export const getLocalizedBrochurePath = (language: Language): string => {
  return `${getLocalizedHomePath(language)}brochure`;
};

export const isBrochurePath = (pathname: string): boolean => {
  return pathname === '/brochure' || pathname.endsWith('/brochure');
};
