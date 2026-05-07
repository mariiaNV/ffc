export const site = {
  name: "First Fumigation Company",
  alternateName: "Перша фумігаційна компанія",
  description:
    "Фумігація та фітосанітарна обробка зерна, складів, елеваторів, контейнерів і суден. Транспортна та складська логістика. Дезінсекція (таргани з гарантією) та інші послуги для захисту продукції.",
  locale: "uk_UA",
  language: "uk",
  countryName: "Україна",
  city: "Одеса",
  phoneDisplay: "+38 (068) 898 85 11",
  phoneTel: "+380688988511",
  email: "contact@ffum.in.ua",
  directorEmail: "VasilyG@ffum.in.ua",
} as const;

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const fallback = "http://localhost:3000";
  const url = (envUrl && envUrl.trim().length > 0 ? envUrl : fallback).trim();
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getAbsoluteUrl(pathname: string = "/"): string {
  const base = getSiteUrl();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, base).toString();
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}

export function getPublicAssetPath(pathname: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${basePath}${path}`;
}
