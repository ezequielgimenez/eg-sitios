// app/[lang]/dictionaries.ts
import "server-only";

const dictionaries = {
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (lang: string): lang is Locale => lang in dictionaries;

export const getDictionary = async (lang: Locale) => dictionaries[lang]();
